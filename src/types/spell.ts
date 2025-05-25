export interface Spell {
  casting_time: string
  classes: SpellClass[]
  components: SpellComponents
  description: string
  description_continued?: string
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

export type SpellClass =
  | "bard"
  | "cleric"
  | "druid"
  | "paladin"
  | "ranger"
  | "sorcerer"
  | "warlock"
  | "wizard"

export interface SpellComponents {
  material: boolean
  raw: string
  somatic: boolean
  verbal: boolean
}

export type SpellLevel =
  | "cantrip"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
