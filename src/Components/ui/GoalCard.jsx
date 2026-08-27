import { Avatar, Chip } from "oks-ui";
import Surface from "./Surface";
import CardHeader from "./CardHeader";
import { avatarUrl } from "../../lib/avatar";

const R = 54;
const CIRC = 2 * Math.PI * R;

/**
 * Radial progress gauge with a target / current breakdown.
 * `people` = [{ name, percent }] renders compact attainment rows below.
 */
const GoalCard = ({
  title,
  subtitle,
  percent,
  current,
  target,
  currentLabel = "Current",
  note,
  people,
}) => {
  const offset = CIRC - (Math.min(percent, 100) / 100) * CIRC;

  return (
    <Surface padding="md">
      <CardHeader title={title} subtitle={subtitle} />
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
            <p className="text-xs text-[color:var(--app-fg-subtle)]">
              {currentLabel}
            </p>
            <p className="text-sm font-semibold text-[var(--app-fg)]">
              {current}
            </p>
          </div>
        </div>

        {people && (
          <ul className="mt-4 w-full space-y-3 border-t border-[color:var(--app-border)] pt-4">
            {people.map((person) => (
              <li key={person.name} className="flex items-center gap-2.5">
                <Avatar
                  name={person.name}
                  src={avatarUrl(person.name)}
                  size="sm"
                />
                <span className="flex-1 truncate text-sm text-[color:var(--app-fg-muted)]">
                  {person.name}
                </span>
                <span className="w-10 text-right text-sm font-medium text-[var(--app-fg)]">
                  {person.percent}%
                </span>
                <div className="h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
                  <div
                    className="h-full rounded-full bg-[var(--oks-color-primary-500)]"
                    style={{ width: `${Math.min(person.percent, 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Surface>
  );
};

export default GoalCard;
