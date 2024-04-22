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
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGitMergeSharp } from "react-icons/io5";

export const NavBar: () => React.JSX.Element = () => {
  return (
    <Menubar className="flex justify-between items-center m-3 bg-gray-900 text-gray-300 border-none">
      <Link className="mr-6 flex items-center gap-3" href="/">
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
          <MenubarTrigger className="">
            <Link href="/programs">Programs</Link>
          </MenubarTrigger>
        </MenubarMenu>
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
          <MenubarTrigger className=""><Link href="/programs">Get Started</Link></MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <RxHamburgerMenu size={30} />
    </Menubar>
  );
};
