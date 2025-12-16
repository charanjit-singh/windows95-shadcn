"use client"

import { usePathname } from "next/navigation"
import { BottomNavbar } from "@/components/bottom-navbar"

export function ConditionalNavbar() {
  const pathname = usePathname()
  
  // Hide navbar on homepage
  if (pathname === "/") {
    return null
  }
  
  return <BottomNavbar />
}

