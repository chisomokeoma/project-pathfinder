"use client";

import Hero from "@/components/home/hero";
import { useRouter, useSearchParams } from "next/navigation";

function Mentors() {
  const breadCrumbs = [{ text: "Home" }, { text: "Mentors" }];
  const { push, replace } = useRouter();
  return (
    <section className=" flex flex-col">
      <Hero text="All Mentors" route={breadCrumbs} />
      <main className="box-border w-full h-full">
        <div className="flex flex-col w-[1080px] h-[1305px] gap-[10px] mx-auto pt-[50px] pl-[5px]">
          <div className="w-[1072px] h-[255px] flex flex-row gap-[90px]">
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[20px] mt-[18px] ml-[9.5px] flex">
                  <img src="/Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="flex w-[254.42px] h-[30.62px] font-semibold text-[#161439] text-[20px]">
                  Olamide Adeyemi
                </div>
                <div className="text-[16px] font-regular text-[#5751E1]">
                  UX Design Lead
                </div>
                <div className="text-[15px] font:regular text-[#7F7E97]">
                  4.8 Ratings
                </div>
                <div>
                  <button
                    className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white"
                    onClick={() => push(`/mentors/1`)}
                  >
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[50px] mt-[18px] ml-[9.5px] flex">
                  <img src="/Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="font-semibold text-[#161439] text-[20px] flex">
                  Olivia Mila
                </div>
                <div className="text-[16px] font-regular text-[#5751E1]">
                  Web Design
                </div>
                <div className="text-[15px] font-regular text-[#7F7E97]">
                  &#40;4.8 Ratings&#41;
                </div>
                <div>
                  <button className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1072px] h-[255px] flex flex-row gap-[90px]">
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[50px] mt-[18px] ml-[9.5px] flex">
                  <img src="Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="font-semibold text-[#161439] text-[20px] flex">
                  Ngozi Onwuka
                </div>
                <div className="text-[16px] font-regular text-[#5751E1]">
                  Digital Marketing
                </div>
                <div className="text-[15px] font-regular text-[#757E97">
                  &#40;4.8 Ratings&#41;
                </div>
                <div>
                  <button className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[10px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[50px] mt-[18px] ml-[9.5px] flex">
                  <img src="Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="font-semibold text-[#161439] text-[20px] flex">
                  Mohammed Ali
                </div>
                <div className="text-[16px] font-regular text-[#5751E1]">
                  Web Development
                </div>
                <div className="text-[15px] font-regular text-[#7F7E97]">
                  &#40;4.8 Ratings&#41;
                </div>
                <div>
                  <button className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1072px] h-[255px] flex flex-row gap-[90px]">
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[50px] mt-[18px] ml-[9.5px] flex">
                  <img src="Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="font-semibold text-[20px] flex text-[#161439]">
                  Olamide Adeyemi
                </div>
                <div className="text-[16px] font-regular text-[#5751E1]">
                  UX Design Lead
                </div>
                <div className="text-[15px] font-regular text-[#7F7E97]">
                  &#40;4.8 Ratings&#41;
                </div>
                <div>
                  <button className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[50px] mt-[18px] ml-[9.5px] flex">
                  <img src="Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="md:font-bold text-[#161439] text-[20px] flex">
                  Olivia Mila
                </div>
                <div className="text-[16px] font-regular text-[#5751E1]">
                  Web Design
                </div>
                <div className="text-[15px] font-regular text-[#757E97]">
                  &#40;4.8 Ratings&#41;
                </div>
                <div>
                  <button className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1072px] h-[255px] flex flex-row gap-[90px]">
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[50px] mt-[18px] ml-[9.5px] flex">
                  <img src="Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="font-semibold text-[20px] flex">
                  Ngozi Onwuka
                </div>
                <div className="font-regular text-[16px] text-[#5751E1]">
                  Digital Marketing
                </div>
                <div className="font-regular text-[15px] text-[#7F7E97] ">
                  &#40;4.8 Ratings&#41;
                </div>
                <div>
                  <button className="bg-purple w-[202px] h-[50px] rounded-[20px] border-2px text-[16px] text-white">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[491.03px] h-[234.39px] flex mt-[10px] gap-[5px]">
              <div className="w-[236.61px] h-[234.39px] border-2 border-black flex">
                <div className="w-[228.98px] h-[212.01px] rounded-[50px] mt-[18px] ml-[9.5px] flex">
                  <img src="Ngozi.svg" alt="" />
                </div>
              </div>
              <div className="w-[254.42px] h-[135px] flex flex-col mt-[50px] gap-[2px]">
                <div className="font-semibold text-[#161439] text-[20px] flex">
                  Mohammed Ali
                </div>
                <div className="text-[16px] font-regular text-[#5751E1]">
                  Web Development
                </div>
                <div className="text-[15px] font-regular text-[#7F7E97]">
                  &#40;4.8 Ratings&#41;
                </div>
                <div>
                  <button className="bg-purple w-[202px] h-[50px] rounded-[20px] text-[16px] text-white">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[230px] h-[50px] gap-[7px] flex mx-auto pt-[145px]">
            <div>
              <button className="w-[50px] h-[50px] border-2 rounded-[40px] bg-purple shadow-2xl">
                1
              </button>
            </div>
            <div>
              <button className="w-[50px] h-[50px] border-2 rounded-[40px] bg-gray-400 shadow-2xl">
                2
              </button>
            </div>
            <div>
              <button className="w-[50px] h-[50px] border-2 rounded-[40px] bg-gray-400 shadow-2xl">
                3
              </button>
            </div>
            <div>
              <button className="w-[50px] h-[50px] border-2 rounded-[40px] bg-gray-400 shadow-2xl">
                4
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Mentors;
