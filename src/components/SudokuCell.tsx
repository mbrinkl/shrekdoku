import clsx from "clsx";
import { Cell } from "../types";
import { imgMap } from "../util";

interface SudokuCellProps {
  cell: Cell;
  index: number;
  selectedIndex: number;
  selectedValue: number | null;
  setSelectedIndex: (index: number) => void;
}

export const SudokuCell = (props: SudokuCellProps): JSX.Element => {
  const isDisabled = !props.cell.isEditable;
  const isSelected = props.selectedIndex === props.index;
  const isMatchingValueSelected = props.cell.currValue !== null && props.cell.currValue === props.selectedValue;

  const onCellClick = () => {
    props.setSelectedIndex(props.index);
  };

  return (
    <div
      className={clsx(
        "w-10 h-10 border border-red-600 cursor-pointer",
        isSelected ? "bg-orange-400" : isMatchingValueSelected ? "bg-purple-400" : "bg-white hover:bg-cyan-300",
      )}
      onClick={onCellClick}
    >
      <span className={clsx("text-center font-bold", isDisabled ? "text-black" : "text-blue-600")}>
        {props.cell.currValue ? <img src={imgMap[props.cell.currValue]} alt={props.cell.currValue.toString()} /> : null}
      </span>
    </div>
  );
};
