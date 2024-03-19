"use client"
import {signOut} from "next-auth/react";

const ProductList = () => {


    const handleLogout = () => {
        if (confirm("Do you really want to Logout?")) {
            signOut();
        }
    }

    return (
        <>
            <h1>All Product List</h1>
            <button onClick={handleLogout}>Log Out</button>
        </>
    )

}
export default ProductList;