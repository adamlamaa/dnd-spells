import type { Spell } from "@/types/spell"

export const sortSpellsByLevel = (spells: Spell[]): Spell[] => {
  return [...spells].sort((a, b) => {
    const levelA = a.level === "cantrip" ? 0 : parseInt(a.level, 10)
    const levelB = b.level === "cantrip" ? 0 : parseInt(b.level, 10)
    return levelA - levelB
  })
}
