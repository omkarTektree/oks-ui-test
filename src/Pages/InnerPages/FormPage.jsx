import { Link } from "react-router-dom";
import { Button, Form, FormFieldSet, toast } from "oks-ui";
import { ArrowLeft, UploadCloud } from "lucide-react";
import SectionTitle from "../../Components/ui/SectionTitle";
import Surface from "../../Components/ui/Surface";
import CardHeader from "../../Components/ui/CardHeader";

/**
 * Config-driven create/edit form.
 * `config` = {
 *   title, subtitle, backTo?, backLabel?, submitLabel?,
 *   sections: [{ title, subtitle?, columns?: 1 | 2, fields: [<FormFieldSet props>] }],
 *   media?: { title, hint },  tips?: { title, items: string[] },
 * }
 */
const FormPage = ({ config }) => {
  const {
    title,
    subtitle,
    backTo,
    backLabel = "Back",
    submitLabel = "Save",
    sections = [],
    media,
    tips,
  } = config;

  const hasAside = Boolean(media || tips);

  return (
    <div className="space-y-6">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        actions={
          backTo && (
            <Button
              as={Link}
              to={backTo}
              variant="bordered"
              size="sm"
              startContent={<ArrowLeft size={15} />}
            >
              {backLabel}
            </Button>
          )
        }
      />

      <Form
        onSubmit={() => toast.success(`${submitLabel} — saved`)}
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        <div className={hasAside ? "space-y-6 lg:col-span-2" : "space-y-6 lg:col-span-3"}>
          {sections.map((section) => (
            <Surface key={section.title} padding="none">
              <div className="border-b border-[color:var(--app-border)] px-6 py-5">
                <CardHeader
                  title={section.title}
                  subtitle={section.subtitle}
                  className="mb-0"
                />
              </div>
              <div
                className={`grid gap-5 p-6 ${
                  section.columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {section.fields.map(({ fullWidth, ...field }) => (
                  <div
                    key={field.name}
                    className={fullWidth ? "sm:col-span-2" : undefined}
                  >
                    <FormFieldSet {...field} />
                  </div>
                ))}
              </div>
            </Surface>
          ))}

          <div className="flex flex-wrap justify-end gap-2">
            <Button type="reset" variant="bordered" size="sm">
              Reset
            </Button>
            <Button type="submit" color="primary" size="sm">
              {submitLabel}
            </Button>
          </div>
        </div>

        {hasAside && (
          <div className="space-y-6">
            {media && (
              <Surface>
                <CardHeader title={media.title} subtitle={media.hint} />
                <label className="flex cursor-pointer flex-col items-center gap-2 rounded-[var(--oks-radius-lg)] border border-dashed border-[color:var(--app-border-strong)] p-6 text-center text-sm text-[color:var(--app-fg-muted)] transition-colors hover:border-[color:var(--oks-color-primary-500)]">
                  <UploadCloud size={22} className="text-[color:var(--app-fg-subtle)]" />
                  Drag files here or click to browse
                  <input type="file" className="hidden" multiple />
                </label>
              </Surface>
            )}
            {tips && (
              <Surface>
                <CardHeader title={tips.title} />
                <ul className="space-y-2 text-sm text-[color:var(--app-fg-muted)]">
                  {tips.items.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--oks-color-primary-500)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Surface>
            )}
          </div>
        )}
      </Form>
    </div>
  );
};

export default FormPage;
