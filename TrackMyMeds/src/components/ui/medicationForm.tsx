import { medicationSchema } from "../schemas/medicationSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type MedicationFormValues = z.infer<typeof medicationSchema>;

function MedicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MedicationFormValues>({
    resolver: zodResolver(medicationSchema),
  });

  const onSubmit = (data: MedicationFormValues) => {
    console.log("Medication Data -> ", data);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Medication</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"></form>
    </div>
  );
}

export default MedicationForm;
