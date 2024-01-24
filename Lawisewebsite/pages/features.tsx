/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U1tmt88Xmlr
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-blue-900">
      <header className="flex items-center justify-between px-8 py-4 bg-blue-800 border-b border-blue-700">
        <Link className="text-2xl font-bold text-white" href="/">
          Lawise
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="text-white hover:text-blue-300" href="#">
            Features
          </Link>
          <Link className="text-white hover:text-blue-300" href="pricing">
            Pricing
          </Link>
          <Link className="text-white hover:text-blue-300" href="contact">
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
            <h1 className="text-4xl font-bold text-gray-200">Our Features</h1>
            <p className="mt-4 text-sm text-gray-400">
              Explore the innovative features that make Lawise the best choice for your legal needs.
            </p>
          </div>
        </section>
        <section className="px-8 py-16 bg-blue-900">
          <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-200">Chatbot Widget</h2>
              <p className="mt-4 text-gray-400">
                Our chatbot widget provides real-time assistance to your website visitors, helping them find the
                information they need quickly and efficiently.
              </p>
            </div>
            <div>
              <img
                alt="Chatbot Widget"
                className="w-full h-64 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
        </section>
        <section className="px-8 py-16 bg-blue-800">
          <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
            <div>
              <img
                alt="Client Portal"
                className="w-full h-64 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-200">Client Portal</h2>
              <p className="mt-4 text-gray-400">
                Our client portal enables law firms to securely manage and share documents with their clients, improving
                communication and collaboration.
              </p>
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

