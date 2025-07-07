"use client";

import { category, data_blog } from "@/lib/constant";
import { Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import SideCard from "../card/side-card";
import BlogCard from "./blog-card";

interface SideCardProps {
  className?: string;
  maxCategories?: number;
  maxSearchResults?: number;
}

const SideFIlterBlog: React.FC<SideCardProps> = ({ className = "", maxCategories = 6, maxSearchResults = 5 }) => {
  const [searchValue, setSearchValue] = useState("");

  // Memoize filtered results untuk performa yang lebih baik
  const filteredBlogs = useMemo(() => {
    if (!searchValue.trim()) return [];

    const searchTerm = searchValue.toLowerCase().trim();
    return data_blog.filter((item) => item.title.toLowerCase().includes(searchTerm));
  }, [searchValue]);

  // Debounce search untuk mengurangi re-render
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const hasSearchResults = searchValue.trim() !== "";
  const showNoResults = hasSearchResults && filteredBlogs.length === 0;

  return (
    <SideCard className={className} variant="search">
      {/* Search Input */}
      <div className="flex flex-row items-center justify-center relative gap-2">
        <input
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          type="text"
          placeholder="Search Insight"
          className="w-full outline-none pb-5 focus:border-b-black border-b border-b-gray-3 placeholder:text-primary text-sm transition-colors duration-200"
          aria-label="Search blog posts"
        />
        <button onClick={clearSearch} className="absolute right-0 top-0 z-10 bg-gray-2 p-1 hover:bg-gray-3 transition-colors duration-200 rounded" aria-label={searchValue ? "Clear search" : "Search"}>
          {!searchValue ? <Search className="h-5 w-5" strokeWidth="1.5" /> : <X className="h-5 w-5" strokeWidth="1.5" />}
        </button>
      </div>

      {/* Content */}
      {!hasSearchResults ? (
        // Categories List
        <nav className="space-y-5 text-sm" aria-label="Blog categories">
          <ul className="space-y-3">
            {category.slice(0, maxCategories).map((item) => (
              <li key={item.name}>
                <Link href={`/category/${item.name.toLowerCase().replace(/\s+/g, "-")}`} className="block hover:text-gray-4 hover:border-b border-b-gray-4 transition-colors duration-200 py-1">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        // Search Results
        <div className="space-y-5">
          {showNoResults ? (
            <div className="text-center text-gray-4 py-8">
              <p>No results found for {searchValue}</p>
              <p className="text-xs mt-2">Try different keywords or browse categories above</p>
            </div>
          ) : (
            <>
              <div className="text-xs text-gray-4 mb-4">
                Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? "s" : ""}
              </div>
              {filteredBlogs.slice(0, maxSearchResults).map((item) => (
                <BlogCard key={item.id} blog={item} variant="compact" />
              ))}
              {filteredBlogs.length > maxSearchResults && (
                <div className="text-center pt-4">
                  <p className="text-xs text-gray-4">
                    Showing {maxSearchResults} of {filteredBlogs.length} results
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </SideCard>
  );
};

export default SideFIlterBlog;
