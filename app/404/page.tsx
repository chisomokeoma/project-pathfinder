import Hero from "@/components/home/hero";
import classes from "@/components/home/signup.module.css";
import { Button } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import React from "react";

export default function ErrorPage() {
  return (
    <section className="flex flex-col">
      <Hero text="Error!!!" />

      <div className=" py-[68px] ">
        <div className="flex flex-col items-center gap-[30px] ">
          <Image src="/404.png" alt="404 icon" width={300} height={300} />
          <article className=" flex flex-col gap-[50px] items-center ">
            <div className=" flex flex-col gap-1 items-center">
              <h4 className=" text-[40px] text-[#161439] font-semibold">
                ERROR PAGE!
              </h4>
              <h4 className="text-center  text-[20px] text-[#161439] font-semibold">
                Sorry! This Page is Not Available!
              </h4>
            </div>

            <Button
              styles={{
                root: {
                  boxShadow: "4px 6px 0px 0px #7630F7",
                  background: "#4B0082",
                  height: "49px",
                  paddingInline: "32px",
                  borderRadius: "50px",
                  width: "fit-content",
                
                },
              }}
            >
              <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                Go To Home Page
                <ArrowRight size={14} color="white" />
              </span>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
