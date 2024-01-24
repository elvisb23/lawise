/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OaSJKItoZMR
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-blue-900">
      <header className="flex items-center justify-between px-8 py-4 bg-blue-800 border-b border-blue-700">
        <Link className="text-2xl font-bold text-white" href="/">
          Lawise
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="text-white hover:text-blue-300" href="features">
            Features
          </Link>
          <Link className="text-white hover:text-blue-300" href="pricing">
            Pricing
          </Link>
          <Link className="text-white hover:text-blue-300" href="contact">
            Contact
          </Link>
          <Button className="ml-4 bg-green-500 hover:bg-green-400">Get Started</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="px-8 py-16 bg-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-200">Get Started</h1>
            <p className="mt-4 text-sm text-gray-400">
              Ready to take the next step? Fill out the form below and our team will be in touch shortly.
            </p>
          </div>
        </section>
        <section className="px-8 py-16 bg-blue-900">
          <div className="max-w-4xl mx-auto">
            <form className="grid gap-8">
              <Input className="w-full" placeholder="Full Name" />
              <Input className="w-full" placeholder="Email Address" />
              <Input className="w-full" placeholder="Phone Number" />
              <textarea
                className="w-full h-32 p-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                placeholder="Message"
              />
              <Button className="w-full bg-green-500 hover:bg-green-400">Submit</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="px-8 py-4 bg-blue-800 border-t border-blue-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-white">© 2024 Lawise</p>
          <nav className="flex items-center gap-6">
            <Link className="text-white hover:text-blue-300" href="#">
              Privacy Policy
            </Link>
            <Link className="text-white hover:text-blue-300" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

