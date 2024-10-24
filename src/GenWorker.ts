import { Difficulty, generate, solve } from "sudoku-core";

onmessage = (ev: MessageEvent<Difficulty>) => {
  const board = generate(ev.data);
  const solution = solve(board);
  postMessage({ board, solution });
};
