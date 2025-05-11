import React from "react"
import type { Spell } from "../../types/spell"

interface CardProps {
  spell: Spell
}

export const Card = ({
  spell: { lvl, name, casting, range, duration, components, text },
}: CardProps) => {
  return (
    <div
      className={
        "flex flex-col gap-4 rounded-lg border-2 border-white bg-gray-800 p-4"
      }
    >
      <div className="flex gap-2">
        <div>
          <Cell>{lvl}</Cell>
        </div>
        <Cell>{name}</Cell>
      </div>
      <div className="flex gap-2">
        <Cell>{casting}</Cell>
        <Cell>{range}</Cell>
        <Cell>{duration}</Cell>
      </div>
      <Cell>{text}</Cell>
      <p>{components}</p>
    </div>
  )
}

const Cell = ({ children }: { children: React.ReactNode }) => {
  return <p className="w-full border-2 border-white p-4">{children}</p>
}
