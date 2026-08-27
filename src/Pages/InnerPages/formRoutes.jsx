import { Route } from "react-router-dom";
import FormPage from "./FormPage";
import { FORM_CONFIGS } from "../../data/forms";

export const formRoutePaths = Object.keys(FORM_CONFIGS);

export const formRoutes = formRoutePaths.map((path) => (
  <Route key={path} path={path} element={<FormPage config={FORM_CONFIGS[path]} />} />
));
