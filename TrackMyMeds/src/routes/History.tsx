import MedicalHistoryDataTable from "@/components/ui/medicalHistoryDataTable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/History")({
  component: History,
});

function History() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Medical history</h1>
      <p className="text-center mb-6 text-gray-600">
        Review your complete medical history, including active and inactive
        medications.
      </p>

      <MedicalHistoryDataTable />
    </div>
  );
}

export default History;
