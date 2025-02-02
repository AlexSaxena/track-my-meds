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
import medicalHistory from "@/data/medicationList.json";

function MedicalHistoryDataTable() {
  const [medications, setMedications] = useState(medicalHistory);

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
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
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
              <TableCell>
                <span
                  className={`px-2 py-1 rounded ${
                    med.status === "Active"
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {med.status}
                </span>
              </TableCell>
              <TableCell>{med.startDate}</TableCell>
              <TableCell>{med.endDate}</TableCell>
              <TableCell className="text-right">
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

export default MedicalHistoryDataTable;
