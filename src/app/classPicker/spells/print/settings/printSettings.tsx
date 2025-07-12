import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SettingsIcon } from "lucide-react"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { PrintSettingLegend } from "@/app/classPicker/spells/print/settings/legend/printSettingLegend"
import { PrintSettingCardTextColour } from "@/app/classPicker/spells/print/settings/card/textColour/printSettingCardTextColour"
import { PrintSettingCardBorderColour } from "@/app/classPicker/spells/print/settings/card/borderColour/printSettingCardBorderColour"
import { PrintSettingCardComponentTextColour } from "@/app/classPicker/spells/print/settings/card/componentTextColour/printSettingCardComponentTextColour"
import { PrintSettingCardTextBackgroundColour } from "@/app/classPicker/spells/print/settings/card/textBackgroundColour/printSettingCardTextBackgroundColour"

export const PrintSettings = () => {
  const { settings } = useSpellStore(
    useShallow((state) => ({
      settings: state.settings,
    })),
  )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <SettingsIcon size={24} /> Settings
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Print Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <PrintSettingLegend />
        <DropdownMenuSeparator />
        <PrintSettingCardTextColour />
        <PrintSettingCardTextBackgroundColour />
        <PrintSettingCardBorderColour />
        <PrintSettingCardComponentTextColour />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
