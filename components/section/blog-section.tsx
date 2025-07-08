import React from "react";
import BlogCard from "../blog/blog-card";
import { data_blog } from "@/lib/constant";
import SideCardLatest from "../blog/side-card-latest";
import SideFilterBlog from "../blog/side-filter-blog";

const BlogSection = () => {
  return (
    <section id="article-section" className="lg:px-25 px-5 py-10 mx-auto max-w-cs1">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 ">
        {/* Artikel kiri */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] ">
          {data_blog.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
          {data_blog.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </div>

        {/* Sidebar kanan */}
        <aside className="h-full space-y-5">
          <SideFilterBlog />
          <SideCardLatest />
        </aside>
      </div>
    </section>
  );
};

export default BlogSection;
