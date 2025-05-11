"use client"

import { SpellBook } from "./spellBook/spellBook"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

export default function HomePage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "DND Spells",
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold">DND Spells</h1>
        <button
          onClick={reactToPrintFn}
          className={
            "rounded-full bg-gray-800 px-6 py-2 text-white transition hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none"
          }
        >
          Print
        </button>
        <div
          ref={contentRef}
          className={"print-preview hidden w-full print:block"}
        >
          <SpellBook />
        </div>
      </div>
    </main>
  )
}
