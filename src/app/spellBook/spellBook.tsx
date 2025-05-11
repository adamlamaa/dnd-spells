import { Card } from "../card/card"
import spells from "../../spells.json"
import type { Spell } from "../../types/spell"

interface SpellBookProps {
  id?: string
}

export const SpellBook = ({}: SpellBookProps) => {
  return (
    <div className={"grid grid-cols-3 gap-4"}>
      {spells
        .filter((spell: Spell) => spell.classes.includes("paladin"))
        .sort((a: Spell, b: Spell) => {
          const levelA = a.level === "cantrip" ? 0 : parseInt(a.level, 10)
          const levelB = b.level === "cantrip" ? 0 : parseInt(b.level, 10)
          return levelA - levelB
        })
        .map((spell: Spell, index) => (
          <Card spell={spell} key={index} />
        ))}
    </div>
  )
}
