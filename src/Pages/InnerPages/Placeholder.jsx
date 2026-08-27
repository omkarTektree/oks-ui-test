import { PageTitle } from "oks-ui";
import { Hammer } from "lucide-react";

const Placeholder = ({ title }) => (
  <div>
    <PageTitle
      as="h1"
      title={title}
      classNames={{ base: "flex-col items-start", title: "text-2xl font-bold" }}
    />
    <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-black/15 bg-white py-16 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.05] text-black/40">
        <Hammer size={22} />
      </span>
      <p className="mt-4 text-sm font-medium text-black/60">
        {title} is coming soon
      </p>
      <p className="mt-1 text-sm text-black/40">
        This section is a placeholder for the demo shell.
      </p>
    </div>
  </div>
);

export default Placeholder;
