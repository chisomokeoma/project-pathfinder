import MentorRequestBtn from "@/components/mentors/mentor-request-btn";
import { Avatar } from "@mantine/core";
import { Suspense } from "react";

const containerList = [
  {
    headText: "Sessions with Tina",
    subText: "Starts in 1hr",
    time: "30 min",
    picture: "/tina.svg",
  },
  {
    headText: "Sessions with Sonia",
    subText: "Starts in 1hr",
    time: "30 min",
    picture: "/tina.svg",
  },
  {
    headText: "This week group session for you",
    subText: "meeting with Que",
    time: "30 min",
    picture:"",
  },
  {
    headText: "Sessions with tina",
    subText: "meeting with Tony",
    time: "30 min",
    picture: "",
  },
];

function MentorshipRequest() {
  return (
    <main>
      <div className="w-[987px] h-[1345px] mx-auto mt-[100px] flex flex-col gap-[40px]">
        <section>
        <h4 className="w-[395px] h-[72px] text-[#161439] font-semibold text-[36px]">
         Mentorship Requests
        </h4>
<p>Pending Request</p>
        </section>
        {containerList?.map((item) => (
          <div className=" px-[31px] py-[30px] flex flex-col gap-[40px] shadow-xl bg-[#F6F6F6]   justify-center">
            <div className=" flex gap-[42px] items-center pt-[30px]">
              <Avatar size="xl" src={item.picture} />
              <article className=" flex flex-col">
                <p className="font-regular text-[16px] text-[#2E1110]">
                  {item.headText}
                </p>
                <p className=" font-regular text-[13px] text-[#2E110]">
                  {" "}
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
