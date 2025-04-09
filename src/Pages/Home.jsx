import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom'
const genres = [
  ["Marvel", "DCU", "Anime", "Movie"],
  ["Cartoon", "TV Series", "Sports"],
  ["Youtube", "Games", "Music", "WWE"],
];
export function Home() {
  return (
    <div className="flex-col flex-grow justify-center items-center relative flex w-full bg-blue-300 dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="z-10 flex flex-col justify-center items-center">
        <Badge
          className="text-4xl mb-6 bg-blue-400 border-2 border-blue-200"
          variant="default"
        >
          Select a Genre
        </Badge>
        <div className="grid grid-rows-3 gap-4 ">
          {genres.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2">
              {row.map((genre, index) => (
                <Link key={index} to={`/CharacterGuess/${genre.toLowerCase()}`}>
                  <Button className="text-3xl">{genre}</Button>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
