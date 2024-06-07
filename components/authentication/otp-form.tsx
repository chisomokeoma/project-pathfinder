import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { base64decode, base64encode } from "nodejs-base64";
import toast from "react-hot-toast";
import { useForm } from "@mantine/form";
import { usePortal } from "@ibnlanre/portal";
import { EmailQuery } from "@/api/queries-store";
import { Button, PinInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";

export interface IVerfy {
  verificationPin: string;
}

export default function OtpForm() {
  const [userEmail, setUserEmail] = usePortal.atom(EmailQuery);
  const verifyForm = useForm({
    initialValues: {
      email: userEmail,
      verificationPin: "",
    },
  });

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const auth = searchParams.get("auth");
  const view = searchParams.get("view");

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      view === "mentee"
        ? builder
            .use()
            .authentication.verify_mentee(
              base64decode(auth as string),
              verifyForm.values
            )
        : builder
            .use()
            .authentication.verify_mentor(
              base64decode(auth as string),
              verifyForm.values
            ),
    mutationKey: builder.authentication.verify_mentee.get(),
    onSuccess(data, variable) {
      toast.success(`Account verified successfully`);
      view === "mentee"
        ? push(
            `/create-account/mentee/biodata?auth=${base64encode(
              auth as string
            )}`
          )
        : push(
            `/create-account/mentor/biodata?auth=${base64encode(auth as string)}`
          );
    },
  });
  return (
    <form
      className="mt-[30px] mb-[50px] bg-[#F9F9F9] py-[58px]"
      onSubmit={verifyForm.onSubmit(() => mutate())}
    >
      <article className="flex gap-[50px] items-center  px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[590px] mx-auto flex-col">
        <div className="flex flex-col items-center gap-[21px]">
          <div className=" w-[308px]">
            <PinInput
              type="number"
              size="xl"
              styles={{
                root: {
                  width: "458px",
                  gap: "12px",
                },
                input: {
                  border: "1px solid #4B0082",
                },
              }}
              placeholder=""
              oneTimeCode
              aria-label="One time code"
              mask
              {...verifyForm.getInputProps("verificationPin")}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[36px] font-semibold leading-[46.8px] text-[#161439]">
              Enter Verification Code
            </h2>
            <p className="text-base leading-7 text-[#161439] text-center">
              Almost there! We&apos;ve sent a mail to {userEmail} Please input
              one time password sent
            </p>
          </div>
        </div>
        <div className=" flex flex-col ">
          <Button
            type="submit"
            classNames={classes}
            style={{ width: "350px" }}
            loading={isLoading}
            // onClick={() => push("/login")}
          >
            Send
          </Button>
          <Link href="#">
            <p className=" flex text-[13px] text-red-700 font-medium cursor-pointer self-end justify-end">
              {" "}
              Resend Email
            </p>
          </Link>
        </div>
      </article>
    </form>
  );
}
