import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:outline-2 focus-visible:outline-dotted focus-visible:outline-black focus-visible:outline-offset-[-4px] disabled:text-gray-500 disabled:shadow-none inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 select-none active:translate-x-[1px] active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-[#c0c0c0] text-black win95-border active:win95-border-pressed",
        outline: "bg-[#c0c0c0] text-black win95-border active:win95-border-pressed border-2 border-transparent",
        secondary: "bg-[#c0c0c0] text-black win95-border active:win95-border-pressed",
        ghost: "hover:bg-[#000080] hover:text-white",
        destructive: "bg-[#c0c0c0] text-red-600 win95-border active:win95-border-pressed",
        link: "text-[#000080] underline-offset-4 hover:underline",
        primary: "bg-[#c0c0c0] text-black win95-border active:win95-border-pressed font-bold", // Typically bold in Win95
        info: "bg-[#c0c0c0] text-[#000080] win95-border active:win95-border-pressed",
        success: "bg-[#c0c0c0] text-[#008000] win95-border active:win95-border-pressed",
        warning: "bg-[#c0c0c0] text-[#808000] win95-border active:win95-border-pressed",
        danger: "bg-[#c0c0c0] text-[#ff0000] win95-border active:win95-border-pressed",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
        "icon-xs": "h-6 w-6",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
