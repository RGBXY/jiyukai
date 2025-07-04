import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Skeleton } from "../ui/skeleton";

interface BlogItem {
  id: number;
  title: string;
  image: string;
  category: string;
  reading_time: string;
  date: string;
  author: string;
}

interface BlogItemsProps {
  blogItem: BlogItem;
}

const BlogCard = ({ blogItem }: BlogItemsProps) => {
  return (
    <div className="h-full ">
      <div className="min-h-[285px] flex flex-col justify-between gap-3 w-full">
        <div className="space-y-2">
          <div className="">
            <Image className="aspect-3/2 w-full object-cover" alt="blog-image" src={blogItem.image} width="300" height="300" />
          </div>
          <Link href="/" className="hover:text-gray-400 transition-all">
            <h1 className="line-clamp-2 min-h-[3em] leading-6">{blogItem.title}</h1>
          </Link>
        </div>
        <div className="text-xs text-gray-5 flex gap-4 items-center">
          <span>{blogItem.category}</span>
          <div className="h-[0.5px] bg-gray-3 flex-1" />
          <span>{blogItem.date}</span>
        </div>

        {/* <ContentCard data={blogItem} /> */}
      </div>

      {/* <div className="min-h-[280px] flex flex-col gap-2 w-full">
        <Skeleton className="aspect-3/2 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div> */}
    </div>
  );
};

export default BlogCard;
