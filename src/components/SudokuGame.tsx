import { Difficulty } from "sudoku-core";
import { Fireworks } from "@fireworks-js/react";
import { useSudokuBoard } from "../hooks/useSudokuBoard";
import { SudokuCell } from "./SudokuCell";
import { SudokuControls } from "./SudokuControls";
import { Link } from "@tanstack/react-router";

export interface Cell {
  currValue: number | null;
  solutionValue: number;
  isEditable: boolean;
}

interface SudokuBoardProps {
  difficulty: Difficulty;
}

export const SudokuGame = (props: SudokuBoardProps): JSX.Element => {
  const { board, selectedIndex, status, actions } = useSudokuBoard(props.difficulty);

  return !board ? (
    <div className="text-white font-bold text-lg">Loading...</div>
  ) : (
    <div>
      <div
        className="w-56 bg-gray-500 grid"
        style={{
          gridTemplateRows: "1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr",
          padding: "1px",
        }}
      >
        {board.map((cell, index) => (
          <SudokuCell
            key={index}
            cell={cell}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={actions.setSelectedIndex}
          />
        ))}
      </div>
      {status === "success" && <Fireworks autostart={true} />}
      <SudokuControls onControlClick={actions.updateSelectedCellValue} />
      <Link className="text-white font-bold text-lg" to="/">
        Exit
      </Link>
    </div>
  );
};
