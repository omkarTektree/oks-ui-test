import { Route } from "react-router-dom";
import ListPage from "./ListPage";
import { LIST_CONFIGS } from "../../data/lists";

export const listRoutePaths = Object.keys(LIST_CONFIGS);

export const listRoutes = listRoutePaths.map((path) => (
  <Route key={path} path={path} element={<ListPage config={LIST_CONFIGS[path]} />} />
));
