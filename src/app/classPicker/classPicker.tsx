"use client"

import { SpellClasses } from "@/types/spell"
import { Button } from "@/components/ui/button"
import { useAppQuery } from "@/lib/useAppQuery"
import { Spells } from "@/app/classPicker/spells/spells"
import Image from "next/image"
import { DicesIcon } from "lucide-react"

export const ClassPicker = () => {
  const [classSelected, setClassSelected] = useAppQuery("class")

  if (!classSelected) {
    return (
      <div className={"flex flex-wrap items-center justify-center gap-4"}>
        {Object.entries(SpellClasses).map(([key, label]) => (
          <Button
            variant={"secondary"}
            key={key}
            onClick={() => setClassSelected(key)}
            className={"h-16 text-lg"}
          >
            <Image
              src={`/class/${key}.svg`}
              alt={"class icon"}
              width={40}
              height={40}
              className="invert"
            />
            {label}
          </Button>
        ))}
        <Button
          variant={"secondary"}
          onClick={() => setClassSelected("custom")}
          className={"h-16 text-lg"}
        >
          <DicesIcon size={40} />
          Custom
        </Button>
      </div>
    )
  }

  return <Spells />
}
