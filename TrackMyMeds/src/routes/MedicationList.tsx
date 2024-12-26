import MedicationDataTable from "@/components/ui/medicationDataTable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/MedicationList")({
  component: MedicationList,
});

function MedicationList() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Medication List</h1>
      <p className="text-center mb-6 text-gray-600">
        Manage & View all your medications here.
      </p>
      <MedicationDataTable />
    </div>
  );
}

export default MedicationList;
