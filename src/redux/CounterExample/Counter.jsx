import { useDispatch, useSelector } from "react-redux";
import { DEC, INC, RESET } from "./CounterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        
        <h1 className="text-4xl font-bold text-slate-800 mb-6">
          Count: <span className="text-indigo-600">{count}</span>
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => dispatch(INC())}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            INC
          </button>

          <button
            onClick={() => dispatch(RESET())}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition"
          >
            RESET
          </button>

          <button
            onClick={() => dispatch(DEC())}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            DEC
          </button>
        </div>

      </div>
    </div>
  );
};
