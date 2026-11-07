const discoverButton = document.getElementById("discover");
const anotherButton = document.getElementById("another");
const frame = document.getElementById("site-frame");
const emptyState = document.getElementById("empty-state");
const title = document.getElementById("site-title");
const era = document.getElementById("site-era");
const description = document.getElementById("site-description");
const address = document.getElementById("address");
const openTab = document.getElementById("open-tab");
const count = document.getElementById("count");
const siteNumber = document.getElementById("site-number");
const modal = document.getElementById("welcome-modal");
const aboutLink = document.getElementById("about-link");

let previousIndex = -1;
let visits = 0;

let adblockPromptHandled = false;
let lastArchiveUrl = "";

function detectAdBlocker() {
  const bait = document.createElement("div");
  bait.className = "ad ads adbox adsbox ad-banner ad-container ad-placement advertisement advertising banner-ad text-ad pub_300x250";
  bait.id = "ad-container";
  bait.setAttribute("aria-hidden", "true");
  bait.innerHTML = "&nbsp;";
  bait.style.cssText = "position:absolute!important;left:-10000px!important;top:-10000px!important;width:12px!important;height:12px!important;overflow:hidden!important;pointer-events:none!important;";
  document.body.appendChild(bait);
  return new Promise((resolve) => {
    window.setTimeout(() => {
      const style = window.getComputedStyle(bait);
      const blocked = bait.offsetHeight === 0 || bait.offsetWidth === 0 || bait.clientHeight === 0 || bait.clientWidth === 0 || style.display === "none" || style.visibility === "hidden" || style.opacity === "0";
      bait.remove();
      resolve(blocked);
    }, 100);
  });
}

function showAdblockPromptIfNeeded() {
  if (adblockPromptHandled || !modal.hidden) return;
  adblockPromptHandled = true;
  try {
    if (localStorage.getItem("nostalgiaAdblockPromptSeen") === "yes") return;
  } catch (_) {}
  detectAdBlocker().then((blocked) => {
    if (blocked) {
      document.getElementById("adblock-modal").hidden = false;
    }
  });
}

function closeNotice(id) {
  const notice = document.getElementById(id);
  if (notice) notice.hidden = true;
  if (id === "adblock-modal") {
    try { localStorage.setItem("nostalgiaAdblockPromptSeen", "yes"); } catch (_) {}
  }
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => closeNotice(button.dataset.closeModal));
});

function attemptOpenOutside(url) {
  if (!url || url === "#") return;
  const popup = window.open(url, "_blank");
  if (!popup) {
    document.getElementById("popup-modal").hidden = false;
    return;
  }
  try { popup.opener = null; } catch (_) {}
}

document.getElementById("retry-popup").addEventListener("click", () => {
  document.getElementById("popup-modal").hidden = true;
  attemptOpenOutside(lastArchiveUrl);
});


count.textContent = `${String(ARCHIVE_SITES.length).padStart(2, "0")} SITES IN THE BOX`;

function showWelcome() {
  modal.hidden = false;
}
function hideWelcome() {
  modal.hidden = true;
  try { localStorage.setItem("nostalgiaWelcomeSeen", "yes"); } catch (_) {}
  window.setTimeout(showAdblockPromptIfNeeded, 250);
}
document.getElementById("enter-library").addEventListener("click", hideWelcome);
document.getElementById("close-modal").addEventListener("click", hideWelcome);
aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  showWelcome();
});

try {
  if (localStorage.getItem("nostalgiaWelcomeSeen") === "yes") modal.hidden = true;
} catch (_) {
  // If storage is unavailable, show the welcome panel each visit.
}
if (modal.hidden) {
  window.setTimeout(showAdblockPromptIfNeeded, 350);
}

function chooseRandomIndex() {
  if (ARCHIVE_SITES.length <= 1) return 0;
  let next = Math.floor(Math.random() * ARCHIVE_SITES.length);
  while (next === previousIndex) next = Math.floor(Math.random() * ARCHIVE_SITES.length);
  previousIndex = next;
  return next;
}

async function findSnapshot(site) {
  // Ask Archive.org for the closest capture around the entry's chosen year.
  const lookup = new URL("https://archive.org/wayback/available");
  lookup.searchParams.set("url", site.url);
  lookup.searchParams.set("timestamp", site.year);
  const response = await fetch(lookup.toString());
  if (!response.ok) throw new Error("Archive lookup unavailable");
  const data = await response.json();
  const snapshot = data?.archived_snapshots?.closest;
  if (!snapshot?.available || !snapshot?.url) throw new Error("No nearby snapshot found");
  return snapshot.url.replace(/^http:/, "https:");
}

async function discover() {
  if (!ARCHIVE_SITES.length) return;

  const index = chooseRandomIndex();
  const site = ARCHIVE_SITES[index];
  visits++;

  title.textContent = site.title;
  era.textContent = `LOOKING FOR A ${site.year} SNAPSHOT`;
  description.textContent = site.description;
  address.textContent = "Checking the Internet Archive…";
  siteNumber.textContent = `ENTRY ${String(index + 1).padStart(2, "0")} / ${String(ARCHIVE_SITES.length).padStart(2, "0")} · VISIT ${visits}`;
  openTab.hidden = true;
  anotherButton.disabled = true;
  discoverButton.disabled = true;
  discoverButton.textContent = "SEARCHING THE ARCHIVE…";

  try {
    const snapshotUrl = await findSnapshot(site);
    address.textContent = snapshotUrl;
    lastArchiveUrl = snapshotUrl;
    openTab.href = snapshotUrl;
    openTab.hidden = false;
    frame.src = snapshotUrl;
    frame.style.display = "block";
    emptyState.style.display = "none";
    era.textContent = `ARCHIVE SNAPSHOT · AROUND ${site.year}`;
  } catch (error) {
    // A year-only Wayback URL can still open the archive's calendar/closest capture.
    const fallbackUrl = `https://web.archive.org/web/${site.year}/${site.url}`;
    address.textContent = `No exact lookup result — trying ${fallbackUrl}`;
    lastArchiveUrl = fallbackUrl;
    openTab.href = fallbackUrl;
    openTab.hidden = false;
    frame.src = fallbackUrl;
    frame.style.display = "block";
    emptyState.style.display = "none";
    era.textContent = `ARCHIVE SEARCH · ${site.year}`;
    description.textContent = `${site.description} The archive lookup did not return a confirmed snapshot, so this is a best-effort archive link.`;
  } finally {
    anotherButton.disabled = false;
    discoverButton.disabled = false;
    discoverButton.textContent = "TAKE ME SOMEWHERE RANDOM →";
  }
}

discoverButton.addEventListener("click", discover);
anotherButton.addEventListener("click", discover);


// Intercept the external-view link so a blocked new tab gets a helpful notice.
// The embedded iframe remains independent of popup permissions.
openTab.addEventListener("click", (event) => {
  event.preventDefault();
  attemptOpenOutside(lastArchiveUrl || openTab.href);
});
