import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { SpellFilterSection } from "@/app/spells/filter/shared/spellFilterSection"
import { SpellLevels } from "@/types/spell"

export const SpellFilterLevel = () => {
  const { filters, updateLevelFilter } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
      updateLevelFilter: state.updateLevelFilter,
    })),
  )

  return (
    <div className={"bg-gray-100"}>
      <SpellFilterSection
        title={"Print These Levels"}
        entries={SpellLevels.map((level) => ({
          key: level,
          label: level === "cantrip" ? "Cantrip" : `Level ${level}`,
        }))}
        onChange={updateLevelFilter}
        active={filters.level}
      />
    </div>
  )
}
