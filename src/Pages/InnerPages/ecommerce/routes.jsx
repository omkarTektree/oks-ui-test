/* eslint-disable react-refresh/only-export-components -- route manifest, not a component module */
import { lazy } from "react";
import { Route } from "react-router-dom";

const ProductGrid = lazy(() => import("./ProductGrid"));

const R = [["/ecommerce/product-grid", ProductGrid]];

export const ecommerceRoutePaths = R.map(([path]) => path);

export const ecommerceRoutes = R.map(([path, Component]) => (
  <Route key={path} path={path} element={<Component />} />
));
