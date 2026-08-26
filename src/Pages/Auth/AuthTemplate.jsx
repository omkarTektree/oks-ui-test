import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LogoLight from "../../assets/images/logo-light.png";
import { Button, PageTitle } from "oks-ui";
import { MoveLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SliderContent = [
  {
    title:
      "One Powerful Platform to Bring Your Ideas, Work, and Ambitions to Life",
    description:
      "Everything you need to organize your work, simplify your workflow, and make meaningful progress every day.",
  },
  {
    title:
      "From Your First Idea to Your Biggest Achievement, We’re Here to Help",
    description:
      "Powerful tools and a seamless experience designed to help you turn plans into progress and progress into results.",
  },
  {
    title:
      "A Better Way to Work Today, Build for Tomorrow, and Achieve What Matters Most",
    description:
      "Get everything you need in one place and take your next big step with confidence.",
  },
];

const SLIDE_DURATION = 18000;

const TextSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SliderContent.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const { title, description } = SliderContent[index];

  return (
    <div className="max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <PageTitle
            as="h1"
            title={title}
            subtitle={description}
            classNames={{
              base: "flex-col items-start",
              title: "text-white",
              subtitle: "text-white/60",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 mt-4">
        {SliderContent.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === index ? "40px" : "4px",
              backgroundColor: i === index ? "#fff" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const AuthTemplate = () => {
  return (
    <div className="w-full h-screen overflow-auto bg-black p-3 flex gap-10">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="w-8">
            <img src={LogoLight} alt="Logo" />
          </div>
          <div>
            <Button
              variant="link"
              color="default"
              colorDepth={50}
              startContent={<MoveLeft />}
              aria-label="Back to Home"
              as="a"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Back to Home
            </Button>
          </div>
        </div>

        <div className="text-white">
          <TextSlider />
        </div>
      </div>
      <div className="w-full max-w-180 bg-white h-full  rounded-xl p-10 flex items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
