import React, { useState } from "react";
import "./style.scss";

ColorFeature.propTypes = {};

const getRandomColor = () => {
    const COLOR_LIST = ["yellow", "red", "purple", "green", "black"];

    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
};

function ColorFeature(props) {
    const initColor = localStorage.getItem('color-box') || 'yellow';
    const [colorBox, setColorBox] = useState(initColor);
    const handleClickBox = () => {
        const newColor = getRandomColor();
        setColorBox(newColor);
        localStorage.setItem('color-box', newColor);
    };
    return <div className="color-box" style={{ backgroundColor: colorBox }} onClick={handleClickBox}></div>;
}

export default ColorFeature;
