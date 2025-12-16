"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/windows95-ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/windows95-ui/dropdown-menu"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface MenuItem {
  label: string
  path: string
  icon?: React.ReactNode
  submenu?: MenuItem[]
}

interface StartMenuProps {
  menus: MenuItem[]
  className?: string
}

export function StartMenu({ menus, className }: StartMenuProps) {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => {
    // Remove query params for comparison
    const currentPath = pathname.split("?")[0]
    const menuPath = path.split("?")[0]
    return currentPath === menuPath
  }

  return (
    <nav className={cn("fixed bottom-0 left-0 right-0 z-50 border-t-2 border-gray-800 bg-[#c0c0c0] win95-border-pressed", className)}>
      <div className="flex items-center gap-1 px-2 py-1">
        <Button
          size="sm"
          className="flex items-center gap-2 px-3 py-1 font-bold"
        >
          <span className="font-bold">Start</span>
        </Button>

        <div className="h-6 w-px bg-gray-600 mx-1" />

        {menus.map((item) => (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "flex items-center gap-1 px-2 py-1 text-xs",
                  isActive(item.path) && "bg-[#000080] text-white"
                )}
                onClick={() => {
                  router.push(item.path)
                }}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.submenu && (
                  <ChevronRight className="h-3 w-3 ml-1" />
                )}
              </Button>
            </DropdownMenuTrigger>
            {item.submenu && (
              <DropdownMenuContent align="end" side="top" sideOffset={4}>
                <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {item.submenu.map((subItem) => (
                  <DropdownMenuItem
                    key={subItem.label}
                    onClick={() => {
                      router.push(subItem.path)
                    }}
                  >
                    {subItem.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        ))}

        <div className="flex-1" />

        <div className="px-3 py-1 text-xs text-gray-700 font-medium border-l-2 border-gray-600 pl-3">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </nav>
  )
}

