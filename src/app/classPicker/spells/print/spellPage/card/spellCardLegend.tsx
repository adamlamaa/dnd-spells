import { SpellCardLayout } from "@/app/classPicker/spells/print/spellPage/card/layout/spellCardLayout"

export const SpellCardLegend = () => {
  return (
    <SpellCardLayout
      key={"Legend"}
      spell={{
        /* @ts-expect-error want label level instead of actual level */
        level: "Level",
        name: "Spell name",
        casting_time: "Casting time",
        components: {
          raw: "Components",
          material: false,
          somatic: false,
          verbal: false,
        },
        range: "Range",
        duration: "Duration",
        description: [""],
        higher_levels: "If applicable",
      }}
      text={"Spell description"}
      index={0}
    />
  )
}
