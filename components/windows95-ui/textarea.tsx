import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-16 w-full win95-border-input bg-white px-3 py-2 text-sm shadow-sm transition-none placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 resize-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
