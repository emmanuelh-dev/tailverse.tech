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
import { Notifications } from "./Nofications";
import { UserMenuMobile } from "./UserMenuMobile";
import UserStore from "@/store/user";
const Header = () => {
  const user = UserStore((state) => state.user);
  const logOut = UserStore((state) => state.logOut);
  return (
    <header className=" relative z-[100]">
      <nav className="flex items-center justify-between px-4 py-4">
        <MobileNav />

        <div className="flex items-center">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-neutral-700 dark:text-neutral-300"
          >
            TAILVERSE
          </Link>
          <div className="min-[1100px]:flex hidden items-center text-xl">
            {NAVIGATION.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={buttonVariants({ variant: "link" })}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        {user ? (
          <div className="max-[1100px]:flex gap-2 hidden">
            <Notifications />

            <UserMenuMobile />
          </div>
        ) : null}
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
          <Notifications />
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
