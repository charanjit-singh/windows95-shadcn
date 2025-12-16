"use client"

import * as React from "react"
import { PageBackground } from "@/components/windows95-ui/page-background"
import { PageHeader } from "@/components/windows95-ui/page-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/windows95-ui/card"
import { Button } from "@/components/windows95-ui/button"
import { Upload, FileText, Download } from "lucide-react"

const documents = [
  { id: 1, name: "Annual Report 2024.pdf", size: "2.4 MB", date: "2024-01-15" },
  { id: 2, name: "User Guide.docx", size: "1.2 MB", date: "2024-02-20" },
  { id: 3, name: "Meeting Notes.txt", size: "45 KB", date: "2024-03-10" },
  { id: 4, name: "Budget.xlsx", size: "856 KB", date: "2024-04-05" },
]

export default function DocumentsPage() {
  return (
    <PageBackground>
      <PageHeader
        title="Documents"
        description="Manage your documents"
        action={
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        }
      />

      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>View and manage your documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-3 hover:bg-muted/50 border border-transparent hover:border-gray-500"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-600">
                      {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageBackground>
  )
}

