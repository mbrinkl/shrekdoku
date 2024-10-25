import { Difficulty } from "sudoku-core";
import { Link } from "@tanstack/react-router";
import { Fireworks } from "@fireworks-js/react";
import { useSudokuBoard } from "../hooks/useSudokuBoard";
import { SudokuControls } from "./SudokuControls";
import { SudokuBoard } from "./SudokuBoard";
import { SudokuLoading } from "./SudokuLoading";

interface SudokuBoardProps {
  difficulty: Difficulty;
}

export const SudokuGame = (props: SudokuBoardProps): JSX.Element => {
  const { board, selectedIndex, status, actions } = useSudokuBoard(props.difficulty);

  return (
    <div className="h-dvh w-dvw">
      <div className="h-full flex flex-col justify-center items-center">
        <Link className="text-white font-bold text-lg absolute top-3 left-3" to="/">
          Exit
        </Link>
        {!board ? (
          <SudokuLoading />
        ) : (
          <>
            <SudokuBoard board={board} selectedIndex={selectedIndex} setSelectedIndex={actions.setSelectedIndex} />
            <div className="text-white">{status}</div>
            {status === "success" && <Fireworks autostart={true} />}
            <SudokuControls onControlClick={actions.updateSelectedCellValue} />
          </>
        )}
      </div>
    </div>
  );
};
