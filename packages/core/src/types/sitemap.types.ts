import type { Page } from './page.types';

export interface SiteMeta {
  title: string;
}

export interface Sitemap {
  site: SiteMeta;
  pages: Page[];
}
