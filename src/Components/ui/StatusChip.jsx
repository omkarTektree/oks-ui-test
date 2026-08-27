import { Chip } from "oks-ui";

const TONE = {
  "In stock": "success",
  "Low stock": "warning",
  "Out of stock": "danger",
  Active: "success",
  Won: "success",
  Lost: "danger",
  "On track": "success",
  "At risk": "warning",
  Delayed: "danger",
  Blocked: "danger",
  Pending: "warning",
  Processing: "info",
  Scheduled: "info",
  Shipped: "info",
  "In Transit": "info",
  Delivered: "success",
  Synced: "success",
  Paused: "warning",
  Failed: "danger",
  Refunded: "danger",
  Archived: "default",
  Completed: "success",
};

/** Maps a status label to a semantic colour, rendered as a dot chip. */
const StatusChip = ({ status, size = "sm" }) => (
  <Chip size={size} variant="dot" color={TONE[status] ?? "default"}>
    {status}
  </Chip>
);

export default StatusChip;
