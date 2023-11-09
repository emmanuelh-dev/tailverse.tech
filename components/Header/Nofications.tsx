"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiBell } from "react-icons/bi";

const NOTIFICATIONS = [
  {
    title: "New Feature",
    description:
      "Now you can create components with Alpine JS. Check out the docs to learn more.",
    date: "2023-11-08",
  },
  {
    title: "Notifications Bar Enhancement",
    description:
      "The notifications bar has been updated to give you more control over your experience.",
    date: "2023-10-15",
  },
  {
    title: "Dashboard Filter Addition",
    description:
      "A new filter has been added to the dashboard, making it easier for you to search for things.",
    date: "2023-10-10",
  },
];

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function Notifications() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <BiBell className="text-lg text-red-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuLabel>Notifications and updates</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {NOTIFICATIONS.map((item, index) => (
          <div key={index}>
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
              disabled
            >
              {item.description}
            <span className=" text-[0.5rem] justify-end">{item.date}</span>
            </DropdownMenuCheckboxItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
