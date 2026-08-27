import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";

import AuthFallback from "./Pages/Auth/AuthFallback";
import AuthTemplate from "./Pages/Auth/AuthTemplate";

import InnerTemplate from "./Pages/InnerPages/InnerTemplate";
import ComingSoon from "./Pages/InnerPages/ComingSoon";
import { tablesFormsRoutes } from "./Pages/InnerPages/tables-forms/routes";
import { appsRoutes, appsRoutePaths } from "./Pages/InnerPages/apps/routes";
import { boardRoutes, boardRoutePaths } from "./Pages/InnerPages/boardRoutes";
import { formRoutes, formRoutePaths } from "./Pages/InnerPages/formRoutes";
import { detailRoutes, detailRoutePaths } from "./Pages/InnerPages/detailRoutes";
import { chartsRoutes, chartsRoutePaths } from "./Pages/InnerPages/charts/routes";
import { reportsRoutes, reportsRoutePaths } from "./Pages/InnerPages/reports/routes";
import { pagesRoutes, pagesRoutePaths } from "./Pages/InnerPages/pages/routes";
import { listRoutes, listRoutePaths } from "./Pages/InnerPages/listRoutes";
import {
  settingsRoutes,
  settingsRoutePaths,
} from "./Pages/InnerPages/settingsRoutes";
import { NAV_ROUTES } from "./data/nav";

const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const ForgotPassword = lazy(() => import("./Pages/Auth/ForgotPassword"));
const Terms = lazy(() => import("./Pages/Auth/Terms"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Maintenance = lazy(() => import("./Pages/Maintenance"));
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
const MarketingDashboard = lazy(
  () => import("./Pages/InnerPages/MarketingDashboard")
);
const SaasDashboard = lazy(() => import("./Pages/InnerPages/SaasDashboard"));
const LogisticsDashboard = lazy(
  () => import("./Pages/InnerPages/LogisticsDashboard")
);
const BiDashboard = lazy(() => import("./Pages/InnerPages/BiDashboard"));
const ComponentsOverview = lazy(
  () => import("./Pages/InnerPages/ComponentsOverview")
);
const ComponentPage = lazy(() => import("./Pages/InnerPages/ComponentPage"));
const CrmApp = lazy(() => import("./Pages/InnerPages/CrmApp"));

// Auth screens live outside the app shell; everything else is a shell page.
const AUTH_PATHS = new Set(["/", "/register", "/forgot-password"]);
const REAL_INNER = new Set([
  "/dashboards/analytics",
  "/dashboards/crm",
  "/dashboards/ecommerce",
  "/dashboards/finance",
  "/dashboards/sales",
  "/dashboards/projects",
  "/dashboards/marketing",
  "/dashboards/saas",
  "/dashboards/logistics",
  "/dashboards/business-intelligence",
  "/crm/crm-dashboard",
  "/crm/crm-app",
]);
const CONFIGURED = new Set([
  ...listRoutePaths,
  ...settingsRoutePaths,
  ...appsRoutePaths,
  ...boardRoutePaths,
  ...formRoutePaths,
  ...detailRoutePaths,
  ...chartsRoutePaths,
  ...reportsRoutePaths,
  ...pagesRoutePaths,
]);
const shellRoutes = NAV_ROUTES.filter(
  (path) =>
    !AUTH_PATHS.has(path) &&
    !REAL_INNER.has(path) &&
    !CONFIGURED.has(path) &&
    !path.startsWith("/40") &&
    path !== "/maintenance" &&
    !path.startsWith("/components") &&
    !path.startsWith("/tables-forms")
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
          <Route path="/404-error" element={<NotFound />} />
          <Route path="/maintenance" element={<Maintenance />} />

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
              <Route
                path="/dashboards/marketing"
                element={<MarketingDashboard />}
              />
              <Route path="/dashboards/saas" element={<SaasDashboard />} />
              <Route
                path="/dashboards/logistics"
                element={<LogisticsDashboard />}
              />
              <Route
                path="/dashboards/business-intelligence"
                element={<BiDashboard />}
              />
              <Route path="/crm/crm-dashboard" element={<CrmDashboard />} />
              <Route path="/crm/crm-app" element={<CrmApp />} />
              <Route path="/components" element={<ComponentsOverview />} />
              <Route
                path="/components/:slug"
                element={<ComponentPage />}
              />
              {tablesFormsRoutes}
              {appsRoutes}
              {boardRoutes}
              {formRoutes}
              {detailRoutes}
              {chartsRoutes}
              {reportsRoutes}
              {pagesRoutes}
              {listRoutes}
              {settingsRoutes}
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
