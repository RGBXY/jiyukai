import { nav_link } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import LinkCustom from "../ui/link-custom";

const Footer = () => {
  return (
    <footer className="bg-gray-2">
      <div className=" w-full py-14 border border-gray-3 flex flex-col gap-5 items-center justify-center">
        <Image className="md:w-24 w-24" src="/icon/logo.svg" height={300} width={300} alt="logo" />

        <div className="flex gap-4">
          {nav_link.map((item, index) => (
            <div key={index} className="h-full">
              <LinkCustom data={item} />
            </div>
          ))}
        </div>

        <div className="space-x-4">
          <button>Back to top</button>
          <button>Share</button>
        </div>
      </div>

      <div className="w-full h-10 flex items-center justify-center text-xs">
        <p>Copyright © 2025, Derren Amadeo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
