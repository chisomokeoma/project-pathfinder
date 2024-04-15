import { ArrowRight2, Home2, Link } from "iconsax-react";
import Image from "next/image";
import React from "react";

export interface IWrapper {
  route?: Array<{ text: string, link?: string }>;
  text?: string;
}
function Hero({ text, route }: IWrapper) {
  return (
    <section className="h-[321px] bg-[#85608880]">
      <div className="flex max-w-[1500px] items-center pl-[60px] justify-between">
        <article className=" flex flex-col gap-[25px]">
          <h1 className="text-black text-[40px] leading-[48px] font-semibold">
            {text}
          </h1>

          <div className=" flex gap-1">
            {route?.map((item) => (
              <div key={item.link} className=" flex items-center">
                <ArrowRight2 color="#81848f" size={12} />
                {item?.link ? (
                  <Link href={item.link}>
                    <p className=" text-[18px] text-[#1C1A4A] font-normal">
                      {item.text}
                    </p>
                    s
                  </Link>
                ) : (
                  <p className=" text-[18px] text-[#1C1A4A] font-normal">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </article>

        <Image
          src="/illustration.png"
          width={600}
          height={600}
          className="h-full w-[380px] object-cover"
          alt="illustration"
        />
      </div>
    </section>
  );
}

export default Hero;
