

import { Button } from '@mantine/core'
import classes from "@/components/home/signup.module.css";
import Link from 'next/link'
import React, { useState } from 'react'
import { useSearchParams } from "next/navigation";

export default function AgeAction() {
    const [age, setAge] = useState<"below18" | "above18" | "">("");
    const searchParams = useSearchParams()
    const auth =  searchParams.get('auth')
  return (
    <div className="flex flex-col gap-7">
            <Link
              className={
                !age
                  ? "pointer-events-none cursor-not-allowed w-full"
                  : "w-full"
              }
              href={`/create-account/mentee/biodata?auth=${auth}`}
            >
              <Button disabled={!age} classNames={classes} >
                Proceed
              </Button>
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
  )
}
