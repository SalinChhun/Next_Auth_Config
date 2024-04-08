import {http} from "@/utils/http";
import {BaseResponse, ColorResponse} from "@/app/types/common";

const ServiceId = {
    COLOR: '/api/v1/color',
}

const getColorList = async (): Promise<ColorResponse[]> => {
    const result = await http.get(ServiceId.COLOR + `/getAllColor`);
    return result.data?.data;
}

export const colorService = {
    getColorList,
}