# Nostalgia Library

A static GitHub Pages site that randomly opens archived web snapshots in an embedded viewer.

## Files
- `index.html` — homepage and first-visit welcome popup
- `style.css` — vintage-inspired layout
- `sites.js` — curated list of 70+ sites and target years
- `app.js` — random selection and Archive.org snapshot lookup
- `jayden-hills.jpg` — creator photo used in the About the Creator section

## How discovery works
Each selection asks the Internet Archive's Wayback availability endpoint for the closest archived snapshot around the entry's listed year. If that lookup fails, the site tries a year-based Wayback URL. The archive may not have captured every site or every part of a page.

## Add more entries
Add an object to `ARCHIVE_SITES` in `sites.js`:
```js
{
  title: "Site name",
  year: "2004",
  description: "A short description.",
  url: "https://example.com/"
}
```

## Publish with GitHub Pages
1. Upload the files in this folder to the root of a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, then `main` and `/ (root)`.
4. Save. Add `nostalgialibrary.fun` under **Custom domain** after Pages is live.
5. Add the DNS records GitHub lists for your domain registrar, then enable HTTPS.

## Embedding note
Some websites or archived pages block iframe embedding, use features that no longer work, or have missing assets. This project does not bypass those restrictions; the **OPEN OUTSIDE** link lets visitors view the snapshot in a normal tab.

## Credits
Nostalgia Library was created by Jayden Hills. AI tools were used to help with parts of the planning and website development. The Internet Archive's Wayback Machine is used to locate archived snapshots of older websites.
