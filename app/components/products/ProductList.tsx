"use client"
import {signOut} from "next-auth/react";
import useFetchProducts from "@/app/lib/hooks/useFetchProducts";
import CreateProduct from "@/app/components/products/CreateProduct";
import {getCoreRowModel, useReactTable, VisibilityState} from "@tanstack/react-table";
import {useSortingState} from "@/app/lib/hooks/useSortingState";
import React, {useEffect} from "react";
import {DefaultColumns} from "@/app/components/products/DefaultColumns";
import DataTable from "@/app/components/shared/DataTable";
import PaginationUI from "@/app/components/shared/Pagination";

const ProductList = () => {

    const {product_list, pagination} = useFetchProducts();
    const {sorting, onSortingChange} = useSortingState();
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

    const handleLogout = () => {
        if (confirm("Do you really want to Logout?")) {
            signOut();
        }
    }

    const table = useReactTable({
        enableGlobalFilter: false,
        data: product_list,
        columns: DefaultColumns,
        state: {
            sorting,
            columnVisibility,
        },
        onSortingChange: onSortingChange,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        manualPagination: true,
        enableMultiSort: true,
        enableSortingRemoval: false,
        onColumnVisibilityChange: setColumnVisibility
    })



    return (
        <>
            <CreateProduct/>
            <div id="ks_wt_app_main_content" className="ks_d_flex ks_flex_col ks_h100">
                <div className="ks-wt-element-group-container ks_d_flex ks_alg_itm_ctr">
                    <DataTable
                        table={table}
                        // handleRowClick={(data) => {
                        //     setOpen(true);
                        //     setIsUpdate(true);
                        //     setUpdateData(data);
                        // }}
                        // rowActions={(row) => {
                        //     return (
                        //         <CustomerPreviewAction
                        //             taxId={row.original.tax_id}
                        //         />
                        //     );
                        // }}
                        tableCustomClass="ks-table-no-border"
                    />
                </div>
                <PaginationUI data={pagination!}/>
            </div>

            <button onClick={handleLogout}>Log Out</button>
        </>
    )

}
export default ProductList;