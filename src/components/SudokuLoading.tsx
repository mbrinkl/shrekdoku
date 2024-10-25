import "./SudokuLoading.css";

export const SudokuLoading = () => {
  /* From Uiverse.io by alexruix */
  return (
    <div className="loader">
      <div className="cell d-0"></div>
      <div className="cell d-1"></div>
      <div className="cell d-2"></div>
      <div className="cell d-1"></div>
      <div className="cell d-2"></div>
      <div className="cell d-2"></div>
      <div className="cell d-3"></div>
      <div className="cell d-3"></div>
      <div className="cell d-4"></div>
    </div>
  );
};
