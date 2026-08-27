import { useState } from "react";
import { Button } from "oks-ui";
import { ChevronLeft, ChevronRight, Plus, MapPin } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import { CAL_EVENTS, CAL_UPCOMING } from "../../../data/apps";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const buildGrid = (year, month) => {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
};

const Calendar = () => {
  const now = new Date();
  const [cursor, setCursor] = useState({ year: now.getFullYear(), month: now.getMonth() });
  const cells = buildGrid(cursor.year, cursor.month);
  const isCurrentMonth =
    cursor.year === now.getFullYear() && cursor.month === now.getMonth();

  const step = (delta) =>
    setCursor(({ year, month }) => {
      const next = month + delta;
      return { year: year + Math.floor(next / 12), month: ((next % 12) + 12) % 12 };
    });

  return (
    <div>
      <SectionTitle
        title="Calendar"
        subtitle="Month view with scheduled events."
        actions={
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New event
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_20rem]">
        <Surface padding="none" className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-[color:var(--app-border)] p-4">
            <h2 className="text-base font-semibold text-[var(--app-fg)]">
              {MONTHS[cursor.month]} {cursor.year}
            </h2>
            <div className="flex items-center gap-1">
              <button type="button" onClick={() => step(-1)} className="rounded-md p-1.5 text-[color:var(--app-fg-muted)] hover:bg-[var(--app-surface-2)]">
                <ChevronLeft size={16} />
              </button>
              <button type="button" onClick={() => setCursor({ year: now.getFullYear(), month: now.getMonth() })} className="rounded-md px-2 py-1 text-xs font-medium text-[color:var(--app-fg-muted)] hover:bg-[var(--app-surface-2)]">
                Today
              </button>
              <button type="button" onClick={() => step(1)} className="rounded-md p-1.5 text-[color:var(--app-fg-muted)] hover:bg-[var(--app-surface-2)]">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 border-b border-[color:var(--app-border)] text-center text-[11px] font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
            {WEEKDAYS.map((d) => (
              <div key={d} className="py-2">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {cells.map((day, i) => {
              const events = day && isCurrentMonth ? CAL_EVENTS.filter((e) => e.day === day) : [];
              const isToday = isCurrentMonth && day === now.getDate();
              return (
                <div
                  key={i}
                  className="min-h-[6.5rem] border-b border-r border-[color:var(--app-border)] p-1.5 last:border-r-0 [&:nth-child(7n)]:border-r-0"
                >
                  {day && (
                    <>
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                          isToday
                            ? "bg-[var(--oks-color-primary-500)] font-semibold text-white"
                            : "text-[color:var(--app-fg-muted)]"
                        }`}
                      >
                        {day}
                      </span>
                      <div className="mt-1 space-y-1">
                        {events.slice(0, 3).map((e, j) => (
                          <div
                            key={j}
                            className="truncate rounded px-1.5 py-0.5 text-[11px] font-medium"
                            style={{
                              background: `color-mix(in srgb, var(--oks-color-${e.tone}-500) 16%, transparent)`,
                              color: `var(--oks-color-${e.tone}-600)`,
                            }}
                          >
                            {e.time !== "All day" && `${e.time} `}{e.title}
                          </div>
                        ))}
                        {events.length > 3 && (
                          <div className="px-1.5 text-[11px] text-[color:var(--app-fg-subtle)]">
                            +{events.length - 3} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Surface>

        <Surface>
          <CardHeader title="Upcoming" subtitle="Next four events" />
          <div className="space-y-4">
            {CAL_UPCOMING.map((e) => (
              <div key={e.title} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--oks-color-primary-500)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--app-fg)]">{e.title}</p>
                  <p className="text-xs text-[color:var(--app-fg-muted)]">{e.when}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-[color:var(--app-fg-subtle)]">
                    <MapPin size={11} /> {e.where}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </div>
  );
};

export default Calendar;
