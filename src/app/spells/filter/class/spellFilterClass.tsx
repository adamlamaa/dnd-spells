import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { SpellFilterSection } from "@/app/spells/filter/shared/spellFilterSection"
import { SpellClasses } from "@/types/spell"

export const SpellFilterClass = () => {
  const { filters, updateClassFilter } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
      updateClassFilter: state.updateClassFilter,
    })),
  )

  return (
    <SpellFilterSection
      title={"Class"}
      entries={Object.entries(SpellClasses).map(([key, label]) => ({
        key,
        label,
      }))}
      onChange={updateClassFilter}
      active={filters.class}
    />
  )
}
