"use client";

import { Typography } from "@material-tailwind/react";
import { LINKS, SOCIAL_LINKS } from "./footer-link";
import { SocialButton } from "./social-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-[#b9aeef] px-8 pt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Typography variant="h5" color="white" className="mb-4">
              Wishlist by Sazy
            </Typography>
            <Typography color="white" className="mb-8 font-normal">
              Jastip Produk China Terpercaya
            </Typography>
            <ul className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              {LINKS.map(({ title, href }) => (
                <li key={title}>
                  <Typography
                    as="a"
                    href={href}
                    color="white"
                    className="py-1 font-medium transition-colors hover:text-gray-200"
                  >
                    {title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <Typography variant="h6" color="white" className="mb-4 text-center md:text-left">
              Kontak kami:
            </Typography>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {SOCIAL_LINKS.map((link) => (
                <SocialButton key={link.title} {...link} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 border-t border-gray-700/50 py-7">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {currentYear} Wishlist by Sazy. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;