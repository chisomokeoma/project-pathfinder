"use client";
import { TextInput } from "@mantine/core";
import React from "react";

import { Button, PasswordInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import GoogleIIcon from "@/components/icons/google-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import AppleIcon from "@/components/icons/apple-icon";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

export interface ILogin {
  name: string;
  password: string;
  email: string;
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
export default function LoginForm() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  const loginForm = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: () =>
      view === "mentor"
        ? builder.use().authentication.login_mentee(loginForm?.values)
        : builder.use().authentication.login_mentor(loginForm.values),
    mutationKey: builder.authentication.login_mentee.get(),
    onSuccess(data, variable) {
      console.log(data);
      toast.success("Login successful");
      //  cookieStorage.setItem('')
    },
  });
  return (
    <form
      className="w-[413px] mx-auto"
      onSubmit={loginForm.onSubmit(() => mutate())}
    >
      <div className="flex gap-10 pt-6 flex-col">
        <TextInput
          styles={styles}
          placeholder="Name"
          {...loginForm.getInputProps("name")}
        />
        <PasswordInput
          styles={styles}
          placeholder="Passsword"
          {...loginForm.getInputProps("password")}
        />
        <TextInput
          styles={styles}
          placeholder="Email"
          {...loginForm.getInputProps("email")}
        />
        {/* <Link className="w-full mt-20" href=''> */}
        <Button classNames={classes} type="submit">
          Sign In
        </Button>
        {/* </Link> */}
      </div>
      <div className="mt-[67px] flex gap-6 flex-col items-center">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Or Sign In With
        </p>
        <div className="flex gap-10">
          <GoogleIIcon />
          <FacebookIcon />
          <AppleIcon />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Forgot Password?
          <Link
            href=""
            className="text-[#64748B] text-[20.8px] leading-[25.36px]"
          >
            Reset
          </Link>
        </p>
      </div>
    </form>
  );
}
