import React, { useState } from 'react';
import Clock from './components';

ClockFeature.propTypes = {

};

function ClockFeature(props) {
    const [showClock, setShowClock] = useState(true);
    return (
        <div>
            {showClock && <Clock />}
            <button onClick={()=>setShowClock(false)}>Hide Clock</button>
        </div>
    );
}

export default ClockFeature;