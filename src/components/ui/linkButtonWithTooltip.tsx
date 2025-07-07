import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ReactNode } from "react"

interface LinkButtonWithTooltipProps {
  icon: ReactNode
  tooltipContent: string
  href: string
}

export const LinkButtonWithTooltip = ({
  icon,
  tooltipContent,
  href,
}: LinkButtonWithTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" asChild className={"hover:scale-120"}>
          <Link href={href} target="_blank">
            {icon}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  )
}
