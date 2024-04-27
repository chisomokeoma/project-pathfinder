"use client"
import { builder } from '@/api/builder';
import { Button, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import classes from "@/components/home/signup.module.css";
import toast from 'react-hot-toast';
import Link from 'next/link';
import { base64decode } from 'nodejs-base64';



export interface IMentorForm {
    name: string;
    gender: string;
    email: string;
    industry: string;
    yearsOfExperience: string;
    levelOfExpertise: string;
    availability: string;
    location: string;
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
export default function MentorBiodata() {


    const mentorForm = useForm({
        initialValues: {
          name: "",
          gender: "",
          email: "",
          industry: "",
          yearsOfExperience: "",
          levelOfExpertise: "",
          availability: "",
          location: "",
        },
      });
    const searchParams = useSearchParams()
    const auth = searchParams.get('auth')
    
    const {mutate} = useMutation({
      mutationFn: () => builder.use().mentor.update_mentor(mentorForm.values,base64decode(auth as string)),
      mutationKey: builder.mentee.update_mentee.get(),
      onSuccess(){
        toast.success(`Account created successfully`);
      }
    })
  return (
    <form className="flex flex-col gap-[65.8px]" onSubmit={() => mentorForm.onSubmit(() => mutate()) }>
    <div className="flex flex-col gap-[30px]">
      <TextInput
        styles={styles}
        placeholder="Name"
        {...mentorForm.getInputProps("name")}
      />
      <TextInput
        styles={styles}
        placeholder="Gender"
        {...mentorForm.getInputProps("gender")}
      />
      <TextInput
        styles={styles}
        placeholder="Email"
        {...mentorForm.getInputProps("email")}
      />
      <TextInput
        styles={styles}
        placeholder="Industry"
        {...mentorForm.getInputProps("industry")}
      />
      <TextInput
        styles={styles}
        placeholder="Years of Experience"
        {...mentorForm.getInputProps("yearsOfExperience")}
      />
      <TextInput
        styles={styles}
        placeholder="Level of Expertise"
        {...mentorForm.getInputProps("levelOfExpertise")}
      />
      <TextInput
        styles={styles}
        placeholder="Availability"
        {...mentorForm.getInputProps("avaliablity")}
      />
      <TextInput
        styles={styles}
        placeholder="Location"
        {...mentorForm.getInputProps("location")}
      />
    </div>
    <div className="flex flex-col gap-7">
      <Link className="w-full" href="/create-account/verification">
        <Button classNames={classes}>Sign Up</Button>
      </Link>
      <p className="text-base self-center leading-7 text-[#6D6C80]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#5751E1] text-base leading-7 underline"
        >
          Login
        </Link>
      </p>
    </div>
  </form>
  )
}
