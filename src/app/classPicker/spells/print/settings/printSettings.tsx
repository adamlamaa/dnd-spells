import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SettingsIcon } from "lucide-react"
import { PrintSettingLegend } from "@/app/classPicker/spells/print/settings/legend/printSettingLegend"
import { PrintSettingCardTextColour } from "@/app/classPicker/spells/print/settings/card/textColour/printSettingCardTextColour"
import { PrintSettingCardBorderColour } from "@/app/classPicker/spells/print/settings/card/borderColour/printSettingCardBorderColour"
import { PrintSettingCardComponentTextColour } from "@/app/classPicker/spells/print/settings/card/componentTextColour/printSettingCardComponentTextColour"
import { PrintSettingCardTextBackgroundColour } from "@/app/classPicker/spells/print/settings/card/textBackgroundColour/printSettingCardTextBackgroundColour"

export const PrintSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"}>
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
