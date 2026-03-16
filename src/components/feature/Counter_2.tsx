import React from "react";
import { Button } from "../ui/button";

const Counter_2 = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div className="bg-gray-900 text-white border rounded-sm p-8">
      <div className="text-center text-4xl p-4">Total Likes : {count}</div>
      <div className="flex justify-center gap-2 my-4">
        <Button
          className="w-xs"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Add
        </Button>
        <Button
          className="w-xs"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Counter_2;
