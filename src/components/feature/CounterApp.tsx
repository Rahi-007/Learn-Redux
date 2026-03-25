import { useContext } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { cn } from "@/lib/global.utils";
import { decrement, increment } from "@/context/slice/counter.slice";

interface IProps {
  title: string;
  className?: string;
}

const Counter = ({ title, className }: IProps) => {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      className={cn("bg-gray-900 text-white border rounded-sm p-8", className)}
    >
      <p className="text-sm italic text-gray-600">{title}</p>
      <div className="text-center text-4xl pb-4">Total Likes : {value}</div>
      <div className="flex justify-center gap-2 my-4">
        <Button className="w-xs" onClick={() => dispatch(increment())}>
          Add
        </Button>
        <Button className="w-xs" onClick={() => dispatch(decrement())}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Counter;
