import { Button } from "oks-ui";
import { Download, FilePlus } from "lucide-react";
import {
  CardHeader,
  ChartCard,
  DataTable,
  DonutStat,
  EntityCell,
  KpiCard,
  MeterList,
  SectionTitle,
  StatGroup,
  Surface,
} from "../../Components/ui";
import {
  BUDGET_USAGE,
  CASH_FLOW,
  EXPENSE_BREAKDOWN,
  FINANCE_KPIS,
  RECENT_TRANSACTIONS,
  REV_EXP_SERIES,
  REV_EXP_STATS,
} from "../../data/finance";

const money = (n) => (
  <span
    className={`font-medium ${
      n < 0
        ? "text-[color:var(--oks-color-danger-600)]"
        : "text-[color:var(--oks-color-success-600)]"
    }`}
  >
    {n < 0 ? "−" : "+"}${Math.abs(n).toLocaleString()}
  </span>
);

const TRANSACTION_COLUMNS = [
  {
    key: "party",
    header: "Transaction",
    render: (row) => <EntityCell name={row.party} sub={row.note} />,
  },
  {
    key: "amount",
    header: "Amount",
    align: "right",
    render: (row) => money(row.amount),
  },
];

const FinanceDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Finance overview"
      subtitle="Revenue, expenses and cash position — year to date 2026."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            Jan – Jun 2026
          </Button>
          <Button
            variant="bordered"
            size="sm"
            startContent={<Download size={15} />}
          >
            Export
          </Button>
          <Button color="primary" size="sm" startContent={<FilePlus size={15} />}>
            New invoice
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {FINANCE_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <StatGroup columns={3}>
      {CASH_FLOW.map((item) => (
        <KpiCard key={item.label} {...item} />
      ))}
    </StatGroup>

    <ChartCard
      title="Revenue vs expenses"
      delta={18}
      deltaLabel="vs. last year"
      stats={REV_EXP_STATS}
      height={280}
      views={[
        {
          key: "rev-exp",
          label: "Revenue vs expenses",
          type: "area",
          data: REV_EXP_SERIES,
          x: "month",
          series: [
            { key: "revenue", name: "Revenue" },
            { key: "expenses", name: "Expenses" },
          ],
          dataFormat: { prefix: "$", format: "compact" },
        },
      ]}
    />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <DonutStat
        title="Expense breakdown"
        subtitle="Where your money is going — Jun 2026"
        data={EXPENSE_BREAKDOWN}
        categoryKey="category"
        valueKey="amount"
        metaKey="display"
        centerValue="$96k"
        centerLabel="total"
      />

      <MeterList
        title="Budget usage"
        subtitle="2 categories over 80%"
        items={BUDGET_USAGE}
      />
    </div>

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader
          title="Recent transactions"
          subtitle="Across all connected accounts"
        />
        <Button variant="link" size="sm">
          View all
        </Button>
      </div>
      <DataTable
        columns={TRANSACTION_COLUMNS}
        rows={RECENT_TRANSACTIONS}
        getRowKey={(row) => row.party}
      />
    </Surface>
  </div>
);

export default FinanceDashboard;
