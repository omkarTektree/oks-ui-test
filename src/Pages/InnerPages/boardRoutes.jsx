import { Route } from "react-router-dom";
import BoardPage from "./BoardPage";
import { BOARD_CONFIGS } from "../../data/boards";

export const boardRoutePaths = Object.keys(BOARD_CONFIGS);

export const boardRoutes = boardRoutePaths.map((path) => (
  <Route key={path} path={path} element={<BoardPage config={BOARD_CONFIGS[path]} />} />
));
