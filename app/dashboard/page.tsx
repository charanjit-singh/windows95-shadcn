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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/windows95-ui/tabs"
import { BarChartComponent } from "@/components/windows95-ui/bar-chart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/windows95-ui/table"
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/windows95-ui/alert-dialog"
import { Button } from "@/components/windows95-ui/button"
import { Badge } from "@/components/windows95-ui/badge"
import { MoreVertical, Edit, Trash2, Mail, Phone } from "lucide-react"

const chartData = [
  { month: "Jan", revenue: 4500, users: 3200, orders: 2100 },
  { month: "Feb", revenue: 5200, users: 3800, orders: 2400 },
  { month: "Mar", revenue: 4800, users: 3500, orders: 2200 },
  { month: "Apr", revenue: 6100, users: 4200, orders: 2800 },
  { month: "May", revenue: 5500, users: 3900, orders: 2600 },
  { month: "Jun", revenue: 6700, users: 4500, orders: 3100 },
]

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Editor",
    status: "Inactive",
    joinDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "User",
    status: "Active",
    joinDate: "2024-04-05",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "Admin",
    status: "Active",
    joinDate: "2024-05-12",
  },
]

export default function Dashboard() {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [userToDelete, setUserToDelete] = React.useState<typeof users[0] | null>(null)

  const handleDeleteClick = (user: typeof users[0]) => {
    setUserToDelete(user)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (userToDelete) {
      console.log("Deleting user:", userToDelete.name)
      setDeleteDialogOpen(false)
      setUserToDelete(null)
    }
  }

  return (
    <PageBackground>
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here&apos;s what&apos;s happening."
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl">$32,800</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Users</CardDescription>
            <CardTitle className="text-2xl">23,100</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Orders</CardDescription>
            <CardTitle className="text-2xl">15,200</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">+15.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Sessions</CardDescription>
            <CardTitle className="text-2xl">1,234</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">+5.7% from last hour</p>
          </CardContent>
        </Card>
      </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue and user growth</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={chartData}
                  dataKey="month"
                  bars={[
                    { dataKey: "revenue", name: "Revenue", color: "#000080" },
                    { dataKey: "users", name: "Users", color: "#008080" },
                  ]}
                  height={300}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-gray-600">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">Order #1234 completed</p>
                      <p className="text-xs text-gray-600">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">System backup completed</p>
                      <p className="text-xs text-gray-600">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>Detailed analytics and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={chartData}
                  dataKey="month"
                  bars={[
                    { dataKey: "revenue", name: "Revenue", color: "#000080" },
                    { dataKey: "users", name: "Users", color: "#008080" },
                    { dataKey: "orders", name: "Orders", color: "#800080" },
                  ]}
                  height={400}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage your users and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Badge
                            variant={user.status === "Active" ? "success" : "secondary"}
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="whitespace-nowrap">
                                  <Mail className="mr-2 h-4 w-4" />
                                  Send Email
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                  <DropdownMenuItem>Welcome Email</DropdownMenuItem>
                                  <DropdownMenuItem>Password Reset</DropdownMenuItem>
                                  <DropdownMenuItem>Custom Message</DropdownMenuItem>
                                </DropdownMenuSubContent>
                              </DropdownMenuSub>
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="whitespace-nowrap">
                                  <Phone className="mr-2 h-4 w-4" />
                                  Contact
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                  <DropdownMenuItem>Call</DropdownMenuItem>
                                  <DropdownMenuItem>Send SMS</DropdownMenuItem>
                                  <DropdownMenuItem>Schedule Call</DropdownMenuItem>
                                </DropdownMenuSubContent>
                              </DropdownMenuSub>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                variant="destructive"
                                onClick={() => handleDeleteClick(user)}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent size="default">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete User</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete <strong className="font-bold">{userToDelete?.name}</strong>? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={handleDeleteConfirm}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageBackground>
  )
}

