import React from 'react'
import {setBookMarkPlayers} from '../contexts/BookMarkProvider'

const useSetPlayersBookMark = ()=>{
    return(
        React.useContext(setBookMarkPlayers)
    )
};

export default useSetPlayersBookMark;