import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propItem {
  id: number;
  title: string;
  image: string;
}

interface dataProps {
  data: propItem;
}

const ImageContentCard = ({ data }: dataProps) => {
  return (
    <div className="flex items-center gap-3 w-full h-max-[300px] ">
      <Image className="aspect-3/2 w-[82px] object-cover" alt={data.title + "image"} src={data?.image || ""} width="300" height="300" />
      <div className="w-full text-xs leading-5 line-clamp-3">
        <Link href="/" className="hover:text-gray-400 transition-all">
          <span>{data.title}</span>
        </Link>
      </div>
    </div>
  );
};

export default ImageContentCard;
