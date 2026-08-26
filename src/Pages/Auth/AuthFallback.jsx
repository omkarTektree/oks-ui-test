import { Backdrop, Loader } from "oks-ui";
import React from "react";

const AuthFallback = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default AuthFallback;
