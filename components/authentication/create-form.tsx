"use client";

import { TextInput, PasswordInput, Button } from "@mantine/core";
import { Link } from "iconsax-react";
import { Loader, FacebookIcon, AppleIcon } from "lucide-react";
import React from "react";
import GoogleIIcon from "../icons/google-icon";
import { builder } from "@/api/builder";
import { errorMessageHandler, ErrorType } from "@/utils/error-handler";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import classes from "@/components/home/signup.module.css";
import { base64encode } from "nodejs-base64";

export interface ICreateForm {
  email: string;
  password: string;
  name: string;
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

function CreateForm() {
  const createForm = useForm<ICreateForm>({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const { push } = useRouter();
  // create for mentor
  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      view === "mentee"
        ? builder.use().authentication.create_account_mentee(createForm.values)
        : builder.use().authentication.create_account(createForm.values),
    mutationKey: builder.authentication.create_account.get(),
    onSuccess({ data }, variables, contex) {
      toast('Registration Successful');
      push(`create-account/verification?auth=${base64encode(data?._id)}`)
      // if (view === "mentee") {
      //   toast.success("Mentee created successfully");
      //   push(`/create-account/mentee/age?auth=${base64encode(data?._id)}`);
      // } else {
      //   toast.success("Mentor created successfully");
      //   push(`/create-account/mentor/biodata?auth=${base64encode(data?._id)}`);

      // }
    },
    onError(error) {
      errorMessageHandler(error as ErrorType);
    },
  });

  return (
    <form
      className="w-[413px] mx-auto"
      onSubmit={createForm.onSubmit(() => mutate())}
    >
      <div className="flex gap-10 pt-6 flex-col">
        <TextInput
          styles={styles}
          placeholder="Name"
          {...createForm.getInputProps("name")}
        />
        <TextInput
          styles={styles}
          placeholder="Email"
          {...createForm.getInputProps("email")}
        />
        <PasswordInput
          styles={styles}
          placeholder="Passsword"
          {...createForm.getInputProps("password")}
        />
      </div>
      {/* <Link
      className="w-full mt-[13px]"
      href="/"
    > */}

      <Button
      
        styles={{
          root: {
            marginTop: "12px",
          },
        }}
        classNames={classes}
        type="submit"
        loading={isLoading}
      >
        Submit
      </Button>
      {/* </Link> */}
      <div className="mt-[67px] flex gap-6 flex-col items-center">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Or Sign Up With
        </p>
        <div className="flex gap-10 items-center">
          <GoogleIIcon />
          <FacebookIcon />
          <AppleIcon />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Already have an account?
          <Link
            href="/create-account/mentor/biodata"
            className="text-[#64748B] text-[20.8px] leading-[25.36px]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default CreateForm;
