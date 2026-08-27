import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import LogoLight from "../../assets/images/logo-light.png";
import { NAV } from "../../data/nav";
import UpgradeCard from "../ui/UpgradeCard";

const isActivePath = (pathname, to) =>
  to === "/"
    ? pathname === "/"
    : pathname === to || pathname.startsWith(`${to}/`);

const rowClass = (isActive, collapsed) =>
  [
    "flex items-center gap-3 rounded-[var(--oks-radius-lg)] text-sm font-medium transition-colors",
    collapsed ? "justify-center px-0 py-2.5" : "px-2.5 py-2",
    isActive
      ? "bg-[var(--oks-color-primary-500)] text-white"
      : "text-[color:var(--app-fg-muted)] hover:bg-[var(--app-surface-2)] hover:text-[var(--app-fg)]",
  ].join(" ");

const groupBtnClass = (active, collapsed) =>
  [
    "flex w-full items-center gap-3 rounded-[var(--oks-radius-lg)] text-sm font-medium transition-colors",
    collapsed ? "justify-center px-0 py-2.5" : "px-2.5 py-2",
    active ? "text-[var(--app-fg)]" : "text-[color:var(--app-fg-muted)]",
    "hover:bg-[var(--app-surface-2)] hover:text-[var(--app-fg)]",
  ].join(" ");

const subRowClass = ({ isActive }) =>
  [
    "block rounded-[var(--oks-radius-md)] px-3 py-1.5 text-[13px] transition-colors",
    isActive
      ? "bg-[var(--oks-color-primary-50)] font-medium text-[color:var(--oks-color-primary-700)]"
      : "text-[color:var(--app-fg-muted)] hover:bg-[var(--app-surface-2)] hover:text-[var(--app-fg)]",
  ].join(" ");

const Sidebar = ({ collapsed = false, onNavigate }) => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(() => {
    const initial = {};
    NAV.forEach((section) => {
      if (
        section.items &&
        section.items.some((item) => isActivePath(pathname, item.to))
      ) {
        initial[section.label] = true;
      }
    });
    return initial;
  });

  const toggle = (label) =>
    setOpen((current) => ({ ...current, [label]: !current[label] }));

  return (
    <div className="flex h-full flex-col bg-[var(--app-surface)]">
      <div
        className={`flex h-16 shrink-0 items-center border-b border-[color:var(--app-border)] ${
          collapsed ? "justify-center px-0" : "px-5"
        }`}
      >
        <img src={Logo} alt="OKS" className="app-logo-dark h-7 w-auto" />
        <img src={LogoLight} alt="OKS" className="app-logo-light h-7 w-auto" />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {!collapsed && (
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--app-fg-subtle)]">
            Menu
          </p>
        )}

        <ul className="flex flex-col gap-0.5">
          {NAV.map((section) => {
            const Icon = section.icon;

            if (section.to) {
              return (
                <li key={section.label}>
                  <NavLink
                    to={section.to}
                    onClick={onNavigate}
                    title={collapsed ? section.label : undefined}
                    className={({ isActive }) => rowClass(isActive, collapsed)}
                  >
                    <Icon size={18} className="shrink-0" />
                    {!collapsed && <span className="truncate">{section.label}</span>}
                  </NavLink>
                </li>
              );
            }

            const groupActive = section.items.some((item) =>
              isActivePath(pathname, item.to)
            );
            const isOpen = !collapsed && Boolean(open[section.label]);

            return (
              <li key={section.label}>
                <button
                  type="button"
                  onClick={() => !collapsed && toggle(section.label)}
                  title={collapsed ? section.label : undefined}
                  aria-expanded={isOpen}
                  className={groupBtnClass(groupActive, collapsed)}
                >
                  <Icon size={18} className="shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 truncate text-left">
                        {section.label}
                      </span>
                      <ChevronRight
                        size={15}
                        className={`shrink-0 transition-transform ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </>
                  )}
                </button>

                {!collapsed && (
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="ml-[1.35rem] mt-0.5 flex flex-col gap-0.5 border-l border-[color:var(--app-border)] pb-1 pl-2">
                        {section.items.map((item) => (
                          <li key={item.to}>
                            <NavLink
                              to={item.to}
                              end={item.to === "/"}
                              onClick={onNavigate}
                              className={subRowClass}
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {!collapsed && (
        <div className="border-t border-[color:var(--app-border)] p-3">
          <UpgradeCard />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
