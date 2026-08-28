import { useEffect, useState } from "react";
import { Alert, Button, Chip } from "oks-ui";
import { Sun, Moon, AlignRight } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import KpiCard from "../../../Components/ui/KpiCard";
import DataTable from "../../../Components/ui/DataTable";
import StatusChip from "../../../Components/ui/StatusChip";
import { getTheme, applyTheme } from "../../../lib/theme";

const CLUSTER_ROWS = [
  { id: 1, name: "Amara Bello", role: "Owner", status: "Active" },
  { id: 2, name: "Jonas Weber", role: "Editor", status: "Pending" },
  { id: 3, name: "Lena Ito", role: "Viewer", status: "Archived" },
];

const Cluster = () => (
  <div className="space-y-4">
    <div className="flex flex-wrap items-center gap-2">
      <Button color="primary" size="sm">Primary</Button>
      <Button variant="bordered" size="sm">Secondary</Button>
      <Chip size="sm" color="primary" variant="solid">Live</Chip>
      <Chip size="sm" variant="soft" color="success">Synced</Chip>
    </div>
    <Alert color="info" variant="soft" title="Heads up">
      This preview cluster re-renders in the selected mode.
    </Alert>
    <KpiCard label="Revenue" value="$486k" delta={12.4} hint="this month" />
    <Surface padding="none" className="overflow-hidden">
      <DataTable
        columns={[
          { key: "name", header: "Member" },
          { key: "role", header: "Role" },
          { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
        ]}
        rows={CLUSTER_ROWS}
        getRowKey={(r) => r.id}
      />
    </Surface>
  </div>
);

const RtlDarkLightPreview = () => {
  const [theme, setTheme] = useState(getTheme());
  const [rtl, setRtl] = useState(false);

  useEffect(() => {
    // Restore LTR when leaving the page.
    return () => document.documentElement.removeAttribute("dir");
  }, []);

  const flip = (next) => {
    setTheme(next);
    applyTheme(next);
  };
  const toggleRtl = () => {
    const next = !rtl;
    setRtl(next);
    document.documentElement.setAttribute("dir", next ? "rtl" : "ltr");
  };

  return (
    <div className="space-y-6">
      <SectionTitle
        title="RTL / Dark / Light preview"
        subtitle="Check the UI in each writing direction and colour scheme."
        actions={
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={theme === "light" ? "solid" : "bordered"}
              color={theme === "light" ? "primary" : "default"}
              startContent={<Sun size={15} />}
              onClick={() => flip("light")}
            >
              Light
            </Button>
            <Button
              size="sm"
              variant={theme === "dark" ? "solid" : "bordered"}
              color={theme === "dark" ? "primary" : "default"}
              startContent={<Moon size={15} />}
              onClick={() => flip("dark")}
            >
              Dark
            </Button>
            <Button
              size="sm"
              variant={rtl ? "solid" : "bordered"}
              color={rtl ? "primary" : "default"}
              startContent={<AlignRight size={15} />}
              onClick={toggleRtl}
            >
              {rtl ? "RTL on" : "RTL off"}
            </Button>
          </div>
        }
      />

      <Alert color="warning" variant="soft" title="How theming is scoped">
        `oks-ui` reads `data-theme` on the document root, so Light/Dark flip the
        whole page (not a subtree). RTL is applied via `dir` on the root and is
        reset when you leave this page.
      </Alert>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Surface>
          <CardHeader
            title={`${theme === "dark" ? "Dark" : "Light"} · ${rtl ? "RTL" : "LTR"}`}
            subtitle="Current mode"
          />
          <Cluster />
        </Surface>
        <Surface dir="rtl">
          <CardHeader title="Forced RTL" subtitle={'dir="rtl" on this panel only'} />
          <Cluster />
        </Surface>
      </div>
    </div>
  );
};

export default RtlDarkLightPreview;
