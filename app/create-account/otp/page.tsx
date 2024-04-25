"use client";

import { Button, Group, PinInput, TextInput } from "@mantine/core";

import Link from "next/link";
import Hero from "@/components/home/hero";
import { Suspense } from "react";
import OtpForm from "@/components/authentication/otp-form";

export interface IVerify {
  email: "";
  verification_code: string;
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
      <Hero text="OTP" />
      <Suspense>
        <OtpForm />
      </Suspense>
    </section>
  );
}
