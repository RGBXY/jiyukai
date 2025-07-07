import React from "react";

interface TopicItem {
  id: number;
  name: string;
}

interface TopicProp {
  topic: TopicItem;
}

const TopicCard = ({ topic }: TopicProp) => {
  return (
    <div className="h-10 px-4 bg-white flex items-center justify-center w-fit text-gray-5 hover:text-black border border-transparent hover:border-gray-3 transition-all">
      <p>{topic.name}</p>
    </div>
  );
};

export default TopicCard;
