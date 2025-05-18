import type { ReactNode } from "react"

interface SpellFilterSectionProps {
  title: string
  children?: ReactNode
}

export const SpellFilterSection = ({
  title,
  children,
}: SpellFilterSectionProps) => {
  return (
    <div className={"flex-1"}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
