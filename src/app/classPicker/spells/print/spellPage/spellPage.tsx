import { SpellCard } from "./card/spellCard"
import type { Spell } from "@/types/spell"

interface SpellPageProps {
  spells: Spell[]
}

export const SpellPage = ({ spells }: SpellPageProps) => {
  return (
    <div className={"grid grid-cols-3 gap-1"}>
      {spells.map((spell, index) => (
        <SpellCard spell={spell} key={index} />
      ))}
    </div>
  )
}
