"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import UserStore from "@/store/user";
import { Label } from "@radix-ui/react-dropdown-menu";
import { AiOutlineEnter } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Searchbox = () => {
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filterComponents = UserStore((state) => state.filterComponents);
  const router = useRouter();

  const handleonKeyDown = (e: any) => {
    if (e.key === "Enter") {
      router.push("/");
      filterComponents(searchTerm);
    }
  };

  return (
    <Input
      className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
      type="text"
      placeholder="Search | Filter"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleonKeyDown}
    />
  );
};

export default Searchbox;
