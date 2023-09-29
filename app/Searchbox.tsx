"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import UserStore from "@/store/user";
import { Label } from "@radix-ui/react-dropdown-menu";
import { AiOutlineEnter } from "react-icons/ai";

const Searchbox = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filterComponents = UserStore((state) => state.filterComponents);

  const handleonKeyDown = (e) => {
    if (e.key === "Enter") {
      filterComponents(searchTerm);
    }
  };

  return (
    <div className="px-8 h-96 flex items-center justify-center">
      <div className="text-center">
        <label className="text-lg font-semibold mb-2">What do you need?</label>
        <div className="flex items-center space-x-2 max-w-md mx-auto">
          <Input
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search | Filter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleonKeyDown}
          />
          <AiOutlineEnter className="text-blue-500 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
