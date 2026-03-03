import * as React from "react"
import { Inter } from "next/font/google"
import { cn } from "../../lib/utils"

const inter = Inter({ subsets: ['latin'] })

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export function Badge({ label, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-[#160E2A]/90 backdrop-blur-md pl-1.5 pr-4 py-1.5 transition-colors hover:bg-white/10",
        inter.className,
        className
      )}
      {...props}
    >
      <span className="rounded-full bg-[#6A27D4] px-2 py-[2px] text-[10px] text-white mr-3 shadow-sm uppercase font-bold tracking-wider">
        NEW
      </span>
      <span className="text-[#D1D5DB] text-[12px] font-medium tracking-wide">
        {label}
      </span>
    </div>
  )
}
