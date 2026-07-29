/**
 * Single shared anchor every hero-scroll 3D element converges on — the
 * particle X, the GLB logo, the glow sprite, and the camera's lookAt target
 * all read from here so none of them can drift out of alignment with the
 * others (they previously used different hardcoded values independently).
 */
export const HERO_ANCHOR_X = -1.1;
export const HERO_ANCHOR_Y = 0.55;
export const HERO_ANCHOR: [number, number, number] = [HERO_ANCHOR_X, HERO_ANCHOR_Y, 0];

/**
 * Width, in world units, both the particle X and the resting GLB logo
 * target. Sized so the resolved mark deliberately overshoots the decorative
 * double ring (.hs-ring--lg is 340px, .hs-ring--sm is 200px) once the camera
 * dolly finishes — width ~341px (matches the outer ring's diameter) and
 * corner-to-corner diagonal ~462px, so the mark visibly breaks past the
 * ring's edge on all sides instead of sitting contained inside it.
 */
export const HERO_MARK_SPAN = 1.6;

/**
 * Where the decorative double ring (.hs-ring--sm / .hs-ring--lg, see
 * hero-scroll.css) sits on screen — 74% from the left, 48% from the top —
 * expressed as NDC (-1..1) so the camera can pan the mark to land there
 * instead of dead-center. Keep in sync with the `top`/`left` values on
 * `.hs-ring` if that CSS position ever changes.
 */
export const HERO_RING_NDC_X = 2 * 0.74 - 1;
export const HERO_RING_NDC_Y = 1 - 2 * 0.48;
