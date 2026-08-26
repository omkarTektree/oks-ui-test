import React from "react";
import { Outlet } from "react-router-dom";
import LogoLight from "../../assets/images/logo-light.png";
import { Button, PageTitle } from "oks-ui";
import { MoveLeft } from "lucide-react";

const SliderContent = [
  {
    title: "Welcome to Our Platform",
    description:
      "Discover the amazing features we offer to make your experience seamless and enjoyable.",
  },
  {
    title: "Create Your Account",
    description:
      "Join our community and unlock exclusive benefits and features.",
  },
  {
    title: "Get Started",
    description:
      "Ready to dive in? Sign up now and take the first step towards a better experience.",
  },
];

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
          <PageTitle>afasfadfsd</PageTitle>
        </div>
      </div>
      <div className="w-full max-w-170 bg-white h-full flex rounded-xl p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
