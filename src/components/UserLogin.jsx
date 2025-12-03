import { useState } from "react";
import { SignUp } from "../userenter/SignUp";
import Login from "../userenter/Login";

export const UserLogin = () => {
  const [entry, setEntry] = useState(false);

  return <>{entry ? <SignUp /> : <Login />}</>;
};
