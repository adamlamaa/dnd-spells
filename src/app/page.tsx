import { SpellBook } from "./spellBook/spellBook"
import type { Spell } from "../types/spell"

export default function HomePage() {
  const spells: Spell[] = [
    {
      lvl: "1",
      name: "Magic Missile",
      casting: "1 action",
      range: "120 feet",
      components: "V, S, M (a tiny ball of bat guano and sulfur)",
      duration: "Instantaneous",
      text: "A missile of magical force darts forward from your fingertip and strikes its target, dealing 1d4+1 force damage. The missile then disappears.",
    },
    {
      lvl: "1",
      name: "Magic Missile",
      casting: "1 action",
      range: "120 feet",
      components: "V, S, M (a tiny ball of bat guano and sulfur)",
      duration: "Instantaneous",
      text: "A missile of magical force darts forward from your fingertip and strikes its target, dealing 1d4+1 force damage. The missile then disappears.",
    },
    {
      lvl: "1",
      name: "Magic Missile",
      casting: "1 action",
      range: "120 feet",
      components: "V, S, M (a tiny ball of bat guano and sulfur)",
      duration: "Instantaneous",
      text: "A missile of magical force darts forward from your fingertip and strikes its target, dealing 1d4+1 force damage. The missile then disappears.",
    },
    {
      lvl: "1",
      name: "Magic Missile",
      casting: "1 action",
      range: "120 feet",
      components: "V, S, M (a tiny ball of bat guano and sulfur)",
      duration: "Instantaneous",
      text: "A missile of magical force darts forward from your fingertip and strikes its target, dealing 1d4+1 force damage. The missile then disappears.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          DND Spells
        </h1>
        <SpellBook spells={spells} />
      </div>
    </main>
  )
}
