import { useDispatch, useSelector } from "react-redux";
import { DEC, INC, REMOVE } from "./CartSlice";

export const Cart = () => {
  const data = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h1>

        {data.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty
          </p>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 items-center bg-white shadow-md p-5 mb-5 rounded-xl"
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              {/* Product info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>

              {/* Price */}
              <div className="font-bold text-lg">
                ${item.price * item.quantity}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(DEC(item.id))}
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 font-bold"
                >
                  −
                </button>

                <button
                  onClick={() => dispatch(INC(item.id))}
                  className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 font-bold"
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(REMOVE(item.id))}
                  className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
