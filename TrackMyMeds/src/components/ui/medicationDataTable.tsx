import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const defaultMeds = [
  {
    id: 1,
    name: "Alvedon",
    dosage: 2,
    frequency: "Daily",
    status: "Active",
  },
  {
    id: 2,
    name: "Ipren",
    dosage: 1,
    frequency: "As Needed",
    status: "Active",
  },
  {
    id: 3,
    name: "Vitamin D",
    dosage: 1,
    frequency: "Weekly",
    status: "Inactive",
  },
];

function MedicationDataTable() {
  const [medications, setMedications] = useState(defaultMeds);

  const handleDelete = (id: number) => {
    const updatedMedications = medications.filter((med) => med.id !== id);
    setMedications(updatedMedications);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Medications</h1>
      <Table className="border-t border-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Dosage</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medications.map((med) => (
            <TableRow key={med.id}>
              <TableCell>{med.name}</TableCell>
              <TableCell>
                {med.dosage} {med.dosage < 2 ? "tablet" : "tablets"}
              </TableCell>
              <TableCell>{med.frequency}</TableCell>
              <TableCell>{med.status}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert(`Edit ${med.name}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleDelete(med.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MedicationDataTable;
