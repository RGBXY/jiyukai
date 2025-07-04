// components/BaseCard.tsx
"use client";

import React from "react";

interface BaseCardProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "search" | "category";
}

const SideCard: React.FC<BaseCardProps> = ({ className = "", title, children, variant = "default" }) => {
  return (
    <div className={`space-y-6 h-fit bg-gray-2 p-8 ${className} ${variant}`}>
      {title && (
        <div className="border-b border-b-gray-3 pb-4">
          <h3 className="text-lg font-medium text-primary">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default SideCard;
