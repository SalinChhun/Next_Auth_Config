
import {AuthRequest} from "@/app/types/auth";
import {http} from "@/utils/http";


const ServiceId = {
    LOGIN: '/api/v1/auth/login',
    THIRD_PARTY_LOGIN: '/api/v1/auth/third-party/login'
    // SIGNUP: '/api/wtx/ca/v1/auth/signup',
    // AUTH: '/api/wtx/ca/v1/auth',
}

const login = (data: AuthRequest) => {
    return http.post(ServiceId.LOGIN, data)
}

const thirdPartyLogin = (data: AuthRequest) => {
    return http.post(ServiceId.THIRD_PARTY_LOGIN, data)
}

export const authService = {
    login,
    thirdPartyLogin
}

export default authService;