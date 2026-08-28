import { Route } from "react-router-dom";
import GanttView from "./GanttView";
import { GANTT_CONFIGS } from "../../../data/gantt";

export const projectsRoutePaths = Object.keys(GANTT_CONFIGS);

export const projectsRoutes = projectsRoutePaths.map((path) => (
  <Route key={path} path={path} element={<GanttView config={GANTT_CONFIGS[path]} />} />
));
