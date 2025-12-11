import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Banner } from "../banner/Banner";

let ProductsData = React.lazy(() => import("../Products/ProductsList"));

export const Product = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Banner />
        <ProductsData />
      </Suspense>
    </>
  );
};
