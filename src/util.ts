import img1 from "./assets/tile000.png";
import img2 from "./assets/tile001.png";
import img3 from "./assets/tile002.png";
import img4 from "./assets/tile003.png";
import img5 from "./assets/tile004.png";
import img6 from "./assets/tile006.png";
import img7 from "./assets/tile007.png";
import img8 from "./assets/tile010.png";
import img9 from "./assets/tile013.png";

type Direction = "up" | "down" | "left" | "right";

export const imgMap: Record<number, string> = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
};

export const computeNextIndex = (index: number, direction: Direction): number => {
  if (index === -1) return index;

  if (direction === "left") {
    return index % 9 === 0 ? index + 8 : index - 1;
  }
  if (direction === "right") {
    return index % 9 === 8 ? index - 8 : index + 1;
  }
  if (direction === "up") {
    return index < 9 ? index + 9 * 8 : index - 9;
  }

  // down
  return index > 9 * 8 - 1 ? index - 9 * 8 : index + 9;
};
