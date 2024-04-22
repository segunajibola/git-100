"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] px-4 md:px-6">
      <div className="max-w-md text-center space-y-4">
        <img
          alt="Confused person illustration"
          className="mx-auto"
          height={200}
          src="https://images.unsplash.com/photo-1644365977963-e96e883a8e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width={200}
        />
        <h1 className="text-3xl font-bold text-gray-300">
          Oops! {pathname.slice(1)} page not found.
        </h1>
        <p className="text-gray-400 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
