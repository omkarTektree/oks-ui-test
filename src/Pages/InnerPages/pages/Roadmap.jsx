import { Chip } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import BoardView from "../../../Components/ui/BoardView";
import { ROADMAP } from "../../../data/content";

const Roadmap = () => (
  <div>
    <SectionTitle
      title="Product roadmap"
      subtitle="What we're planning, building and have shipped."
    />

    <BoardView
      columns={ROADMAP}
      renderCard={(item) => (
        <>
          <p className="text-sm font-medium text-[var(--app-fg)]">{item.title}</p>
          <div className="mt-2">
            <Chip size="sm" variant="bordered">{item.tag}</Chip>
          </div>
        </>
      )}
    />
  </div>
);

export default Roadmap;
