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

count.textContent = `${String(ARCHIVE_SITES.length).padStart(2, "0")} SITES IN THE BOX`;

function showWelcome() {
  modal.hidden = false;
}
function hideWelcome() {
  modal.hidden = true;
  try { localStorage.setItem("nostalgiaWelcomeSeen", "yes"); } catch (_) {}
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
