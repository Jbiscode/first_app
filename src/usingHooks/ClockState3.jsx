import React,{useState} from "react";

function ClockState3(props) {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if (time >=24) {
            newTime = 1;
        }else {
            newTime = time + 1;
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