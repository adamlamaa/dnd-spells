import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const PrintSettingCardTextColour = () => {
  const { spellCardTextColor } = useSpellStore(
    useShallow((state) => ({
      spellCardTextColor: state.settings.spellCardTextColor,
    })),
  )

  return (
    <DropdownMenuItem>
      <div className={"flex items-center gap-2"}>
        <div
          style={{
            backgroundColor: spellCardTextColor,
          }}
          className={"h-6 w-6 rounded-md border-2 border-gray-300"}
        />
        <div>Card text colour</div>
      </div>
    </DropdownMenuItem>
  )
}
