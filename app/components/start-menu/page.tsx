"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { StartMenu, type MenuItem } from "@/components/windows95-ui/start-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/windows95-ui/card"
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
} from "lucide-react"
import { Example } from "@/components/example"

const code = `import { StartMenu, type MenuItem } from "@/components/windows95-ui/start-menu"

const menus: MenuItem[] = [
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
    ],
  },
]

<StartMenu menus={menus} />`

export default function StartMenuDemoPage() {
  const demoMenus: MenuItem[] = [
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

  return (
    <ComponentDemoPage
      title="Start Menu"
      description="A Windows 95 styled start menu navigation component."
      code={code}
    >
      <Example title="Start Menu Example">
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Start Menu Component</CardTitle>
              <CardDescription>
                The Start Menu is typically displayed at the bottom of the screen as a navigation bar.
                It includes a "Start" button and menu items with optional submenus.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-gray-800 bg-[#c0c0c0] p-4 rounded">
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1 bg-[#c0c0c0] border-2 border-gray-800 border-t-white border-l-white font-bold text-sm win95-border">
                    Start
                  </button>
                  <div className="h-6 w-px bg-gray-600 mx-1" />
                  {demoMenus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <button className="px-2 py-1 text-xs border-2 border-gray-800 border-t-white border-l-white bg-[#c0c0c0] win95-border flex items-center gap-1">
                        {item.icon}
                        <span>{item.label}</span>
                        {item.submenu && <span className="ml-1">▶</span>}
                      </button>
                    </div>
                  ))}
                  <div className="flex-1" />
                  <div className="px-3 py-1 text-xs text-gray-700 font-medium border-l-2 border-gray-600 pl-3">
                    {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Note: This is a static preview. The actual Start Menu component is displayed at the bottom of the page
                and provides full navigation functionality with active state highlighting and dropdown submenus.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Windows 95 styled appearance with proper borders and colors</li>
                <li>Active route highlighting</li>
                <li>Support for menu items with icons</li>
                <li>Multi-level dropdown submenus</li>
                <li>Built-in clock display</li>
                <li>Responsive design</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

