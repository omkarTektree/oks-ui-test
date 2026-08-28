import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Chip } from "oks-ui";
import {
  Plus, Search, LayoutGrid, List as ListIcon,
  Laptop, Shirt, Home, Sparkles, Dumbbell, Package,
} from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import StatusChip from "../../../Components/ui/StatusChip";
import { PRODUCTS_LIST } from "../../../data/lists";

const CATEGORY = {
  Electronics: { icon: Laptop, from: "#6d5bdb", to: "#8b7ff0" },
  Apparel: { icon: Shirt, from: "#4ec9b0", to: "#6fd9c4" },
  Home: { icon: Home, from: "#e5a642", to: "#f0bd6b" },
  Beauty: { icon: Sparkles, from: "#e2626b", to: "#ef8a91" },
  Sports: { icon: Dumbbell, from: "#3b82f6", to: "#6aa1f8" },
};
const CATEGORIES = ["All", ...Object.keys(CATEGORY)];

const stockStatus = (stock) =>
  stock === 0 ? "Out of stock" : stock < 40 ? "Low stock" : "In stock";

const ProductGrid = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const rows = useMemo(
    () =>
      PRODUCTS_LIST.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (query.trim() === "" ||
            p.name.toLowerCase().includes(query.trim().toLowerCase()))
      ),
    [category, query]
  );

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Product grid"
        subtitle="The catalogue as a visual grid."
        actions={
          <>
            <div className="flex items-center gap-1 rounded-[var(--oks-radius-md)] border border-[color:var(--app-border)] p-0.5">
              <span className="rounded bg-[var(--app-surface-2)] p-1.5 text-[var(--app-fg)]">
                <LayoutGrid size={15} />
              </span>
              <Link
                to="/ecommerce/product-list"
                className="rounded p-1.5 text-[color:var(--app-fg-subtle)] hover:text-[var(--app-fg)]"
                aria-label="List view"
              >
                <ListIcon size={15} />
              </Link>
            </div>
            <Button color="primary" size="sm" startContent={<Plus size={15} />}>
              Add product
            </Button>
          </>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-surface)] px-3 py-2 sm:w-72">
          <Search size={15} className="text-[color:var(--app-fg-subtle)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-sm text-[var(--app-fg)] outline-none placeholder:text-[color:var(--app-fg-subtle)]"
            placeholder="Search products"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Chip
              key={c}
              size="sm"
              variant={category === c ? "solid" : "bordered"}
              color={category === c ? "primary" : "default"}
              className="cursor-pointer"
              onClick={() => setCategory(c)}
            >
              {c}
            </Chip>
          ))}
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="py-12 text-center text-sm text-[color:var(--app-fg-muted)]">
          No products match your search.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {rows.map((p) => {
            const meta = CATEGORY[p.category] ?? { icon: Package, from: "#94a3b8", to: "#cbd5e1" };
            const Icon = meta.icon;
            return (
              <Surface key={p.id} padding="none" interactive className="cursor-pointer overflow-hidden">
                <div
                  className="flex aspect-[4/3] items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
                >
                  <Icon size={32} className="text-white/90" />
                </div>
                <div className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-tight text-[var(--app-fg)]">
                      {p.name}
                    </p>
                    <span className="shrink-0 text-sm font-semibold text-[var(--app-fg)]">
                      ${p.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[color:var(--app-fg-subtle)]">
                    {p.category} · {p.id}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <StatusChip status={stockStatus(p.stock)} />
                    <span className="text-xs text-[color:var(--app-fg-subtle)]">
                      {p.stock} units
                    </span>
                  </div>
                </div>
              </Surface>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
