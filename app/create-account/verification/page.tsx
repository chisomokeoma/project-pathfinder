"use client"

import { Button, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import Image from "next/image";
import {useRouter} from "next/navigation"

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
  const {push} = useRouter()
  return (
    <section className="flex flex-col">
      <Hero text="Verification" />
      <div className="mt-[30px] mb-[50px] bg-[#F9F9F9] py-[58px]">
        <article className="flex gap-[50px] items-center h-[650px] px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[590px] mx-auto flex-col">
          <div className="flex flex-col items-center gap-[21px]">
            <Image
              src="/verification.png"
              alt="verification icon"
              width={300}
              height={300}
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-[36px] font-semibold leading-[46.8px] text-[#161439]">
                Verify Your Email
              </h2>
              <p className="text-base leading-7 text-[#161439] text-center">
                Almost there! We&apos;ve sent a mail to a******@gmail.com.
                Please verify by clicking the link sent to this mail
              </p>
            </div>
          </div>
          <div className=" flex flex-col ">


          <Button classNames={classes} style={{ width: '350px'}} onClick={() => push('./otp')}>
            Send OTP
          </Button>
          <Link href='#'>


          <p className=" flex text-[13px] text-red-700 font-medium cursor-pointer self-end justify-end" > Resend Email</p>
          </Link>
            
          </div>
        </article>
      </div>
    </section>
  );
}
