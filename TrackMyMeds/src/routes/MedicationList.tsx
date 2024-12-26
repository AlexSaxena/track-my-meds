import MedicationDataTable from "@/components/ui/medicationDataTable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/MedicationList")({
  component: MedicationList,
});

function MedicationList() {
  return (
    <main>
      <h1 className="text-xl font-bold">Medication List</h1>
      <p>View all your medications here.</p>
      <MedicationDataTable />
    </main>
  );
}

export default MedicationList;
