import { SpellPage } from "@/app/classPicker/spells/print/spellPage/spellPage"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import type { SpellSubClass } from "@/types/spell"
import { sortSpellsByLevel } from "@/lib/sortSpellsByLevel"
import { Button } from "@/components/ui/button"
import { FunnelXIcon, PrinterIcon } from "lucide-react"
import { PrintSettings } from "@/app/classPicker/spells/print/settings/printSettings"

interface PrintProps {
  id?: string
}

export const Print = ({}: PrintProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "DND Spells",
  })

  const { spells, filters, clearFilters } = useSpellStore(
    useShallow((state) => ({
      spells: state.spells,
      filters: state.filters,
      clearFilters: state.clearFilters,
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
      <div className={"flex gap-10"}>
        <Button onClick={clearFilters} variant={"ghost"}>
          <FunnelXIcon size={24} />
          Clear filters
        </Button>
        <Button onClick={reactToPrintFn}>
          <PrinterIcon size={24} /> Print spells
        </Button>
        <PrintSettings />
      </div>
      <div
        ref={contentRef}
        className={"print-preview hidden w-full print:block"}
      >
        <SpellPage spells={spellsSorted} />
      </div>
    </>
  )
}
