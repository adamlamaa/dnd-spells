import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { CheckIcon, XIcon } from "lucide-react"

export const PrintSettingLegend = () => {
  const { showSpellCardLegend, setShowSpellCardLegend } = useSpellStore(
    useShallow((state) => ({
      showSpellCardLegend: state.settings.showSpellCardLegend,
      setShowSpellCardLegend: state.setShowSpellCardLegend,
    })),
  )
  return (
    <DropdownMenuItem
      onClick={(e) => {
        setShowSpellCardLegend(!showSpellCardLegend)
        e.preventDefault()
      }}
    >
      {showSpellCardLegend ? <CheckIcon /> : <XIcon />}Print legend
    </DropdownMenuItem>
  )
}
