import { Link, useParams } from "react-router-dom";
import { Button } from "oks-ui";
import { ArrowLeft } from "lucide-react";
import SectionTitle from "../../Components/ui/SectionTitle";
import Surface from "../../Components/ui/Surface";
import Example from "../../Components/ui/Example";
import { GALLERY_INDEX } from "../../data/gallery";

const ComponentPage = () => {
  const { slug } = useParams();
  const entry = GALLERY_INDEX[slug];

  if (!entry) {
    return (
      <Surface padding="lg" className="text-center">
        <p className="text-sm font-medium text-[var(--app-fg)]">
          Unknown component “{slug}”
        </p>
        <Button
          as={Link}
          to="/components"
          variant="soft"
          color="primary"
          size="sm"
          className="mt-4"
        >
          Back to components
        </Button>
      </Surface>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/components"
        className="inline-flex items-center gap-1.5 text-sm text-[color:var(--app-fg-muted)] hover:text-[var(--app-fg)]"
      >
        <ArrowLeft size={15} />
        Components
      </Link>

      <SectionTitle title={entry.title} subtitle={entry.description} />

      <div className="space-y-8">
        {entry.examples.map((example, i) => (
          <Example
            key={example.title ?? i}
            title={example.title}
            description={example.description}
            code={example.code}
          >
            {example.render()}
          </Example>
        ))}
      </div>
    </div>
  );
};

export default ComponentPage;
