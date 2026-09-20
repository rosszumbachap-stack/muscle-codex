# Muscle Codex 2.0

A mobile-friendly anatomical training log combining a seven-day program, exercise studies, biomechanics notes, and a muscle atlas.

## Run locally

Open `index.html` in any modern browser. The project has no build step, package manager, server, or external dependencies.

## Publish with GitHub Pages

1. Create a new GitHub repository, such as `muscle-codex`.
2. Upload every file from this folder to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will display the public site address after deployment finishes.

The published address will normally follow this pattern:

```text
https://YOUR-USERNAME.github.io/muscle-codex/
```

## Updating the app

Replace `index.html` with the newer version and commit the change. GitHub Pages will redeploy automatically.

## Add it to your phone

After GitHub Pages publishes the site, open its address on your phone.

- **Android / Chrome:** open the browser menu and select **Add to Home screen** or **Install app**.
- **iPhone / Safari:** tap **Share**, then select **Add to Home Screen**.

The Muscle Codex seal will be used as the home-screen icon.

## Data and privacy

Training selections, completed sets, and workout-log entries are stored in the browser's local storage. They are not uploaded to GitHub or sent to a server.

Because the data is device- and browser-specific, it will not automatically transfer to another phone or browser. Clearing site data can also remove it.

## Project structure

```text
index.html       Complete application and embedded artwork
manifest.webmanifest  Installable-app name, colors, and icon settings
icons/           Browser, Android, and iPhone app icons
README.md        Setup and publishing instructions
.nojekyll        Keeps GitHub Pages in simple static-site mode
.gitignore       Excludes operating-system clutter and local archives
.gitattributes   Prevents enormous image-data diffs in GitHub
```

## Version

Muscle Codex 2.0
