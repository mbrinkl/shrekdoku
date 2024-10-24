interface IControlButton {
  onClick: () => void;
  children: React.ReactNode;
}

const ControlButton = (props: IControlButton): JSX.Element => {
  return (
    <div className="bg-white h-6 w-8 text-center m-1 cursor-pointer hover:bg-cyan-300" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

interface SudokuControlsProps {
  onControlClick: (value: number | null) => void;
}

export const SudokuControls = (props: SudokuControlsProps) => {
  return (
    <div className="flex flex-wrap">
      {[..."123456789"].map((num) => (
        <ControlButton key={num} onClick={() => props.onControlClick(Number(num))}>
          {num}
        </ControlButton>
      ))}
      <ControlButton
        onClick={() => {
          props.onControlClick(null);
        }}
      >
        DEL
      </ControlButton>
    </div>
  );
};
