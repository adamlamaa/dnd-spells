"use client"

import { SpellBook } from "./spellBook/spellBook"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

interface PrintProps {
  id?: string
}

export const Print = ({}: PrintProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "DND Spells",
  })

  return (
    <>
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
    </>
  )
}
