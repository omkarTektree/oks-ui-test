import { Button, Chip } from "oks-ui";
import { Plus } from "lucide-react";
import SectionTitle from "../../Components/ui/SectionTitle";
import BoardView from "../../Components/ui/BoardView";
import { PersonAvatar } from "./apps/_shared";

const PRIORITY_TONE = { Urgent: "danger", High: "danger", Medium: "warning", Low: "default" };

/**
 * Config-driven kanban screen.
 * `config` = { title, subtitle, actionLabel?, columns: [{ id, title, accent,
 *   items: [{ id, title, tag?, priority?, points?, assignee?, due? }] }] }
 */
const BoardPage = ({ config }) => (
  <div>
    <SectionTitle
      title={config.title}
      subtitle={config.subtitle}
      actions={
        config.actionLabel && (
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            {config.actionLabel}
          </Button>
        )
      }
    />

    <BoardView
      columns={config.columns}
      renderCard={(item) => (
        <>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-medium text-[color:var(--app-fg-subtle)]">
              {item.id}
            </span>
            {item.priority && (
              <Chip size="sm" variant="soft" color={PRIORITY_TONE[item.priority]}>
                {item.priority}
              </Chip>
            )}
            {item.points != null && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--app-surface-2)] px-1.5 text-[11px] font-semibold text-[color:var(--app-fg-muted)]">
                {item.points}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm text-[var(--app-fg)]">{item.title}</p>
          <div className="mt-3 flex items-center justify-between">
            {item.tag ? (
              <Chip size="sm" variant="bordered">{item.tag}</Chip>
            ) : (
              <span />
            )}
            {item.assignee ? (
              <PersonAvatar name={item.assignee} />
            ) : (
              <span className="text-[11px] text-[color:var(--app-fg-subtle)]">Unassigned</span>
            )}
          </div>
        </>
      )}
    />
  </div>
);

export default BoardPage;
