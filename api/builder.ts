import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { ICreateForm } from "@/app/create-account/details/page";

export const builder =  createBuilder({

    authentication : {
        create_account: (data : ICreateForm) => API.post(`auth/mentor/signup`, data),
        create_account_mentee: (data : ICreateForm) => API.post(`auth/mentee/signup`, data)
        
    }

})