import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "oks-ui";
import { Hammer } from "lucide-react";
import Surface from "../../Components/ui/Surface";
import SectionTitle from "../../Components/ui/SectionTitle";

const titleFromPath = (pathname) => {
  const parts = pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "Page";
  return last.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const ComingSoon = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <div>
      <p className="mb-2 text-xs capitalize text-[color:var(--app-fg-subtle)]">
        {crumbs.map((c, i) => (
          <span key={`${c}-${i}`}>
            {i > 0 ? " / " : ""}
            {c.replace(/-/g, " ")}
          </span>
        ))}
      </p>

      <SectionTitle
        title={titleFromPath(pathname)}
        subtitle="This screen is on the build plan — not implemented yet."
      />

      <Surface padding="lg" className="flex flex-col items-center py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--oks-color-primary-50)] text-[color:var(--oks-color-primary-600)]">
          <Hammer size={22} />
        </span>
        <p className="mt-4 text-sm font-medium text-[var(--app-fg)]">Coming soon</p>
        <p className="mt-1 max-w-sm text-sm text-[color:var(--app-fg-muted)]">
          Track where this page sits in{" "}
          <code className="rounded bg-[var(--app-surface-2)] px-1 py-0.5 text-xs">
            docs/PAGES.md
          </code>
          .
        </p>
        <Button
          variant="soft"
          color="primary"
          size="sm"
          className="mt-5"
          onClick={() => navigate("/dashboards/analytics")}
        >
          Back to dashboard
        </Button>
      </Surface>
    </div>
  );
};

export default ComingSoon;
