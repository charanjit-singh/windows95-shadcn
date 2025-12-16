import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-8 w-full win95-border-input bg-white px-3 py-1 text-sm shadow-sm transition-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500",
        className
      )}
      {...props}
    />
  )
}

export { Input }
