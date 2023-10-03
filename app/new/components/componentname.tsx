import { Input } from "@/components/ui/input";
import UserStore from "@/store/user";
import React from "react";

const ComponentName = () => {
  const updateName = UserStore(state => state.updateName)
  const newComponent = UserStore(state => state.newComponent)
  const {name} = newComponent
  return <Input className="w-72" placeholder="Component Name" onChange={(e)=>updateName(e.target.value)}  value={name}/>;
};

export default ComponentName;
