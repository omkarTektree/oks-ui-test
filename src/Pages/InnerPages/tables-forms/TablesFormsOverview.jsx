import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";

const GROUPS = [
  {
    group: "Tables",
    items: [
      { to: "/tables-forms/basic-table", title: "Basic table", note: "Column config + cell rendering" },
      { to: "/tables-forms/responsive-table", title: "Responsive table", note: "Self-scrolling wide content" },
      { to: "/tables-forms/filter-table", title: "Filter table", note: "Search + filter chips" },
      { to: "/tables-forms/data-table", title: "Data table", note: "Sort + select + paginate" },
      { to: "/tables-forms/advanced-table", title: "Advanced table", note: "Bulk actions + toolbar" },
    ],
  },
  {
    group: "Forms",
    items: [
      { to: "/tables-forms/form-elements", title: "Form elements", note: "Every field type" },
      { to: "/tables-forms/form-layouts", title: "Form layouts", note: "Stacked / grid / inline" },
      { to: "/tables-forms/form-validation", title: "Form validation", note: "Rules + messages" },
      { to: "/tables-forms/multi-step-wizard", title: "Multi-step wizard", note: "oks-ui SteppedForm" },
    ],
  },
  {
    group: "Specialised inputs",
    items: [
      { to: "/tables-forms/file-upload", title: "File upload", note: "FileField variants" },
      { to: "/tables-forms/rich-text-editor", title: "Rich text editor", note: "oks-ui TextEditor" },
      { to: "/tables-forms/date-pickers", title: "Date pickers", note: "Single / range / time" },
      { to: "/tables-forms/select-components", title: "Select components", note: "Single / multi / search" },
      { to: "/tables-forms/input-masks", title: "Input masks", note: "Phone / OTP / colour" },
    ],
  },
];

const TablesFormsOverview = () => (
  <div className="space-y-8">
    <SectionTitle
      title="Tables & forms"
      subtitle="Working demos of every oks-ui table and form pattern used in this app."
    />
    {GROUPS.map((section) => (
      <section key={section.group} className="space-y-3">
        <h2 className="text-sm font-semibold text-[color:var(--app-fg-muted)]">
          {section.group}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <Link key={item.to} to={item.to}>
              <Surface interactive padding="md" className="group h-full">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-[var(--app-fg)]">
                    {item.title}
                  </p>
                  <ArrowRight
                    size={15}
                    className="mt-0.5 shrink-0 text-[color:var(--app-fg-subtle)] transition-transform group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-1 text-sm text-[color:var(--app-fg-muted)]">
                  {item.note}
                </p>
              </Surface>
            </Link>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default TablesFormsOverview;
