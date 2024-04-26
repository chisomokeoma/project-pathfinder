"use client";
import { Avatar, Button, FileInput, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import { useState } from "react";

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
  const [img, setImg] = useState<File | null>(null);
  return (
    <section className="flex flex-col">
      <Hero text="Create a Resource" />
      <div className="mt-[30px] mb-[50px] bg-[#F9F9F9] py-[50px]">
        <article className="flex justify-between h-[888px] px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[690px] mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[36px] text-black font-semibold leading-[46.8px]">
              Creating a Course
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              We need some details of the course you want to create
            </p>
          </div>
          <div className="flex flex-col gap-[65.8px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-2">
                <p className="text-medium-12 text-blue-50">
                  Upload course preview photo
                </p>
                <div className="flex gap-6 items-center">
                  <label
                    htmlFor="file-input"
                    className="relative cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-[-8px] right-[-8px]"
                    >
                      <rect width="20" height="20" rx="5" fill="#3851DD" />
                      <path
                        d="M7.81657 14.1663H12.1832C13.3332 14.1663 13.7916 13.4622 13.8457 12.6038L14.0624 9.16217C14.1207 8.26217 13.4041 7.49967 12.4999 7.49967C12.2457 7.49967 12.0124 7.35384 11.8957 7.12884L11.5957 6.52467C11.4041 6.14551 10.9041 5.83301 10.4791 5.83301H9.52491C9.09574 5.83301 8.59574 6.14551 8.40407 6.52467L8.10407 7.12884C7.98741 7.35384 7.75407 7.49967 7.49991 7.49967C6.59574 7.49967 5.87907 8.26217 5.93741 9.16217L6.15407 12.6038C6.20407 13.4622 6.66657 14.1663 7.81657 14.1663Z"
                        stroke="white"
                        strokeWidth="0.9375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.375 8.33301H10.625"
                        stroke="white"
                        strokeWidth="0.9375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99992 12.5003C10.7458 12.5003 11.3541 11.892 11.3541 11.1462C11.3541 10.4003 10.7458 9.79199 9.99992 9.79199C9.25409 9.79199 8.64575 10.4003 8.64575 11.1462C8.64575 11.892 9.25409 12.5003 9.99992 12.5003Z"
                        stroke="white"
                        strokeWidth="0.9375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <FileInput
                      id="file-input"
                      value={img}
                      onChange={setImg}
                      className="hidden"
                      accept="image/png,image/jpeg"
                    />
                    {img ? (
                      <Avatar
                        size={64}
                        radius={8}
                        src={URL.createObjectURL(img)}
                      />
                    ) : (
                      <svg
                        width="64"
                        height="65"
                        viewBox="0 0 64 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.690918"
                          width="64"
                          height="64"
                          rx="8"
                          fill="#F0F4FE"
                        />
                        <path
                          d="M42.6666 44.6909V42.0243C42.6666 40.6098 42.1047 39.2532 41.1045 38.253C40.1043 37.2528 38.7477 36.6909 37.3333 36.6909H26.6666C25.2521 36.6909 23.8955 37.2528 22.8953 38.253C21.8952 39.2532 21.3333 40.6098 21.3333 42.0243V44.6909M37.3333 26.0243C37.3333 28.9698 34.9454 31.3576 31.9999 31.3576C29.0544 31.3576 26.6666 28.9698 26.6666 26.0243C26.6666 23.0787 29.0544 20.6909 31.9999 20.6909C34.9454 20.6909 37.3333 23.0787 37.3333 26.0243Z"
                          stroke="#3851DD"
                          strokeWidth="2.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </label>
                  <div className="flex flex-col">
                    {/* <p>  Upload course preview photo</p> */}
                    <p className="text-medium-12 text-grey-70">
                      Maximum size is 1MB
                    </p>
                    <p className="text-normal-12 text-grey-50">
                      Supported file type: jpg, jpeg, png
                    </p>
                  </div>
                </div>
              </div>
              <TextInput  styles={styles} placeholder="Title" />
              <TextInput styles={styles} placeholder="Category" />
              <TextInput styles={styles} placeholder="Level" />
              <TextInput styles={styles} placeholder="No of students" />
              <TextInput styles={styles} placeholder="Course duration" />
              <TextInput styles={styles} placeholder="Price" />
              <TextInput styles={styles} placeholder="Level of Expertise" />
              <TextInput
                styles={styles}
                placeholder="No of students graduated"
              />
              {/* <TextInput styles={styles} placeholder="Location" /> */}
            </div>
            <div className="flex flex-col gap-7">
              <Link className="w-full" href="/create-account/verification">
                <Button classNames={classes}>Submit</Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
