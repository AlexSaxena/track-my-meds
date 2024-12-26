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
    <div className="p-6 max-w-md mx-auto bg-white border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Medication</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name-input"
            className="block text-sm font-medium text-gray-700"
          >
            Medication Name
          </label>
          <input
            type="text"
            id="name-input"
            {...register("name")}
            className={`mt-1 block w-full p-2 border rounded-md ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="dosage-input"
            className="block text-sm font-medium text-gray-700"
          >
            Dosage (e.g., 1 tablet)
          </label>
          <input
            type="number"
            id="dosage-input"
            {...register("dosage", { valueAsNumber: true })}
            className={`mt-1 block w-full p-2 border rounded-md ${
              errors.dosage ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dosage && (
            <p className="text-sm text-red-500">{errors.dosage.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="frequency-select"
            className="block text-sm font-medium text-gray-700"
          >
            Frequency
          </label>
          <select
            id="frequency-select"
            {...register("frequency")}
            className={`mt-1 block w-full p-2 border rounded-md ${
              errors.frequency ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Frequency</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="As Needed">As Needed</option>
          </select>
          {errors.frequency && (
            <p className="text-sm text-red-500">{errors.frequency.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="date-input"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="date-input"
            {...register("startDate")}
            className={`mt-1 block w-full p-2 border rounded-md ${
              errors.startDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.startDate && (
            <p className="text-sm text-red-500">{errors.startDate.message}</p>
          )}
        </div>

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
