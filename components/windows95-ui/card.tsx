import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "p-0.5 shadow-none flex flex-col",
  {
    variants: {
      variant: {
        default: "bg-[#c0c0c0] text-black win95-border-window",
        white: "bg-white text-black win95-border-input",
      },
      size: {
        default: "",
        sm: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Card({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const cardHeaderVariants = cva(
  "gap-1 px-4 py-3 group-data-[size=sm]/card:px-4 group-data-[size=sm]/card:py-3 group/card-header flex flex-col",
  {
    variants: {
      variant: {
        default: "",
        primary: "win95-title-bar px-1 py-0.5 mb-2 mx-0.5",
        secondary: "win95-title-bar-secondary px-1 py-0.5 mb-2 mx-0.5",
        tertiary: "win95-title-bar-tertiary px-1 py-0.5 mb-2 mx-0.5",
        inactive: "win95-title-bar-inactive px-1 py-0.5 mb-2 mx-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function CardHeader({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardHeaderVariants>) {
  return (
    <div
      data-slot="card-header"
      data-variant={variant}
      className={cn(
        cardHeaderVariants({ variant, className })
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-lg font-bold leading-none tracking-tight",
        "group-data-[variant=primary]/card-header:text-white group-data-[variant=secondary]/card-header:text-white group-data-[variant=tertiary]/card-header:text-white group-data-[variant=inactive]/card-header:text-[#c0c0c0]",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-gray-600 text-sm",
        "group-data-[variant=primary]/card-header:text-white/80 group-data-[variant=secondary]/card-header:text-white/80 group-data-[variant=tertiary]/card-header:text-white/80 group-data-[variant=inactive]/card-header:text-[#c0c0c0]/80",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "ml-auto",
        "group-data-[variant=primary]/card-header:text-white group-data-[variant=secondary]/card-header:text-white group-data-[variant=tertiary]/card-header:text-white",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 py-4 group-data-[size=sm]/card:px-4", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("px-4 py-3 flex items-center", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
