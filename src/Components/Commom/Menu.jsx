import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Lightweight dropdown menu: a trigger plus a floating panel that closes on
 * outside click, Escape, or selecting an item.
 */
const Menu = ({ trigger, children, align = "right", width = 232 }) => {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center rounded-lg outline-none"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {trigger}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            style={{ width }}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -6, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -6, scale: 0.98 }
            }
            transition={{ duration: 0.14, ease: "easeOut" }}
            onClick={() => setOpen(false)}
            className={`absolute z-40 mt-2 overflow-hidden rounded-xl border border-black/[0.08] bg-white p-1.5 shadow-xl shadow-black/10 ${
              align === "right" ? "right-0" : "left-0"
            }`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MenuItem = ({ icon: Icon, children, onClick, danger = false }) => (
  <button
    type="button"
    role="menuitem"
    onClick={onClick}
    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
      danger
        ? "text-red-600 hover:bg-red-50"
        : "text-black/70 hover:bg-black/[0.05] hover:text-black"
    }`}
  >
    {Icon ? <Icon size={16} className="shrink-0" /> : null}
    {children}
  </button>
);

export const MenuLabel = ({ title, subtitle }) => (
  <div className="px-3 py-2">
    <p className="text-sm font-medium text-black">{title}</p>
    {subtitle ? <p className="truncate text-xs text-black/50">{subtitle}</p> : null}
  </div>
);

export const MenuDivider = () => <div className="my-1 h-px bg-black/[0.07]" />;

export default Menu;
