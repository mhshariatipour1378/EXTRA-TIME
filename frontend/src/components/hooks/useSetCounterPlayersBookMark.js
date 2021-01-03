import React, {useContext} from 'react'
import {SetCounter} from '../contexts/CounterBookMarks'

const useSetCounterPlayersBookMark = ()=>{
    const setCounterPlayers = useContext(SetCounter);

    function counterPlus() {
        setCounterPlayers(prev => prev+1);
    }

    function counterMines() {
        setCounterPlayers(prev => prev-1);
    }

    function setCounter(value) {
        setCounterPlayers(value);
    }

    return {setCounter, counterPlus, counterMines};
};

export default useSetCounterPlayersBookMark;