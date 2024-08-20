"use client";

import { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="About me">
          <div className="py-1 px-3 mb-2">
            <HoveredLink href="education">
              <div>Education</div>
            </HoveredLink>
          </div>
          <div className="py-1 px-3 mb-2">
            <HoveredLink href="projects">
              <div>Projects</div>
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"./contact"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
