"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Search } from "lucide-react";
import TopicCard from "../card/topic-card";
import { category, data_blog } from "@/lib/constant";
import Link from "next/link";
import BlogCard from "../blog/blog-card";
import { useMemo, useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlog = useMemo(() => {
    if (!searchValue.trim()) return [];

    const searchTerm = searchValue.toLowerCase().trim();
    return data_blog.map((item) => item.title.toLowerCase().includes(searchTerm));
  }, [searchValue]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Search />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="md:p-10 p-5 bg-gray-primary overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-normal">
            <input type="text" onChange={(e) => handleSearch(e.target.value)} className="h-20 text-4xl outline-none border-b w-full border-gray-3" placeholder="Type to search insight.." />
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-8">
          <div className="px-4 space-y-5">
            <h1 className="text-2xl">✨ Popular Blogs</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8">
              {/* {filteredBlog.slice(0, 10).map((item) => (
                <BlogCard variant="compact" blog={item} key={item.id} />
              ))} */}
            </div>
          </div>

          <div className="px-4 space-y-5">
            <h1 className="text-2xl">✨ Popular Topics</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {category.slice(0, 14).map((item) => (
                <TopicCard key={item.id} topic={item} />
              ))}
              <Link href="/topics" className="group px-4 text-gray-4 hover:text-black flex items-center gap-1.5 transition-all">
                <p>All Topics</p>
                <ArrowRight size={19} strokeWidth={1.4} className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </Link>
            </div>
          </div>

          <div className="px-4 space-y-5">
            <h1 className="text-2xl">✨ Popular Blogs</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8">
              {data_blog.slice(0, 7).map((item) => (
                <BlogCard variant="compact" blog={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SearchBar;
