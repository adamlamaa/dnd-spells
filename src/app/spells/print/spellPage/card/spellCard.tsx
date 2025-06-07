import type { Spell } from "@/types/spell"
import { SpellCardLayout } from "./layout/spellCardLayout"

interface SpellCardProps {
  spell: Spell
}

export const SpellCard = ({ spell }: SpellCardProps) => {
  return (
    <>
      {spell.description.map((text, index) => (
        <SpellCardLayout
          key={spell.name + index}
          spell={spell}
          text={text}
          index={index}
        />
      ))}
    </>
  )
}
