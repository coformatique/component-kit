import { z } from 'zod';

interface ZodRawCreateParams {
  invalid_type_error?: string;
  required_error?: string;
}

export const dateSchema = (
  r: ZodRawCreateParams = { invalid_type_error: 'Invalid date', required_error: 'Please enter a value' },
) =>
  z
    .string(r)
    .min(1, r.required_error)
    .refine(v => (v ? new RegExp(/\d\d\d\d-\d\d-\d\d/).test(v) : true));

export const idSchema = (r?: ZodRawCreateParams) => z.number(r).positive(r?.invalid_type_error);

export const dropdownFilterItemSchema = (r?: ZodRawCreateParams) =>
  z.object(
    {
      id: z.union([z.string(), z.number()]),
      name: z.string(),
    },
    r,
  );
