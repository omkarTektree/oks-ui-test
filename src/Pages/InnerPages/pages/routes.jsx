/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";

const Faq = lazy(() => import("./Faq"));
const HelpCenter = lazy(() => import("./HelpCenter"));
const Pricing = lazy(() => import("./Pricing"));
const NotificationsCenter = lazy(() => import("./NotificationsCenter"));
const ActivityFeedPage = lazy(() => import("./ActivityFeedPage"));
const SearchResults = lazy(() => import("./SearchResults"));
const Changelog = lazy(() => import("./Changelog"));
const Roadmap = lazy(() => import("./Roadmap"));
const ThemeCustomizer = lazy(() => import("./ThemeCustomizer"));

const R = [
  ["/utility/faq", <Faq />],
  ["/utility/help-center", <HelpCenter variant="help" />],
  ["/utility/knowledge-base", <HelpCenter variant="kb" />],
  ["/utility/documentation", <HelpCenter variant="docs" />],
  ["/utility/pricing", <Pricing />],
  ["/utility/notifications-center", <NotificationsCenter />],
  ["/utility/activity-feed", <ActivityFeedPage />],
  ["/utility/search-results", <SearchResults />],
  ["/pages/changelog", <Changelog />],
  ["/pages/release-notes", <Changelog title="Release notes" subtitle="Detailed notes for each release." />],
  ["/pages/roadmap", <Roadmap />],
  ["/pages/theme-customizer", <ThemeCustomizer />],
];

export const pagesRoutePaths = R.map(([path]) => path);

export const pagesRoutes = R.map(([path, element]) => (
  <Route key={path} path={path} element={element} />
));
