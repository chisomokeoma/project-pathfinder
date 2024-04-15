import { Button, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import Image from "next/image";

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
      <Hero text="Verification" />
      <div className="mt-[100px] mb-[200px] bg-[#F9F9F9] py-[68px]">
        <article className="flex gap-[106px] items-center h-[888px] px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[690px] mx-auto flex-col">
          <div className="flex flex-col items-center gap-[71px]">
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
          <Button classNames={classes} style={{ width: "fit-content" }}>
            Resend Email
          </Button>
        </article>
      </div>
    </section>
  );
}
