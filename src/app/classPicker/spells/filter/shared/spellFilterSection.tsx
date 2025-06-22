import { Checkbox } from "@/components/ui/checkbox"
import { Info } from "lucide-react"

interface SpellFilterSectionProps<T> {
  title: string
  entries: { key: string; label: string }[]
  onChange: (key: T[], checked: boolean) => void
  active: Set<T>
  info?: (key: string) => void
}

export const SpellFilterSection = <T,>({
  title,
  entries,
  onChange,
  active,
  info,
}: SpellFilterSectionProps<T>) => {
  return (
    <div
      className={"min-w-[200px] flex-1 rounded-lg border-1 border-gray-200 p-4"}
    >
      <h2 className={""}>{title}</h2>
      <div className={"h-[300px] overflow-y-auto"}>
        <div className={"flex items-center gap-2"}>
          <Checkbox
            checked={entries.length === active.size}
            onCheckedChange={(checked) => {
              onChange(entries.map(({ key }) => key) as T[], !!checked)
            }}
          />{" "}
          All
        </div>
        {entries.map(({ key, label }) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox
              key={key}
              checked={active.has(key as T)}
              onCheckedChange={(checked) => {
                onChange([key as T], !!checked)
              }}
            />
            {label}
            {info && (
              <Info
                size={15}
                className={"cursor-pointer"}
                onClick={() => info(key)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
