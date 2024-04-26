"use client";

import Hero from "@/components/home/hero";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa";

const mentorArray = [
  {
    name: "Olamide Adeyemi",
    skill: "UX Design Lead",
    img: "/instructor1.svg",
    id: 1
  },
  {
    name: "Olivia Mia",
    skill: "Web Design",
    img: "/instructor2.svg",
    id: 2
  },
  {
    name: "Ngozi Onwuka",
    skill: "Digital Marketing",
    img: "/instructor3.svg",
    id: 3
  },
  {
    name: "Mohammed Ali",
    skill: "Web Development",
    img: "/instructor4.svg",
    id: 4
  },
  {
    name: "Olamide Adeyemi",
    skill: "UX Design Lead",
    img: "/instructor1.svg",
    id: 5
  },
  {
    name: "Olivia Mia",
    skill: "Web Design",
    img: "/instructor2.svg",
    id: 5
  },
  {
    name: "Ngozi Onwuka",
    skill: "Digital Marketing",
    img: "/instructor3.svg",
    id: 7
  },
  {
    name: "Mohammed Ali",
    skill: "Web Development",
    img: "/instructor4.svg",
    id: 8
  },
];

function Mentors() {
  const breadCrumbs = [{ text: "Home" }, { text: "Mentors" }];
  const { push, replace } = useRouter();
  return (
    <section className=" flex flex-col">
      <Hero text="All Mentors" route={breadCrumbs} />
      <main className="box-border w-full h-full">
        <div className="flex flex-col w-[1080px] h-[1305px] gap-[10px] mx-auto pt-[50px] pl-[5px]">
          <div className="w-[1072px] h-[255px] grid grid-cols-2 flex-row gap-[30px]">
            {mentorArray.map((item, idx) => (
              <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]" key={idx}>
                <div className="w-[236.61px] h-[234.39px]  flex">
                  <div className="w-[228.98px] h-[212.01px] rounded-[20px] mt-[18px] ml-[9.5px] flex">
                    <figure className=" w-[243px] ">
                      <Image
                        src={item?.img}
                        alt="mentors-images"
                        width={20}
                        height={20}
                        className=" w-full"
                      />
                    </figure>
                  </div>
                </div>
                <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                  <div className="flex w-[254.42px] h-[30.62px] font-semibold text-[#161439] text-[20px]">
                    {item?.name}
                  </div>
                  <div className="text-[16px] font-normal text-[#5751E1]">
                    {item?.skill}
                  </div>
                  <article className=" flex gap-[5px] items-center">
                  <FaStar color="#F8BC24" />

                  <p className="text-[15px] font-normal text-[#7F7E97]">
                    (4.8 Ratings)
                  </p>
                  </article>
                  <div>
                    <button
                      className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white"
                      onClick={() => push(`/mentors/${item.id}`)}
                    >
                      Schedule Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Mentors;
