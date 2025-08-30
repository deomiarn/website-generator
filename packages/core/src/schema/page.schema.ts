import { z } from 'zod'
import { pageTypes } from '../types/page.types'

export const PageBaseSchema = z
  .object({
    slug: z.string(),
    title: z.string().min(1),
    type: z.enum(pageTypes).default('content'),
  })
  .strict()
