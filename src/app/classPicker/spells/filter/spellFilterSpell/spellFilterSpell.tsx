import { SpellFilterSection } from "@/app/classPicker/spells/filter/shared/spellFilterSection"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { useEffect, useState } from "react"
import { SpellFilterSpellInfo } from "@/app/classPicker/spells/filter/spellFilterSpell/info/spellFilterSpellInfo"
import type { Spell } from "@/types/spell"

export const SpellFilterSpell = () => {
  const [filterValue, setFilterValue] = useState<string>()
  const [spellsFiltered, setSpellsFiltered] = useState<Spell[]>([])
  const { spells, filters, updateSpellsFilter } = useSpellStore(
    useShallow((state) => ({
      spells: state.spells,
      filters: state.filters,
      updateSpellsFilter: state.updateSpellsFilter,
    })),
  )

  useEffect(() => {
    if (filterValue) {
      const filtered = spells.filter((spell) =>
        spell.name.toLowerCase().includes(filterValue.toLowerCase()),
      )
      setSpellsFiltered(filtered)
    } else {
      setSpellsFiltered(spells)
    }
  }, [filterValue, spells])

  const [showInfoOnSpellKey, setShowInfoOnSpellKey] = useState<string>()
  const showInfoOnSpell = !!showInfoOnSpellKey
    ? spells.find((spell) => spell.name === showInfoOnSpellKey)
    : undefined

  return (
    <>
      <SpellFilterSection
        title={"Spell"}
        entries={spellsFiltered.map((spell) => ({
          key: spell.name,
          label: spell.name,
        }))}
        onChange={updateSpellsFilter}
        active={filters.spells}
        search={setFilterValue}
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
