import React,{useState, useEffect} from "react";

function UseEffect1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        console.log("랜더링 완료");
    }, [name,count]);

    useEffect(() => {
        console.log("name 랜더링 완료");
    }, [name]);

    useEffect(() => {
        console.log("count 랜더링 완료");
    }, [count]);

    return (
        <div>
            <button onClick={handleCountUpdate}>
                update
            </button>
            <span>
                count:{count}
            </span>

            <br /><br />

            <input type="text" value={name} placeholder="이름을 입력하세요." onChange={handleInputChange} />
            <span>
                name:{name}
            </span>
        </div>
    );
}

export default UseEffect1;