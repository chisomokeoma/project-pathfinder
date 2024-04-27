import { createBuilder } from "@ibnlanre/portal";
import { API, APILOGIN } from "./axios-config";
import { ICreateForm } from "@/app/create-account/details/page";
import { ISignUp } from "@/types";
import { IMenteeBio } from "@/components/authentication/mentee-biodata";
import { IMentorForm } from "@/app/create-account/mentor/biodata/page";
import { ILogin } from "@/components/authentication/login-form";

export const builder = createBuilder({
  authentication: {
    create_account: (data: ICreateForm) =>
      APILOGIN.post<ISignUp>(`auth/mentor/signup`, data),
    create_account_mentee: (data: ICreateForm) =>
      APILOGIN.post<ISignUp>(`auth/mentee/signup`, data),
      verify_mentee: (id: string) => APILOGIN.post(`auth/mentee/${id}/verify`),
      login_mentee: (data: ILogin) => APILOGIN.post(`auth/mentee/login`, data),
      login_mentor: (data: ILogin) => APILOGIN.post(`auth/mentor/login`, data)
  },

  mentee: {
    update_mentee: (data: IMenteeBio, id: string) =>
      APILOGIN.post(`mentor/${id}/update`, data),
  
  },

  mentor: {
    update_mentor: (data: IMentorForm, id: string) =>
      APILOGIN.post(`mentor/${id}/update`, data),
     mentor_list : () => API.get(`mentor`)

  },
});
