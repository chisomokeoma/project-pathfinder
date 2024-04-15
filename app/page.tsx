
import Development from "@/components/icons/development";
import Finance from "@/components/icons/finance";
import GraphicsDesign from "@/components/icons/graphics-design";
import HeroText from "@/components/icons/hero-text";
import Lifestyle from "@/components/icons/lifestyle";
import Management from "@/components/icons/management";
import Marketing from "@/components/icons/marketing";
import { Button } from "@mantine/core";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image from "next/image";

const items = [
  {
    icon: <GraphicsDesign />,
    text: "Graphic Design",
    number: 22,
  },
  {
    icon: <Finance />,
    text: "Finance",
    number: 41,
  },
  {
    icon: <Development />,
    text: "Development",
    number: 29,
  },
  {
    icon: <Marketing />,
    text: "Marketing",
    number: 22,
  },
  {
    icon: <Lifestyle />,
    text: "Life Style",
    number: 22,
  },
  {
    icon: <Management />,
    text: "Management",
    number: 22,
  },
];

export default function Home() {
  return (
    <section>
      <section className="h-[520px] flex items-center bg-[url(/hero-bg-image.png)] bg-cover bg-center bg-no-repeat">
        <div className="flex max-w-[1400px] mx-auto items-center pl-[60px] justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 flex-col">
              <div className="flex flex-col gap-1">
                <span className="inline-flex font-medium text-[40px] leading-[60px] items-end gap-1">
                  Unlock Your <HeroText />
                </span>
                <span className="font-medium text-[40px] leading-[60px]">
                  Find <span className="font-bold">Your Mentor</span> Today{" "}
                </span>
              </div>
              <p className="text-[18px] leading-[28.8px] text-[#6D6C80]">
                Dream big with mentors to help guide your way.
              </p>
            </div>
            <Button
              styles={{
                root: {
                  boxShadow: "4px 6px 0px 0px #7630F7",
                  background: "#4B0082",
                  height: "49px",
                  paddingInline: "32px",
                  borderRadius: "50px",
                  width: "fit-content",
                },
              }}
            >
              <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                Get Started
                <ArrowRight size={14} color="white" />
              </span>
            </Button>
          </div>
          <Image
            src="/hero-image.png"
            width={600}
            height={600}
            className="h-full w-[720px] object-cover"
            alt="illustration"
          />
        </div>
      </section>
      <section className="mt-[120px] mb-[200px] max-w-[1400px] mx-auto px-4">
        <div className="gap-[14px] items-center flex flex-col">
          <span className="rounded-[30px] bg-[#EFEEFE] px-4 py-[2px] font-medium text-base leading-[25.92px] text-[#4B0082]">
            Trending Categories
          </span>
          <h2 className="text-[36px] text-[#161439] tracking-[-0.75px] font-semibold">
            Top Category We Have
          </h2>
          <p className="text-center text-base text-[#020617] leading-7">
            Find mentors in any of these industries
          </p>
          <div className="bg-[#85608833] w-full rounded-[500px] pt-[52px] pb-[45px] px-[50px] flex items-center gap-[45px]">
            <span className="w-[50px] bg-[#4B0082] border border-[#F1F5F9] rounded-[25px] min-w-[50px] flex items-center justify-center h-[50px] min-h-[50px]">
              <ArrowLeft color="white" size={15} />
            </span>
            <div className="w-full flex gap-11 overflow-hidden">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center flex-col gap-3">
                  {item.icon}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-[18px] font-medium text-[#161439] leading-[27px]">
                      {item.text}
                    </p>
                    <span className="text-[#6D6C80] text-base leading-[20.8px]">
                      ({item.number})
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <span className="w-[50px] bg-[#4B0082] border border-[#F1F5F9] rounded-[25px] min-w-[50px] flex items-center justify-center h-[50px] min-h-[50px]">
              <ArrowRight color="white" size={15} />
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
