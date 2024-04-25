"use client";

import { Button, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { base64decode } from "nodejs-base64";
import { useSearchParams } from "next/navigation";
import build from "next/dist/build";
import toast from "react-hot-toast";
import MenteeBiodata from "@/components/authentication/mentee-biodata";

// export interface IMenteeBio {
//   name: string;
//   gender: string;
//   institution: string;
//   location: string;
//   parent_email: string;
//   skills: string;
// }

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "0.93px solid #2C2B2B",
    width: "100%",
    paddingLeft: "14px",
  },
};

export default function CreateAccountMentee() {
  // const searchParams = useSearchParams();
  // const auth = searchParams.get("auth");

  // const menteeBioForm = useForm({
  //   initialValues: {
  //     name: "",
  //     gender: "",
  //     institution: "",
  //     location: "",
  //     parent_email: "",
  //     skills: "",
  //   },
  // });

  // const {mutation} = useMutation({
  //   mutationFn: (payload: IMenteeBio) => builder.use().mentee.update_mentee(payload, base64decode(auth as string)),
  //   mutationKey: builder.mentee.update_mentee.get(),
  //   onSuccess(data,variable){
  //     toast.success(`Account created successfully`)
  //   }

  // })

  return (
    <section className="flex flex-col">
      <Hero text="Create Account" />
      <div className="mt-[100px] mb-[200px] bg-[#F9F9F9] py-[68px]">
        <article className="flex justify-between h-[888px] px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[690px] mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[36px] text-black font-semibold leading-[46.8px]">
              Biodata
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              Hey there! We just need a few details from you to get started.
            </p>
          </div>

          <MenteeBiodata />
        </article>
      </div>
    </section>
  );
}
