import React, {useState} from 'react';

export const Counter = React.createContext();
export const SetCounter = React.createContext();

const CounterPlayersBookMark = (props)=>{
    const [counterPlayers, setCounterPlayers] = useState(0);
    return(
        <Counter.Provider value={counterPlayers}>
            <SetCounter.Provider value={setCounterPlayers}>
                {props.children}
            </SetCounter.Provider>
        </Counter.Provider>
    )
};

export default CounterPlayersBookMark;