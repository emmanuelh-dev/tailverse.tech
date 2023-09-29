"use client";
import Editor from "@/components/PlayGround/Editor";
import { Card } from "@/components/ui/card";
import UserStore from "@/store/user";
import Script from "next/script";
import React from "react";

const PlayGround = () => {
  const setComponentSource = UserStore((state) => state.setComponentSource);
  const newComponent = UserStore((state) => state.newComponent);
  const { source } = newComponent;
  return (
    <div className="w-full flex h-[80vh]">
      {/* <Script src="https://cdn.tailwindcss.com"></Script> */}
      <Card className="lg:w-1/2 m-8">
      <Editor source={source} setSource={setComponentSource}/>
      </Card>
      <Card className="lg:w-1/2 m-8 flex items-center justify-center ">
        <div dangerouslySetInnerHTML={{ __html: source }} />
      </Card>
    </div>
  );
};

export default PlayGround;
