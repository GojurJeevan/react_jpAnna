import React, { Suspense } from "react"
import Loader from "../Loader/Loader"


let ProductsData = React.lazy(()=> import("../Products/ProductsList")) 


export const Product = () => {
    return(
        <>
            <h1 className="text-3xl font-bold mb-5">Products</h1>
            
            <Suspense fallback={<Loader/>}>
                <ProductsData />
            </Suspense>
            
        </>
    )
}