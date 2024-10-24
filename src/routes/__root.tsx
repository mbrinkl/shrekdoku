import { Outlet, createRootRoute } from "@tanstack/react-router";

const Layout = () => {
  return <Outlet />;
};

export const Route = createRootRoute({
  component: Layout,
});
