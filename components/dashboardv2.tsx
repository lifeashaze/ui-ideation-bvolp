"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"

export function Dashboardv2() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-64 bg-gray-900 text-white md:block">
        <div className="flex h-16 items-center justify-between px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span>bVOLP</span>
          </Link>
        </div>
        <nav className="mt-6 space-y-1 px-4">
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <HomeIcon className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3">Dashboard</span>
          </Link>
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <BookOpenIcon className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3">Courses</span>
          </Link>
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <BellIcon className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3">Notifications</span>
            <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
              3
            </Badge>
          </Link>
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <CodeIcon className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3">Coding</span>
          </Link>
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <BarChartIcon className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3">Analytics</span>
          </Link>
        </nav>
      </div>
      <div className="flex-1">
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-4 shadow-sm dark:bg-gray-900 dark:text-white md:px-6">
          <div className="flex items-center gap-4">
            <Button className="rounded-full md:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
            </Button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button className="rounded-full" size="icon" variant="ghost">
              <BellIcon className="h-6 w-6" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs font-medium text-white">
                3
              </Badge>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Courses</CardTitle>
                <CardDescription>Overview of your enrolled courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Computer Engineering 101</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fundamentals of Computer Engineering</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4" />
                        Ongoing
                      </div>
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Advanced Algorithms</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Optimization and Problem Solving</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        Upcoming
                      </div>
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Machine Learning for Engineers</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Practical applications of ML</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="h-4 w-4" />
                        In Progress
                      </div>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay up-to-date with important updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                      <CalendarIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Upcoming Exam Schedule</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Your final exam for Computer Engineering 101 is scheduled for next Friday, June 9th.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Assignment Submitted</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Your assignment for Advanced Algorithms has been successfully submitted.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200">
                      <TriangleAlertIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Upcoming Project Deadline</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        The final project for Machine Learning for Engineers is due in 2 weeks. Don't forget to submit
                        your work!
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coding Environment</CardTitle>
                <CardDescription>Access your integrated coding workspace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Computer Engineering 101</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fundamentals of Computer Engineering</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      <div className="flex items-center gap-2">
                        <CodeIcon className="h-4 w-4" />
                        Open
                      </div>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Advanced Algorithms</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Optimization and Problem Solving</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      <div className="flex items-center gap-2">
                        <CodeIcon className="h-4 w-4" />
                        Open
                      </div>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Machine Learning for Engineers</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Practical applications of ML</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      <div className="flex items-center gap-2">
                        <CodeIcon className="h-4 w-4" />
                        Open
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Student Performance Analytics</CardTitle>
                <CardDescription>Insights into your academic progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
                    <h3 className="text-2xl font-semibold">85%</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Overall Course Average</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-green-100 p-4 dark:bg-green-900">
                    <h3 className="text-2xl font-semibold">92%</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Assignment Completion Rate</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900">
                    <h3 className="text-2xl font-semibold">78%</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Exam Performance</p>
                  </div>
                </div>
                <div className="mt-6">
                  <LineChart className="aspect-[9/4]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
