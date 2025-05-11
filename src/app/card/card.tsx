import React from "react"
import type { Spell } from "../../types/spell"

interface CardProps {
  spell: Spell
}

export const Card = ({
  spell: {
    level,
    name,
    casting_time,
    range,
    duration,
    components,
    description,
  },
}: CardProps) => {
  return (
    <div
      className={
        "flex flex-col gap-4 rounded-lg border-2 border-white bg-gray-800 p-4"
      }
    >
      <div className="flex gap-2">
        <div>
          <Cell>{level}</Cell>
        </div>
        <Cell>{name}</Cell>
      </div>
      <div className="flex gap-2">
        <Cell>{casting_time}</Cell>
        <Cell>{range}</Cell>
        <Cell>{duration}</Cell>
      </div>
      <Cell>{description}</Cell>
      <p>{components.raw}</p>
    </div>
  )
}

const Cell = ({ children }: { children: React.ReactNode }) => {
  return <p className="w-full border-2 border-white p-4">{children}</p>
}
