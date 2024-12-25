import { medicationSchema } from "../schemas/medicationSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type MedicationFormValues = z.infer<typeof medicationSchema>;

function MedicationForm() {
  return <div>MedicationForm</div>;
}

export default MedicationForm;
