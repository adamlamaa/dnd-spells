import type { Spell } from "../../../../types/spell"
import { SpellCardLayout } from "./layout/spellCardLayout"

interface SpellCardProps {
  spell: Spell
}

export const SpellCard = ({ spell }: SpellCardProps) => {
  return (
    <>
      <SpellCardLayout spell={spell} side="front" />
      {/* Print backside if there is continued text*/}
      {spell.description_continued && (
        <SpellCardLayout spell={spell} side={"back"} />
      )}
    </>
  )
}
