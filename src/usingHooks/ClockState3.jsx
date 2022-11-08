import React,{useState} from "react";

function ClockState3(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const handleClick = () => {
        let newTime;
        if (time <=new Date().toLocaleTimeString()) {
            newTime = new Date().toLocaleTimeString();
        }
        setTime(newTime);
    };

    return (
        <div>
            <span>현재시각 : {time}시</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );

}
export default ClockState3;