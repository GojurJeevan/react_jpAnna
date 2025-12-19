// import React, { Suspense } from "react";
// import Loader from "../Loader/Loader";
// import { Banner } from "../banner/Banner";
import { CardsAPI } from "../redux/Cards/CardsAPI";

// let ProductsData = React.lazy(() => import("../Products/ProductsList"));

export const Product = () => {
  return (
    <>
      {/* <Suspense fallback={<Loader />}>
      <Banner />
        <ProductsData />

      </Suspense> */}

      <CardsAPI />
    </>
  );
};
