import { Route } from "react-router-dom";
import DetailPage from "./DetailPage";
import { DETAIL_CONFIGS } from "../../data/details";

export const detailRoutePaths = Object.keys(DETAIL_CONFIGS);

export const detailRoutes = detailRoutePaths.map((path) => (
  <Route key={path} path={path} element={<DetailPage config={DETAIL_CONFIGS[path]} />} />
));
