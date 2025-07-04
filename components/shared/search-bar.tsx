"use client";

import { ArrowLeft, Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SearchBar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="h-full w-fit flex items-center justify-center">
      <Button onClick={() => setSearchActive(!searchActive)} variant="primary" size="custom" className="lg:hidden">
        <Search strokeWidth={1.2} />
      </Button>

      <div className={cn(searchActive ? "lg:bg-transparent absolute left-0 w-full h-full bg-white px-5" : "", "flex gap-3 items-center justify-center")}>
        <Button onClick={() => setSearchActive(false)} size="custom" className={cn(searchActive ? "" : "hidden")} variant="primary">
          <ArrowLeft strokeWidth={1.2} />
        </Button>

        <div className={cn(searchActive ? "flex w-full" : "absolute hidden w-[500px]", " border-gray-3 bg-gray-2 overflow-hidden h-12 lg:flex items-center inset-x-0 mx-auto border rounded-full")}>
          <input type="text" placeholder="Search" className=" w-full h-full text-sm px-4 rounded-s-full placeholder:text-sm outline-none placeholder:text-gray-4" />
          <div className="w-[1px] h-[60%] bg-gray-3"></div>
          <button className="h-full w-20 flex  items-center justify-center cursor-pointer">
            <Search className="h-5.5 w-5.5" strokeWidth={1.2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
