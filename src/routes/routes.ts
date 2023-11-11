// routes.ts
import config from "../config";

// Layouts
import MainUserLayout from "../layouts/MainUserLayout";
// import { MainAdminLayout } from "../layouts/MainAdminLayout";

// Pages
import Home from "../pages/Home";

// Admin Page

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainUserLayout },
];

// const privateRoutes = [
//   { path: config.routes.admin, component: Dashboard, layout: MainAdminLayout },
// ];

export { publicRoutes };
