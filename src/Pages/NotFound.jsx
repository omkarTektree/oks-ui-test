import { Link } from "react-router-dom";
import { Button } from "oks-ui";
import { Home, Search } from "lucide-react";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--app-bg)] px-6 text-center">
    <p className="text-7xl font-bold tracking-tight text-[color:var(--oks-color-primary-500)]">
      404
    </p>
    <h1 className="mt-4 text-xl font-semibold text-[var(--app-fg)]">
      This page went missing
    </h1>
    <p className="mt-2 max-w-sm text-sm text-[color:var(--app-fg-muted)]">
      The link may be broken, or the page may have been moved. Let's get you back
      on track.
    </p>
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Button as={Link} to="/dashboards/analytics" color="primary" size="sm" startContent={<Home size={15} />}>
        Back to dashboard
      </Button>
      <Button as={Link} to="/utility/search-results" variant="bordered" size="sm" startContent={<Search size={15} />}>
        Search
      </Button>
    </div>
  </div>
);

export default NotFound;
