const COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
};

/** Responsive grid wrapper for KpiCards (or any equal-height cards). */
const StatGroup = ({ columns = 4, className = "", children }) => (
  <div className={`grid grid-cols-1 gap-4 ${COLS[columns] ?? COLS[4]} ${className}`}>
    {children}
  </div>
);

export default StatGroup;
