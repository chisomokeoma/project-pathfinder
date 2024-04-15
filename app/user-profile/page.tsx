import Hero from "@/components/home/hero";
import classes from "@/components/home/signup.module.css";
import { Avatar, Button, PasswordInput, TextInput } from "@mantine/core";
import { Add } from "iconsax-react";
import React from "react";
import { MdAddComment, MdOutlineEmail } from "react-icons/md";
import { RiEdit2Fill, RiEditLine } from "react-icons/ri";

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "0.93px solid #2C2B2B",
    width: "100%",
    flex: 1,
    paddingLeft: "14px",
  },
  label: {
    marginBottom: "5px",
  },
};
export default function UserProfileMentee() {
  return (
    <section className=" flex flex-col">
      <Hero text="Edit Profile" />
      <section className="mt-[100px] mb-[200px] mx-auto flex flex-col gap-[50px]  w-[clamp(421px,59vw,843px)] ">
        <div className=" flex p-6 gap-[70px] items-center bg-purple rounded-[10px]">
          <article>
            <Avatar size="lg" color="#fff" className=" text-white" />
            <Button
              style={{
                height: "50px",
                borderRadius: "50px",
                background: "#ddd",
                color: "#4B0082",
                paddingInline: "30px",
              }}
            >
              <span className="font-semibold text-[16px] ">Add Image +</span>
            </Button>
          </article>

          <section className=" flex flex-col gap-[26px] flex-1 ">
            <div className=" flex flex-col gap-[7px]">
              <article className=" flex gap-[11px] items-center">
                <p className=" text-white text-[24px] font-semibold">
                  Amina Yusuf
                </p>
                <RiEdit2Fill size={24} color="#fff" />
              </article>
              <p className=" text-white">Student</p>
            </div>

            <article className=" flex gap-[24px] items-center">
              <MdOutlineEmail size={24} color="#fff" />
              <div className=" flex gap-2">
                <p className=" text-white">hello.amina@gmail.com</p>

                <RiEdit2Fill size={24} color="#fff" />
              </div>
            </article>
            <TextInput styles={styles} placeholder="Add Bio" />
          </section>
        </div>

        <div className=" flex flex-col flex-1 gap-[50px] px-[20px] pb-[30px] pt-[10px] justify-between  border-[#DFDFDF] border shadow-xl rounded-[10px]">


            <section className=" flex flex-col gap-6 ">
            <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Gender
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="Female"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>

          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Change Password
            </label>
            <article className=" justify-between flex">
              <input
                type="password"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="********"
              />
              <RiEdit2Fill
                size={24}
                color="#6F6F6F"
                className=" cursor-pointer"
              />
            </article>
          </div>

          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Location
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="Lagos, Nigeria"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>

          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Industry
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="Marketing"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>

          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Availability
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="10 hours per week"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>
          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Years of Experience
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="16 years"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>
          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Level of Expertise
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="6 years"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>

          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Skills{" "}
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="Digital Marketing"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>

          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Add Resources{" "}
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="Digital Marketing"
              />
              <MdAddComment size={24} color="#6F6F6F" />
            </article>
          </div>
          <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
            <label
              htmlFor="Gender"
              className=" text-[#6F6F6F] text-[13px] font-semibold"
            >
              Add Interests{" "}
            </label>
            <article className=" justify-between flex">
              <input
                type="text"
                className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                placeholder="Digital Marketing"
              />
              <RiEdit2Fill size={24} color="#6F6F6F" />
            </article>
          </div>
            </section>
        

            <Button classNames={classes}> Done</Button>
        </div>
      </section>
    </section>
  );
}
