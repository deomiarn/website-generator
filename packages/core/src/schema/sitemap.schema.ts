import { z } from 'zod';
import { PageBaseSchema } from './page.schema';

export const SitemapInputSchema = z.object({
  site: z.object({ title: z.string().min(1) }),
  pages: z.array(PageBaseSchema).min(1, 'pages required')
});

export type SitemapInput = z.input<typeof SitemapInputSchema>;
export type SitemapValidated = z.output<typeof SitemapInputSchema>;
