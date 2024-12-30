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
import medicationList from "@/data/medicationList.json";

export const Route = createFileRoute("/Home")({
  component: Home,
});

function Home() {
  const [medications, setMedications] = useState(
    medicationList.filter(
      (med) => med.frequency === "Daily" && med.status === "Active"
    )
  );

  const toggleDailyStatus = (id: number) => {
    setMedications((prevMedications) =>
      prevMedications.map((med) =>
        med.id === id
          ? {
              ...med,
              dailyStatus:
                med.dailyStatus === "Consumed" ? "Not Consumed" : "Consumed",
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
            <TableCaption>
              A list of active medications to be taken today.
            </TableCaption>
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
                  <TableCell>{med.dailyStatus}</TableCell>
                  <TableCell>{med.dosage}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleDailyStatus(med.id)}
                    >
                      {med.dailyStatus === "Consumed"
                        ? "Undo"
                        : "Mark as Taken"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>

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
