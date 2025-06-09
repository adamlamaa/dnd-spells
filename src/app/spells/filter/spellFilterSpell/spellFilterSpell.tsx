import { SpellFilterSection } from "@/app/spells/filter/shared/spellFilterSection"
import spells from "@/spells.json"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { useState } from "react"
import type { Spell } from "@/types/spell"
import { SpellFilterSpellInfo } from "@/app/spells/filter/spellFilterSpell/info/spellFilterSpellInfo"

export const SpellFilterSpell = () => {
  const { filters, updateSpellsFilter } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
      updateSpellsFilter: state.updateSpellsFilter,
    })),
  )

  const [showInfoOnSpellKey, setShowInfoOnSpellKey] = useState<string>()
  const showInfoOnSpell = (
    !!showInfoOnSpellKey
      ? spells.find((spell) => spell.name === showInfoOnSpellKey)
      : undefined
  ) as Spell | undefined

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
