import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const PrintSettingCardBorderColour = () => {
  const { spellCardBorderColor } = useSpellStore(
    useShallow((state) => ({
      spellCardBorderColor: state.settings.spellCardBorderColor,
    })),
  )

  return (
    <DropdownMenuItem>
      <div className={"flex items-center gap-2"}>
        <div
          style={{
            backgroundColor: spellCardBorderColor,
          }}
          className={"h-6 w-6 rounded-md border-2 border-gray-300"}
        />
        <div>Card border colour</div>
      </div>
    </DropdownMenuItem>
  )
}
