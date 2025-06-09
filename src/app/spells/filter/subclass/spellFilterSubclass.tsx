import { SpellSubClasses } from "@/types/spell"
import { SpellFilterSection } from "@/app/spells/filter/shared/spellFilterSection"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const SpellFilterSubclass = () => {
  const { filters, updateSubClassFilter } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
      updateSubClassFilter: state.updateSubClassFilter,
    })),
  )

  return (
    <SpellFilterSection
      title={"Subclass"}
      entries={Object.entries(SpellSubClasses).map(([key, label]) => ({
        key,
        label,
      }))}
      onChange={updateSubClassFilter}
      active={filters.subclasses}
    />
  )
}
