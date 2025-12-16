"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/windows95-ui/table"
import { Badge } from "@/components/windows95-ui/badge"
import { Example } from "@/components/example"

const code = `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/windows95-ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>`

export default function TableDemoPage() {
  return (
    <ComponentDemoPage
      title="Table"
      description="A responsive table component."
      code={code}
    >
      <Example title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>john.doe@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>
                <Badge variant="success">Active</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Jane Smith</TableCell>
              <TableCell>jane.smith@example.com</TableCell>
              <TableCell>User</TableCell>
              <TableCell>
                <Badge variant="success">Active</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Bob Johnson</TableCell>
              <TableCell>bob.johnson@example.com</TableCell>
              <TableCell>Editor</TableCell>
              <TableCell>
                <Badge variant="secondary">Inactive</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Example>
    </ComponentDemoPage>
  )
}

