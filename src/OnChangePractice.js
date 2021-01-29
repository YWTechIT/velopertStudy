import React from 'react';

const Event = () => {

    return(
        <>
        <input
        name = 'username'
        placeholder = '무엇이든 입력해보세요'
        onChange={(e) => {console.log(e.target.value)}}
        ></input>
        </>
    )
}

export default Event;