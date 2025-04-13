import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { useState } from "react";

export const Result = () => {
  const { won, setWon } = useState(false);

  const location = useLocation();
  const { characterGuessed, guessesLeft, genre } = location.state || {};
  console.log(characterGuessed, guessesLeft);

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
      <div className="z-10 text-4xl text-center flex justify-center flex-wrap">
        <Card className="px-4 border-r-2 rounded-r-none">
          <CardTitle>{genre}</CardTitle>
          <CardContent className="text-center">
            <User className="h-24 w-24 border-4 rounded-t-2xl  " />
            {/* <p>{characterGuessed}</p> */}
          </CardContent>
        </Card>
        <Card className="px-8 border-l-2 rounded-l-none flex-col items-center">
          <CardTitle>
            {won && guessesLeft > 0 ? "You Won" : "You Loss"}
          </CardTitle>
          <CardDescription className="flex">
            {`Remaining Guesses are: ${guessesLeft}`}
          </CardDescription>
        </Card>
      </div>
    </Card>
  );
};
