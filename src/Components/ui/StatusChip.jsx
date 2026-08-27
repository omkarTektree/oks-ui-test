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
  Open: "info",
  "In progress": "info",
  Resolved: "success",
  Closed: "default",
  Urgent: "danger",
  High: "warning",
  Medium: "info",
  Low: "default",
  Draft: "default",
  Published: "success",
  Sending: "info",
  Sent: "success",
  Bounced: "danger",
  Overdue: "danger",
  Paid: "success",
  Unpaid: "warning",
  Approved: "success",
  Rejected: "danger",
  "In Review": "info",
  New: "info",
  Contacted: "info",
  Qualified: "success",
  Negotiation: "warning",
};

/** Maps a status label to a semantic colour, rendered as a dot chip. */
const StatusChip = ({ status, size = "sm" }) => (
  <Chip size={size} variant="dot" color={TONE[status] ?? "default"}>
    {status}
  </Chip>
);

export default StatusChip;
