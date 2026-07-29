const capabilities = [
  { name: "Build", copy: "Product platforms, websites, mobile apps, and engineered digital foundations." },
  { name: "Intelligence", copy: "AI-enabled workflows and data-supported systems with practical business purpose." },
  { name: "Scale", copy: "Cloud architecture, infrastructure planning, and technology decisions built for growth." },
  { name: "Grow", copy: "Brand systems and digital growth channels shaped around clarity and conversion." },
];

/**
 * Scroll handoff prototype — the hero "opens" into connected capabilities via
 * normal scrolling (no scroll-jacking, no pin). Tests the transition feel only;
 * this is not a services redesign.
 */
export function HeroLabScrollBridge() {
  return (
    <section className="hl-bridge" aria-labelledby="hl-bridge-title">
      <div className="hl-bridge__inner">
        <h2 id="hl-bridge-title" className="hl-bridge__title">
          The system opens into connected capabilities.
        </h2>
        <div className="hl-bridge__grid">
          {capabilities.map((cap) => (
            <div key={cap.name} className="hl-chip">
              <span className="hl-chip__dot" aria-hidden />
              <span className="hl-chip__name">{cap.name}</span>
              <span className="hl-chip__copy">{cap.copy}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
