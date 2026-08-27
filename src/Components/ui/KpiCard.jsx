import Surface from "./Surface";
import Stat from "./Stat";
import TrendChip from "./TrendChip";

/**
 * Headline metric: leading icon, big value, label, optional trend pill.
 * `delta` is a number; `deltaDirection` ("up" | "down") overrides sign.
 */
const KpiCard = ({
  icon: Icon,
  label,
  value,
  hint,
  delta,
  deltaDirection,
}) => (
  <Surface padding="md" interactive>
    <div className="flex items-start justify-between">
      {Icon ? (
        <span className="flex h-10 w-10 items-center justify-center rounded-[var(--oks-radius-lg)] bg-[var(--oks-color-primary-50)] text-[color:var(--oks-color-primary-600)]">
          <Icon size={18} />
        </span>
      ) : (
        <span />
      )}
      {delta != null ? (
        <TrendChip value={delta} direction={deltaDirection} />
      ) : null}
    </div>
    <Stat className="mt-4" value={value} label={label} hint={hint} />
  </Surface>
);

export default KpiCard;
