import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const genres = [
  ["Marvel", "DCU", "Anime", "Movie"],
  ["Cartoon", "TV Series", "Sports"],
  ["Youtube", "Games", "Music", "WWE"],
];

export function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!selectedGenre) return;
  
    fetch(`https://main-kaun-game-1.onrender.com/${selectedGenre}`, {
      method: "GET",  
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [selectedGenre]);
  

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
        <Button
          className="text-5xl px-8 py-8 text-center"
          variant="noShadow"
          size="lg"
        >
          Select a Genre
        </Button>
        <div className="grid grid-rows-3 gap-4 mt-8 ">
          {genres.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2">
              {row.map((genre, index) => (
                <Link key={index} to={`/CharacterGuess/${genre}`}>
                  <Button
                    className="text-3xl cursor-pointer"
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Button>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
