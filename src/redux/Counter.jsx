import { useDispatch, useSelector } from "react-redux";
import { DEC, INC, RESET } from "./CounterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Count: <span className="text-blue-600">{count}</span>
        </h1>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => dispatch(INC())}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            INC
          </button>

          <button
            onClick={() => dispatch(DEC())}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            DEC
          </button>
          <button
            onClick={() => dispatch(RESET())}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
