import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { ICreateForm } from "@/app/create-account/details/page";
import { ISignUp } from "@/types";
import { IMenteeBio } from "@/components/authentication/mentee-biodata";


export const builder =  createBuilder({

    authentication : {
        create_account: (data : ICreateForm) => API.post<ISignUp>(`auth/mentor/signup`, data),
        create_account_mentee: (data : ICreateForm) => API.post<ISignUp>(`auth/mentee/signup`, data)
       
    },

    mentee : {
        update_mentee: (data : IMenteeBio,id: string) =>  API.post(`mentor/${id}/update`, data),
        verify : (id: string) => API.post(`mentee/${id}/verify`)
    }

})