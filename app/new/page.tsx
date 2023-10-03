"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { SelectType } from "./components/select";
import ComponentName from "./components/componentname";
import { Input } from "@/components/ui/input";
import UserStore from "@/store/user";
import PlayGround from "@/components/PlayGround/Playground";


const page = () => {
  const newComponent = UserStore(state => state.newComponent)
  const {author} = newComponent
  return (
    <div className="px-8">
      <Card className="">
        <header className="flex w-full justify-between p-8 border-b border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-semibold">New Component</h3>
          <nav className="flex gap-2 items-center">
            <Input value={author ? author : "Login to save your component"} disabled className="max-w-xs"/>
            <ComponentName />
            <SelectType />
            <Button variant={"secondary"}>Save</Button>
            <Button variant={"secondary"}>...</Button>
          </nav>
        </header>
        <PlayGround />
      </Card>
    </div>
  );
};

export default page;
