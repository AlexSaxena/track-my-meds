import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/History")({
  component: History,
});

function History() {
  return (
    <main>
      <h1 className="text-xl font-bold">Medication History</h1>
      <p>See your medication usage history.</p>
    </main>
  );
}

export default History;
