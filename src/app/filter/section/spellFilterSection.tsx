import type { ReactNode } from "react"
import { Checkbox } from "@/components/ui/checkbox"

interface SpellFilterSectionProps {
  title: string
  children?: ReactNode
}

export const SpellFilterSection = ({
  title,
  children,
}: SpellFilterSectionProps) => {
  return (
    <div
      className={"min-w-[200px] flex-1 rounded-lg border-1 border-gray-200 p-4"}
    >
      <h2>{title}</h2>
      <div className={"h-[300px] overflow-y-auto"}>
        <div className={"flex items-center gap-2"}>
          <Checkbox /> All
        </div>

        {children}
      </div>
    </div>
  )
}
