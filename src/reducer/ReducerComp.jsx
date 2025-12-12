import { useReducer, useState } from "react";
import { Wish } from "./Wish";

export const ReducerComp = ({ onClose }) => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [userD, setUserD] = useState({
    email: "",
    name: "",
  });

  const [err, setErr] = useState("");

  const [entry, dispatch] = useReducer(validateFun, null);

  function validateFun(previous, action) {
    switch (action.type) {
      case "CLICK":
        return (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <Wish />
          </div>
        );
      default:
        return previous;
    }
  }

  function handleChange(e) {
    setUserD((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userD.email === userData.email && userD.name === userData.name) {
      setErr("");
      dispatch({ type: "CLICK" });
    } else {
      setErr("Invalid Details");
    }
  }

  return (
    <>
      {entry}
      <div
        className="bg-white w-full max-w-sm p-5 rounded-xl shadow-2xl border border-gray-200 
                    flex flex-col gap-4"
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✖
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userD.email}
            onChange={handleChange}
            className="p-2 border rounded-lg border-gray-300"
          />

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={userD.name}
            onChange={handleChange}
            className="p-2 border rounded-lg border-gray-300"
          />
          {err && <p className="text-red-500 text-center font-medium">{err}</p>}

          <button
            className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg 
                     hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};
