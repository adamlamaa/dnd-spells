import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { PrintSettingChangeColourProps } from "@/app/classPicker/spells/print/settings/card/shared/printSettingChangeColour"

export const PrintSettingCardBorderColour = () => {
  const { colour, setColour } = useSpellStore(
    useShallow((state) => ({
      colour: state.settings.spellCardBorderColor,
      setColour: state.setSpellCardBorderColor,
    })),
  )

  return (
    <PrintSettingChangeColourProps
      colour={colour}
      setColour={setColour}
      label={"Card border colour"}
    />
  )
}
