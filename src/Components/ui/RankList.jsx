import { Avatar } from "oks-ui";
import Surface from "./Surface";
import CardHeader from "./CardHeader";
import { avatarUrl } from "../../lib/avatar";

/**
 * Numbered leaderboard. Per item: `name`, `value`, optional `sub`, optional
 * `percent` (0–100) for a thin progress bar (e.g. "% of target").
 */
const RankList = ({ title, subtitle, actions, items }) => (
  <Surface padding="none">
    <div className="p-5 pb-2">
      <CardHeader title={title} subtitle={subtitle} actions={actions} />
    </div>
    <ul className="divide-y divide-[color:var(--app-border)]">
      {items.map((item, i) => (
        <li key={item.name} className="flex items-center gap-3 px-5 py-3.5">
          <span className="w-4 shrink-0 text-center text-xs font-semibold text-[color:var(--app-fg-subtle)]">
            {i + 1}
          </span>
          <Avatar name={item.name} src={avatarUrl(item.name)} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-sm font-medium text-[var(--app-fg)]">
                {item.name}
              </p>
              <p className="shrink-0 text-sm font-semibold text-[var(--app-fg)]">
                {item.value}
              </p>
            </div>
            {item.sub && (
              <p className="mt-0.5 text-xs text-[color:var(--app-fg-subtle)]">
                {item.sub}
              </p>
            )}
            {item.percent != null && (
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
                <div
                  className="h-full rounded-full bg-[var(--oks-color-primary-500)]"
                  style={{ width: `${Math.min(item.percent, 100)}%` }}
                />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  </Surface>
);

export default RankList;
