import { SpellPage } from "@/app/spells/print/spellPage/spellPage"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import type { SpellSubClass } from "@/types/spell"
import { sortSpellsByLevel } from "@/lib/sortSpellsByLevel"

interface PrintProps {
  id?: string
}

export const Print = ({}: PrintProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "DND Spells",
  })

  const { spells, filters } = useSpellStore(
    useShallow((state) => ({
      spells: state.spells,
      filters: state.filters,
    })),
  )

  const spellLevelsInScope =
    filters.level.size === 0
      ? [...spells]
      : spells.filter((spell) => filters.level.has(spell.level))

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

  const spellsSorted = sortSpellsByLevel(spellsInScope)

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
