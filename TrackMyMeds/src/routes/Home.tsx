import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/Home")({
  component: Home,
});

const medicationsArray = [
  { id: 1, medication: "Alvedon", dosage: 2, status: "Not Consumed" },
  { id: 2, medication: "Ipren", dosage: 1, status: "Consumed" },
];

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to TrackMyMeds</h1>
      <p className="mb-6 text-gray-600">
        Keep track of all your medications effortlessly!
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <article className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Medications Not Taken Today
          </h2>
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
              {medicationsArray.map((med) => (
                <TableRow key={med.id}>
                  <TableCell className="font-medium">
                    {med.medication}
                  </TableCell>
                  <TableCell>{med.status}</TableCell>
                  <TableCell>{med.dosage}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert("Mark as taken")}
                    >
                      {med.status === "Consumed" ? "Undo" : "Mark as taken"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>

        <article className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Medications Already Taken Today
          </h2>
          <Table className="border-t border-gray-200">
            <TableCaption>
              A list of medications already taken today.
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
              <TableRow>
                <TableCell className="font-medium">Ibuprofen</TableCell>
                <TableCell>Done</TableCell>
                <TableCell>5</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert("Undo action")}
                  >
                    Undo
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </article>
      </section>
    </div>
  );
}

export default Home;
