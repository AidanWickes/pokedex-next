import React from "react";
import { Badge } from "../badge/Badge";

interface CardProps {
  id: number;
  name: string;
  image: {
    src: string;
    alt?: string;
  };
  types: string[];
}

export const Card = ({ id, name, image, types, ...props }: CardProps) => {
  return (
    <>
      <div className="flex max-w-64 flex-col rounded-2xl border-8 border-solid border-gray-600 bg-white px-2 py-3">
        <div className="relative">
          <div className="absolute right-0 top-0 flex aspect-square items-center justify-center rounded-full bg-gray-700 p-1 text-white">
            {id.toString().padStart(3, "0")}
          </div>
          <img
            loading="lazy"
            src={image.src}
            alt={image.alt ? image.alt : name}
          />
        </div>
        <div className="flex w-full flex-col bg-gray-200 p-4">
          <div className="flex justify-between gap-2 whitespace-nowrap">
            <div className="text-lg font-extrabold capitalize leading-7 text-gray-800">
              {name}
            </div>
            <div className="flex items-center justify-center gap-2">
              {types.map((type, key) => (
                <Badge key={key} type={type}></Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
