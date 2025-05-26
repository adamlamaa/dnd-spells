import { SpellPage } from "@/app/spells/print/spellPage/spellPage"
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
      <div>With current selection: X / 400</div>
      <button
        onClick={reactToPrintFn}
        className={
          "rounded-full bg-gray-800 px-6 py-2 text-white transition hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none"
        }
      >
        Print Spells
      </button>
      <div
        ref={contentRef}
        className={"print-preview hidden w-full print:block"}
      >
        <SpellPage />
      </div>
    </>
  )
}
