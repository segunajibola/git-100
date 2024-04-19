import React from "react";
import Link from "next/link";

export const Footer: () => React.JSX.Element = () => {
  return (
    <footer className="flex flex-col text-gray-500 my-2 dark:text-gray-400 gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="">
        © {new Date().getFullYear()} Git 💯. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};
