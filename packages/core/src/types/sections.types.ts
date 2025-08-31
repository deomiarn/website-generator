import { Page } from './page.types'

export const sections = {
  // Core layout
  Navbar: 'Navbar',
  Footer: 'Footer',
  Hero: 'Hero',
  Header: 'Header',
  PageHeader: 'PageHeader',
  SectionHeader: 'SectionHeader',

  // Marketing
  Features: 'Features',
  CTA: 'CTA',
  Content: 'Content',
  LongForm: 'LongForm',
  Stats: 'Stats',
  StatCards: 'StatCards',
  Testimonials: 'Testimonials',
  Logos: 'Logos',
  Team: 'Team',
  Pricing: 'Pricing',
  FAQ: 'FAQ',
  Banner: 'Banner',

  // Contact
  ContactForm: 'ContactForm',
  ContactModal: 'ContactModal',
  Map: 'Map',

  // Blog
  BlogHeader: 'BlogHeader',
  BlogList: 'BlogList',
  BlogPostHeader: 'BlogPostHeader',

  // Careers / Gallery / Portfolio
  Careers: 'Careers',
  Gallery: 'Gallery',
  PortfolioHeader: 'PortfolioHeader',
  PortfolioGrid: 'PortfolioGrid',

  // Comparison / Timeline / Consent / Links
  Comparison: 'Comparison',
  Timeline: 'Timeline',
  CookieConsent: 'CookieConsent',
  LinkPage: 'LinkPage',

  // Ecommerce
  ProductHeader: 'ProductHeader',
  ProductList: 'ProductList',
  CategoryFilters: 'CategoryFilters',

  // Application UI / Auth / Onboarding
  AppShell: 'AppShell',
  Sidebar: 'Sidebar',
  Topbar: 'Topbar',
  AuthPage: 'AuthPage',
  AuthModal: 'AuthModal',
  Onboarding: 'Onboarding',

  // Forms
  Form: 'Form',
  MultiStepForm: 'MultiStepForm',

  // Lists
  StackedList: 'StackedList',
  GridList: 'GridList',
  DescriptionList: 'DescriptionList',

  // Misc
  Loader: 'Loader',

  // Fallback
  Custom: 'Custom',
} as const

export type SectionId = (typeof sections)[keyof typeof sections]

export interface ComposedPage extends Page {
  sections: SectionId[]
  rationale?: string
}

export interface ComposedSite {
  site: { title: string }
  pages: ComposedPage[]
}
