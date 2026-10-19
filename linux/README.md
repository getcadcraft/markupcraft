# MarkupCraft for Linux

MarkupCraft comes inside [CadCraft Studio](https://github.com/getcadcraft/studio) (all eight apps in one install) from 0.5 on; there are no separate MarkupCraft installers any more. Get Studio 0.6 from the [download page](https://getcadcraft.com/download#studio) or its [GitHub release](https://github.com/getcadcraft/studio/releases/tag/studio-v0.6.0). Studio ships as a `.deb` and an AppImage.

## Flathub

[`flathub/`](flathub/) is the Flathub manifest (`com.getcadcraft.markupcraft.yml`) with its desktop entry, AppStream metainfo, MIME types and icons. It builds from public sources only: the shell's tag and the release zip. Values marked `OWNER:` are filled in at submission.

```sh
flatpak-builder --user --install build-dir flathub/com.getcadcraft.markupcraft.yml
```

## File types

- Listed under "Open with": `.pdf` (PDF document)
