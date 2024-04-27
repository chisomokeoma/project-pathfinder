import Hero from "@/components/home/hero";
import ScheduleBtn from "@/components/mentee/schedule-btn";
import ScheduleDate from "@/components/mentee/schedule-date";
import { NumberInput, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { Suspense, useState } from "react";

const styles = {
  root: {
    flex: 1,
  },
  input: {
    minWidth: "278px",
    height: "30px",
    border: "1px solid #161439",
  },
  label: {
    paddingBottom: "4px",
    fontSize: "16px",
  },
};

const sessionList = [
  {
    name: "Morning session",
    children: [{ time1: "8:00 am", time2: "9:00 am", time3: "10:00 am" }],
  },
  {
    name: "Afternoon session",
    children: [{ time1: "1:00 am", time2: "2:00 am", time3: "3:00 am" }],
  },
  {
    name: "Evening session",
    children: [{ time1: "4:00 am", time2: "5:00 am", time3: "6:00 am" }],
  },
];

export default function ScheduleSession() {
  return (
    <section className=" flex flex-col">
      <Hero text="Schedule Session" />
      <section className=" flex flex-col gap-[50px] px-[200px] py-[50px]  items-center   flex-1  ">
        <div className=" flex flex-col gap-[20px] w-full">
          <p className=" text-[24px] font-bold text-[#161439]">
            Schedule meeting
          </p>
          <div className=" flex gap-[20px] items-center w-full">
            <NumberInput
              styles={styles}
              label="Duration"
              placeholder="30 mins"
            />

            <TextInput
              styles={styles}
              placeholder="Olamide Adeyemi"
              label="Mentee"
            />
          </div>
        </div>
        <div className=" flex justify-between gap-[60px]">
          <section className=" flex flex-col gap-[20px] ">
            <p className=" text-[#161439] font-semibold text-[20px]">Choose date</p>

            <ScheduleDate />
          </section>

          <div className=" px-[60px] py-[30px] flex flex-col gap-[60px] bg-[#ECE8FF] w-[700px] ">
            <article className=" flex flex-col gap-1">
              <p className="text-[20px] font-semibold">
                {" "}
                Select Time Availability
              </p>
              <p className=" text-[16px] font-normal text-[#5e5e5e]">
                {" "}
                30 mins - 1 hour mentor call
              </p>
            </article>

            <div className=" flex flex-col gap-[35px] ">
              <section className=" flex flex-col gap-[32px]">
                {sessionList.map((item, idx) => (
                  <>
                    <article className=" flex items-center px-[11px] py-[9px] rounded-lg bg-white border border-[#ddd]">
                      <p className=" text-[#777575] font-semibold ">
                        {item.name}
                      </p>
                    </article>

                    <div className=" flex gap-[27px]">
                      {item.children?.map((ele) => (
                        <>
                          <article className=" flex items-center px-[11px] py-[9px] rounded-lg bg-white border border-[#ddd] cursor-pointer hover:border-[#4B0082] ">
                            <p className=" text-[#777575] font-semibold ">
                              {ele?.time1}
                            </p>
                          </article>
                          <article className=" flex items-center px-[11px] py-[9px] rounded-lg bg-white border border-[#ddd] cursor-pointer hover:border-[#4B0082] ">
                            <p className=" text-[#777575] font-semibold ">
                              {ele?.time2}
                            </p>
                          </article>
                          <article className=" flex items-center px-[11px] py-[9px] rounded-lg bg-white border border-[#ddd] cursor-pointer hover:border-[#4B0082]">
                            <p className=" text-[#777575] font-semibold ">
                              {ele?.time3}
                            </p>
                          </article>
                        </>
                      ))}
                    </div>
                  </>
                ))}
              </section>
            </div>
          </div>
        </div>



<Suspense>

        <ScheduleBtn/>
</Suspense>
      </section>
    </section>
  );
}
 