import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface BlogItem {
  category: string;
  date: string;
  author: string;
  slug: string;
  title: string;
}

interface ContentCardProps extends VariantProps<typeof ContentCardVariant> {
  data: BlogItem;
  asChild?: boolean;
}

const ContentCardVariant = cva("", {
  variants: {
    variant: {
      default: "line-clamp-2 min-h-[3em] leading-6",
      sm: "w-full text-sm leading-5 line-clamp-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const ContentCard = ({ data, variant }: ContentCardProps) => {
  return (
    <div className="w-full h-max-[300px] ">
      <div className="space-y-2 w-full">
        <div className="w-full">
          <Link href={`/blog/${data.slug}`} className="hover:text-gray-400 transition-all">
            <span className={cn(ContentCardVariant({ variant }))}>{data.title}</span>
          </Link>
        </div>
        <div className="text-xs text-gray-5 flex gap-4 items-center">
          <span>{data.category}</span>
          <div className="h-[0.5px] bg-gray-3 flex-1" />
          <span>{data.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
