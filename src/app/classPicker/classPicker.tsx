"use client"

import { SpellClasses } from "@/types/spell"
import { Button } from "@/components/ui/button"
import { useAppQuery } from "@/lib/useAppQuery"
import { Spells } from "@/app/classPicker/spells/spells"

export const ClassPicker = () => {
  const [classSelected, setClassSelected] = useAppQuery("class")

  if (!classSelected) {
    return (
      <div className={"flex gap-4"}>
        {Object.entries(SpellClasses).map(([key, label]) => (
          <Button key={key} onClick={() => setClassSelected(key)}>
            {label}
          </Button>
        ))}
        <Button onClick={() => setClassSelected("custom")}>Custom</Button>
      </div>
    )
  }

  return <Spells />
}
