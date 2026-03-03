import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "liquid-glass"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "default", ...props }, ref) => {

    // Standardized button sizes - lg is now 180x48
    const szClass = size === "lg"
      ? "w-[180px] h-[48px] text-[15px]"
      : size === "sm"
        ? "px-5 py-[10px] text-[13px]"
        : "px-6 py-2.5 text-[14px]"

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          "font-semibold tracking-wide",
          szClass,
          variant === "solid" && "liquid-solid text-white shadow-[0_4px_14px_rgba(106,39,212,0.4)]",
          variant === "outline" && "border border-finmile-purple text-finmile-purple hover:bg-finmile-purple/10",
          variant === "liquid-glass" && "liquid-glass text-white",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
