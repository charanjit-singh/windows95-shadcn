import * as React from "react"
import { cn } from "@/lib/utils"

interface PageBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function PageBackground({ children, className, ...props }: PageBackgroundProps) {
  return (
    <div className={cn("min-h-screen bg-[#008080] pb-16", className)} {...props}>
      <div className="container mx-auto p-6 space-y-6">
        {children}
      </div>
    </div>
  )
}

