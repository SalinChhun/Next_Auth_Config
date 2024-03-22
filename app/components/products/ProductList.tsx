"use client"
import {signOut} from "next-auth/react";
import useFetchProducts from "@/app/lib/hooks/useFetchProducts";
import {Product} from "@/app/types/common";
import CreateProduct from "@/app/components/products/CreateProduct";

const ProductList = () => {

    const {product_list} = useFetchProducts();
    console.log(product_list)
    const handleLogout = () => {
        if (confirm("Do you really want to Logout?")) {
            signOut();
        }
    }

    return (
        <>
            <div className="container">
                <CreateProduct/>
                <div className="row">
                    {product_list?.products?.map((product: Product) => (
                        <div className="col-md-4 mb-4" key={product?.product_id}>
                            <div className="card" style={{width: "18rem"}}>
                                <img src={product?.product_images[0]?.image_url} className="card-img-top"
                                     alt={product?.product_name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{product?.product_name}</h5>
                                    <p className="card-text">
                                        {product?.model_name} {product?.color_name}
                                    </p>
                                    <p className="card-text">
                                        Price: ${product?.sale_price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleLogout}>Log Out</button>
        </>
    )

}
export default ProductList;