/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";

const ProjectAnalytics = lazy(() => import("./ProjectAnalytics"));
const CustomerAnalytics = lazy(() => import("./CustomerAnalytics"));
const MarketingAnalytics = lazy(() => import("./MarketingAnalytics"));
const BudgetManagement = lazy(() => import("./BudgetManagement"));
const MarketingDashboard = lazy(() => import("../MarketingDashboard"));

const R = [
  ["/projects/project-analytics", ProjectAnalytics],
  ["/ecommerce/customer-analytics", CustomerAnalytics],
  ["/marketing/analytics", MarketingAnalytics],
  ["/marketing/overview", MarketingDashboard],
  ["/finance/budget-management", BudgetManagement],
];

export const analyticsRoutePaths = R.map(([path]) => path);

export const analyticsRoutes = R.map(([path, Component]) => (
  <Route key={path} path={path} element={<Component />} />
));
