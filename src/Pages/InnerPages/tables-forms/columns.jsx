import { Chip } from "oks-ui";
import EntityCell from "../../../Components/ui/EntityCell";
import StatusChip from "../../../Components/ui/StatusChip";

const ROLE_TONE = {
  Owner: "primary",
  Admin: "info",
  Editor: "default",
  Member: "default",
  Viewer: "default",
};

export const PLAIN_COLUMNS = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email" },
  { key: "role", header: "Role", sortable: true },
  { key: "team", header: "Team", sortable: true },
  { key: "status", header: "Status", sortable: true },
];

export const RICH_COLUMNS = [
  {
    key: "name",
    header: "User",
    sortable: true,
    render: (row) => <EntityCell name={row.name} sub={row.email} />,
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
    render: (row) => (
      <Chip size="sm" variant="soft" color={ROLE_TONE[row.role] ?? "default"}>
        {row.role}
      </Chip>
    ),
  },
  { key: "team", header: "Team", sortable: true },
  { key: "lastActive", header: "Last active", align: "right" },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (row) => <StatusChip status={row.status} />,
  },
];
