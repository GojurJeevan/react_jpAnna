import { useEffect, useState } from "react";

export const Wish = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-10 rounded-xl shadow-xl text-center">
      {show && (
        <h1 className="text-2xl font-bold">Congrats! You are Registered 🎉</h1>
      )}
    </div>
  );
};
