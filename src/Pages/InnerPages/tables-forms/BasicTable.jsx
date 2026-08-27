import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import DataTable from "../../../Components/ui/DataTable";
import { PLAIN_COLUMNS } from "./columns";
import { PEOPLE } from "../../../data/people";

const BasicTable = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Basic table"
      subtitle="A plain DataTable — column config, cell rendering, hover rows."
    />
    <Surface padding="none">
      <DataTable
        columns={PLAIN_COLUMNS}
        rows={PEOPLE.slice(0, 8)}
        getRowKey={(row) => row.id}
      />
    </Surface>
  </div>
);

export default BasicTable;
