import { SpellCard } from "./card/spellCard"
import type { Spell } from "@/types/spell"
import { SpellCardLegend } from "@/app/classPicker/spells/print/spellPage/card/spellCardLegend"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

interface SpellPageProps {
  spells: Spell[]
}

export const SpellPage = ({ spells }: SpellPageProps) => {
  const { settings } = useSpellStore(
    useShallow((state) => ({
      settings: state.settings,
    })),
  )
  return (
    <div className={"grid grid-cols-3 gap-1"}>
      {settings.showSpellCardLegend && <SpellCardLegend />}
      {spells.map((spell, index) => (
        <SpellCard spell={spell} key={index} />
      ))}
    </div>
  )
}
