import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  BarChart3,
  Users,
  Settings,
  LifeBuoy,
} from "lucide-react";
import Logo from "../../assets/images/logo.png";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/reports", label: "Reports", icon: BarChart3 },
  { to: "/team", label: "Team", icon: Users },
];

const SECONDARY_ITEMS = [{ to: "/settings", label: "Settings", icon: Settings }];

const NavRow = ({ item, collapsed, onNavigate }) => {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg text-sm font-medium transition-colors ${
          collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2"
        } ${
          isActive
            ? "bg-black text-white"
            : "text-black/60 hover:bg-black/[0.06] hover:text-black"
        }`
      }
    >
      <Icon size={18} className="shrink-0" />
      {!collapsed && <span className="truncate">{item.label}</span>}
    </NavLink>
  );
};

const Sidebar = ({ collapsed = false, onNavigate }) => {
  return (
    <div className="flex h-full flex-col bg-white">
      <div
        className={`flex h-16 shrink-0 items-center border-b border-black/[0.08] ${
          collapsed ? "justify-center px-0" : "px-5"
        }`}
      >
        <img src={Logo} alt="OKS" className="h-7 w-auto" />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {NAV_ITEMS.map((item) => (
          <NavRow
            key={item.to}
            item={item}
            collapsed={collapsed}
            onNavigate={onNavigate}
          />
        ))}
        <div className="my-3 h-px bg-black/[0.06]" />
        {SECONDARY_ITEMS.map((item) => (
          <NavRow
            key={item.to}
            item={item}
            collapsed={collapsed}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      {!collapsed && (
        <div className="m-3 rounded-xl bg-black/[0.03] p-3">
          <p className="text-xs font-semibold text-black">Need a hand?</p>
          <p className="mt-1 text-xs text-black/50">
            Check the docs or reach out to support.
          </p>
        </div>
      )}

      <div className="border-t border-black/[0.08] p-3">
        <a
          href="#"
          onClick={onNavigate}
          title={collapsed ? "Support" : undefined}
          className={`flex items-center gap-3 rounded-lg text-sm font-medium text-black/60 transition-colors hover:bg-black/[0.06] hover:text-black ${
            collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2"
          }`}
        >
          <LifeBuoy size={18} className="shrink-0" />
          {!collapsed && <span>Support</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
