"use client";

import Counter from "@/components/feature/CounterApp";
import { useState } from "react";

const page = () => {
  const [count, setCount] = useState<number>(0);

  const handelAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handelRemove = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="max-w-7xl mx-auto py-12">
      <Counter
        title="Counter 1"
        className="mb-4"
        count={count}
        add={handelAdd}
        remove={handelRemove}
      />
      <Counter
        title="Counter 2"
        className="mb-4"
        count={count}
        add={handelAdd}
        remove={handelRemove}
      />
      <Counter
        title="Counter 3"
        className="mb-4"
        count={count}
        add={handelAdd}
        remove={handelRemove}
      />
    </div>
  );
};

export default page;
