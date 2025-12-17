import { useSelector } from "react-redux";

export const Cart = () => {
  const data = useSelector((state) => state.cart);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Cart</h1>

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
        </div>
      ))}
    </div>
  );
};
