import {http} from "@/utils/http";
import {BaseResponse, ProductResponse} from "@/app/types/common";

const ServiceId = {
    PRODUCT: '/api/v1/product',
}

const createProduct = (requestBody: any) => {
    return http.post(ServiceId.PRODUCT + '/createNewProduct',requestBody).catch(err => err);
}

const getProductList = async (params: any): Promise<BaseResponse<ProductResponse>> => {
    const result = await http.get(ServiceId.PRODUCT + `/getAllProducts`, {params});
    return result.data?.data;
}

export const productService = {
    getProductList,
    createProduct
}