import { Button } from "@mantine/core";
import React, { useContext } from "react";
import classes from "@/components/home/signup.module.css";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import AcceptRequest from "../modals/accept-request";


function MentorRequestBtn() {
const {modalState, setModalState} =  useContext(ModalContext) as IModalContext

  return (
    <section className=" flex gap-[24px]">
      <Button onClick={() => setModalState({
        component: <AcceptRequest/>,
        opened: true
      })}
        styles={{
          root: {
            marginTop: "12px",
          },
        }}
        classNames={classes}
        type="submit"
      >
        Submit
      </Button>
      <Button
        styles={{
          root: {
            marginTop: "12px",
          },
        }}
        classNames={classes}
        type="submit"
      >
        Submit
      </Button>
    </section>
  );
}

export default MentorRequestBtn;
