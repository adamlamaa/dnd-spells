import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { SpellFilterSection } from "@/app/spells/filter/shared/spellFilterSection"
import { type SpellClass, SpellClasses } from "@/types/spell"
import { useState } from "react"
import { SpellFilterClassInfo } from "@/app/spells/filter/class/info/spellFilterClassInfo"

export const SpellFilterClass = () => {
  const { spells, filters, updateClassFilter } = useSpellStore(
    useShallow((state) => ({
      spells: state.spells,
      filters: state.filters,
      updateClassFilter: state.updateClassFilter,
    })),
  )

  const [showInfoOnSpellClass, setShowInfoOnSpellClass] = useState<SpellClass>()
  const showInfoOnSpells = !!showInfoOnSpellClass
    ? spells.filter((spell) => spell.classes.includes(showInfoOnSpellClass))
    : undefined

  return (
    <>
      <SpellFilterSection
        title={"Class"}
        entries={Object.entries(SpellClasses).map(([key, label]) => ({
          key,
          label,
        }))}
        onChange={updateClassFilter}
        active={filters.class}
        info={(spellClass: string) =>
          setShowInfoOnSpellClass(spellClass as SpellClass)
        }
      />
      {showInfoOnSpellClass && showInfoOnSpells && (
        <SpellFilterClassInfo
          spellClass={showInfoOnSpellClass}
          spells={showInfoOnSpells}
          onClose={() => setShowInfoOnSpellClass(undefined)}
        />
      )}
    </>
  )
}
