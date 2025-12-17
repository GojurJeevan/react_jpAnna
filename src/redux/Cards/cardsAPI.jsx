import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./cardsAPISlice";
import axios from "axios";

export const CardsAPI = () => {
  const apiData = useSelector((state) => state.productsAPI);
  const dispatch = useDispatch();
  
  return (
    <>
      
    </>
  );
};
