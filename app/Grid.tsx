"use client";
import React, { Suspense, useEffect, useState } from "react";
import CardComponent from "@/components/Card";
import SuspenceCard from "@/components/Cards/Suspence";
import UserStore from "@/store/user";
import { Components } from "@/types";
import FilterBox from "./FilterBox";

const RenderedGrid = ({ components }: { components: Components[] }) => {
  return (
    <>
      {components.map((component: Components) => (
        <Suspense key={component.id}>
          <CardComponent component={component} />
        </Suspense>
      ))}
    </>
  );
};
const Grid = () => {
  const [showComponents, setShowComponents] = useState(false);
  const filterComponents = UserStore((state) => state.filteredComponents);
  useEffect(() => {
    setShowComponents(true);
  }, []);
  return (
    <>
      {filterComponents.length > 1 ? (
        <div className="md:columns-2 lg:columns-3 xl:col-span-4 2xl:columns-5 gap-12 px-8">
          {showComponents ? (
            <RenderedGrid components={filterComponents} />
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
      ) : (
        <div className="text-center">Try with another prompt</div>
      )}
    </>
  );
};

export default Grid;
