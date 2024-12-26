import MedicationForm from "@/components/ui/medicationForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/AddMedication")({
  component: AddMedication,
});

function AddMedication() {
  return (
    <main>
      <div className="text-center block ">
        <h1 className="text-2xl font-bold mb-4">Medication form</h1>
        <p className="mb-6 text-gray-600">
          Use this form to add your new medication details.
        </p>
      </div>
      <MedicationForm />
    </main>
  );
}

export default AddMedication;
