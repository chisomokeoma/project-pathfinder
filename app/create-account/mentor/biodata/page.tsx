import { Button, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useSearchParams } from "next/navigation";
import { base64decode } from "nodejs-base64";
import toast from "react-hot-toast";
import MentorBiodata from "@/components/mentors/mentor-biodata";
import { Suspense } from "react";

export interface IMentorForm {
  name: string;
  gender: string;
  email: string;
  industry: string;
  yearsOfExperience: string;
  levelOfExpertise: string;
  availability: string;
  location: string;
}

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

export default function CreateAccountMentor() {
 
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
          <Suspense>
            <MentorBiodata />
          </Suspense>
        </article>
      </div>
    </section>
  );
}
