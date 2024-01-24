/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cWwolXpHitz
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
          <Link className="text-white hover:text-blue-300" href="features">
            Features
          </Link>
          <Link className="text-white hover:text-blue-300" href="#">
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
            <h1 className="text-4xl font-bold text-gray-200">Our Pricing</h1>
            <p className="mt-4 text-sm text-gray-400">
              Choose the plan that suits your needs. Upgrade, downgrade, or cancel any time.
            </p>
          </div>
        </section>
        <section className="px-8 py-16 bg-blue-900">
          <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-3">
            <div className="bg-blue-800 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-200">Basic</h2>
              <p className="mt-4 text-lg text-gray-400">€39 user/month</p>
              <ul className="mt-4 text-gray-400">
                <li>Chatbot Widget</li>
                <li>Client Portal</li>
                <li>Messaging</li>
                <li>Videocalls</li>
                <li>AI Assistant</li>
              </ul>
              <Button className="mt-6 bg-green-500 hover:bg-green-400">Choose Plan</Button>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-200">Pro</h2>
              <p className="mt-4 text-lg text-gray-400">€49 user/month</p>
              <ul className="mt-4 text-gray-400">
                <li></li>
                <li>Chatbot Widget</li>
                <li>Client Portal</li>
                <li>Messaging</li>
                <li>Videocalls</li>
                <li>AI Assistant</li>
                <li>Videocall Analytics</li>
                <li>Document Review</li>
              </ul>
              <Button className="mt-6 bg-green-500 hover:bg-green-400">Choose Plan</Button>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-200">Enterprise</h2>
              <p className="mt-4 text-lg text-gray-400">Contact Us</p>
              <ul className="mt-4 text-gray-400">
                <li>Chatbot Widget</li>
                <li>Client Portal</li>
                <li>Unlimited Users</li>
                <li>Priority Support</li>
                <li>Custom Integrations</li>
              </ul>
              <Button className="mt-6 bg-green-500 hover:bg-green-400">Contact Sales</Button>
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

