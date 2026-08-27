/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";

const ApexCharts = lazy(() => import("./ApexCharts"));
const ChartJs = lazy(() => import("./ChartJs"));
const Statistics = lazy(() => import("./Statistics"));
const KpiAnalytics = lazy(() => import("./KpiAnalytics"));
const Heatmaps = lazy(() => import("./Heatmaps"));
const RevenueAnalytics = lazy(() => import("./RevenueAnalytics"));
const UserAnalytics = lazy(() => import("./UserAnalytics"));

const R = [
  ["/charts/apex-charts", ApexCharts],
  ["/charts/chart-js", ChartJs],
  ["/charts/statistics", Statistics],
  ["/charts/kpi-analytics", KpiAnalytics],
  ["/charts/heatmaps", Heatmaps],
  ["/charts/revenue-analytics", RevenueAnalytics],
  ["/charts/user-analytics", UserAnalytics],
];

export const chartsRoutePaths = R.map(([path]) => path);

export const chartsRoutes = R.map(([path, Component]) => (
  <Route key={path} path={path} element={<Component />} />
));
