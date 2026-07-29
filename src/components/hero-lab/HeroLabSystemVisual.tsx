import type { CSSProperties } from "react";

/**
 * The "system" — floating dark-glass interface panels + cyan data nodes.
 * Purely decorative (parent scene is aria-hidden). Positions are fixed so the
 * composition is deterministic and stable.
 */

type NodePos = { left: number; top: number; delay: number };

const NODES: NodePos[] = [
  { left: 18, top: 24, delay: 560 },
  { left: 46, top: 16, delay: 680 },
  { left: 72, top: 30, delay: 620 },
  { left: 34, top: 62, delay: 740 },
  { left: 66, top: 70, delay: 700 },
  { left: 84, top: 52, delay: 660 },
];

export function HeroLabSystemVisual() {
  return (
    <>
      <div className="hl-parallax hl-panels" aria-hidden>
        {/* Data panel */}
        <div
          className="hl-panel"
          style={{ left: "6%", top: "10%", width: "168px", ...({ "--hl-panel-delay": "420ms" } as CSSProperties) }}
        >
          <div className="hl-panel__inner" style={{ "--hl-float-dur": "7s" } as CSSProperties}>
            <span className="hl-bar hl-bar--accent" style={{ width: "56px" }} />
            <span className="hl-bar" style={{ width: "96px" }} />
            <span className="hl-bar" style={{ width: "72px" }} />
          </div>
        </div>

        {/* Intelligence panel */}
        <div
          className="hl-panel hl-panel--brand"
          style={{ right: "8%", top: "22%", width: "186px", ...({ "--hl-panel-delay": "560ms" } as CSSProperties) }}
        >
          <div className="hl-panel__inner" style={{ "--hl-float-dur": "8.5s" } as CSSProperties}>
            <span className="hl-panel__label">Intelligence Layer</span>
            <span className="hl-bar hl-bar--brand" style={{ width: "120px" }} />
            <span className="hl-bar" style={{ width: "64px" }} />
          </div>
        </div>

        {/* Delivery panel */}
        <div
          className="hl-panel"
          style={{ left: "18%", bottom: "8%", width: "204px", ...({ "--hl-panel-delay": "680ms" } as CSSProperties) }}
        >
          <div className="hl-panel__inner" style={{ "--hl-float-dur": "9.5s" } as CSSProperties}>
            <span className="hl-panel__label">Delivery System</span>
            <div className="hl-panel__grid">
              <span className="hl-tile" />
              <span className="hl-tile" />
              <span className="hl-tile" />
            </div>
          </div>
        </div>
      </div>

      <div className="hl-parallax hl-nodes" aria-hidden>
        {NODES.map((n, i) => (
          <span
            key={i}
            className="hl-node"
            style={{ left: `${n.left}%`, top: `${n.top}%`, "--hl-node-delay": `${n.delay}ms` } as CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
