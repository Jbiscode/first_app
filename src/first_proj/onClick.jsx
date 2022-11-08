import React,{useState} from "react";

function Counter1(props) {
    let count = 0;
    return(
        <div>
            <p>총 {count} 번 클릭했습니다.</p>
            <button onClick ={() => count++}>
                클릭
            </button>
        </div>
    );
}

function Counter2(props) {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>총 {count} 번 클릭했습니다.</p>
            <button onClick ={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export {Counter1, Counter2} ;