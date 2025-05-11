export interface SpellComponents {
  material: boolean
  raw: string
  somatic: boolean
  verbal: boolean
}

export interface Spell {
  casting_time: string
  classes: string[]
  components: SpellComponents
  description: string
  description_continued?: string
  duration: string
  level: string
  name: string
  range: string
  ritual: boolean
  school: string
  tags: string[]
  type: string
}
