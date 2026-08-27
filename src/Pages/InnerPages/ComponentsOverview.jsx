import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../../Components/ui/SectionTitle";
import Surface from "../../Components/ui/Surface";
import { GALLERY } from "../../data/gallery";

const ComponentsOverview = () => (
  <div className="space-y-8">
    <SectionTitle
      title="Components"
      subtitle="Every oks-ui primitive and every composed component in this project, with live examples and copyable code."
    />

    {GALLERY.map((section) => (
      <section key={section.group} className="space-y-3">
        <h2 className="text-sm font-semibold text-[color:var(--app-fg-muted)]">
          {section.group}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((entry) => (
            <Link key={entry.slug} to={`/components/${entry.slug}`}>
              <Surface interactive padding="md" className="group h-full">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-[var(--app-fg)]">
                    {entry.title}
                  </p>
                  <ArrowRight
                    size={15}
                    className="mt-0.5 shrink-0 text-[color:var(--app-fg-subtle)] transition-transform group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-1 text-sm text-[color:var(--app-fg-muted)]">
                  {entry.description}
                </p>
              </Surface>
            </Link>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default ComponentsOverview;
