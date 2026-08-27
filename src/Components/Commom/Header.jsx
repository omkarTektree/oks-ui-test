import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  TextField,
  Tooltip,
  toast,
} from "oks-ui";
import {
  Bell,
  LogOut,
  Menu,
  MoonStar,
  PanelLeft,
  PanelLeftClose,
  Search,
  Settings,
  User,
} from "lucide-react";
import { loginEmail } from "../../data/login";
import { useAuth } from "../../context/useAuth";

const NOTIFICATIONS = [
  { key: "n1", title: "Revenue report published", time: "12 minutes ago" },
  { key: "n2", title: "Spike in checkout errors flagged", time: "48 minutes ago" },
  { key: "n3", title: "Diego closed the Q3 campaign", time: "2 hours ago" },
];

const Header = ({ collapsed, onMenuClick, onCollapseToggle }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b border-black/[0.08] bg-white/80 px-4 backdrop-blur sm:gap-3 sm:px-6">
      <Button
        isIconOnly
        variant="ghost"
        size="sm"
        aria-label="Open navigation"
        className="lg:hidden"
        onClick={onMenuClick}
      >
        <Menu size={20} />
      </Button>

      <Tooltip
        content={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        placement="bottom"
        delay={300}
      >
        <Button
          isIconOnly
          variant="ghost"
          size="sm"
          aria-label="Toggle sidebar"
          className="hidden lg:inline-flex"
          onClick={onCollapseToggle}
        >
          {collapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
        </Button>
      </Tooltip>

      <div className="hidden w-full max-w-xs sm:block">
        <TextField
          aria-label="Search"
          placeholder="Search anything…"
          size="sm"
          radius="lg"
          startIcon={<Search size={16} />}
        />
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
        <Tooltip content="Toggle theme" placement="bottom" delay={300}>
          <Button
            isIconOnly
            variant="ghost"
            size="sm"
            aria-label="Toggle theme"
            onClick={() => toast.info("Dark mode is on the roadmap")}
          >
            <MoonStar size={19} />
          </Button>
        </Tooltip>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly variant="ghost" size="sm" aria-label="Notifications">
              <Badge
                content={NOTIFICATIONS.length}
                size="sm"
                color="danger"
                placement="top-end"
              >
                <Bell size={19} />
              </Badge>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Notifications" selectionMode="none">
            {NOTIFICATIONS.map((n) => (
              <DropdownItem key={n.key} title={n.title} description={n.time} />
            ))}
          </DropdownMenu>
        </Dropdown>

        <Divider orientation="vertical" className="mx-1 h-6" />

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button variant="ghost" size="sm" className="gap-2 px-1.5">
              <Avatar name="Admin User" size="sm" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-sm font-medium">Admin</span>
                <span className="block text-xs text-black/50">Administrator</span>
              </span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Account" selectionMode="none">
            <DropdownItem
              key="who"
              title="Admin"
              description={loginEmail}
              isReadOnly
              showDivider
            />
            <DropdownItem
              key="profile"
              title="Profile"
              startContent={<User size={16} />}
              onAction={() => navigate("/settings")}
            />
            <DropdownItem
              key="settings"
              title="Settings"
              startContent={<Settings size={16} />}
              onAction={() => navigate("/settings")}
            />
            <DropdownItem
              key="logout"
              title="Log out"
              startContent={<LogOut size={16} />}
              onAction={handleLogout}
            />
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
