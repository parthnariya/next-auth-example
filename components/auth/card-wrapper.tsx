"use client";

import { WithChildren } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";

interface PropsType extends WithChildren {
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocials?: boolean;
}

function CardWrapper({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocials,
}: PropsType) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
    </Card>
  );
}

export default CardWrapper;
