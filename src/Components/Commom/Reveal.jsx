import { motion, useReducedMotion } from "framer-motion";

/**
 * Stagger — orchestrates a cascade of <RevealItem> children.
 * Place RevealItem elements directly inside; they must NOT set their own
 * initial/animate so the parent can time them.
 */
export const Stagger = ({ children, className, gap = 0.07, delay = 0.04 }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      variants={{
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const RevealItem = ({ children, className, y = 12 }) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
};

/** RevealOnView — independent reveal when scrolled into view (long pages). */
export const RevealOnView = ({ children, className, y = 16 }) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
