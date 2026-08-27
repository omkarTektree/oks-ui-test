import { Button } from "oks-ui";
import { Wrench, RefreshCw } from "lucide-react";

const Maintenance = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--app-bg)] px-6 text-center">
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--oks-color-primary-50)] text-[color:var(--oks-color-primary-600)]">
      <Wrench size={24} />
    </span>
    <h1 className="mt-5 text-xl font-semibold text-[var(--app-fg)]">
      We'll be right back
    </h1>
    <p className="mt-2 max-w-sm text-sm text-[color:var(--app-fg-muted)]">
      The app is down for scheduled maintenance. This usually takes under 15
      minutes. Thanks for your patience.
    </p>
    <p className="mt-4 text-xs text-[color:var(--app-fg-subtle)]">
      Follow status updates at status.example.com
    </p>
    <Button
      className="mt-6"
      variant="bordered"
      size="sm"
      startContent={<RefreshCw size={15} />}
      onClick={() => window.location.reload()}
    >
      Try again
    </Button>
  </div>
);

export default Maintenance;
