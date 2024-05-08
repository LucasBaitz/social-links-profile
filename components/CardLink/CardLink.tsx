import Link from "next/link";
import React, { ReactNode } from "react";

interface CardLinkProps {
  children: ReactNode;
  href: string;
  target?: string;
}

const CardLink: React.FC<CardLinkProps> = ({ children, href, target = "_self" }) => {
  return (
    <Link
      className="w-full flex justify-center items-center card-btn font-bold px-10 py-3 rounded-md"
      href={href}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default CardLink;
