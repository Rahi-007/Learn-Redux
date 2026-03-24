import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/global.utils";

interface IProps {
  title: string;
  count: number;
  add: () => void;
  remove: () => void;
  className?: string;
}

const Counter = ({ title, count, add, remove, className }: IProps) => {
  return (
    <div
      className={cn("bg-gray-900 text-white border rounded-sm p-8", className)}
    >
      <p className="text-sm italic text-gray-600">{title}</p>
      <div className="text-center text-4xl pb-4">Total Likes : {count}</div>
      <div className="flex justify-center gap-2 my-4">
        <Button className="w-xs" onClick={add}>
          Add
        </Button>
        <Button className="w-xs" onClick={remove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Counter;
