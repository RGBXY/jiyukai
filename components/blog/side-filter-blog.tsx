import { category } from "@/lib/constant";
import Link from "next/link";
import SideCard from "../card/side-card";

interface sideFilterProps {
  className?: string;
}

const SideFilterBlog = ({ className }: sideFilterProps) => {
  return (
    <SideCard className={className} title="Topics">
      <nav className="space-y-5 text-sm" aria-label="Blog categories">
        <ul className="space-y-3">
          {category.slice(0, 6).map((item) => (
            <li key={item.name}>
              <Link href={`/category/${item.name.toLowerCase().replace(/\s+/g, "-")}`} className="block hover:text-gray-4 hover:underline transition-colors duration-200 py-1">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SideCard>
  );
};

export default SideFilterBlog;
