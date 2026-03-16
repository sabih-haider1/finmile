import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  showNew?: boolean;
}

export function Badge({ label, showNew = true, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-[#160E2A]/90 backdrop-blur-md transition-colors hover:bg-white/10",
        showNew ? "pl-1.5 pr-4 py-1.5" : "px-4 py-1.5",
        className
      )}
      {...props}
    >
      {showNew && (
        <span className="rounded-full bg-[#6A27D4] px-2 py-[2px] text-[10px] text-white mr-3 shadow-sm uppercase font-bold tracking-wider">
          NEW
        </span>
      )}
      <span className="text-[#D1D5DB] text-[12px] font-medium tracking-wide">
        {label}
      </span>
    </div>
  )
}
