import Link from 'next/link'
import React from 'react'

const Package: React.FC = () => {
  return (
    <section className="text-gray-50">
      <div className="mx-auto flex flex-col items-center justify-center lg:max-w-full lg:flex-row">
        <div className="flex flex-col items-center h-full py-20 px-20 justify-center flex-1 bg-primary">
          <span className="text-xl font-bold">Demo Package</span>
          <p className="text-md text-center mb-8">Try Layman AI for Free</p>
          <p className="text-3xl font-bold text-center mb-4">5 Prompts / Day</p>
          <p className="font-semibold text-center text-lg">
            Simplify up to 5 texts per day for free. Perfect for first-time users exploring our service.
          </p>
          <Link
            href="/demo"
            className=" mt-10 inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 outline outline-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  hover:bg-primary-100"
            role="button"
          >
            Try Demo
          </Link>
        </div>
        <div className="flex flex-col items-center h-full py-20 px-20 justify-center flex-1 bg-primary-100">
          <span className="text-xl font-bold">Registered Package</span>
          <p className="text-md text-center mb-8">Unlock More Features</p>
          <p className="text-3xl font-bold text-center mb-4">30 Prompts / Day</p>
          <p className="font-semibold text-center text-lg">
            Sign up for a free account to simplify up to 30 texts per day, save prompts, and enjoy cloud storage.
          </p>
          <Link
            href="/register"
            className=" mt-10 inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 outline outline-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  hover:bg-primary"
            role="button"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Package