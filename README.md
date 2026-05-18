# FotoPin Studio

> Create interactive photo albums in your browser.
> Add clickable pins, link photos, write notes, and export self-contained viewers — all locally. No signup. No upload. No tracking.

**🌐 Live demo:** https://fotopin.app/


## What it does

- **Interactive photo maps.** A photo can contain pins that lead to other photos, recursively — perfect for room-by-room home tours, multi-stop travel stories, museum guides, product walkthroughs.
- **Edit / Navigate / Presentation** modes for both authoring and showing albums.
- **Self-contained HTML exports**, public or password-protected — share as a single ZIP, no hosting needed.
- **Optional expiry** on protected embeds.
- **Video export** (MP4 / WebM) with optional music.
- **GPS location** per album, with map preview during presentation.
- **4 languages**: English, Italian, French, German.
- **Android companion app** in development for viewing and editing on the go.

## How it works

FotoPin Studio is a static web app. **Three files** (`index.html`, `app.js`, `style.css`), zero runtime dependencies, runs entirely in the browser.

Your photos never leave your device. Protected exports are encrypted client-side using **AES-256-GCM** with keys derived via **PBKDF2** (180,000 iterations, SHA-256) from your chosen password. The encryption key never touches a server, because there is no server.

## Run it locally

Either:

- **Just open `index.html`** in a modern browser. Most features work directly from the filesystem.
- **Or serve the folder over HTTPS / localhost** for full functionality. Protected export uses the Web Crypto API, which requires a secure context — `http://localhost` counts as secure, `file://` works in most browsers but not all.

A quick local server:

```bash
# Python (any recent version)
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Fork or upload these files to a new repo.
2. **Settings → Pages → Source: `Deploy from a branch`**, branch `main`, folder `/ (root)`.
3. Wait ~1 minute. Your site goes live at `https://<your-username>.github.io/<repo>/`.
4. Optional: add a `CNAME` file with your custom domain for `https://your-domain.com`.

HTTPS is automatic. Everything works.

## Browser support

Tested on recent versions of Chrome, Edge, Firefox, and Safari. Requires support for:

- ES2017+ (async/await)
- Web Crypto API (`crypto.subtle`)
- File API (`FileReader`, `Blob`, `URL.createObjectURL`)
- `MediaRecorder` (only for the video export feature)

## License

**Proprietary — source-available, but NOT open source.**
See [LICENSE](./LICENSE) for full terms.

Short version:

- ✅ You may use the hosted app freely, create and share albums, and inspect the source for learning or security review.
- ❌ You may **not** fork, redistribute, modify, or build a competing product on top of this code without written permission.

## Author

**Stefano Prevedini** ([Smsteves](https://buymeacoffee.com/smsteves))

Built with vanilla JavaScript, the Web Crypto API, and the File API.
No frameworks. No backend. No analytics. No trackers.

---
FotoPin Studio is currently in preparation.

The Android app will be available soon on Google Play.

