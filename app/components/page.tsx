"use client"

import * as React from "react"
import Link from "next/link"
import { PageBackground } from "@/components/windows95-ui/page-background"
import { PageHeader } from "@/components/windows95-ui/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/windows95-ui/card"
import { Button } from "@/components/windows95-ui/button"
import { ArrowRight } from "lucide-react"

const components = [
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    href: "/components/button",
  },
  {
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    href: "/components/card",
  },
  {
    name: "Input",
    description: "Displays a form input field or a component that looks like an input.",
    href: "/components/input",
  },
  {
    name: "Label",
    description: "Renders an accessible label associated with controls.",
    href: "/components/label",
  },
  {
    name: "Tabs",
    description: "A set of layered sections of content—known as tab panels.",
    href: "/components/tabs",
  },
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    href: "/components/badge",
  },
  {
    name: "Table",
    description: "A responsive table component.",
    href: "/components/table",
  },
  {
    name: "Alert Dialog",
    description: "A modal dialog that interrupts the user with important content.",
    href: "/components/alert-dialog",
  },
  {
    name: "Dropdown Menu",
    description: "Displays a menu to the user triggered by a button.",
    href: "/components/dropdown-menu",
  },
  {
    name: "Select",
    description: "Displays a list of options for the user to pick from.",
    href: "/components/select",
  },
  {
    name: "Textarea",
    description: "Displays a form textarea or a component that looks like a textarea.",
    href: "/components/textarea",
  },
  {
    name: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    href: "/components/checkbox",
  },
  {
    name: "Radio Group",
    description: "A set of checkable buttons where no more than one can be checked.",
    href: "/components/radio-group",
  },
  {
    name: "Separator",
    description: "Visually or semantically separates content.",
    href: "/components/separator",
  },
  {
    name: "Start Menu",
    description: "A Windows 95 styled start menu navigation component.",
    href: "/components/start-menu",
  },
]

export default function ComponentsPage() {
  return (
    <PageBackground>
      <PageHeader
        title="Components"
        description="Browse all available Windows 95 styled components"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <Card key={component.name} className="hover:border-gray-500 transition-colors">
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" asChild>
                <Link href={component.href}>
                  View Component
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageBackground>
  )
}

