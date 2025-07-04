"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Globe } from "lucide-react";
import React from "react";

const LanguageButton = () => {
  const [position, setPosition] = React.useState("Indonesian");

  return (
    <div className="h-full min-w-30 flex items-center justify-center gap-2">
      <div>
        <Globe />
      </div>
      <div className="flex gap-1.5 flex-col">
        <p className="text-xs leading-2">Languages</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="leading-3 cursor-pointer font-medium outline-none text-sm text-start">{position}</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit mt-3 bg-white border shadow rounded-sm p-3">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem className="outline-none px-2 py-1 text-sm rounded-sm hover:bg-secondary cursor-pointer" value="Indonesian">
                <span>Indonesian</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="outline-none px-2 py-1 text-sm rounded-sm hover:bg-secondary cursor-pointer" value="English">
                <span>English</span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default LanguageButton;
