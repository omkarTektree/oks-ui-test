import { Chip } from "oks-ui";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

/**
 * Percentage-change pill. `direction` overrides the sign-based default so a
 * falling cost can still read as "good" (color="success").
 */
const TrendChip = ({ value, direction, size = "sm", suffix = "%" }) => {
  const dir = direction ?? (value >= 0 ? "up" : "down");
  const positive = dir === "up";

  return (
    <Chip
      size={size}
      variant="soft"
      color={positive ? "success" : "danger"}
      startContent={
        positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />
      }
    >
      {Math.abs(value)}
      {suffix}
    </Chip>
  );
};

export default TrendChip;
