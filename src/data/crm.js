import { Coins, TrendingUp, Trophy, Users } from "lucide-react";

export const CRM_KPIS = [
  {
    icon: Coins,
    label: "Pipeline value",
    value: "$1.24M",
    delta: 14.2,
    hint: "182 open deals",
  },
  {
    icon: Users,
    label: "New leads",
    value: "940",
    delta: 8.6,
    hint: "This quarter",
  },
  {
    icon: Trophy,
    label: "Win rate",
    value: "60%",
    delta: 5.1,
    hint: "62 deals won",
  },
  {
    icon: TrendingUp,
    label: "Avg. deal size",
    value: "$6,820",
    delta: 2.4,
    deltaDirection: "down",
    hint: "Closed this quarter",
  },
];

export const PIPELINE_STAGES = [
  { label: "Qualification", value: 312, display: "$312k", sub: "48 deals" },
  { label: "Discovery", value: 284, display: "$284k", sub: "40 deals" },
  { label: "Proposal", value: 268, display: "$268k", sub: "36 deals" },
  { label: "Negotiation", value: 224, display: "$224k", sub: "32 deals" },
  { label: "Closed won", value: 152, display: "$152k", sub: "26 deals" },
];

export const WIN_LOSS = [
  { outcome: "Won", value: 62, meta: "$124k" },
  { outcome: "Lost", value: 41, meta: "$82k" },
];

export const LEAD_SOURCES = [
  { source: "Website", leads: 382 },
  { source: "Referral", leads: 224 },
  { source: "Cold outreach", leads: 168 },
  { source: "Social media", leads: 104 },
  { source: "Events", leads: 62 },
];

export const CRM_ACTIVITY = [
  { value: "284", label: "Calls made", delta: 12 },
  { value: "1,206", label: "Emails sent", delta: 8 },
  { value: "62", label: "Meetings booked", delta: 4, deltaDirection: "down" },
  { value: "418", label: "Tasks completed", delta: 18 },
];

export const TOP_REPS = [
  { name: "Maya Chen", value: "$284k", sub: "24 deals · 96% of target", percent: 96 },
  { name: "Daniel Ortiz", value: "$246k", sub: "21 deals · 84% of target", percent: 84 },
  { name: "Priya Nair", value: "$198k", sub: "18 deals · 71% of target", percent: 71 },
  { name: "Ethan Cole", value: "$164k", sub: "15 deals · 58% of target", percent: 58 },
];
