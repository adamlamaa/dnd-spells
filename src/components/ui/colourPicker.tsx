import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ChromePicker, type ColorResult } from "react-color"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ColourPickerProps {
  initialColour: string
  onConfirm: (colour: string) => void
  onClose: () => void
}

export const ColourPicker = ({
  initialColour,
  onConfirm,
  onClose,
}: ColourPickerProps) => {
  const [color, setColor] = useState(initialColour)

  const handleColorChange = (newColor: ColorResult) => {
    setColor(newColor.hex)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className={"bg-black/80"}>
        <DialogHeader>
          <DialogTitle>Pick a colour</DialogTitle>
        </DialogHeader>
        <div className={"flex w-full justify-center"}>
          <ChromePicker
            color={color}
            disableAlpha={true}
            onChange={handleColorChange}
          />
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => onConfirm(color)}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
