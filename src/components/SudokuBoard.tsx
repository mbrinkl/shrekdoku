import { SudokuCell } from "./SudokuCell";
import { Cell } from "../types";

interface SudokuBoardProps {
  board: Cell[];
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
}

export const SudokuBoard = (props: SudokuBoardProps) => {
  return (
    <div>
      <div
        className="w-96 h-96 bg-gray-500 grid"
        style={{
          gridTemplateRows: "1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr",
          padding: "1px",
        }}
      >
        {props.board.map((cell, index) => (
          <SudokuCell
            key={index}
            cell={cell}
            index={index}
            selectedIndex={props.selectedIndex}
            selectedValue={props.selectedIndex === -1 ? null : props.board[props.selectedIndex].currValue}
            setSelectedIndex={props.setSelectedIndex}
          />
        ))}
      </div>
    </div>
  );
};
