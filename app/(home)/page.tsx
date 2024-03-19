"use client"
import {useFormContextState} from "@/app/lib/hooks/useFormState";
import {useReducer} from "react";

// export const metadata = {
//     title: 'PhoneShop | Landing-Page',
//     description: 'Powered by Khmer',
// }
export default function Home() {

    const baseUrl= `${process.env.NEXT_PUBLIC_BASE_URL}`;

    return (
        <>
            <a href={baseUrl+"/login"}>
                <button>Signin</button>
            </a>
        </>
    );
};