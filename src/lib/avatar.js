// Deterministic stock-photo avatar for a given name.
// oks-ui's <Avatar> falls back to initials if the image fails to load, so this
// degrades gracefully if the service is unreachable.

const hash = (input) => {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
};

/** i.pravatar.cc has 70 numbered portraits; pick one stably from the name. */
export const avatarUrl = (name) =>
  name ? `https://i.pravatar.cc/128?img=${(hash(name) % 70) + 1}` : undefined;
