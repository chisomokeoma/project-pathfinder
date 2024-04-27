"use client"

import { Button } from "@mantine/core";
import React, { useContext } from "react";
import classes from "@/components/home/signup.module.css";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import AcceptRequest from "../modals/resend-request";
import ResendRequest from "../modals/resend-request";


function ScheduleBtn() {
const {modalState, setModalState} =  useContext(ModalContext) as IModalContext

  return (
    <section className=" flex gap-[24px] self-end justify-end">
      <Button 
        styles={{
          root: {
            marginTop: "12px",
            width: "fit-content",
            background: "#ECE8FF",
            color: "#4B0082",
            borderRadius: "8px"
          },
        }}
        classNames={classes}
        type="submit"
      >
    Cancel
      </Button>
      <Button
        styles={{
          root: {
            marginTop: "12px",
            width: "fit-content",
            borderRadius: "8px"
          },
          
        }}
        classNames={classes}
        type="submit"
      >
       Confirm
      </Button>
    </section>
  );
}

export default ScheduleBtn;
