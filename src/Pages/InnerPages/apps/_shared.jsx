import { Avatar } from "oks-ui";
import { avatarUrl } from "../../../lib/avatar";

/** Height for a full-bleed app workspace inside the shell's scroll area. */
export const FRAME_H = "h-[calc(100vh-15rem)] min-h-[30rem]";

/** Round avatar with a stable stock photo + presence dot. */
export const PersonAvatar = ({ name, size = "sm", online }) => (
  <span className="relative inline-flex shrink-0">
    <Avatar name={name} src={avatarUrl(name)} size={size} radius="full" />
    {online != null && (
      <span
        className={`absolute -bottom-0 -right-0 h-2.5 w-2.5 rounded-full border-2 border-[var(--app-surface)] ${
          online ? "bg-[var(--oks-color-success-500)]" : "bg-[var(--app-fg-subtle)]"
        }`}
      />
    )}
  </span>
);

/** Static message composer used by the chat/email screens. */
export const Composer = ({ placeholder = "Write a message…", onSend }) => (
  <form
    className="flex items-center gap-2 border-t border-[color:var(--app-border)] p-3"
    onSubmit={(e) => {
      e.preventDefault();
      onSend?.();
    }}
  >
    <input
      className="min-w-0 flex-1 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-bg)] px-3 py-2 text-sm text-[var(--app-fg)] outline-none placeholder:text-[color:var(--app-fg-subtle)] focus:border-[color:var(--oks-color-primary-500)]"
      placeholder={placeholder}
    />
    <button
      type="submit"
      className="shrink-0 rounded-[var(--oks-radius-lg)] bg-[var(--oks-color-primary-500)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
    >
      Send
    </button>
  </form>
);
