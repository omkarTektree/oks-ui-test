import { Inbox } from "lucide-react";

/** Icon + message + optional action, for empty lists / results. */
const EmptyState = ({ icon: Icon = Inbox, title, description, action }) => (
  <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--app-surface-2)] text-[color:var(--app-fg-subtle)]">
      <Icon size={22} />
    </span>
    <p className="mt-4 text-sm font-medium text-[var(--app-fg)]">{title}</p>
    {description && (
      <p className="mt-1 max-w-sm text-sm text-[color:var(--app-fg-muted)]">
        {description}
      </p>
    )}
    {action && <div className="mt-5">{action}</div>}
  </div>
);

export default EmptyState;
