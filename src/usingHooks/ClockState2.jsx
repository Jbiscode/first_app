// * ClockState2

import React, { useState } from 'react';

function ClockState2(props) {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        setTime(time + 1);
    };
    return (
        <div>
            <span>현재시각 : {time}시</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default ClockState2;