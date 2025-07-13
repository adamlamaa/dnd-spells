import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { SpellFilterSection } from "@/app/classPicker/spells/filter/shared/spellFilterSection"
import { SpellLevels } from "@/types/spell"

export const SpellFilterLevel = () => {
  const { filters, updateLevelFilter } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
      updateLevelFilter: state.updateLevelFilter,
    })),
  )

  return (
    <SpellFilterSection
      title={"Print these levels"}
      entries={SpellLevels.map((level) => ({
        key: level,
        label: level === "cantrip" ? "Cantrip" : `Level ${level}`,
      }))}
      onChange={updateLevelFilter}
      active={filters.level}
    />
  )
}
