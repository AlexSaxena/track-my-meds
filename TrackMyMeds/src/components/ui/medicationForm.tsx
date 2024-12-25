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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="name">name</label>
        <input type="text" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}

        <label htmlFor="dosage">dosage</label>
        <input type="number" {...register("dosage")} />
        {errors.dosage && (
          <p className="text-sm text-red-500 ">{errors.dosage.message}</p>
        )}

        <label htmlFor="frequency">frequency</label>
        <select {...register("frequency")}>
          <option value="">Select Frequency</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="As Needed">As Needed</option>
        </select>
        {errors.frequency && (
          <p className="text-sm text-red-500">{errors.frequency.message}</p>
        )}

        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input type="date" {...register("startDate")} />
        {errors.startDate && (
          <p className="text-sm text-red-500">{errors.startDate.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Medication
        </button>
      </form>
    </div>
  );
}

export default MedicationForm;
