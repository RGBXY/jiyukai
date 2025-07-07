import Image from "next/image";
import React from "react";
import ContentCard from "../card/content-card";
import { cn } from "@/lib/utils";
// import { Skeleton } from "../ui/skeleton";

interface BlogItem {
  title: string;
  category: string;
  date: string;
  slug: string;
  author: string;
  image: string;
}

interface BlogItemProps {
  blog: BlogItem;
  className?: string;
  variant?: "default" | "compact";
}

type ContentCardVariant = "default" | "sm";

const LayoutVariants: Record<
  string,
  {
    cardWrapper: string;
    imageStyle: string;
    contentCardVar: ContentCardVariant;
  }
> = {
  default: {
    cardWrapper: "flex-col min-h-[285px] h-full flex justify-between gap-2 w-full ",
    imageStyle: "w-full",
    contentCardVar: "default",
  },
  compact: {
    cardWrapper: "flex-row item-center flex justify-between gap-2 w-full ",
    imageStyle: "w-[100px]",
    contentCardVar: "default",
  },
};

const BlogCard = ({ blog, variant = "default", className }: BlogItemProps) => {
  const styles = LayoutVariants[variant];

  return (
    <div className={cn(`h-full w-full ${className}`)}>
      <div className={cn(`${styles.cardWrapper}`)}>
        <Image className={cn(`${styles.imageStyle} aspect-3/2 object-cover`)} alt="blog-image" src={blog.image} width="300" height="300" />
        <ContentCard data={blog} variant={styles.contentCardVar || "default"} />
      </div>

      {/* <div className={`${styles.cardWrapper}  aspect-3/2`}>
        <Skeleton className={styles.imageStyle} />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div> */}
    </div>
  );
};

export default BlogCard;
