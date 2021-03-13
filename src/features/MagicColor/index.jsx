import useMagicColor from "features/hooks/useMagicColor";
import React from "react";
import './style.scss';

MagicColorFeature.propTypes = {};

function MagicColorFeature(props) {
    const { color } = useMagicColor();
    return <div className="box-color" style={{ backgroundColor: color }}></div>;
}

export default MagicColorFeature;
