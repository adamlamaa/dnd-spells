import { SpellCard } from "./card/spellCard"
import spells from "../../../../spells.json"
import type { Spell, SpellLevel, SpellSubClass } from "@/types/spell"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

interface SpellPageProps {
  id?: string
}

export const SpellPage = ({}: SpellPageProps) => {
  const { filters } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
    })),
  )

  const spellLevelsInScope = (
    filters.level.size === 0
      ? [...spells]
      : spells.filter((spell) => filters.level.has(spell.level as SpellLevel))
  ) as Spell[]

  console.log("SpellPage filters", spellLevelsInScope)

  const spellsInScope =
    filters.class.size === 0 &&
    filters.subclasses.size === 0 &&
    filters.spells.size === 0
      ? spellLevelsInScope
      : spellLevelsInScope.filter(
          (spell) =>
            spell.classes.some((item) => filters.class.has(item)) ||
            spell.tags.some((item) =>
              filters.subclasses.has(item as SpellSubClass),
            ) ||
            filters.spells.has(spell.name),
        )

  const spellsSorted = spellsInScope.sort((a, b) => {
    const levelA = a.level === "cantrip" ? 0 : parseInt(a.level, 10)
    const levelB = b.level === "cantrip" ? 0 : parseInt(b.level, 10)
    return levelA - levelB
  })

  return (
    <div className={"grid grid-cols-3 gap-1"}>
      {spellsSorted.map((spell, index) => (
        <SpellCard spell={spell} key={index} />
      ))}
    </div>
  )
}
