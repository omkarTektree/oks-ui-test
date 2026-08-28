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
const WidgetGallery = lazy(() => import("./WidgetGallery"));
const UiPlayground = lazy(() => import("./UiPlayground"));
const RtlDarkLightPreview = lazy(() => import("./RtlDarkLightPreview"));
const StarterKit = lazy(() => import("./StarterKit"));

const R = [
  ["/utility/faq", <Faq />],
  ["/utility/help-center", <HelpCenter variant="help" />],
  ["/utility/knowledge-base", <HelpCenter variant="kb" />],
  ["/utility/documentation", <HelpCenter variant="docs" />],
  ["/utility/pricing", <Pricing />],
  ["/utility/notifications-center", <NotificationsCenter />],
  ["/utility/activity-feed", <ActivityFeedPage />],
  ["/utility/search-results", <SearchResults />],
  ["/utility/widget-gallery", <WidgetGallery />],
  ["/utility/ui-playground", <UiPlayground />],
  ["/pages/changelog", <Changelog />],
  ["/pages/release-notes", <Changelog title="Release notes" subtitle="Detailed notes for each release." />],
  ["/pages/roadmap", <Roadmap />],
  ["/pages/theme-customizer", <ThemeCustomizer />],
  ["/pages/rtl-dark-light-preview", <RtlDarkLightPreview />],
  ["/pages/starter-kit", <StarterKit />],
];

export const pagesRoutePaths = R.map(([path]) => path);

export const pagesRoutes = R.map(([path, element]) => (
  <Route key={path} path={path} element={element} />
));
