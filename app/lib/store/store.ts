import {create} from "zustand";

export const useLoginStore = create<{
    email: any,
    setEmail: (email: any) => void
}>(set => ({
    email: '',
    setEmail: (email: any) => set((state): any => ({...state, email})),
}));