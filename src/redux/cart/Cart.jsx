import { useDispatch, useSelector } from "react-redux";
import { DEC, INC, REMOVE } from "./CartSlice";

export const Cart = () => {
  const data = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 items-center border p-4 mb-4 rounded bg-white"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-24 h-24 object-contain"
          />

          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price}</p>
            <p className="text-sm">Quantity: {item.quantity}</p>
          </div>

          <div className="font-semibold">
            ${item.price * item.quantity}
          </div>
          <button onClick={()=>dispatch(REMOVE(item.id))}>Remove</button>
          <button onClick={()=>dispatch(INC(item.id))}>INC</button>
          <button onClick={()=>dispatch(DEC(item.id))}>DEC</button>
        </div>
      ))}
    </div>
  );
};
