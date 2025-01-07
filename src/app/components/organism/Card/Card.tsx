"use client";

import { cn } from "@/app/utils/utils";
import { Props } from "./@types";
import { Text, Title } from "@/app/components/elements";

export const Card = ({ icon, title, description, className }: Props) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <Title>{title}</Title>
      <Text className="text-gray-600">{description}</Text>
    </div>
  );
};
