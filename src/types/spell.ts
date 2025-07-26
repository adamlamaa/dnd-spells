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
  cleric_knowledge: "Cleric: Knowledge Domain",
  cleric_life: "Cleric: Life Domain",
  cleric_light: "Cleric: Light Domain",
  cleric_nature: "Cleric: Nature Domain",
  cleric_tempest: "Cleric: Tempest Domain",
  cleric_trickery: "Cleric: Trickery Domain",
  cleric_war: "Cleric: War Domain",
  druid_arctic: "Druid: Arctic Circle",
  druid_coast: "Druid: Coast Circle",
  druid_desert: "Druid: Desert Circle",
  druid_forest: "Druid: Forest Circle",
  druid_grassland: "Druid: Grassland Circle",
  druid_mountain: "Druid: Mountain Circle",
  druid_swamp: "Druid: Swamp Circle",
  druid_underdark: "Druid: Underdark Circle",
  paladin_ancients: "Paladin: Oath of the Ancients",
  paladin_devotion: "Paladin: Oath of Devotion",
  paladin_vengeance: "Paladin: Oath of Vengeance",
  warlock_archfey: "Warlock: The Archfey",
  warlock_fiend: "Warlock: The Fiend",
  warlock_great_old_one: "Warlock: The Great Old One",
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
