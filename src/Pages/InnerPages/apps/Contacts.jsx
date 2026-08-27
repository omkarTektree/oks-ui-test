import { useMemo, useState } from "react";
import { Button, Chip } from "oks-ui";
import { Search, Mail, Phone, MapPin, Star, Building2, Plus } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { PersonAvatar } from "./_shared";
import { CONTACTS } from "../../../data/apps";

const TAG_TONE = { Customer: "success", Prospect: "info", Partner: "primary", Vendor: "warning" };
const TAGS = ["All", "Customer", "Prospect", "Partner", "Vendor"];

const Contacts = () => {
  const [tag, setTag] = useState("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(CONTACTS[0].id);

  const rows = useMemo(
    () =>
      CONTACTS.filter(
        (c) =>
          (tag === "All" || c.tag === tag) &&
          (query.trim() === "" ||
            (c.name + c.company + c.email).toLowerCase().includes(query.trim().toLowerCase()))
      ),
    [tag, query]
  );

  const open = CONTACTS.find((c) => c.id === openId) ?? rows[0];

  return (
    <div>
      <SectionTitle
        title="Contacts"
        subtitle="Address book with a detail panel."
        actions={
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            Add contact
          </Button>
        }
      />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-surface)] px-3 py-2 sm:w-72">
          <Search size={15} className="text-[color:var(--app-fg-subtle)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-sm text-[var(--app-fg)] outline-none placeholder:text-[color:var(--app-fg-subtle)]"
            placeholder="Search contacts"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <Chip
              key={t}
              size="sm"
              variant={tag === t ? "solid" : "bordered"}
              color={tag === t ? "primary" : "default"}
              className="cursor-pointer"
              onClick={() => setTag(t)}
            >
              {t}
            </Chip>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_20rem]">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((c) => (
            <Surface
              key={c.id}
              padding="sm"
              interactive
              onClick={() => setOpenId(c.id)}
              className={`cursor-pointer ${c.id === open?.id ? "border-[color:var(--oks-color-primary-500)]" : ""}`}
            >
              <div className="flex items-start gap-3">
                <PersonAvatar name={c.name} size="md" />
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1 truncate text-sm font-semibold text-[var(--app-fg)]">
                    {c.name}
                    {c.favorite && <Star size={12} className="fill-[var(--oks-color-warning-500)] text-[var(--oks-color-warning-500)]" />}
                  </p>
                  <p className="truncate text-xs text-[color:var(--app-fg-muted)]">{c.title}</p>
                  <p className="truncate text-xs text-[color:var(--app-fg-subtle)]">{c.company}</p>
                </div>
              </div>
              <div className="mt-3">
                <Chip size="sm" variant="soft" color={TAG_TONE[c.tag]}>{c.tag}</Chip>
              </div>
            </Surface>
          ))}
        </div>

        {open && (
          <Surface className="h-max">
            <div className="flex flex-col items-center text-center">
              <PersonAvatar name={open.name} size="lg" />
              <p className="mt-3 text-base font-semibold text-[var(--app-fg)]">{open.name}</p>
              <p className="text-sm text-[color:var(--app-fg-muted)]">{open.title}</p>
              <Chip size="sm" variant="soft" color={TAG_TONE[open.tag]} className="mt-2">{open.tag}</Chip>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[color:var(--app-fg-muted)]">
                <Building2 size={15} className="shrink-0 opacity-70" /> {open.company}
              </div>
              <div className="flex items-center gap-3 text-[color:var(--app-fg-muted)]">
                <Mail size={15} className="shrink-0 opacity-70" />
                <span className="truncate">{open.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[color:var(--app-fg-muted)]">
                <Phone size={15} className="shrink-0 opacity-70" /> {open.phone}
              </div>
              <div className="flex items-center gap-3 text-[color:var(--app-fg-muted)]">
                <MapPin size={15} className="shrink-0 opacity-70" /> {open.location}
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <Button size="sm" color="primary" className="flex-1" startContent={<Mail size={14} />}>
                Email
              </Button>
              <Button size="sm" variant="bordered" className="flex-1">Edit</Button>
            </div>
          </Surface>
        )}
      </div>
    </div>
  );
};

export default Contacts;
