
import {AuthRequest} from "@/app/types/auth";
import {http} from "@/app/utils/http";


const ServiceId = {
    LOGIN: '/api/v1/auth/login',
    // SIGNUP: '/api/wtx/ca/v1/auth/signup',
    // AUTH: '/api/wtx/ca/v1/auth',

}

const login = (data: AuthRequest) => {
    return http.post(ServiceId.LOGIN, data)
}

export const authService = {
    login,
}

export default authService;