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

export const Route = createFileRoute("/Home")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">Welcome to TrackMyMeds</h1>
      <p>Your keep track of all your medications!</p>
      <section className="flex flex-wrap gap-5">
        <article>
          <p>Medication not taken today</p>
          <Table>
            <TableCaption>
              A list of your recent Medication not taken today.
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
                <TableCell className="font-medium">Alvedon</TableCell>
                <TableCell>Not Consumed</TableCell>
                <TableCell>10</TableCell>
                <TableCell className="text-right">
                  button to change status
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </article>
        <article>
          <p>Medication already taken today</p>
          <Table>
            <TableCaption>
              A list of your Medication already taken today.
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
                <TableCell>10</TableCell>
                <TableCell className="text-right">
                  button to change status
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
