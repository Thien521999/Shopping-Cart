import React, { useState } from 'react';

ColorBox2.propTypes = {
    
};

function getRandomColor() {
    const COLOR_LIST = ['deepink', 'red', 'blue', 'yellow', 'orange'];
    const randomIndex = Math.trunc(Math.random()*5);
}

function ColorBox2() {
    const [color, setColor] = useState('deeppink');

    function handleBoxClick() {
        //get ramdomcolor =>setColor
        const newColor = getRandomColor();
        setColor(newColor);
    }

    return (
        <div 
            className="color-box2" 
            style={{ backgroundColor : color}}
            onClick = {handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox2;