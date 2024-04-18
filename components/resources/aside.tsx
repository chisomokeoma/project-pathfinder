"use client"

import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Cates, Instructors } from "./data";
import { Button } from "../ui/button";
export default function Aside(){
  return (
    <React.Fragment>
      <main className="flex flex-col gap-12">
        <Cate />
        <Price/>
        <Instructor/>
      </main>
    </React.Fragment>
  );
};

const Cate = () => {
  return (
    <Card className="p-4 px-8 w-72 bg-[#85608833]">
      <div className="space-y-4 ">
        <h3 className="font-bold text-2xl">Categories</h3>
        <div className="space-y-1">
          {Cates.map((cate) => {
            return (
              <ul className="flex flex-col gap-3" key={cate.id}>
                <li className="flex gap-3 items-center">
                  <Checkbox id={cate.title} />
                  <Label htmlFor={cate.title}>{cate.title}</Label>
                  <span>( {cate.num} )</span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <Button variant="ghost" className="text-purple-400 p-0 hover:bg-white">
        Show more +
      </Button>
    </Card>
  );
};

const Price = () => {
    return (
        <Card className="p-4 px-8 w-72 bg-[#85608833]">
        <div className="space-y-4 ">
          <h3 className="font-bold text-2xl">Price</h3>
           <div>
           <ul className="flex flex-col gap-3">
                <li className="flex gap-3 items-center">
                  <Checkbox id='AllPrice' />
                  <Label htmlFor="AllPrice">All Price</Label>
                </li>
                <li className="flex gap-3 items-center">
                  <Checkbox id='Free' />
                  <Label htmlFor="Free">Free</Label>
                </li>
                <li className="flex gap-3 items-center">
                  <Checkbox id='Paid' />
                  <Label htmlFor="Paid">Paid</Label>
                </li>
              </ul>
           </div>
        </div>
      
      </Card>
    )
}

const Instructor = () => {
    return (
        <Card className="p-4 px-8 w-72 bg-[#85608833]">
        <div className="space-y-4 ">
          <h3 className="font-bold text-2xl">Instructor</h3>
          <div className="space-y-1">
            {Instructors.map((Instructor) => {
              return (
                <ul className="flex flex-col gap-3" key={Instructor.id}>
                  <li className="flex gap-3 items-center">
                    <Checkbox id={Instructor.title} />
                    <Label htmlFor={Instructor.title}>{Instructor.title}</Label>
                    <span>( {Instructor.num} )</span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <Button variant="ghost" className="text-purple-400 p-0 hover:bg-white">
          Show more +
        </Button>
      </Card>
    )
}