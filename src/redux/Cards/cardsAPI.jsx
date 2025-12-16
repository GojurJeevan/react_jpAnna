import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { a } from "./cardsAPISlice";

export const CardsAPI = () => {
  const apiData = useSelector((state) => state.productsAPI);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(a())
  },[dispatch])

  return (
    <>
      {apiData.map((item)=>
        <p key={item.id}>{item.title}</p>
    )}
    </>
  );
};
