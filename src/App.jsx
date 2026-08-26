import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "oks-ui";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";

import AuthFallback from "./Pages/Auth/AuthFallback";
import AuthTemplate from "./Pages/Auth/AuthTemplate";

import InnerFallback from "./Pages/InnerPages/InnerFallback";
import InnerTemplate from "./Pages/InnerPages/InnerTemplate";



const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const ForgotPassword = lazy(() => import("./Pages/Auth/ForgotPassword"));
const Terms = lazy(() => import("./Pages/Auth/Terms"));
const Dashboard = lazy(() => import("./Pages/InnerPages/Dashboard"));

const App = () => {
  return (
    <ToastProvider position="top-right">
      <AuthProvider>
        <Suspense fallback={<AuthFallback />}>
          <Routes>
            <Route element={<AuthTemplate />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            <Route path="/terms" element={<Terms />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<InnerTemplate />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </ToastProvider>
  );
};

export default App;
