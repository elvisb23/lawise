
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
      <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-blue-100 hover:bg-blue-200">
        <Link className="absolute inset-0 z-10" href="case">
          <span className="sr-only">View</span>
        </Link>
        <CardHeader>
          <CardTitle className="text-blue-800">Elvis Bektashi</CardTitle>
          <CardDescription className="text-blue-600">
            Legal Case 1:
            <span className="font-semibold text-blue-900">Job Loss</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-500">
            Case Description: I got fired from my job yesterday.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="absolute bottom-4 right-4 text-blue-800" size="icon" variant="ghost">
            <ArrowRightIcon className="w-4 h-4" />
            <span className="sr-only">Expand</span>
          </Button>
        </CardFooter>
      </Card>
      <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-blue-100 hover:bg-blue-200">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardHeader>
          <CardTitle className="text-blue-800">Jane Doe</CardTitle>
          <CardDescription className="text  -blue-600">
            Legal Case 1:
            <span className="font-semibold text-blue-900">Case Title</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-500">
            Case Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="absolute bottom-4 right-4 text-blue-800" size="icon" variant="ghost">
            <ArrowRightIcon className="w-4 h-4" />
            <span className="sr-only">Expand</span>
          </Button>
        </CardFooter>
      </Card>
      <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-blue-100 hover:bg-blue-200">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardHeader>
          <CardTitle className="text-blue-800">Bob Smith</CardTitle>
          <CardDescription className="text-blue-600">
            Legal Case 1:
            <span className="font-semibold text-blue-900">Case Title</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-500">
            Case Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="absolute bottom-4 right-4 text-blue-800" size="icon" variant="ghost">
            <ArrowRightIcon className="w-4 h-4" />
            <span className="sr-only">Expand</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
