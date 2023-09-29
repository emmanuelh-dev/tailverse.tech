import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectType() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Components</SelectLabel>
          <SelectItem value="card">Card</SelectItem>
          <SelectItem value="butttons">Butttons</SelectItem>
          <SelectItem value="inputs">Inputs</SelectItem>
          <SelectItem value="forms">Forms</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
