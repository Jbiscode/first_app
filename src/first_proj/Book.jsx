import React from 'react';

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다`}</h1>
            <p>{`이 책은 총 ${props.numOfpage} 페이지로 이뤄져있습니다.`}</p>
        </div>
    );
}
export default Book;