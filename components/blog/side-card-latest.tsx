import { data_blog } from "@/lib/constant";
import React from "react";
import ContentCard from "../card/content-card";
import SideCard from "../card/side-card";

const SideCardLatest = () => {
  return (
    <SideCard className="space-y-6 h-fit sticky top-24 bg-gray-2 p-8" title="Latest Insight">
      <div className="space-y-8">
        {data_blog.slice(0, 5).map((item) => (
          <ContentCard variant="sm" key={item.id} data={item} />
        ))}
      </div>
    </SideCard>
  );
};

export default SideCardLatest;
