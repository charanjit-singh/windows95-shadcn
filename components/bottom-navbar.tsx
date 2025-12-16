"use client"

import * as React from "react"
import { StartMenu, type MenuItem } from "@/components/windows95-ui/start-menu"
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
} from "lucide-react"

const navItems: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    label: "Users",
    path: "/users",
    icon: <Users className="h-4 w-4" />,
    submenu: [
      { label: "All Users", path: "/users?filter=all" },
      { label: "Active Users", path: "/users?filter=active" },
      { label: "Inactive Users", path: "/users?filter=inactive" },
    ],
  },
  {
    label: "Reports",
    path: "/reports",
    icon: <BarChart3 className="h-4 w-4" />,
    submenu: [
      { label: "Monthly Report", path: "/reports?type=monthly" },
      { label: "Yearly Report", path: "/reports?type=yearly" },
      { label: "Custom Report", path: "/reports?type=custom" },
    ],
  },
  {
    label: "Documents",
    path: "/documents",
    icon: <FileText className="h-4 w-4" />,
    submenu: [
      { label: "Upload", path: "/documents?action=upload" },
      { label: "View All", path: "/documents?action=view" },
    ],
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Settings className="h-4 w-4" />,
    submenu: [
      { label: "General", path: "/settings?tab=general" },
      { label: "Security", path: "/settings?tab=security" },
      { label: "Preferences", path: "/settings?tab=preferences" },
    ],
  },
]

export function BottomNavbar() {
  return <StartMenu menus={navItems} />
}

