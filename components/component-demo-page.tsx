"use client"

import * as React from "react"
import Link from "next/link"
import { PageBackground } from "@/components/windows95-ui/page-background"
import { PageHeader } from "@/components/windows95-ui/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/windows95-ui/card"
import { Button } from "@/components/windows95-ui/button"
import { ArrowLeft, Copy, Check } from "lucide-react"

interface ComponentDemoPageProps {
  title: string
  description: string
  children: React.ReactNode
  code?: string
}

export function ComponentDemoPage({ title, description, children, code }: ComponentDemoPageProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <PageBackground>
      <div className="mb-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/components">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </Button>
      </div>

      <PageHeader
        title={title}
        description={description}
      />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Preview</CardTitle>
            {code && (
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Code
                  </>
                )}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>

      {code && (
        <Card>
          <CardHeader>
            <CardTitle>Code</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-black text-green-400 p-4 overflow-x-auto text-xs font-mono">
              <code>{code}</code>
            </pre>
          </CardContent>
        </Card>
      )}
    </PageBackground>
  )
}

