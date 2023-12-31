"use client";
import React, { Suspense, useEffect, useState } from "react";
import CardComponent from "@/components/Card";
import SuspenceCard from "@/components/Cards/Suspence";
import { Components } from "@/types";


const RenderedGrid = ({ components }: { components: Components[] }) => {
  return (
    <>
      {components.length > 2 ? (
        components.map((component: Components, index) => (
            <CardComponent component={component} key={index}/>
        ))
      ) : (
        <div>Try with another prompt</div>
      )}
    </>
  );
};
const Grid = ({ components } : any) => {
  const [showComponents, setShowComponents] = useState(false);
  useEffect(() => {
    setShowComponents(true);
  }, []);
  return (
    <>

      <div className="md:columns-2 lg:columns-3 xl:col-span-4 2xl:columns-5 gap-8 px-8">
        {showComponents ? (
          <RenderedGrid components={components} />
        ) : (
          <div className="gap-8">
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
            <SuspenceCard />
          </div>
        )}
        <div className="h-76 shadow-md rounded-xl border-neutral-300 border dark:border-neutral-700 w-full h-full flex flex-1 items-center justify-center overflow-clip"></div>
      </div>
    </>
  );
};

export default Grid;
