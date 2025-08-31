import type { PageBase } from './page.types'
import type { SectionId } from './sections.types'

export const composeGoals = ['lead', 'sale', 'info', 'signup'] as const
export type ComposeGoal = (typeof composeGoals)[number]

export const composeTones = ['premium', 'friendly', 'technical'] as const
export type ComposeTone = (typeof composeTones)[number]

export const ctaStrengths = ['low', 'medium', 'high'] as const
export type CtaStrength = (typeof ctaStrengths)[number]

export interface ComposeSignals {
  goal?: ComposeGoal
  tone?: ComposeTone
  trust?: boolean
  ctaStrength?: CtaStrength
}

export interface AiComposeInput {
  siteTitle: string
  page: PageBase
  sectionCatalog: ReadonlyArray<SectionId>
  signals?: ComposeSignals
}

export interface AiComposeOutput {
  sections: ReadonlyArray<SectionId>
  rationale?: string
}

export interface AiComposerProvider {
  compose(input: AiComposeInput): Promise<AiComposeOutput>
}
