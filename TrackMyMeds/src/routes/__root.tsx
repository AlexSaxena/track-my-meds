import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="container mx-auto py-6 px-4">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
