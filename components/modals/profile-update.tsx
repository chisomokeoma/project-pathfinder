"use client";

import Image from "next/image";
import { useContext } from "react";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import { CgCloseR } from "react-icons/cg";
import { Button } from "@mantine/core";
import { ArrowRight } from "iconsax-react";

export default function ProfileUpdate() {
  const { setModalState, close } = useContext(ModalContext) as IModalContext;
  return (
    <main className=" w-[496px] items-center h-[500px] ">
      <div className=" flex items-end  justify-end">
        <CgCloseR size={30} className=" cursor-pointer"  onClick={() => close()}/>
      </div>
      <section className="flex-col w-full p-[24px] gap-[50px] flex">
        <div className=" flex flex-col gap-[20px] items-center">
          <figure className=" w-[200px]">

          <Image className=" w-full"
            src="/success.png"
            alt="success icon"
            width={300}
            height={300}
          />
          </figure>

            <article className=" flex flex-col gap-[10px] items-center">

          <h3 className="text-[#17191B] text-[30px] font-semibold">Profile Updated Successfully</h3>
          <p className=" font-normal text-[20px] text-[#27292D] text-center ">It may take a few minutes for changes to be effected </p>
            </article>
             

       
        </div>

        <div className=" items-center flex justify-center">
        <Button  onClick={() => close()}
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
                Back to Home
                <ArrowRight size={14} color="white" />
                 
                </span>
 </Button>
        </div>

  
      



      </section>
    </main>
  );
}
