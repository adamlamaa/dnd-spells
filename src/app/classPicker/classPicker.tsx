"use client"

import { SpellClasses } from "@/types/spell"
import { Button } from "@/components/ui/button"
import { useAppQuery } from "@/lib/useAppQuery"
import { Spells } from "@/app/classPicker/spells/spells"

export const ClassPicker = () => {
  const [classSelected, setClassSelected] = useAppQuery("class")

  if (!classSelected) {
    return (
      <div className={"flex items-center justify-center gap-4"}>
        {Object.entries(SpellClasses).map(([key, label]) => (
          <Button
            variant={"secondary"}
            key={key}
            onClick={() => setClassSelected(key)}
          >
            {label}
          </Button>
        ))}
        <Button
          variant={"secondary"}
          onClick={() => setClassSelected("custom")}
        >
          Custom
        </Button>
      </div>
    )
  }

  return <Spells />
}
