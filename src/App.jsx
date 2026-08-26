import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AuthFallback from "./Pages/Auth/AuthFallback";
import AuthTemplate from "./Pages/Auth/AuthTemplate";

import InnerFallback from "./Pages/InnerPages/InnerFallback";
import InnerTemplate from "./Pages/InnerPages/InnerTemplate";



const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const ForgetPassword = lazy(() => import("./Pages/Auth/ForgetPassword"));

const App = () => {
  return (
    <Suspense fallback={<AuthFallback />}>
      <Routes>
        <Route element={<AuthTemplate />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Route>
      </Routes>

    </Suspense>
  );
};

export default App;
