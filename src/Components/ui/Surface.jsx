/**
 * Surface — the card primitive oks-ui doesn't ship.
 * Themed entirely through the `--app-*` / `--oks-*` CSS variables in
 * `src/styles/theme.css`, so it flips with light/dark automatically.
 */
const PADDING = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

const Surface = ({
  as: Tag = "div",
  padding = "md",
  interactive = false,
  className = "",
  children,
  ...rest
}) => (
  <Tag
    className={[
      "rounded-[var(--oks-radius-xl)] border border-[color:var(--app-border)]",
      "bg-[var(--app-surface)] shadow-[var(--app-shadow-sm)]",
      interactive &&
        "transition-colors hover:border-[color:var(--app-border-strong)]",
      PADDING[padding] ?? PADDING.md,
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...rest}
  >
    {children}
  </Tag>
);

export default Surface;
