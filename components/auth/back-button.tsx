"use client";

import Link from "next/link";
import { Button } from "../ui/button";

type PropTypes = {
  href: string;
  label: string;
};

export const BackButton = ({ href, label }: PropTypes) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
