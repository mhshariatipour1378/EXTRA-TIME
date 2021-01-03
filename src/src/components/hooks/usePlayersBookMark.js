import React from 'react'
import {BookMarkPlayers} from '../contexts/BookMarkProvider'

const usePlayersBookMark = ()=>{
    return(
        React.useContext(BookMarkPlayers)
    )
};

export default usePlayersBookMark;