import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Auth")({
  component: AuthComponent,
});

function AuthComponent() {
  return (
    <main>
      <h1 className="text-xl font-bold">Auth Page</h1>
      <p>Login / Register Page</p>
    </main>
  );
}
