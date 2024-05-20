import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGitMergeSharp } from "react-icons/io5";

export const NavBar: () => React.JSX.Element = () => {
  return (
    <header className="flex justify-between items-center">
      <Menubar className="flex w-full justify-between items-center m-3 bg-gray-900 text-gray-300 border-none">
        <Link className="mr-6 flex items-center gap-3" href="/">
          <IoGitMergeSharp size={25} />
          <span className="text-gray-300">Git 💯</span>
        </Link>
        <Menubar className="hidden md:flex items-center justify-between gap-3 bg-gray-900 border-none">
          {/* <MenubarMenu>
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
          </MenubarMenu> */}
          <MenubarMenu>
            <MenubarTrigger className="">
              <Link href="/about">About</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="">
              <Link href="/contact">Contact</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="">
              <Link href="/pricing">Pricing</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="bg-red-400 text-white">
              <Link href="/programs">Get Started</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </Menubar>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden inline" size="icon">
            <RxHamburgerMenu size={30} />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-gray-800 text-gray-200">
          <div className="grid gap-2 py-6 bg-gray-800 text-gray-200">
            <SheetClose asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="/"
              >
                Home
              </Link>
            </SheetClose>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Programs
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 p-6 bg-gray-700">
                  <SheetClose asChild>
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="/programs/free-30day-git"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Free 30-Day Git and GitHub Training
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-400 dark:text-gray-400">
                        Learn Git and GitHub on WhatsApp for free
                      </div>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="/programs/coding-schools"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        100-Day Plan for Coding Schools Students
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-400 dark:text-gray-400">
                        Upskill your student collaborative skills
                      </div>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="/programs/engineering-teams"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        3-Months Program for Engineering teams
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-400 dark:text-gray-400">
                        Let your teams build features like the team they are
                      </div>
                    </Link>
                  </SheetClose>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <SheetClose asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="/pricing"
              >
                Pricing
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="/about"
              >
                About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="/contact"
              >
                Contact
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

function ChevronRightIcon(props: { className: string }) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
