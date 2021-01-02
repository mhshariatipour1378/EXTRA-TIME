import React, {useContext} from 'react'
import {Counter} from './../contexts/CounterBookMarks'

const useCounterPlayersBookMark = ()=>{
    return useContext(Counter);
};

export default useCounterPlayersBookMark;