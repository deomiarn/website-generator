import { z } from 'zod';
import { pageTypes } from "../types/page.types";

export const slugRegex = /^$|^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const PageBaseSchema = z.object({
  slug: z.string().regex(slugRegex, 'invalid slug'),
  title: z.string().min(1),
  type: z.enum(pageTypes).default('content')
});
