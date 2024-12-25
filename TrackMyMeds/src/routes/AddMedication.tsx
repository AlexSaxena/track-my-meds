import MedicationForm from "@/components/ui/medicationForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/AddMedication")({
  component: AddMedication,
});

function AddMedication() {
  return (
    <main>
      <h1 className="text-xl font-bold">Add Medication</h1>
      <p>Use this form to add your medication details.</p>
      <MedicationForm />
    </main>
  );
}

export default AddMedication;
