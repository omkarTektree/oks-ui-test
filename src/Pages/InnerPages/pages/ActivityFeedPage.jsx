import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import Timeline from "../../../Components/ui/Timeline";
import ActivityFeed from "../../../Components/ui/ActivityFeed";
import CardHeader from "../../../Components/ui/CardHeader";
import { PROJECT_ACTIVITY } from "../../../data/projects";
import { ACTIVITY_LOGS } from "../../../data/lists";

const feedItems = ACTIVITY_LOGS.slice(0, 12).map((l) => ({
  who: l.actor,
  what: `${l.action} · ${l.target}`,
  when: l.when,
}));

const timelineItems = [
  { title: "Q3 launch shipped", meta: "Product", date: "Today", tone: "success" },
  { title: "New pricing approved", meta: "Finance", date: "Yesterday", tone: "primary" },
  { title: "Incident #34 resolved", meta: "Engineering", date: "2 days ago", tone: "danger" },
  { title: "Design system v2 merged", meta: "Design", date: "4 days ago", tone: "primary" },
  { title: "Hiring freeze lifted", meta: "People", date: "1 week ago", tone: "success" },
];

const ActivityFeedPage = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Activity feed"
      subtitle="A running log of what's happening across the workspace."
    />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Surface padding="none">
          <div className="p-5 pb-0">
            <CardHeader title="Recent events" subtitle="Newest first" />
          </div>
          <ActivityFeed items={feedItems} />
        </Surface>
      </div>
      <Timeline title="Milestones" subtitle="Company-wide" items={timelineItems} />
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Project activity" subtitle="Across all projects" />
      </div>
      <ActivityFeed
        items={PROJECT_ACTIVITY.map((a) => ({ who: a.who, what: a.what, when: a.when }))}
      />
    </Surface>
  </div>
);

export default ActivityFeedPage;
