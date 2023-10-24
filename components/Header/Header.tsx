"use client";
import React from "react";
import { ModeToggle } from "../Theme/Toggle";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { Button, buttonVariants } from "../ui/button";
import { DropdownMenuDemo } from "./UserMenu";
import MobileNav from "./MobileNav";
import { NAVIGATION } from "@/data/navigation";
import Searchbox from "@/app/Searchbox";
import { Plus } from "lucide-react";
const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-8">
        <div className="flex gap-4 ">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-neutral-700 dark:text-neutral-300"
          >
            TAILVERSE
          </Link>
          <div className="min-[1100px]:flex hidden items-center gap-8 text-xl">
            {NAVIGATION.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-700 dark:text-neutral-300"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        <MobileNav />
        <div className="gap-3 min-[1100px]:flex items-center hidden">
          <Link
            href="/new"
            className={`flex items-center gap-2 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Create <Plus />
          </Link>
          <Searchbox />
          <Button variant={"outline"}>
            <AiFillGithub className="text-xl" />
          </Button>
          <DropdownMenuDemo />
        </div>
      </nav>
    </header>
  );
};

export default Header;
