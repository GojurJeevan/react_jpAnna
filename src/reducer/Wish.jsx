import { useEffect, useState } from "react";


export const Wish = ({ onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="bg-emerald-500 p-10 rounded-xl shadow-xl text-center">
      <h1 className="text-2xl font-bold">
        Congrats! You are Registered
      </h1>
    </div>
  );
};
