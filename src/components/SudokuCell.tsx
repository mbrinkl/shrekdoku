import clsx from "clsx";
import { Cell } from "./SudokuGame";

export interface ISudokuBox {
  cell: Cell;
  index: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export const SudokuCell = (props: ISudokuBox): JSX.Element => {
  const isDisabled = !props.cell.isEditable;
  const isSelected = props.selectedIndex === props.index;
  // const isMatchingValueSelected =
  //   props.val !== null && props.selectedValue === props.val;

  const onCellClick = () => {
    if (!isDisabled) {
      props.setSelectedIndex(props.index);
    }
  };

  return (
    <div
      className={clsx(
        "w-6 h-6 border border-red-600 cursor-pointer",
        isSelected ? "bg-orange-400" : "bg-white hover:bg-cyan-300",
      )}
      onClick={onCellClick}
    >
      <span className={clsx("text-center font-bold", isDisabled ? "text-black" : "text-blue-600")}>
        {props.cell.currValue}
      </span>
    </div>
  );
};
