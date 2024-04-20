import React from "react";
import Link from "next/link";

export const GetStarted: () => React.JSX.Element = () => {
  return (
    <section className="w-full py-[10vh] bg-gray-300">
      <div className="container flex flex-col items-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Ready to Start?
        </h2>
        <Link
          className="inline-flex h-9 items-center rounded-md bg-gray-900 px-5 py-3 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};
