import { SpellCard } from "./card/spellCard"
import spells from "../../../spells.json"
import type { Spell } from "../../../types/spell"

interface SpellBookProps {
  id?: string
}

export const SpellBook = ({}: SpellBookProps) => {
  return (
    <div className={"grid grid-cols-3 gap-1"}>
      {spells
        .filter(
          (spell: Spell) =>
            spell.classes.includes("paladin") ||
            spell.name === "Confusion" ||
            spell.tags.includes("oath_of_vengeance"),
        )
        .sort((a: Spell, b: Spell) => {
          const levelA = a.level === "cantrip" ? 0 : parseInt(a.level, 10)
          const levelB = b.level === "cantrip" ? 0 : parseInt(b.level, 10)
          return levelA - levelB
        })
        .map((spell: Spell, index) => (
          <SpellCard spell={spell} key={index} />
        ))}
    </div>
  )
}
