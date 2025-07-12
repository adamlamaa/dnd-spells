import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { PrintSettingChangeColourProps } from "@/app/classPicker/spells/print/settings/card/shared/printSettingChangeColour"

export const PrintSettingCardTextColour = () => {
  const { colour, setColour } = useSpellStore(
    useShallow((state) => ({
      colour: state.settings.spellCardTextColor,
      setColour: state.setSpellCardTextColor,
    })),
  )

  return (
    <PrintSettingChangeColourProps
      colour={colour}
      setColour={setColour}
      label={"Card text colour"}
    />
  )
}
