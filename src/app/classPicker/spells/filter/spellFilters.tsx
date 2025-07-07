import { SpellFilterClass } from "@/app/classPicker/spells/filter/class/spellFilterClass"
import { SpellFilterSubclass } from "@/app/classPicker/spells/filter/subclass/spellFilterSubclass"
import { SpellFilterSpell } from "@/app/classPicker/spells/filter/spellFilterSpell/spellFilterSpell"
import { SpellFilterLevel } from "@/app/classPicker/spells/filter/level/spellFilterLevel"

export const SpellFilters = () => {
  return (
    <>
      <div className={"grid w-full grid-cols-1 gap-2 md:grid-cols-4"}>
        <SpellFilterClass />
        <SpellFilterSubclass />
        <SpellFilterSpell />
        <SpellFilterLevel />
      </div>
    </>
  )
}
