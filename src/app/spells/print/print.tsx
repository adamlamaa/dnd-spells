import { SpellPage } from "@/app/spells/print/spellPage/spellPage"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import spells from "@/spells.json"
import type { Spell, SpellLevel, SpellSubClass } from "@/types/spell"

interface PrintProps {
  id?: string
}

export const Print = ({}: PrintProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "DND Spells",
  })

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
    <>
      <div>
        With current selection: {spellsSorted.length} / {spells.length}
      </div>
      <button
        onClick={reactToPrintFn}
        className={
          "rounded-full bg-gray-800 px-6 py-2 text-white transition hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none"
        }
      >
        Print Spells
      </button>
      <div
        ref={contentRef}
        className={"print-preview hidden w-full print:block"}
      >
        <SpellPage spells={spellsSorted} />
      </div>
    </>
  )
}
