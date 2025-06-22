import { SpellFilterSection } from "@/app/classPicker/spells/filter/shared/spellFilterSection"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { useState } from "react"
import { SpellFilterSpellInfo } from "@/app/classPicker/spells/filter/spellFilterSpell/info/spellFilterSpellInfo"

export const SpellFilterSpell = () => {
  const { spells, filters, updateSpellsFilter } = useSpellStore(
    useShallow((state) => ({
      spells: state.spells,
      filters: state.filters,
      updateSpellsFilter: state.updateSpellsFilter,
    })),
  )

  const [showInfoOnSpellKey, setShowInfoOnSpellKey] = useState<string>()
  const showInfoOnSpell = !!showInfoOnSpellKey
    ? spells.find((spell) => spell.name === showInfoOnSpellKey)
    : undefined

  return (
    <>
      <SpellFilterSection
        title={"Spell"}
        entries={spells.map((spell) => ({
          key: spell.name,
          label: spell.name,
        }))}
        onChange={updateSpellsFilter}
        active={filters.spells}
        info={(key: string) => setShowInfoOnSpellKey(key)}
      />
      {showInfoOnSpell && (
        <SpellFilterSpellInfo
          spell={showInfoOnSpell}
          onClose={() => setShowInfoOnSpellKey(undefined)}
        />
      )}
    </>
  )
}
