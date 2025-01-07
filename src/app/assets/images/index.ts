import test from "./test.jpeg";
import fallback from "./placeholder.svg";
import placeholder from "./placeholder.svg";

export const images = {
  test,
  fallback,
  placeholder,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
