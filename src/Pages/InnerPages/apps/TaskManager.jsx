import { Button, Chip } from "oks-ui";
import { Plus } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import BoardView from "../../../Components/ui/BoardView";
import { PersonAvatar } from "./_shared";
import { TASK_COLUMNS } from "../../../data/apps";

const PRIORITY_TONE = { Urgent: "danger", High: "danger", Medium: "warning", Low: "default" };
const ACCENT = { backlog: "default", todo: "info", doing: "primary", review: "warning", done: "success" };

const columns = TASK_COLUMNS.map((c) => ({
  id: c.id,
  title: c.title,
  accent: ACCENT[c.id],
  items: c.tasks,
}));

const TaskManager = () => (
  <div>
    <SectionTitle
      title="Task manager"
      subtitle="A personal kanban board across five stages."
      actions={
        <Button color="primary" size="sm" startContent={<Plus size={15} />}>
          Add task
        </Button>
      }
    />

    <BoardView
      columns={columns}
      renderCard={(t) => (
        <>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-medium text-[color:var(--app-fg-subtle)]">{t.id}</span>
            <Chip size="sm" variant="soft" color={PRIORITY_TONE[t.priority]}>
              {t.priority}
            </Chip>
          </div>
          <p className="mt-1.5 text-sm text-[var(--app-fg)]">{t.title}</p>
          <div className="mt-3 flex items-center justify-between">
            <Chip size="sm" variant="bordered">{t.tag}</Chip>
            <PersonAvatar name={t.assignee} />
          </div>
        </>
      )}
    />
  </div>
);

export default TaskManager;
