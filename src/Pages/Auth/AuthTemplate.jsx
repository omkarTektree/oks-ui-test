import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LogoLight from "../../assets/images/logo-light.png";
import Logo from "../../assets/images/logo.png";
import CodeEditor from "../../Components/Commom/CodeEditor";
import { SNIPPET } from "../../data/codeSnippets";

const AuthTemplate = () => {
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  return (
    <div className="relative flex w-full min-h-screen flex-col overflow-y-auto bg-[#09090e] p-3 lg:h-screen lg:flex-row lg:gap-6">
      {/* Brand / marketing panel */}
      <div className="relative hidden min-w-120 flex-1 overflow-hidden rounded-2xl bg-[#0b0b12] lg:block">
        {/* Full-bleed animated code editor, tilted in 3D like a photographed screen */}
        <motion.div
          className="absolute inset-0"
          style={{ transformPerspective: 1150, transformOrigin: "1% 2%" }}
          initial={
            reduceMotion
              ? {
                  opacity: 1,
                  rotateX: 1,
                  rotateY: -1,
                  rotateZ: -3,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  rotateX: 1,
                  rotateY: -1,
                  rotateZ: -3,
                  scale: 1,
                }
          }
          animate={{
            opacity: 1,
            rotateX: -1,
            rotateY: 10,
            rotateZ: 0,
            scale: 1.2,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="h-full w-full [filter:blur(0.7px)]">
            <CodeEditor snippet={SNIPPET} reduceMotion={reduceMotion} fill />
          </div>
        </motion.div>

        {/* Photographic depth-of-field — extra defocus toward top & bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] backdrop-blur-[3px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000 0%, transparent 24%, transparent 64%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, transparent 24%, transparent 64%, #000 100%)",
          }}
        />

        {/* Glow accent */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-28 -top-24 h-[26rem] w-[26rem] rounded-full bg-[#7c3aed]/20 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.15, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Scrims for overlay legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/75 to-transparent" />

        {/* Overlay content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-10 xl:p-12">
          <div className="flex items-center justify-between">
            <img src={LogoLight} alt="OKS" className="w-9" />
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/50 backdrop-blur">
              Secure sign in
            </span>
          </div>

          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a78bfa]/80">
              {"// workflow"}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-white xl:text-4xl">
              Built for the way developers actually work.
            </h1>
            <div className="mt-6 h-1 w-12 rounded-full bg-white/70" />
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex w-full flex-1 flex-col rounded-2xl bg-white shadow-2xl shadow-black/30 lg:h-full lg:min-h-0 lg:max-w-160">
        <div className="flex items-center px-6 pt-6 lg:hidden">
          <img src={Logo} alt="OKS" className="w-7" />
        </div>

        <div className="flex flex-1 flex-col px-6 py-8 sm:px-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="my-auto w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
