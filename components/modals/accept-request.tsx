"use client";

import Image from "next/image";
import { useContext } from "react";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import { CgCloseR } from "react-icons/cg";
import { Button } from "@mantine/core";
import { ArrowRight } from "iconsax-react";

export default function AcceptRequest() {
  const { setModalState, close } = useContext(ModalContext) as IModalContext;
  return (
    <main className=" w-[496px] items-center h-[500px] ">
      {/* <div className=" flex items-end  justify-end">
        <CgCloseR
          size={30}
          className=" cursor-pointer"
          onClick={() => close()}
        />
      </div> */}
      <section className="flex-col w-full p-[24px] gap-[50px] flex">
        <p>Are you sure you want to accept this request?</p>

        {/* <div className=" items-center flex justify-center">
          <Button
            onClick={() => close()}
            styles={{
              root: {
                background: "#fff",
                color: "#000",

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
                boxShadow: "4px 6px 0px 0px #7630F7",

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
        </div> */}
      </section>
    </main>
  );
}
