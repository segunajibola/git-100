import React from 'react'
import Link from 'next/link'

export const Hero: () => React.JSX.Element = () => {
  return (
    <section className="w-full pt-8 md:pt-24 lg:pt-32">
      <div className="px-5 space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-2 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-gray-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              The collaborative platform for building fast.
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Beautifully designed resources and tools to help coding schools student colloborate with other developers using Git and GitHub.
              Collaboration. Code. Open Source.
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center border justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-900/90 hover:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/programs"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-9 items-center border justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/about"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="Hero"
          className="mx-auto h-[60vh] aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          height="300"
          src="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="1270"
        />
      </div>
    </section>
  )
}