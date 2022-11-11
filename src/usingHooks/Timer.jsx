import React,{useEffect} from "react";

const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
        console.log("타이머 실행");
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("타이머 해제");
        };
    }
    ,[]);
    return (
        <div>
            <span>타이머</span>
        </div>
    );
};


export default Timer;