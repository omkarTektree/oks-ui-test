import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../../Components/Commom/Header";
import Sidebar from "../../Components/Commom/Sidebar";
import Footer from "../../Components/Commom/Footer";
import InnerFallback from "./InnerFallback";

const STORAGE_KEY = "oks_sidebar_collapsed";

const InnerTemplate = () => {
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "true"
  );

  const toggleCollapsed = () => {
    setCollapsed((value) => {
      const next = !value;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#fafafa]">
      {/* Desktop sidebar */}
      <aside
        className={`hidden shrink-0 border-r border-black/[0.08] transition-[width] duration-300 lg:block ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <Sidebar collapsed={collapsed} />
      </aside>

      {/* Mobile drawer — CSS-driven slide in/out */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-black/[0.08] bg-white shadow-xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <Sidebar onNavigate={() => setMobileOpen(false)} />
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          collapsed={collapsed}
          onMenuClick={() => setMobileOpen(true)}
          onCollapseToggle={toggleCollapsed}
        />

        <main className="flex-1 overflow-y-auto">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8"
          >
            <Suspense fallback={<InnerFallback />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default InnerTemplate;
