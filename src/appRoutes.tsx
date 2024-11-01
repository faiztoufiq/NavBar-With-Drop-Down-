import Blog from "@components/blog/page";
import Pricing from "@components/pricing/page";
import Products from "@components/product/page";
import LatestPosts from "@/components/latestposts/page";
import Categories from "@/components/categories/page";
import SubMenu from "./blogSubmenu/page";
import { commonRutes } from "@/common/routes";
import React from "react";
import Input from "./components/transition/page";
import SearchComponent from "./components/defferedValue/page";

const LazyLoading = React.lazy(() => import("@/lazyLoading/page"));
const LazyToogle = React.lazy(() => import("@/components/toogleClick/page"));

const routes = [
  { path: commonRutes.localHost, element: <Blog /> },
  { path: commonRutes.blog, element: <Blog /> },
  { path: commonRutes.pricing, element: <Pricing /> },
  { path: commonRutes.Products, element: <Products /> },
  { path: commonRutes.latestPosts, element: <LatestPosts /> },
  { path: commonRutes.categories, element: <Categories /> },
  { path: commonRutes.input, element: <Input /> },
  { path: commonRutes.searchComponent, element: <SearchComponent /> },
  { path: commonRutes.Blog, element: <SubMenu /> },
  {
    path: commonRutes.toogleClick,
    element: (
      <React.Suspense fallback="loading">
        <LazyToogle />
      </React.Suspense>
    ),
  },
  {
    path: commonRutes.lazyLoadin,
    element: (
      <React.Suspense fallback={<Input />}>
        <LazyLoading />
      </React.Suspense>
    ),
  },

  { path: commonRutes.subMenu, element: <SubMenu /> },
];

export default routes;
