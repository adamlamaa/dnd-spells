import { GlossyBox } from "@/components/ui/glossyBox"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Info } from "lucide-react"

interface SpellFilterSectionProps<T> {
  title: string
  entries: { key: string; label: string }[]
  onChange: (key: T[], checked: boolean) => void
  active: Set<T>
  search?: (value: string) => void
  info?: (key: string) => void
}

export const SpellFilterSection = <T,>({
  title,
  entries,
  onChange,
  active,
  search,
  info,
}: SpellFilterSectionProps<T>) => {
  return (
    <GlossyBox className={"flex min-h-[440px] flex-col gap-4 p-4"}>
      <h2 className={""}>{title}</h2>
      {!!search && <Input onChange={(event) => search(event.target.value)} />}
      <div className={"max-h-[300px] overflow-y-auto"}>
        {entries.length === 0 ? (
          <div className={"text-center text-gray-500"}>No spells found</div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </GlossyBox>
  )
}
