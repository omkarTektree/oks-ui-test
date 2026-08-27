import { Form } from "oks-ui";
import Surface from "./Surface";
import CardHeader from "./CardHeader";

/**
 * A titled oks-ui <Form> inside a <Surface>, with a footer action row.
 * Children are the fields; `footer` is the button cluster.
 */
const FormCard = ({ title, subtitle, onSubmit, footer, children, className }) => (
  <Surface padding="none" className={className}>
    {(title || subtitle) && (
      <div className="border-b border-[color:var(--app-border)] px-6 py-5">
        <CardHeader title={title} subtitle={subtitle} className="mb-0" />
      </div>
    )}
    <Form onSubmit={onSubmit} className="flex flex-col gap-5 p-6">
      {children}
      {footer && (
        <div className="flex flex-wrap justify-end gap-2 border-t border-[color:var(--app-border)] pt-5">
          {footer}
        </div>
      )}
    </Form>
  </Surface>
);

export default FormCard;
