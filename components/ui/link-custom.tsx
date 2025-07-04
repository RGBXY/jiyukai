"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface itemProps {
  url: string;
  name: string;
}

interface dataProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  data: itemProps;
}

const LinkCustom = ({ data }: dataProps) => {
  const pathName = usePathname();

  return (
    <Link className="relative flex items-center h-full group" href={data.url}>
      <span>{data.name}</span>
      <div className={cn(pathName == data.url ? "w-full left-1/2 -translate-x-1/2" : "w-0", "absolute bottom-0 left-1/2 -translate-x-1/2  group-hover:w-full h-[1px] bg-primary transition-all duration-300")}></div>
    </Link>
  );
};

export default LinkCustom;
