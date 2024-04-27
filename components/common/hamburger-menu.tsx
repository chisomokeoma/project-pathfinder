import { Menu, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrResources } from "react-icons/gr";
import { HiHome } from "react-icons/hi2";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { RiArticleFill } from "react-icons/ri";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { AiFillMessage } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";

const styles = {
  item: {
    fontWeight: 600,
  },
};

export default function HamburgerMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <span>
          <GiHamburgerMenu size={24} className="cursor-pointer" />
        </span>
      </Menu.Target>

      {/* <Menu.Dropdown>
        <Menu.Item>
          <Link href="./mentors/requests">
            <p className=" text-[14px] text-black font-normal z-50 cursor-pointer p-1 hover:bg-slate-300">
              Mentorship requests
            </p>
          </Link>
        </Menu.Item>
      </Menu.Dropdown> */}
      <Menu.Dropdown>
        <Menu.Item
          c="#4B0082"
          styles={styles}
          leftSection={<HiHome color="#4B0082" />}
        >
            <Link href="/">

          Home
            </Link>
        </Menu.Item>
        <Menu.Item
          c="#4B0082"
          styles={styles}
          leftSection={<GrResources color="#4B0082" />}
        >
          Resources
        </Menu.Item>
        <Menu.Item
          c="#4B0082"
          styles={styles}
          leftSection={<IoPeople color="#4B0082" />}
        >
          Mentors
        </Menu.Item>
        <Menu.Item
          c="#4B0082"
          styles={styles}
          leftSection={<VscGitPullRequestNewChanges color="#4B0082" />}
        >
          Mentorship Request
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item
          c="#4B0082"
          styles={styles}
          leftSection={<PiChalkboardTeacherBold color="#4B0082" />}
        >
          My Mentors
        </Menu.Item>
        <Menu.Item
          c="#4B0082"
          styles={styles}
          leftSection={<RiArticleFill color="#4B0082" />}
        >
          Blogs
        </Menu.Item>
        <Menu.Item
          c="#4B0082"
          styles={styles}
          leftSection={<AiFillMessage color="#4B0082" />}
        >
          Messages
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
