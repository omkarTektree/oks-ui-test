/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";
import ReportPage from "../ReportPage";
import { REPORT_CONFIGS } from "../../../data/reports";

const CustomBuilder = lazy(() => import("./CustomBuilder"));

const reportConfigPaths = Object.keys(REPORT_CONFIGS);

export const reportsRoutePaths = [...reportConfigPaths, "/reports/custom-builder"];

export const reportsRoutes = [
  ...reportConfigPaths.map((path) => (
    <Route key={path} path={path} element={<ReportPage config={REPORT_CONFIGS[path]} />} />
  )),
  <Route key="/reports/custom-builder" path="/reports/custom-builder" element={<CustomBuilder />} />,
];
