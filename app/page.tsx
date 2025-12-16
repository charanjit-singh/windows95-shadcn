import Link from "next/link"
import { Button } from "@/components/windows95-ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/windows95-ui/card"
import { Badge } from "@/components/windows95-ui/badge"
import { Github, Eye, AlertTriangle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#008080] flex items-center justify-center p-6">
      <div className="container mx-auto max-w-4xl space-y-6">
        {/* Main Card */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-2">Windows 95 Shadcn UI</CardTitle>
            <CardDescription className="text-lg">
              A collection of Windows 95 styled components built with Radix UI and Tailwind CSS.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/components">
                <Eye className="mr-2 h-4 w-4" />
                View Components
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <CardTitle>Work in Progress</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700">
              This project is currently under active development and is <strong>not recommended for production use</strong>.
              Components are being refined and new features are being added regularly.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="warning">Work in Progress</Badge>
              <Badge variant="secondary">Not Production Ready</Badge>
              <Badge variant="info">Active Development</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Contributors Card */}
        <Card>
          <CardHeader>
            <CardTitle>Looking for Contributors</CardTitle>
            <CardDescription>
              Help us build the best Windows 95 UI component library
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700">
              We&apos;re looking for developers who are passionate about retro UI design and want to contribute to this project.
              Whether you&apos;re interested in adding new components, improving existing ones, fixing bugs, or enhancing documentation,
              your contributions are welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Contribute on GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/components">
                  Explore Components
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Card */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>Authentic Windows 95 styling with pixel-perfect borders and colors</li>
              <li>Built on Radix UI primitives for accessibility</li>
              <li>Fully customizable with Tailwind CSS</li>
              <li>TypeScript support</li>
              <li>Component documentation and examples</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
