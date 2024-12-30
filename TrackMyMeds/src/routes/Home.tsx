import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import WeeklyMedicationChart from "@/components/ui/pieChart";

export const Route = createFileRoute("/Home")({
  component: Home,
});

const initialMedications = [
  { id: 1, name: "Alvedon", dosage: 2, status: "Not Consumed" },
  { id: 2, name: "Ipren", dosage: 1, status: "Consumed" },
];

function Home() {
  const [medications, setMedications] = useState(initialMedications);

  const toggleStatus = (id: number) => {
    setMedications((prevMedications) =>
      prevMedications.map((med) =>
        med.id === id
          ? {
              ...med,
              status: med.status === "Consumed" ? "Not Consumed" : "Consumed",
            }
          : med
      )
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to TrackMyMeds</h1>
      <p className="mb-6 text-gray-600">
        Keep track of all your medications effortlessly!
      </p>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
        <article className="col-span-3 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Today's Medications</h2>
          <Table className="border-t border-gray-200">
            <TableCaption>A list of medications yet to be taken.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Medication</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medications.map((med) => (
                <TableRow key={med.id}>
                  <TableCell className="font-medium">{med.name}</TableCell>
                  <TableCell>{med.status}</TableCell>
                  <TableCell>{med.dosage}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleStatus(med.id)}
                    >
                      {med.status === "Consumed" ? "Undo" : "Mark as Taken"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>

        {/* Weekly Summary Chart */}
        <article className="col-span-2 p-4 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center flex-col">
          <h2 className="text-lg font-semibold mb-4">
            This Week's Medication Summary
          </h2>
          <WeeklyMedicationChart />
        </article>
      </section>
    </div>
  );
}

export default Home;
