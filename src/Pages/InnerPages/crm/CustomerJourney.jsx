import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import Timeline from "../../../Components/ui/Timeline";
import MeterList from "../../../Components/ui/MeterList";
import ActivityFeed from "../../../Components/ui/ActivityFeed";

const STAGES = [
  { name: "Awareness", blurb: "First touch — ad, referral, or content", count: 12400, tone: "primary" },
  { name: "Consideration", blurb: "Visited pricing, started a comparison", count: 4200, tone: "primary" },
  { name: "Evaluation", blurb: "Trial started or demo booked", count: 1480, tone: "info" },
  { name: "Purchase", blurb: "Converted to a paid plan", count: 640, tone: "success" },
  { name: "Onboarding", blurb: "First workspace set up, team invited", count: 590, tone: "success" },
  { name: "Adoption", blurb: "Active weekly, core features used", count: 470, tone: "warning" },
  { name: "Expansion", blurb: "Added seats or upgraded plan", count: 138, tone: "success" },
  { name: "Advocacy", blurb: "Referred someone or left a review", count: 62, tone: "primary" },
];

const journeyItems = STAGES.map((s, i) => {
  const prev = i > 0 ? STAGES[i - 1].count : null;
  return {
    title: s.name,
    meta: s.blurb,
    date: `${s.count.toLocaleString()} people`,
    tag: prev
      ? { label: `${Math.round((s.count / prev) * 100)}% from prev`, tone: s.tone }
      : { label: "top of funnel", tone: "primary" },
    tone: s.tone,
  };
});

const KPIS = [
  { label: "Journey entries", value: "12.4k", delta: 6.2, hint: "this quarter" },
  { label: "Visit → paid", value: "5.2%", delta: 0.7, hint: "end-to-end" },
  { label: "Time to value", value: "3.1 d", delta: 0.4, deltaDirection: "down", hint: "signup → activation" },
  { label: "Advocacy rate", value: "9.7%", delta: 1.1, hint: "of paying customers" },
];

const TOUCHPOINTS = [
  { who: "Priya Nair", what: "· Consideration — opened the pricing page 3×.", when: "20 min ago" },
  { who: "Owen Baxter", what: "· Purchase — upgraded Cobalt Systems to Team.", when: "1 hour ago" },
  { who: "Elena Novak", what: "· Onboarding — completed the setup checklist.", when: "3 hours ago" },
  { who: "Maya Chen", what: "· Advocacy — left a 5-star review.", when: "Yesterday" },
  { who: "Diego Ruiz", what: "· Adoption — hit the weekly-active threshold.", when: "Yesterday" },
];

const CustomerJourney = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Customer journey"
      subtitle="From first touch to advocacy — where people are and where they drop."
    />

    <StatGroup columns={4}>
      {KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Timeline
          title="Lifecycle stages"
          subtitle="Count at each stage + step conversion"
          items={journeyItems}
        />
      </div>
      <div className="space-y-6">
        <MeterList
          title="People by stage"
          subtitle="Share of journey entries"
          items={STAGES.map((s) => ({ label: s.name, value: s.count }))}
          scaleToMax
          unit=""
        />
      </div>
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Recent touchpoints" subtitle="Latest stage transitions" />
      </div>
      <ActivityFeed items={TOUCHPOINTS} />
    </Surface>
  </div>
);

export default CustomerJourney;
