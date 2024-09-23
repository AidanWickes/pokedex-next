import React from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  type: string;
}

export const Badge = ({ type, ...props }: BadgeProps) => {
  const colors = {
    "bg-green-500": type.toLowerCase() == "grass",
    "bg-blue-500": type.toLowerCase() == "water",
    "bg-red-500": type.toLowerCase() == "fire",
    "bg-purple-500": type.toLowerCase() == "poison"
  };
  return (
    <div
      className={cn(
        colors,
        "flex aspect-square h-4 items-center justify-center rounded-full",
      )}
    ></div>
  );
};
