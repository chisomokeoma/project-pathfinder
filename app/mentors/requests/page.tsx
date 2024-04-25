import MentorRequestBtn from "@/components/mentors/mentor-request-btn";
import { Avatar } from "@mantine/core";
import { Suspense } from "react";

const containerList = [
  {
    headText: "Olamide Adeyemi",
    subText: "UX Design Lead",
    picture: "/tina.svg",
  },
  {
    headText: "Ngozi Onwuka",
    subText: "Degital Marketing",
    picture: "/tina.svg",
  },
  {
    headText: "Olivia Mia",
    subText: "Web Design",
    picture:"",
  },
  {
    headText: "Mohammed Ali",
    subText: "meeting with Tony",
    picture: "",
  },
];

function MentorshipRequest() {
  return (
    <main>
      <div className="w-[987px] h-[1445px] mx-auto mt-[100px] flex flex-col gap-[40px] overflow-auto" >
        <section>
        <h4 className="w-[395px] h-[72px] text-[#161439] font-semibold text-[36px]">
         Mentorship Requests
        </h4>
<p>Awaiting approval from Mentor</p>
        </section>
        {containerList?.map((item) => (
          <div className=" px-[31px] py-[30px] flex flex-col gap-[40px] shadow-xl bg-[#F6F6F6]   justify-center overflow-auto ">
            <div className=" flex gap-[42px] items-center pt-[30px] ">
              <Avatar size="xl" src={item.picture} />
              <article className=" flex flex-col">
                <p className="font-semibold text-[16px] text-[#2E1110]">
                  {item.headText}
                </p>
                <p className=" font-medium text-[13px] text-purple">
                 
                  {item.subText}
                </p>
              </article>
            </div>
            <Suspense>

           <MentorRequestBtn/>
            </Suspense>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MentorshipRequest;
