import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "h-5 gap-1 px-2 py-0.5 text-xs font-medium transition-none has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none overflow-hidden group/badge win95-border",
  {
    variants: {
      variant: {
        default: "bg-[#000080] text-white",
        secondary: "bg-[#c0c0c0] text-black",
        destructive: "bg-[#c0c0c0] text-red-600",
        outline: "bg-[#c0c0c0] text-black",
        ghost: "bg-transparent hover:bg-[#c0c0c0] hover:text-black border-none",
        link: "bg-transparent text-[#000080] underline-offset-4 hover:underline border-none",
        success: "bg-[#c0c0c0] text-[#008000]",
        warning: "bg-[#c0c0c0] text-[#808000]",
        info: "bg-[#000080] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
