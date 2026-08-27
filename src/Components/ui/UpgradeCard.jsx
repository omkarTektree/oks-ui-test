import { Button } from "oks-ui";
import { Sparkles } from "lucide-react";
import Surface from "./Surface";

/** Sidebar promo block. */
const UpgradeCard = () => (
  <Surface
    padding="sm"
    className="border-[color:var(--oks-color-primary-100)] bg-[var(--oks-color-primary-50)]"
  >
    <div className="flex items-center gap-2 text-[color:var(--oks-color-primary-700)]">
      <Sparkles size={15} />
      <p className="text-xs font-semibold">Upgrade to Pro</p>
    </div>
    <p className="mt-1 text-xs text-[color:var(--app-fg-muted)]">
      Unlock advanced analytics and unlimited seats.
    </p>
    <Button color="primary" size="sm" fullWidth className="mt-3">
      Upgrade now
    </Button>
  </Surface>
);

export default UpgradeCard;
