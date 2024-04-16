"use client"
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MdGridView } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { ResourcesData } from "./data";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge"
import { TiStarFullOutline } from "react-icons/ti";
export default function Sections() {
  const num = 100;
  return (
    <React.Fragment>
      <main className="">
        <div className="flex justify-between items-center">
          <span>Showing {num} Results</span>
          <div className="flex gap-2 items-center">
            <span>Sort By:</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Most popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Most popular</SelectItem>
                <SelectItem value="dark">Categories</SelectItem>
                <SelectItem value="system">Price</SelectItem>
              </SelectContent>
            </Select>
            <MdGridView size={32} className="bg-purple-700 text-white p-1"/>
            <TfiMenuAlt size={32} />
          </div>
        </div>
        <section>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-2">
            {ResourcesData.map((resources) => {
              return (
                <Card key={resources.id} className="  flex flex-col  gap-4 w-80 p-4">
                  <Image
                    src={resources.img}
                    alt={resources.tag}
                    width={100}
                    height={100}
                    className="w-72  block m-auto"
                  />
                  <div className="flex items-center gap-10 justify-between">
                  <Badge variant="outline">{resources.tag}</Badge> 
                   <span className="flex items-center"> <TiStarFullOutline className="text-yellow-400"/> ({resources.review} Reviews)</span>
                  </div>
                  <p className="font-bold p-0 items-start">{resources.desc}</p>
                  <span className="p-0 ml-0 ">By {resources.by}</span>
                  {resources.foot}
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
