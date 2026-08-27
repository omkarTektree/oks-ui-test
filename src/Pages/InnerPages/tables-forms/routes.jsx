/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";

const Overview = lazy(() => import("./TablesFormsOverview"));
const BasicTable = lazy(() => import("./BasicTable"));
const ResponsiveTable = lazy(() => import("./ResponsiveTable"));
const FilterTable = lazy(() => import("./FilterTable"));
const DataTablePage = lazy(() => import("./DataTablePage"));
const AdvancedTable = lazy(() => import("./AdvancedTable"));
const FormElements = lazy(() => import("./FormElements"));
const FormLayouts = lazy(() => import("./FormLayouts"));
const FormValidation = lazy(() => import("./FormValidation"));
const MultiStepWizard = lazy(() => import("./MultiStepWizard"));
const FileUpload = lazy(() => import("./FileUpload"));
const RichTextEditor = lazy(() => import("./RichTextEditor"));
const DatePickers = lazy(() => import("./DatePickers"));
const SelectComponents = lazy(() => import("./SelectComponents"));
const InputMasks = lazy(() => import("./InputMasks"));

const R = [
  ["/tables-forms", Overview],
  ["/tables-forms/basic-table", BasicTable],
  ["/tables-forms/responsive-table", ResponsiveTable],
  ["/tables-forms/filter-table", FilterTable],
  ["/tables-forms/data-table", DataTablePage],
  ["/tables-forms/advanced-table", AdvancedTable],
  ["/tables-forms/form-elements", FormElements],
  ["/tables-forms/form-layouts", FormLayouts],
  ["/tables-forms/form-validation", FormValidation],
  ["/tables-forms/multi-step-wizard", MultiStepWizard],
  ["/tables-forms/file-upload", FileUpload],
  ["/tables-forms/rich-text-editor", RichTextEditor],
  ["/tables-forms/date-pickers", DatePickers],
  ["/tables-forms/select-components", SelectComponents],
  ["/tables-forms/input-masks", InputMasks],
];

export const tablesFormsRoutes = R.map(([path, Component]) => (
  <Route key={path} path={path} element={<Component />} />
));
