import { Button } from "oks-ui";
import { Check } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { PRICING_TIERS, PRICING_FAQ } from "../../../data/content";

const Pricing = () => (
  <div className="space-y-10">
    <SectionTitle
      title="Plans & pricing"
      subtitle="Start free. Upgrade when your team grows. Cancel any time."
    />

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {PRICING_TIERS.map((tier) => (
        <Surface
          key={tier.name}
          padding="lg"
          className={
            tier.featured
              ? "relative border-[color:var(--oks-color-primary-500)] ring-1 ring-[color:var(--oks-color-primary-500)]"
              : ""
          }
        >
          {tier.featured && (
            <span className="absolute -top-3 left-5 rounded-full bg-[var(--oks-color-primary-500)] px-2.5 py-0.5 text-[11px] font-semibold text-white">
              Most popular
            </span>
          )}
          <p className="text-sm font-semibold text-[var(--app-fg)]">{tier.name}</p>
          <p className="mt-1 text-xs text-[color:var(--app-fg-muted)]">{tier.blurb}</p>
          <p className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight text-[var(--app-fg)]">
              {tier.price}
            </span>
            <span className="text-xs text-[color:var(--app-fg-subtle)]">{tier.cadence}</span>
          </p>
          <Button
            color={tier.featured ? "primary" : "default"}
            variant={tier.featured ? "solid" : "bordered"}
            size="sm"
            className="mt-4 w-full"
          >
            {tier.cta}
          </Button>
          <ul className="mt-5 space-y-2.5">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[color:var(--app-fg-muted)]">
                <Check size={15} className="mt-0.5 shrink-0 text-[var(--oks-color-success-500)]" />
                {f}
              </li>
            ))}
          </ul>
        </Surface>
      ))}
    </div>

    <div className="mx-auto max-w-2xl">
      <h2 className="mb-4 text-center text-lg font-semibold text-[var(--app-fg)]">
        Pricing questions
      </h2>
      <Surface padding="none" className="divide-y divide-[color:var(--app-border)]">
        {PRICING_FAQ.map((item) => (
          <div key={item.q} className="px-5 py-4">
            <p className="text-sm font-medium text-[var(--app-fg)]">{item.q}</p>
            <p className="mt-1 text-sm text-[color:var(--app-fg-muted)]">{item.a}</p>
          </div>
        ))}
      </Surface>
    </div>
  </div>
);

export default Pricing;
