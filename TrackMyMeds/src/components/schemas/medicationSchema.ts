import { z } from "zod";

export const medicationSchema = z.object({
  name: z.string().min(1, "Medication name is required."),
  dosage: z
    .number({ invalid_type_error: "Dosage must be a number." })
    .positive("Dosage must be greater than 0."),
  frequency: z.enum(["Daily", "Weekly", "As Needed"], {
    errorMap: () => ({ message: "Please select a valid frequency." }),
  }),
  startDate: z.string().min(1, "Start date is required."),
});
