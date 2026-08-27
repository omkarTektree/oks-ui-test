import { Route } from "react-router-dom";
import SettingsPage from "./SettingsPage";
import { SETTINGS_CONFIGS } from "../../data/settings";

export const settingsRoutePaths = Object.keys(SETTINGS_CONFIGS);

export const settingsRoutes = settingsRoutePaths.map((path) => (
  <Route
    key={path}
    path={path}
    element={<SettingsPage config={SETTINGS_CONFIGS[path]} />}
  />
));
