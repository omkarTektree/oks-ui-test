/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";

const Pipeline = lazy(() => import("./Pipeline"));
const SalesFunnel = lazy(() => import("./SalesFunnel"));
const CustomerJourney = lazy(() => import("./CustomerJourney"));

const R = [
  ["/crm/pipeline", Pipeline],
  ["/crm/sales-funnel", SalesFunnel],
  ["/crm/customer-journey", CustomerJourney],
];

export const crmRoutePaths = R.map(([path]) => path);

export const crmRoutes = R.map(([path, Component]) => (
  <Route key={path} path={path} element={<Component />} />
));
