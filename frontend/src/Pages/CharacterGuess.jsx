import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export const CharacterGuess = () => {
  const { genre } = useParams();
  const navigate = useNavigate();
  const [guessesLeft, setGuessesLeft] = useState(5);
  const [characterGuessed, setCharacterGuessed] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (guessesLeft === 0) {
      navigate("/Result", {
        state: {
          characterGuessed,
          guessesLeft,
          genre
        },
      });
    }
  }, [guessesLeft, navigate]);

  const onSubmit = (data) => {
    setCharacterGuessed(data.guessInput);

    setGuessesLeft((prev) => Math.max(prev - 1, 0));
    reset();
  };

  return (
    <Card className="relative flex flex-col flex-grow justify-center items-center rounded-3xl bg-blue-300 dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className="z-10 flex flex-wrap justify-center text-center text-4xl">

        <Card className="px-4 border-r-2 rounded-r-none">
          <CardTitle>{genre}</CardTitle>
          <CardContent className="text-center">
            <User className="h-32 w-32 border-4 rounded-t-2xl" />
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center px-8 border-l-2 rounded-l-none">
          <CardTitle>
            Ask Questions <br />
            to Guess the Character
          </CardTitle>

          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center"
            >
              <div>
                <Input
                  className="formInput md:w-[25vw] sm:[50vh] border-r-1 rounded-r-none"
                  type="text"
                  placeholder="Enter your guess"
                  {...register("guessInput", { required: true })}
                  disabled={guessesLeft === 0}
                />
                {errors.guessInput && (
                  <p className="pt-1 text-sm text-red-600 flex justify-center">
                    This field is required
                  </p>
                )}
              </div>
              <Button
                className="formBtn rounded-l-none"
                variant="reverse"
                disabled={guessesLeft === 0}
              >
                Submit
              </Button>
            </form>
          </CardContent>

          <CardFooter className="text-xl">
            Guesses Remaining: {guessesLeft}/20
          </CardFooter>
        </Card>
      </div>
    </Card>
  );
};
