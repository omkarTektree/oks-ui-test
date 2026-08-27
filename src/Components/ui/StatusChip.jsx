import { Chip } from "oks-ui";

const TONE = {
  "In stock": "success",
  "Low stock": "warning",
  "Out of stock": "danger",
  Active: "success",
  Pending: "warning",
  Processing: "info",
  Shipped: "info",
  Delivered: "success",
  Paused: "warning",
  Failed: "danger",
  Refunded: "danger",
  Archived: "default",
  Completed: "success",
};

/** Status label → semantic colour, rendered as a dot chip. */
const StatusChip = ({ status, size = "sm" }) => (
  <Chip size={size} variant="dot" color={TONE[status] ?? "default"}>
    {status}
  </Chip>
);

export default StatusChip;
