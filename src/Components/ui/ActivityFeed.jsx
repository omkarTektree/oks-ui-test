import { Avatar } from "oks-ui";

/** Vertical list of "who did what, when" rows. */
const ActivityFeed = ({ items }) => (
  <ul className="divide-y divide-[color:var(--app-border)]">
    {items.map((item) => (
      <li
        key={`${item.who}-${item.what}`}
        className="flex items-center gap-3 px-5 py-3.5 text-sm"
      >
        <Avatar name={item.who} size="sm" />
        <p className="min-w-0 flex-1 truncate text-[color:var(--app-fg-muted)]">
          <span className="font-medium text-[var(--app-fg)]">{item.who}</span>{" "}
          {item.what}
        </p>
        <span className="shrink-0 text-xs text-[color:var(--app-fg-subtle)]">
          {item.when}
        </span>
      </li>
    ))}
  </ul>
);

export default ActivityFeed;
