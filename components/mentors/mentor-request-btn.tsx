"use client"

import { Button } from "@mantine/core";
import React, { useContext } from "react";
import classes from "@/components/home/signup.module.css";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import AcceptRequest from "../modals/resend-request";
import ResendRequest from "../modals/resend-request";


function MentorRequestBtn() {
const {modalState, setModalState} =  useContext(ModalContext) as IModalContext

  return (
    <section className=" flex gap-[24px] items-end justify-end">
      <Button onClick={() => setModalState({
        component: <ResendRequest/>,
        opened: true
      })}
        styles={{
          root: {
            marginTop: "12px",
            width: "fit-content",
            background: "#ECE8FF",
            color: "#4B0082"
          },
        }}
        classNames={classes}
        type="submit"
      >
     Resend
      </Button>
      <Button
        styles={{
          root: {
            marginTop: "12px",
            width: "fit-content"
          },
          
        }}
        classNames={classes}
        type="submit"
      >
        Cancel
      </Button>
    </section>
  );
}

export default MentorRequestBtn;
