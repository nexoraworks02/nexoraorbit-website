"use client";

export type ParticleLevel = "low" | "medium";
export type SceneMode = "3d" | "css" | "static";

export type HeroLabControlsProps = {
  motionOn: boolean;
  onMotionChange: (value: boolean) => void;
  particles: ParticleLevel;
  onParticlesChange: (value: ParticleLevel) => void;
  sceneMode: SceneMode;
  onSceneModeChange: (value: SceneMode) => void;
  reducedSim: boolean;
  onReducedSimChange: (value: boolean) => void;
  osReducedMotion: boolean;
  webglSupported: boolean;
};

type SegOption<T extends string> = { label: string; value: T; disabled?: boolean };

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
  disabled,
}: {
  label: string;
  value: T;
  options: SegOption<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
}) {
  return (
    <div className="hl-controls__row">
      <span>{label}</span>
      <span className="hl-controls__seg" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            disabled={disabled || option.disabled}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </span>
    </div>
  );
}

/**
 * Non-intrusive lab controls, only rendered on /hero-lab. Lets a reviewer
 * toggle motion, particle density, scene vs. static fallback, and simulate
 * reduced motion without changing OS settings.
 */
export function HeroLabControls(props: HeroLabControlsProps) {
  const motionLocked = props.osReducedMotion || props.reducedSim;

  return (
    <aside className="hl-controls" aria-label="Hero lab controls">
      <p className="hl-controls__title">Lab Controls</p>

      <Segmented
        label="Motion"
        value={props.motionOn ? "on" : "off"}
        options={[
          { label: "On", value: "on" },
          { label: "Off", value: "off" },
        ]}
        disabled={motionLocked}
        onChange={(value) => props.onMotionChange(value === "on")}
      />

      <Segmented
        label="Particles"
        value={props.particles}
        options={[
          { label: "Low", value: "low" },
          { label: "Med", value: "medium" },
        ]}
        onChange={props.onParticlesChange}
      />

      <Segmented
        label="Scene"
        value={props.sceneMode}
        options={[
          { label: "3D", value: "3d", disabled: !props.webglSupported },
          { label: "CSS", value: "css" },
          { label: "Static", value: "static" },
        ]}
        onChange={props.onSceneModeChange}
      />

      <Segmented
        label="Reduced"
        value={props.reducedSim ? "on" : "off"}
        options={[
          { label: "On", value: "on" },
          { label: "Off", value: "off" },
        ]}
        onChange={(value) => props.onReducedSimChange(value === "on")}
      />

      <p className="hl-controls__note">
        {props.webglSupported ? "WebGL 3D active." : "WebGL unavailable — CSS scene."}
        {props.osReducedMotion ? " OS reduced-motion on." : ""}
      </p>
    </aside>
  );
}
