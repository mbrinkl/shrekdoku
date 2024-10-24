import { createFileRoute } from "@tanstack/react-router";
import { Difficulty } from "sudoku-core";
import { SudokuGame } from "../components/SudokuGame";

const PlayPage = () => {
  const { difficulty } = Route.useSearch();
  return <SudokuGame difficulty={difficulty} />;
};

export const Route = createFileRoute("/play")({
  component: PlayPage,
  validateSearch: (search: Record<string, unknown>) => {
    const isValidDifficulty = (value: unknown): value is Difficulty => {
      const difficulties: Difficulty[] = [
        "easy",
        "medium",
        "hard",
        "expert",
        "master",
      ];
      return difficulties.includes(value as Difficulty);
    };

    let difficulty: Difficulty = "medium";
    if (isValidDifficulty(search.difficulty)) {
      difficulty = search.difficulty;
    }

    return {
      difficulty,
    };
  },
});
