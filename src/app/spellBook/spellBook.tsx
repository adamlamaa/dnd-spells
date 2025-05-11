import { Card } from "../card/card"
import spells from "../../spells.json"
import type { Spell } from "../../types/spell"

interface SpellBookProps {
  id?: string
}

export const SpellBook = ({}: SpellBookProps) => {
  return (
    <div className={"grid grid-cols-3 gap-2"}>
      {spells.map((spell: Spell, index) => (
        <Card spell={spell} key={index} />
      ))}
    </div>
  )
}
