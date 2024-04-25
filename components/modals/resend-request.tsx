"use client";

import Image from "next/image";
import { useContext } from "react";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import { CgCloseR } from "react-icons/cg";
import { Button } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import { FcAcceptDatabase } from "react-icons/fc";

export default function ResendRequest() {
  const { setModalState, close } = useContext(ModalContext) as IModalContext;
  return (
    <main className=" w-[496px] items-center h-[400px] px-[20px] ">
      <div className=" flex items-end  justify-end">
        <CgCloseR
          size={30}
          className=" cursor-pointer"
          onClick={() => close()}
        />
      </div>
      <section className="flex-col w-full p-[2px] gap-[40px] flex">
        <div className=" items-center flex flex-col gap-[14px]">

      <FcAcceptDatabase  size={200} className=" text-center items-center"/>
        <p className=" text-[18px] font-semibold">Are you sure you want to resend this request?</p>
        </div>



        <div className=" items-center flex justify-between">
          <Button
            onClick={() => close()}
            styles={{
              root: {
                background: "#fff",
                color: "#000",
                border: "1px solid #000",

                height: "49px",
                paddingInline: "32px",
                borderRadius: "50px",
                width: "fit-content",
              },
            }}
          >
            <span className="flex items-center text-base font-semibold leading-[17.92px]  gap-1">
              Cancel
            </span>
          </Button>

          <Button
            onClick={() => close()}
            styles={{
              root: {
                background: "#4B0082",
               

                height: "49px",
                paddingInline: "32px",
                borderRadius: "50px",
                width: "fit-content",
                "&:hover": {
                  backgroundColor: "#7630F7",
                },
              },
            }}
          >
            <span className="flex items-center text-base font-semibold leading-[17.92px]  gap-1">
              Yes
            
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
}
