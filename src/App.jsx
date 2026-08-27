import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";

import AuthFallback from "./Pages/Auth/AuthFallback";
import AuthTemplate from "./Pages/Auth/AuthTemplate";

import InnerTemplate from "./Pages/InnerPages/InnerTemplate";
import ComingSoon from "./Pages/InnerPages/ComingSoon";
import { NAV_ROUTES } from "./data/nav";

const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const ForgotPassword = lazy(() => import("./Pages/Auth/ForgotPassword"));
const Terms = lazy(() => import("./Pages/Auth/Terms"));
const AnalyticsDashboard = lazy(() => import("./Pages/InnerPages/Dashboard"));
const CrmDashboard = lazy(() => import("./Pages/InnerPages/CrmDashboard"));
const EcommerceDashboard = lazy(
  () => import("./Pages/InnerPages/EcommerceDashboard")
);
const FinanceDashboard = lazy(
  () => import("./Pages/InnerPages/FinanceDashboard")
);
const SalesDashboard = lazy(() => import("./Pages/InnerPages/SalesDashboard"));
const ProjectsDashboard = lazy(
  () => import("./Pages/InnerPages/ProjectsDashboard")
);
const ComponentsOverview = lazy(
  () => import("./Pages/InnerPages/ComponentsOverview")
);
const ComponentPage = lazy(() => import("./Pages/InnerPages/ComponentPage"));

// Auth screens live outside the app shell; everything else is a shell page.
const AUTH_PATHS = new Set(["/", "/register", "/forgot-password"]);
const REAL_INNER = new Set([
  "/dashboards/analytics",
  "/dashboards/crm",
  "/dashboards/ecommerce",
  "/dashboards/finance",
  "/dashboards/sales",
  "/dashboards/projects",
]);
const shellRoutes = NAV_ROUTES.filter(
  (path) =>
    !AUTH_PATHS.has(path) &&
    !REAL_INNER.has(path) &&
    !path.startsWith("/40") &&
    !path.startsWith("/components")
);

const App = () => {
  return (
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
              <Route
                path="/dashboard"
                element={<Navigate to="/dashboards/analytics" replace />}
              />
              <Route
                path="/dashboards/analytics"
                element={<AnalyticsDashboard />}
              />
              <Route path="/dashboards/crm" element={<CrmDashboard />} />
              <Route
                path="/dashboards/ecommerce"
                element={<EcommerceDashboard />}
              />
              <Route
                path="/dashboards/finance"
                element={<FinanceDashboard />}
              />
              <Route path="/dashboards/sales" element={<SalesDashboard />} />
              <Route
                path="/dashboards/projects"
                element={<ProjectsDashboard />}
              />
              <Route path="/components" element={<ComponentsOverview />} />
              <Route
                path="/components/:slug"
                element={<ComponentPage />}
              />
              {shellRoutes.map((path) => (
                <Route key={path} path={path} element={<ComingSoon />} />
              ))}
              <Route path="*" element={<ComingSoon />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
};

export default App;
