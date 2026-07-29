const storyboardSteps = [
  {
    index: 0,
    label: "Boot Sequence",
    detail: "Single light point, slow particle wake, quiet system start.",
  },
  {
    index: 1,
    label: "Digital Construction",
    detail: "Particles organize, nodes connect, logo geometry begins forming.",
  },
  {
    index: 2,
    label: "Assembly Engineering",
    detail: "X mark moves closer with metal, glass, and restrained bloom.",
  },
  {
    index: 3,
    label: "Logo Reveal",
    detail: "Identity resolves, orbit motion stabilizes, interface trust appears.",
  },
  {
    index: 4,
    label: "Entering NEXORA",
    detail: "Camera travels through the mark into structured digital space.",
  },
  {
    index: 5,
    label: "Digital Ecosystem",
    detail: "Grid, systems, services, and decisions connect into one environment.",
  },
];

export function HeroLabStoryboardRail() {
  return (
    <aside className="hl-storyboard" aria-label="Scroll animation storyboard">
      <p className="hl-storyboard__eyebrow">Scroll Sequence</p>
      <ol className="hl-storyboard__list">
        {storyboardSteps.map((step) => (
          <li key={step.index} className="hl-storyboard__item" data-step={step.index}>
            <span className="hl-storyboard__index">{String(step.index + 1).padStart(2, "0")}</span>
            <span className="hl-storyboard__copy">
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </span>
          </li>
        ))}
      </ol>
      <div className="hl-storyboard__meter" aria-hidden>
        <span />
      </div>
    </aside>
  );
}
