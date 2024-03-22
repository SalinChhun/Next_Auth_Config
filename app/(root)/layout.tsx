import {PropsWithChildren} from "react";
// import "@/app/styles/ks_bootstrap.css";
// import "@/app/styles/we-tax.css";
import "@/app/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NextAuthProvider from "@/app/components/NextAuthProvider";
// import NextAuthProvider from "@/app/components/NextAuthProvider";
// import {Navbar, NextAuthProvider} from "@/app/components/layout";


const RootLayout = async ({
  children
}: PropsWithChildren) => {

    return (
        <html lang="en">
        <body>
        <NextAuthProvider>
            <div className="ks_d_flex ks_flex_col ks_flex_root">
                <div className="ks_d_flex ks_flex_col ks_flex_col_fluid">
                    {/*<Navbar/>*/}
                    <div className="ks_d_flex ks_flex_col ks_flex_row_fluid" id="ks_wt_app_wrapper">
                        {/*<Sidebar/>*/}
                        {children}
                    </div>
                </div>
            </div>
        </NextAuthProvider>
        </body>
        </html>
    );
};

export default RootLayout;

