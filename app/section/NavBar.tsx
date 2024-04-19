import React, { JSX } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGitMergeSharp } from "react-icons/io5";

export const NavBar: () => JSX.Element = () => {
  return (
    <Menubar className="flex justify-between items-center m-3 bg-gray-900 text-gray-300 border-none">
      <Link className="mr-6 flex items-center gap-3" href="#">
        {/* <MountainIcon className="h-6 w-6" /> */}
        <IoGitMergeSharp size={25} />
        <span className="text-gray-300">Git 💯</span>
      </Link>
      <Menubar className="hidden md:flex items-center justify-between gap-3 bg-gray-900 border-none">
        <MenubarMenu>
          <MenubarTrigger className="">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="">Features</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="">About</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="">Contact</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="">Get Started</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <RxHamburgerMenu size={30} />
    </Menubar>
  );
};

export const NavBard = () => {
  return (
    <Menubar className="flex h-16 w-full justify-between items-center bg-gray-900 text-gray-300 border-none px-4 md:px-6 dark:bg-gray-800/90 dark:bg-opacity-90 fixed top-0">
      <Link className="mr-6" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="hidden ml-auto md:flex items-center gap-3 space-x-4">
        <MenubarMenu>
          <MenubarContent className="text-gray-300">
            <MenubarItem className="text-gray-300">
              {/* <Link
                className="font-medium text-sm text-gray-300 leading-none group-hover:underline"
                href="#"
              > */}
              Features
              {/* </Link> */}
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <Link
            className="font-medium text-sm leading-none group-hover:underline"
            href="#"
          >
            Solutions
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link
            className="font-medium text-sm leading-none group-hover:underline"
            href="#"
          >
            Pricing
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link
            className="font-medium text-sm leading-none group-hover:underline"
            href="#"
          >
            Contact
          </Link>
        </MenubarMenu>
      </div>
    </Menubar>
  );
};

interface MountainIconProps {
  className?: string;
}

function MountainIcon(props: MountainIconProps) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}