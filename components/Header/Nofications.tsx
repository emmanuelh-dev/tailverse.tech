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
    title: "Notifications Bar Enhancement",
    description:
      "The notifications bar has been updated to give you more control over your experience.",
  },
  {
    title: "Dashboard Filter Addition",
    description:
      "A new filter has been added to the dashboard, making it easier for you to search for things.",
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
          <BiBell className="text-lg" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>Notifications and updates</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {NOTIFICATIONS.map((item, index) => (
          <DropdownMenuCheckboxItem
          key={index}
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
            disabled
          >
            {item.description}
          </DropdownMenuCheckboxItem>
        ))}


      </DropdownMenuContent>
    </DropdownMenu>
  );
}
