"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { navItems } from "../constants/navlist";

function MobileSidebar() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        className="hidden max-[520px]:inline-block "
        size="lg"
        color="#e8e8e8"
      />
      <Drawer
        radius="md"
        opened={opened}
        onClose={close}
        aria-label="Toggle navigation"
        position="right"
      >
        <ul className="flex flex-col gap-[2rem]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="text-tunes-heading flex hover:bg-[#f5f5f6] text-[17px] font-semibold transition-all duration-[.23s]"
            >
              <a href={item.link} className="w-full" onClick={close}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
}

export default MobileSidebar;
