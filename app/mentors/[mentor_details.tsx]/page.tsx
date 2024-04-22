"use client";

import Hero from "@/components/home/hero";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Mentorsdetails({ params }: { params: { mentor_details: string } }) {
  const breadCrumbs = [{ text: "Home" }, { text: "Mentors" }];
  const { push, replace } = useRouter();

  return (
    <section className=" flex flex-col">
      <Hero route={breadCrumbs} />
<div className=" mt-[100px] mb-[100px] ">

      <main className="w-full h-full flex flex-col gap-[20px]">
        <div className="w-[1050px] h-[368.19px] bg-purple mx-auto rounded-[8px] flex shadow-xl">
          <div className="w-[250px] h-[250px] rounded-[50px] ml-[50px] mt-[50px]">
          <figure className=" w-[243px] ">
                      <Image
                        src='/instructor3.svg'
                        alt="mentors-images"
                        width={20}
                        height={20}
                        className=" w-full"
                      />
                    </figure>
          </div>
          <div className="w-[655px] h-[268.19px] ml-[50px] mt-[45px] flex flex-col gap-[15px]">
            <div className="w-[184px] h-[32px] text-[24px] md:semi-bold text-white">
              Ngozi Onwuka
            </div>
            <div className="w-[140.08px] h-[16px] text-white md:regular text-[16px]">
              Digital Marketing
            </div>
            <div className="flex gap-[25px]">
                <article className=" flex gap-2 items-center">
                <FaStar color="#F8BC24" />
              <p className="text-[#ffff]">4.8 Ratings</p>
                </article>
        
              <div className="text-[#ffff] ">helloonwuka@gmail.com</div>
            </div>
            <div className="text-[#ffff] ">
              Ngozi Onwuka is a certified Digital Marketing and award wining
              mentor with over 7 <br />
              years of experience. She has mentored over 900 people across the
              globe and she <br /> will be happy to connect with you.
            </div>
            <div>
              <button className="text-purple bg-white rounded-[20px] w-[202px] h-[50px]" onClick={() => push('./mentors/scheduling')}>
                Schedule Session
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1050px] h-[265.9px] border-1px mx-auto rounded-[8px] flex flex-col gap-[10px] shadow-xl">
          <div className="ml-[30px] mt-[30px] w-[126.71px] h-[31.2px] md:semibold text-[24px] text-[#161431]">
            Biography
          </div>
          <div className="w-[930px] h-[77.9px] ml-[30px] text-[16px] md:font-regular text-[#6D6C80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </div>
          <div className="w-[966.92px] h-[56px] ml-[30px] text-[16px] md:font-regular text-[#6D6C80]">
            {" "}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Duis <br /> aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </div>
        </div>
        <div className="w-[1050px] h-[302.78px] border-1px mx-auto rounded-[8px] flex flex-col shadow-xl gap-[10px]">
          <div className="ml-[30px] mt-[30px] w-[62.12px] h-[31.2px] md:semibold text-[24px] text-[#161439]">
            Skills
          </div>
          <div className="w-[930.42px] h-[56px] ml-[30px] text-[#6D6C80] md:regular text-[16px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div className="flex">
            <div className="ml-[30px] gap-[345px] flex">
              <span>Marketing</span>
              <span>90%</span>
            </div>
            <div className="ml-[30px] flex gap-[380px]">
              <span className="ml-[5px]">SEO</span>
              <span>90%</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-[456px] h-[10px] border-1px rounded-[50px] flex ml-[30px]">
              <div className="w-[410.4px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
              <div className="w-[45.6px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
            </div>
            <div className="w-[456px] h-[10px] border-1px rounded-[50px] flex ml-[30px]">
              <div className="w-[410.4px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
              <div className="w-[45.6px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
            </div>
          </div>
          <div className="flex mt-[30px] gap-[30px] ml-[30px]">
            <div className="flex gap-[390px]">
              <span>CRM</span>
              <span>55%</span>
            </div>
            <div className="flex gap-[350px]">
              <span>Analytics</span>
              <span>65%</span>
            </div>
          </div>
          <div className="flex ">
            <div className="flex w-[456px] h-[10px] border-1px rounded-[50px] ml-[30px]">
              <div className="w-[250.8px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
              <div className="w-[250.2px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
            </div>
            <div className="flex w-[456px] h-[10px] border-1px rounded-[50px] ml-[30px]">
              <div className="w-[294.4px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
              <div className="w-[159.6px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
            </div>
          </div>
        </div>
        <div className="w-[720px] h-[72px] flex flex-col ml-[150px] gap-[10px]">
          <div className="w-[316px] h-[39px] text-[#161439] md:font-semibold text-[30px]">
            All My Resources
          </div>
          <div>All courses and articles by Ngozi Onwuka</div>
        </div>
        <div className="flex ml-[150px] gap-[20px]">
          <div className="w-[330px] h-[454px] rounded-[5px] border-2 shadow-xl flex flex-col">
            <div className="w-[278px] h-[190px] mx-auto mt-[10px]">
              <img src="/pro.svg/" alt="" />
            </div>
            <div className="flex gap-[85px] mx-auto mt-[10px]">
              <span className="w-[88.5px] h-[27px] bg-[#EFEFF2] text-[#161439] rounded-[15px] text-[14px] text-center">
                Marketing
              </span>
              <span className="text-[14px]">&#40;4.8 Reviews&#41;</span>
            </div>
            <div className="w-[268.97px] h-[50.4px] flex mx-auto mt-[30px] md:font-semibold text-[18px] text-[#161439]]">
              Learning Digital Marketing on <br /> Facebook
            </div>
            <div className="flex gap-[5px] ml-[30px] mt-[20px]">
              <span className="w-[18.44px] h-[15px] font-regular text-[15px] text-[#6D6C80]">
                By
              </span>
              <span className="w-[145px] h-[15px]">Ngozi Onwuka</span>
            </div>
            <div className="flex ml-[25px] mt-[30px] gap-[30px]">
              <span>
                <button className="w-[133.45px] h-[40px] bg-[#4B0082] rounded-[15px] text-[#ffff]">
                  Enroll Now &rarr;
                </button>
              </span>
              <span className="w-[125px] h-[20px] text-[#5751E1] mt-[8px] font-bold text-[16px]">
                14,000 NGN
              </span>
            </div>
          </div>
          <div className="w-[330px] h-[454.38px] rounded-[5px] flex border-2 shadow-xl flex-col">
            <div className="w-[278px] h-[190px] mx-auto mt-[10px]">
              <img src="/crush.svg" alt="" />
            </div>
            <div className="flex mx-auto mt-[10px] gap-[85px]">
              <span className="w-[81.78px] h-[27px] text-[14px] bg-[#EFEFF2] text-[#161439] rounded-[15px] text-center">
                Business
              </span>
              <span className="text-[14px]">&#40;4.8 Reviews&#41;</span>
            </div>
            <div className="flex w-[256.2px] h-[50.4px] text-[#161439] font-semibold text-[18px] mx-auto mt-[30px]">
              Financial Analyst Training & <br />
              Investing Course
            </div>
            <div className="flex gap-[5px] ml-[30px] mt-[20px]">
              <span className="w-[18.44px] h-[15px] font-regular text-[15px] text-[#6D6C80]">
                By
              </span>
              <span className="w-[145px] h-[15px]">Ngozi Onwuka</span>
            </div>
            <div className="flex ml-[25px] mt-[30px] gap-[30px]">
              <span>
                <button className="w-[133.45px] h-[40px] bg-[#4B0082] rounded-[15px] text-[#ffff]">
                  Enroll Now &rarr;
                </button>
              </span>
              <span className="w-[125px] h-[20px] text-[#5751E1] mt-[8px] font-bold text-[16px]">
                20,000 NGN
              </span>
            </div>
          </div>
          <div className="flex w-[337.5px] h-[395px] shadow-xl border-2 rounded-[5px] flex-col">
            <div className="w-[285.5px] h-[224px] mx-auto mt-[10px]">
              <img src="/career.svg/" alt="" />
            </div>
            <div className="flex ml-[30px] mt-[20px] gap-[10px]">
              <span className="w-[20px] h-[20px] flex">
              <CiCalendar size={20} color="#4B0082" />
              </span>
              <span className="w-[91.4px] h-[14px] text-[14px] font-medium text-[#6D6C80]">
                20 July, 2022
              </span>
              <span className="w-[20px] h-[20px]">
              <CgProfile size={20} color="#4B0082" />
              </span>
              <span className="w-[16.81px] h-[14px] font-medium text-[14px] text-[#6D6C80]">
                by
              </span>
              <span className="w-[42.99px] h-[14px] font-medium text-[14px] text-[#6D6C80]">
                Admin
              </span>
            </div>
            <div className="w-[270.31px] h-[52px] font-semibold text-[20px] text-[#161439] mx-auto mt-[20px]">
              
              How to Write the Best CV <br />
              to Land that Next Job
            </div>
          </div>
        </div>
      </main>
</div>
    </section>
  );
}
export default Mentorsdetails;
