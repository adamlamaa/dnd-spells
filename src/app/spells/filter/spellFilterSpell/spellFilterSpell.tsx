import { SpellFilterSection } from "@/app/spells/filter/shared/spellFilterSection"
import spells from "@/spells.json"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const SpellFilterSpell = () => {
  const { filters, updateSpellsFilter } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
      updateSpellsFilter: state.updateSpellsFilter,
    })),
  )
  return (
    <SpellFilterSection
      title={"Spell"}
      entries={spells.map((spell) => ({
        key: spell.name,
        label: spell.name,
      }))}
      onChange={updateSpellsFilter}
      active={filters.spells}
    />
  )
}
