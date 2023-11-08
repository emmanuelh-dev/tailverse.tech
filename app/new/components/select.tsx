import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TYPES } from "@/data/navigation";
import UserStore from "@/store/user";

export function SelectType() {
  const updateType = UserStore((state) => state.updateType);

  const handleTypeChange = (selectedType:string) => {
    updateType(selectedType);
  };

  return (
    <Select onValueChange={handleTypeChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Components</SelectLabel>
          {TYPES.map((type, index) => (
            <SelectItem value={type.href} key={index}>
              {type.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
