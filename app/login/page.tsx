import { Button, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import Image from "next/image";
import GoogleIIcon from "@/components/icons/google-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import AppleIcon from "@/components/icons/apple-icon";

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

export default function Login() {
  return (
    <section className="flex flex-col">
      <Hero text="Sign In" />
      <div className="mt-[100px] h-[888px] mb-[200px] bg-[#F9F9F9] py-[68px]">
        <div className="w-[1248px] h-full mx-auto flex">
          <div className="w-[40%] h-full flex items-center justify-center bg-[#4B0082] px-5 bg-cover bg-no-repeat bg-[url(/background-pattern)]">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[56px] font-bold leading-[83.2px] tracking-[4%] text-[#FDFDFD]">
                Welcome Back!
              </h3>
              <p className="font-medium text-center max-w-[390px] text-[#FDFDFD] leading-[26px] tracking-[4%]">
                Sign in to access all features
              </p>
            </div>
          </div>
          <div className="flex-1 -ml-[38px] py-10 pt-20 flex flex-col bg-[#FDFDFD] rounded-l-[34.67px] h-full">
            <h3 className="text-[55.47px] text-center font-bold leading-[83.2px] tracking-[4%]">
              Sign In
            </h3>
            <div className="w-[413px] mx-auto">
              <div className="flex gap-10 pt-6 flex-col">
                <TextInput styles={styles} placeholder="Name" />
                <TextInput styles={styles} placeholder="Gender" />
                <TextInput styles={styles} placeholder="Email" />
                <Link className="w-full mt-20" href="/">
                  <Button classNames={classes}>Sign In</Button>
                </Link>
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
                  Forgot Password?{" "}
                  <Link
                    href=""
                    className="text-[#64748B] text-[20.8px] leading-[25.36px]"
                  >
                    Reset
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
