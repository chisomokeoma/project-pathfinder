"use client";

import Image from "next/image";
import { useContext } from "react";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import { CgCloseR } from "react-icons/cg";
import { Button } from "@mantine/core";

export default function SuccessSchedule() {
  const { setModalState, close } = useContext(ModalContext) as IModalContext;
  return (
    <main className=" w-[496px] items-center h-[350px] ">
      <div className=" flex items-end  justify-end">
        <CgCloseR size={30} className=" cursor-pointer"  onClick={() => close()}/>
      </div>
      <section className="flex-col w-full p-[24px] gap-[50px] flex">
        <div className=" flex flex-col gap-[20px]">
          <h3 className="text-[#17191B] text-[30px] font-semibold">Congratulations!!! </h3>
          <p className=" font-normal text-[20px] text-[#27292D]">Your appointment has been booked successfully. To ensure you don’t miss your appointment, add the scheduled time to your calendar.  </p>
        </div>
      
<div className=" flex justify-between">
    
        <Button 
                styles={{
                  root: {
                    background: "#4B0082",
                   
                    height: "49px",
                    paddingInline: "32px",
                    borderRadius: "8px",
                    width: "fit-content",
                    "&:hover": {
                      backgroundColor: "#7630F7",
                    },
                  },
                }}
              >
                <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                 Add to Calender
                 
                </span>
 </Button>
 <Button  onClick={() => close()}
                styles={{
                  root: {
                    background: "#fff",
                    color: "#000",
                    border: "1px solid #4B0082",
                    height: "49px",
                    paddingInline: "32px",
                    borderRadius: "8px",
                    width: "fit-content",
                    "&:hover": {
                      backgroundColor: "#7630F7",
                    },
                  },
                }}
              >
                <span className="flex items-center text-base font-semibold leading-[17.92px] text-[#000] gap-1">
                 Close
                 
                </span>
 </Button>
</div>


      </section>
    </main>
  );
}
