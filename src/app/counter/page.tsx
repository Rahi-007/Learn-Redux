"use client";

import Counter from "@/components/feature/CounterApp";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <Counter title="Counter 1" className="mb-4" />
      <Counter title="Counter 2" className="mb-4" />
      <Counter title="Counter 3" className="mb-4" />
    </div>
  );
};

export default page;
