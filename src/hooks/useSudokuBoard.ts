import { useCallback, useEffect, useState } from "react";
import { Board, Difficulty } from "sudoku-core";
import { Cell } from "../types";
import GenWorker from "../GenWorker?worker";
import { computeNextIndex } from "../util";

export type Status = "in-progress" | "success" | "failure";

interface Retv {
  board: Cell[] | null;
  selectedIndex: number;
  status: Status;
  actions: {
    setSelectedIndex: (index: number) => void;
    updateSelectedCellValue: (value: number | null) => void;
  };
}

export const useSudokuBoard = (difficulty: Difficulty): Retv => {
  const [board, setBoard] = useState<Cell[] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [status, setStatus] = useState<Status>("in-progress");

  const updateSelectedCellValue = useCallback(
    (value: number | null) => {
      if (!board || !board[selectedIndex].isEditable) return;
      setBoard(
        (prev) => prev?.map((cell, index) => (selectedIndex === index ? { ...cell, currValue: value } : cell)) ?? null,
      );
    },
    [board, selectedIndex],
  );

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        updateSelectedCellValue(null);
      } else if (/^[1-9]$/i.test(e.key)) {
        updateSelectedCellValue(Number(e.key));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => computeNextIndex(prev, "left"));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => computeNextIndex(prev, "right"));
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prev) => computeNextIndex(prev, "up"));
      } else if (e.key === "ArrowDown") {
        setSelectedIndex((prev) => computeNextIndex(prev, "down"));
      }
    },
    [updateSelectedCellValue],
  );

  // puzzle generation
  useEffect(() => {
    const worker = new GenWorker();

    worker.onmessage = (e: MessageEvent<{ board: Board; solution: Board }>) => {
      const { board: generatedBoard, solution: generatedSolution } = e.data;
      const cells: Cell[] = [];
      for (let i = 0; i < generatedBoard.length; i++) {
        const cell: Cell = {
          currValue: generatedBoard[i],
          solutionValue: generatedSolution[i]!,
          isEditable: generatedBoard[i] === null,
        };
        cells.push(cell);
      }
      setBoard(cells);
    };

    worker.onerror = (err) => {
      console.error("worker error", err);
    };

    worker.onmessageerror = (err) => {
      console.error("worker message error", err);
    };

    worker.postMessage(difficulty);

    return () => {
      worker.terminate();
    };
  }, [difficulty]);

  // keybindings
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  // solve detection
  useEffect(() => {
    if (!board || board.some((cell) => cell.currValue === null)) {
      setStatus("in-progress");
    } else if (board.every((cell) => cell.currValue === cell.solutionValue)) {
      setStatus("success");
    } else {
      setStatus("failure");
    }
  }, [board]);

  return {
    board,
    selectedIndex,
    status,
    actions: { setSelectedIndex, updateSelectedCellValue },
  };
};
