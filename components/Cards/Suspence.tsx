import React, { Suspense } from 'react';

const LoadingFallback = () => (
  <div className="h-72 shadow-md rounded-xl border-neutral-300 border dark:border-neutral-700 w-full flex flex-1 items-center justify-center overflow-clip">
    Loading...
  </div>
);

const getRandomHeightClass = () => {
  const heights = ['h-48', 'h-56', 'h-64', 'h-72', 'h-80', 'h-96'];
  const randomIndex = Math.floor(Math.random() * heights.length);
  return heights[randomIndex];
};

const SuspenceCard = () => {
  const randomHeightClass = getRandomHeightClass();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className={`overflow-y-auto ${randomHeightClass} shadow-md rounded-xl border-neutral-300 border dark:border-neutral-700 w-full flex flex-1 items-center justify-center overflow-clip mb-8`}>
        {/* Contenido del componente */}
      </div>
    </Suspense>
  );
};

export default SuspenceCard;
