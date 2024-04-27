import Hero from "@/components/home/hero";
import { Button, Textarea } from "@mantine/core";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import classes from "@/components/home/signup.module.css";
const sessionArray = [
  "Goal Setting",
  "Career Advice",
  "Higher Education",
  "Technology",
];

const relatedList = [
  "College",
  "Marketing",
  "Networking",
  "Work-life Balance",
  "Negotiation Skills",
];

export default function ScheduleDetails() {
  return (
    <main className=" flex flex-col">
      <Hero text="Schedule Details" />
      <div className=" max-w-[1400px] mx-auto flex flex-col gap-[50px] py-[60px]">
        <section className=" flex flex-col gap-[30px] ">
          <article className=" flex flex-col gap-[10px]">
            <h5 className=" font-semibold   text-[30px] text-[#161439]">
              Book a session
            </h5>
            <p className=" text-[#6D6C80] font-normal">
              with{" "}
              <span className=" text-[#6D6C80] font-semibold">
                Ngozi Onwuka
              </span>
            </p>
          </article>
          <article className=" flex gap-[8px] items-center">
            <MdOutlineCalendarToday />
            <p className=" text-[#6D6C80] text-[18px]">Wednesday, 24th July</p>
          </article>
          <article className=" flex gap-[8px] items-center">
            <LuClock3 />
            <p className=" text-[#6D6C80] text-[18px]">30 minutes</p>
          </article>
        </section>

        <div className=" flex flex-col gap-[50px] p-[30px]  border border-[#DFDFDF] rounded-lg">
          <section className=" flex flex-col gap-[49px]">
            <article className=" flex flex-col gap-[18px]">
              <p className=" text-[18px] text-[#161439] font-medium">
                Answer the following questions for the mentor to know you better
              </p>
              <div className=" flex flex-col gap-[10px]">
                <p className="  text-[18px] text-[#161439] font-medium">
                  What do you expect from the session?
                </p>
                <p className=" text-[15px] font-normal">
                  Choose all that apply
                </p>
              </div>
            </article>

            <section className=" flex gap-[44px]">
              {sessionArray?.map((item, idx) => (
                <div
                  key={idx}
                  className=" flex items-center p-[8px] rounded-lg border-purple border "
                >
                  <p className=" text-purple text-[14px]">{item}</p>
                </div>
              ))}
            </section>
          </section>

          <section className=" flex flex-col gap-[49px] ">
            <div className=" flex flex-col gap-[10px]">
              <p className="  text-[18px] text-[#161439] font-medium">
                Ask Ngozi anything related to?
              </p>
              <p className=" text-[15px] font-normal">Choose all that apply</p>
            </div>

            <section className=" flex gap-[44px]">
              {relatedList?.map((item, idx) => (
                <div
                  key={idx}
                  className=" flex items-center p-[8px] rounded-lg border-purple border "
                >
                  <p className=" text-purple text-[14px]">{item}</p>
                </div>
              ))}
            </section>
          </section>
        </div>

        <section className=" flex flex-col gap-[24px]">
          <article className=" flex flex-col gap-[10px]">
            <h5 className="text-[18px] text-[#161439] font-medium">
              Drop a message for your mentor
            </h5>
            <p className=" text-[15px] font-normal">Describe your challenges</p>
          </article>
          <Textarea resize="vertical" />
        </section>

        <Button
          classNames={classes}
          styles={{
            root: {
              alignSelf: "center",
            },
          }}
        >
          {" "}
          Next
        </Button>
      </div>
    </main>
  );
}
