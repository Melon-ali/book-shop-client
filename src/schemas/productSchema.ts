import { z } from "zod";

export const addProductSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  author: z.string({
    required_error: "Author is required",
    invalid_type_error: "Author must be a string",
  }),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a positive number",
    })
    .positive("Price must be a positive number"),
  category: z.enum(['Design', 'Development', 'Frameworks', 'DevOps', 'Apps'], {
    required_error: "Category is required",
    invalid_type_error:
      "Category must be one of Design, Development, Frameworks, DevOps, Apps",
  }),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }),
  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a positive integer",
    })
    .int("Quantity must be an integer")
    .positive("Quantity must be a positive integer"),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    })
});


export const editProductSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  author: z.string({
    required_error: "Author is required",
    invalid_type_error: "Author must be a string",
  }),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a positive number",
    })
    .positive("Price must be a positive number"),
  category: z.enum(['Design', 'Development', 'Frameworks', 'DevOps', 'Apps'], {
    required_error: "Category is required",
    invalid_type_error:
      "Category must be one of Design, Development, Frameworks, DevOps, Apps",
  }),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }),
  quantity: z
  .number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity must be a non-negative integer",
  })
  .int("Quantity must be an integer")
  .min(0, "Quantity must be 0 or greater"),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    })
});
