import {create} from "zustand";

export const useLoginStore = create<{
    email: any,
    password: any,
    setEmail: (email: any) => void,
    setPassword: (email: any) => void
}>(set => ({
    email: '',
    password: '',
    setEmail: (email: any) => set((state): any => ({...state, email})),
    setPassword: (password: any) => set((state): any => ({...state, password})),
}));