import { Chip } from "oks-ui";
import Surface from "./Surface";
import CardHeader from "./CardHeader";

const R = 54;
const CIRC = 2 * Math.PI * R;

/** Radial progress gauge with target / current breakdown. */
const GoalCard = ({ title, percent, current, target, note }) => {
  const offset = CIRC - (Math.min(percent, 100) / 100) * CIRC;

  return (
    <Surface padding="md">
      <CardHeader title={title} />
      <div className="flex flex-col items-center">
        <div className="relative">
          <svg width="144" height="144" viewBox="0 0 144 144">
            <circle
              cx="72"
              cy="72"
              r={R}
              fill="none"
              strokeWidth="12"
              style={{ stroke: "var(--app-surface-2)" }}
            />
            <circle
              cx="72"
              cy="72"
              r={R}
              fill="none"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={offset}
              transform="rotate(-90 72 72)"
              style={{ stroke: "var(--oks-color-primary-500)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-[var(--app-fg)]">
              {percent}%
            </span>
            <span className="text-xs text-[color:var(--app-fg-muted)]">
              {current} of {target}
            </span>
          </div>
        </div>

        {note && (
          <Chip size="sm" variant="soft" color="success" className="mt-3">
            {note}
          </Chip>
        )}

        <div className="mt-4 grid w-full grid-cols-2 gap-2 text-center">
          <div className="rounded-[var(--oks-radius-lg)] bg-[var(--app-surface-2)] p-2.5">
            <p className="text-xs text-[color:var(--app-fg-subtle)]">Target</p>
            <p className="text-sm font-semibold text-[var(--app-fg)]">{target}</p>
          </div>
          <div className="rounded-[var(--oks-radius-lg)] bg-[var(--app-surface-2)] p-2.5">
            <p className="text-xs text-[color:var(--app-fg-subtle)]">This month</p>
            <p className="text-sm font-semibold text-[var(--app-fg)]">{current}</p>
          </div>
        </div>
      </div>
    </Surface>
  );
};

export default GoalCard;
