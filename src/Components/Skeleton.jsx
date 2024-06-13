import React from "react";

const Skeleton = () => {
  return (
    <div className="shadow-md p-2 w-[18.75rem ] sm:w-[20rem] sm:max-w-[23.125rem] ">
      <div className="h-48 bg-gray-300 rounded-[1rem] animate-custom-pulse "></div>
      <div className="p-2 text-lg">
        <div className="flex justify-between mb-2">
          <div className="h-4 bg-gray-300 w-1/2 rounded animate-custom-pulse "></div>
          <div className="flex flex-col items-end space-y-1">
            <div className="h-4 bg-gray-300 w-12 rounded animate-custom-pulse "></div>
            <div className="h-3 bg-gray-300 w-8 rounded animate-custom-pulse "></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="h-3 bg-gray-300 w-full rounded mb-1 animate-custom-pulse "></div>
          <div className="h-3 bg-gray-300 w-3/4 rounded animate-custom-pulse "></div>
        </div>
        <div className="mb-2">
          <div className="h-3 bg-gray-300 w-full rounded mb-1 animate-custom-pulse "></div>
          <div className="h-3 bg-gray-300 w-3/4 rounded animate-custom-pulse  "></div>
        </div>
        <div className="mb-2">
          <div className="h-3 bg-gray-300 w-full rounded mb-1 animate-custom-pulse "></div>
          <div className="h-3 bg-gray-300 w-3/4 rounded animate-custom-pulse "></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
