/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";

const Chat = lazy(() => import("./Chat"));
const GroupChat = lazy(() => import("./GroupChat"));
const Email = lazy(() => import("./Email"));
const Calendar = lazy(() => import("./Calendar"));
const FileManager = lazy(() => import("./FileManager"));
const Notes = lazy(() => import("./Notes"));
const TaskManager = lazy(() => import("./TaskManager"));
const HelpDesk = lazy(() => import("./HelpDesk"));
const SupportTickets = lazy(() => import("./SupportTickets"));
const Contacts = lazy(() => import("./Contacts"));

const R = [
  ["/apps/chat", Chat],
  ["/apps/group-chat", GroupChat],
  ["/apps/email", Email],
  ["/apps/calendar", Calendar],
  ["/apps/file-manager", FileManager],
  ["/apps/notes", Notes],
  ["/apps/task-manager", TaskManager],
  ["/apps/help-desk", HelpDesk],
  ["/apps/support-tickets", SupportTickets],
  ["/apps/contacts", Contacts],
];

export const appsRoutePaths = R.map(([path]) => path);

export const appsRoutes = R.map(([path, Component]) => (
  <Route key={path} path={path} element={<Component />} />
));
