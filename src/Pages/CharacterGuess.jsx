import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";


export const CharacterGuess = () => {
  const { genre } = useParams();

  return (
    <Card className="rounded-3xl flex-col flex-grow justify-center items-center relative flex bg-blue-300 dark:bg-black">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Main content */}
      <Card className="z-10 p-4 capitalize text-4xl">
        <CardHeader>
          {genre}
        </CardHeader>
        <CardContent className="text-center">
          <User/>
        </CardContent>
      </Card>
    </Card>
  );
};
