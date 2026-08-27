import Surface from "./Surface";
import CardHeader from "./CardHeader";
import CodeBlock from "./CodeBlock";

/** One live example: a preview area over its source. */
const Example = ({ title, description, code, children }) => (
  <div className="space-y-3">
    {(title || description) && (
      <CardHeader title={title} subtitle={description} />
    )}
    <Surface padding="none" className="overflow-hidden">
      <div className="flex min-h-[128px] flex-wrap items-center gap-3 p-6">
        {children}
      </div>
      {code && (
        <div className="border-t border-[color:var(--app-border)] p-3">
          <CodeBlock code={code} />
        </div>
      )}
    </Surface>
  </div>
);

export default Example;
