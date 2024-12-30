"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";

interface SocialButtonProps {
  href: string;
  icon: string;
  title: string;
}

export function SocialButton({ href, icon, title }: SocialButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button color="white" className="flex w-full items-center justify-center gap-2">
        <Image
          width={24}
          height={24}
          src={icon}
          alt={title}
          className="h-6 w-6 object-contain"
        />
        {title}
      </Button>
    </a>
  );
}