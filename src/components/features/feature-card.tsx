"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="flex gap-6">
      <div className="h-12 w-12 rounded-lg bg-[#b9aeef] p-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export default FeatureCard;