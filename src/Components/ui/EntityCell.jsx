import { Avatar } from "oks-ui";
import { avatarUrl } from "../../lib/avatar";

/** Avatar + primary text + muted secondary — a reusable table/list cell. */
const EntityCell = ({ name, sub, src }) => (
  <div className="flex items-center gap-3">
    <Avatar name={name} src={src ?? avatarUrl(name)} size="sm" radius="md" />
    <div className="min-w-0">
      <p className="truncate text-sm font-medium text-[var(--app-fg)]">{name}</p>
      {sub ? (
        <p className="truncate text-xs text-[color:var(--app-fg-subtle)]">{sub}</p>
      ) : null}
    </div>
  </div>
);

export default EntityCell;
