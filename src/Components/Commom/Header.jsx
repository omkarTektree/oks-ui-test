import { useNavigate } from "react-router-dom";
import {
  Menu as MenuIcon,
  PanelLeftClose,
  PanelLeft,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { loginEmail } from "../../data/login";
import { useAuth } from "../../context/useAuth";
import Menu, { MenuItem, MenuLabel, MenuDivider } from "./Menu";

const NOTIFICATIONS = [
  { title: "New comment on Projects", time: "2m ago" },
  { title: "Report export is ready", time: "1h ago" },
  { title: "Priya accepted your team invite", time: "Yesterday" },
];

const Header = ({ collapsed, onMenuClick, onCollapseToggle }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b border-black/[0.08] bg-white/80 px-4 backdrop-blur sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-black/60 transition-colors hover:bg-black/5 lg:hidden"
        aria-label="Open navigation"
      >
        <MenuIcon size={20} />
      </button>
      <button
        type="button"
        onClick={onCollapseToggle}
        className="hidden rounded-lg p-2 text-black/60 transition-colors hover:bg-black/5 lg:block"
        aria-label="Toggle sidebar"
      >
        {collapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
      </button>

      <div className="relative ml-1 hidden w-full max-w-xs sm:block">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
        />
        <input
          type="text"
          placeholder="Search…"
          className="w-full rounded-lg border border-black/[0.08] bg-black/[0.02] py-2 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-black/20 focus:bg-white"
        />
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <Menu
          align="right"
          width={288}
          trigger={
            <span className="relative rounded-lg p-2 text-black/60 transition-colors hover:bg-black/5">
              <Bell size={20} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </span>
          }
        >
          <MenuLabel title="Notifications" />
          <MenuDivider />
          {NOTIFICATIONS.map((n) => (
            <div
              key={n.title}
              className="rounded-lg px-3 py-2 hover:bg-black/[0.04]"
            >
              <p className="text-sm text-black/80">{n.title}</p>
              <p className="text-xs text-black/40">{n.time}</p>
            </div>
          ))}
          <MenuDivider />
          <MenuItem onClick={() => {}}>View all notifications</MenuItem>
        </Menu>

        <Menu
          align="right"
          trigger={
            <span className="flex items-center gap-2 rounded-lg p-1 pr-2 transition-colors hover:bg-black/5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                A
              </span>
              <span className="hidden text-sm font-medium text-black/80 sm:block">
                Admin
              </span>
            </span>
          }
        >
          <MenuLabel title="Admin" subtitle={loginEmail} />
          <MenuDivider />
          <MenuItem icon={User} onClick={() => navigate("/settings")}>
            Profile
          </MenuItem>
          <MenuItem icon={Settings} onClick={() => navigate("/settings")}>
            Settings
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={LogOut} danger onClick={handleLogout}>
            Log out
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
