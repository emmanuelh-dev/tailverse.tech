"use client";
import React from "react";
import { ModeToggle } from "../Theme/Toggle";
import navigation from "@/data/navigation";
import Link from "next/link";
import {AiFillGithub} from "react-icons/ai"
import { Button } from "../ui/button";
import { DropdownMenuDemo } from "./UserMenu";
const Header = () => {
  return (
    
    <header>
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex gap-4">
          <Link
                href="/"
                className="text-sm font-bold tracking-tight text-neutral-700 dark:text-neutral-300"
              >
                TAILVERSE
              </Link>
          {navigation.map((item) => {
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
        <div className="gap-3 flex items-center">
          <Button variant={"outline"}><AiFillGithub className="text-xl"/></Button>
        {/* <ModeToggle /> */}
        <DropdownMenuDemo/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
