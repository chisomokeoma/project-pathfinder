import { Button, TextInput } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import classes from "@/components/home/signup.module.css";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { base64decode } from "nodejs-base64";
import toast from "react-hot-toast";

export interface IMenteeBio {
  name: string;
  gender: string;
  institution: string;
  location: string;
  parent_email: string;
  skills: string;
}

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

export default function MenteeBiodata() {
  const menteeBioForm = useForm({
    initialValues: {
      name: "",
      gender: "",
      institution: "",
      location: "",
      parent_email: "",
      skills: "",
    },
  });

  const searchParams = useSearchParams();
  const auth = searchParams.get("auth");

  const { mutate } = useMutation({
    mutationFn: (payload: any) =>
      builder.use().mentee.update_mentee(payload, base64decode(auth as string)),
    mutationKey: builder.mentee.update_mentee.get(),
    onSuccess(data, variable) {
      toast.success(`Account created successfully`);
    },
  });
  return (
    <form
      className="flex flex-col gap-[65.8px]"
      onSubmit={() =>
        menteeBioForm.onSubmit(() => mutate({...menteeBioForm.values}))
      }
    >
      <div className="flex flex-col gap-[30px]">
        <TextInput
          styles={styles}
          placeholder="Name"
          {...menteeBioForm.getInputProps("name")}
        />
        <TextInput
          styles={styles}
          placeholder="Gender"
          {...menteeBioForm.getInputProps("gender")}
        />
        <TextInput
          styles={styles}
          placeholder="Institution"
          {...menteeBioForm.getInputProps("institution")}
        />
        <TextInput
          styles={styles}
          placeholder="Location"
          {...menteeBioForm.getInputProps("location")}
        />
        <TextInput
          styles={styles}
          placeholder="Parent's Email"
          {...menteeBioForm.getInputProps("parent_name")}
        />
        <TextInput
          styles={styles}
          placeholder="Skills"
          {...menteeBioForm.getInputProps("skills")}
        />
      </div>
      <div className="flex flex-col gap-7">
        <Link className="w-full" href="/create-account/verification">
          <Button type="submit" classNames={classes}>
            Sign Up
          </Button>
        </Link>
        <p className="text-base self-center leading-7 text-[#6D6C80]">
          Already have an account?
          <Link
            href="/login"
            className="text-[#5751E1] text-base leading-7 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
