import type { Spell } from "../../types/spell"
import { Card } from "../card/card"

interface SpellBookProps {
  spells: Spell[]
}

export const SpellBook = ({ spells }: SpellBookProps) => {
  return (
    <div className={"grid grid-cols-3 gap-4"}>
      {spells.map((spell, index) => (
        <Card spell={spell} key={index} />
      ))}
    </div>
  )
}
