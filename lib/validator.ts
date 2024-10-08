import {z} from "zod";

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters.")
    .max(120, "Title must be less than 120 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(400, "Description must be less than 400 characters."),
  location: z
    .string()
    .min(3, "Description must be at least 3 characters.")
    .max(200, "Description must be less than 200 characters."),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
