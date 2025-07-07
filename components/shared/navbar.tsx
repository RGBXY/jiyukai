"use client";

import Image from "next/image";
import React from "react";
import { nav_link } from "@/lib/constant";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import LinkCustom from "../ui/link-custom";
import SearchBar from "./search-bar";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="w-full sticky top-0 bg-white z-30">
      <div className="lg:h-20 h-16 flex items-center relative justify-between w-full border px-5 lg:px-25">
        <Link href="/">
          <Image className="md:w-30 w-24" src="/icon/logo.svg" height={300} width={300} alt="logo" />
        </Link>

        <div className="h-full flex items-center gap-8">
          <div className="hidden text-sm font-medium h-full lg:flex items-center justify-center gap-6">
            {nav_link.map((item, index) => (
              <div key={index} className="h-full">
                <LinkCustom data={item} />
              </div>
            ))}
          </div>

          <SearchBar />
        </div>
      </div>

      <div className="h-12 lg:hidden text-sm font-medium w-full border-b flex items-center justify-start md:justify-center px-5 gap-6">
        {nav_link.map((item, index) => (
          <Link className="relative lg:hidden flex items-center h-full group" href={item.url} key={index}>
            <span>{item.name}</span>
            <div className={cn(pathName.startsWith(item.url) ? "w-full left-1/2 -translate-x-1/2" : "w-0", "absolute bottom-0 left-1/2 -translate-x-1/2  group-hover:w-full h-[1px] bg-primary transition-all duration-300")}></div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
