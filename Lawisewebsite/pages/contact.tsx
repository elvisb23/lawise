/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IDAklfBDarC
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
          <Link className="text-white hover:text-blue-300" href="#">
            Contact
          </Link>
          <Link passHref href="/getstarted">
            <Button className="ml-4 bg-green-500 hover:bg-green-400">
              Get Started
            </Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="px-8 py-16 bg-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-200">Contact Us</h1>
            <p className="mt-4 text-sm text-gray-400">
              We are here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>
        </section>
        <section className="px-8 py-16 bg-blue-900">
          <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-200">Contact Information</h2>
              <ul className="mt-4 text-gray-400">
                <li>Address: 80333 Arcisstraße 21, Munich</li>
                <li>Email: info@lawise.com</li>
                <li>Phone: +49 151 50667716</li>
              </ul>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-200">Send us a message</h2>
              <form className="mt-4 space-y-4">
                <Input className="w-full" placeholder="Your Name" />
                <Input className="w-full" placeholder="Your Email" />
                <textarea className="w-full h-32 p-2 rounded-md bg-blue-700 text-gray-200" placeholder="Your Message" />
                <Button className="w-full bg-green-500 hover:bg-green-400">Submit</Button>
              </form>
            </div>
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

