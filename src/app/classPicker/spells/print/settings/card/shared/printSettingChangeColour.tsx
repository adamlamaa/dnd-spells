import { useState } from "react"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ColourPicker } from "@/components/ui/colourPicker"

interface PrintSettingChangeColourProps {
  colour: string
  setColour: (colour: string) => void
  label: string
}

export const PrintSettingChangeColourProps = ({
  colour,
  setColour,
  label,
}: PrintSettingChangeColourProps) => {
  const [showColourPicker, setShowColourPicker] = useState(false)

  return (
    <>
      <DropdownMenuItem
        onClick={(e) => {
          setShowColourPicker(true)
          e.preventDefault()
        }}
      >
        <div className={"flex items-center gap-2"}>
          <div
            style={{
              backgroundColor: colour,
            }}
            className={"h-6 w-6 rounded-md border-2 border-gray-300"}
          />
          <div>{label}</div>
        </div>
      </DropdownMenuItem>
      {showColourPicker && (
        <ColourPicker
          initialColour={colour}
          onConfirm={(colour: string) => {
            setColour(colour)
            setShowColourPicker(false)
          }}
          onClose={() => setShowColourPicker(false)}
        />
      )}
    </>
  )
}
