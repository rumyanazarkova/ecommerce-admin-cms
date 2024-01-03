import { create } from "zustand";

interface useModalStoreInterface{
    isOpen: boolean
    onOpen:()=>void
    onClose:()=>void
}

export const useStoreModal=create<useModalStoreInterface>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose: ()=>set({isOpen:false})
}))