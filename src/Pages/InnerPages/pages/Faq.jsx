import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { FAQ_GROUPS } from "../../../data/content";

const Faq = () => {
  const [open, setOpen] = useState("How do I invite my team?");

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <SectionTitle
        title="Frequently asked questions"
        subtitle="Answers to the things people ask most."
      />

      {FAQ_GROUPS.map((group) => (
        <div key={group.group}>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
            {group.group}
          </h2>
          <Surface padding="none" className="divide-y divide-[color:var(--app-border)]">
            {group.items.map((item) => {
              const isOpen = open === item.q;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : item.q)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-[var(--app-fg)]">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-[color:var(--app-fg-subtle)] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-[color:var(--app-fg-muted)]">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </Surface>
        </div>
      ))}
    </div>
  );
};

export default Faq;
