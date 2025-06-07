export interface Spell {
  casting_time: string
  classes: SpellClass[]
  components: SpellComponents
  description: string[]
  duration: string
  level: SpellLevel
  name: string
  range: string
  ritual: boolean
  school: string
  tags: string[]
  type: string
  higher_levels?: string
  long_spell?: boolean
}

export const SpellClasses = {
  bard: "Bard",
  cleric: "Cleric",
  druid: "Druid",
  paladin: "Paladin",
  ranger: "Ranger",
  sorcerer: "Sorcerer",
  warlock: "Warlock",
  wizard: "Wizard",
} as const

export type SpellClass = keyof typeof SpellClasses

export const SpellSubClasses = {
  cleric_trickery: "Trickery",
  paladin_oath_of_vengeance: "Oath of Vengeance",
}

export type SpellSubClass = keyof typeof SpellSubClasses

export interface SpellComponents {
  material: boolean
  raw: string
  somatic: boolean
  verbal: boolean
}

export const SpellLevels = [
  "cantrip",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
] as const

export type SpellLevel = (typeof SpellLevels)[number]
