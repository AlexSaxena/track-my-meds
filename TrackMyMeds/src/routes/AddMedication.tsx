import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/AddMedication")({
  component: AddMedication,
});

function AddMedication() {
  return (
    <main>
      <h1 className="text-xl font-bold">Add Medication</h1>
      <p>Use this form to add your medication details.</p>
    </main>
  );
}

export default AddMedication;
