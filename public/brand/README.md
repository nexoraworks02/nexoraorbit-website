# NEXORA ORBIT brand assets

Static logo assets served from `/brand/...` in the Next.js public directory.
The `Logo` component (`src/components/brand/Logo.tsx`) is theme-aware: it shows the
white lockup under `[data-theme="dark"]` and the black lockup under
`[data-theme="light"]`.

| File | Description | Used for |
| --- | --- | --- |
| `nexora-orbit-3d-white.png` | Full **NEXORA ORBIT** lockup with 3D X, white ink | Header/footer on dark surfaces (default) |
| `nexora-orbit-3d-black.png` | Full **NEXORA ORBIT** lockup with 3D X, dark ink | Header/footer on light surfaces |
| `nexora-orbit-wordmark-white.png` | Wordmark only (no 3D X), white ink | Optional X-less usage on dark surfaces |
| `nexora-orbit-wordmark-black.png` | Wordmark only (no 3D X), dark ink | Optional X-less usage on light surfaces |
| `nexora-mark.png` | Standalone 3D **X** mark (cropped from the 3D white lockup) | Compact mark + source for the app icon |

- `src/app/icon.png` (512×512) is generated from `nexora-mark.png` and serves as
  the browser favicon / app icon.
- The X-only mark was not provided separately, so `nexora-mark.png` is derived
  from `nexora-orbit-3d-white.png`.

Keep filenames lowercase and URL-safe so assets can be referenced directly from
components, metadata, Open Graph image generation, or future brand previews.
