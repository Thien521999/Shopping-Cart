import { useEffect, useRef, useState } from "react";

useMagicColor.propTypes = {};

const randomColor = (currentColor) => {
  const COLOR_LIST = ["red", "green", "yellow"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);//tim vi tri 
  let newIndex = currentColor;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  return COLOR_LIST[newIndex];
};

function useMagicColor(props) {
  const [color, setColor] = useState("purple");
  const colorRef = useRef("purple");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      //console.log("Current color:", color);
      console.log("Change color:", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 2000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return { color };
}

export default useMagicColor;
