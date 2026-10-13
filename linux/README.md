# MarkupCraft for Linux

**Available from 0.4.** The `.deb` and AppImage are in [Releases](https://github.com/getcadcraft/markupcraft/releases).

Both are the [browser edition](../web/), unchanged, in a WebKitGTK window, built by [getcadcraft/desktop-shell](https://github.com/getcadcraft/desktop-shell).

## Flathub

[`flathub/`](flathub/) is the Flathub manifest (`com.getcadcraft.markupcraft.yml`) with its desktop entry, AppStream metainfo, MIME types and icons. It builds from public sources only: the shell's tag and the release zip. Values marked `OWNER:` are filled in at submission.

```sh
flatpak-builder --user --install build-dir flathub/com.getcadcraft.markupcraft.yml
```

## File types

- Listed under "Open with": `.pdf` (PDF document)
