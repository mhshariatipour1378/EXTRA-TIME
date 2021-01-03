import React,{useState} from 'react'

export const BookMarkPlayers = React.createContext();
export const setBookMarkPlayers = React.createContext();

const BookMarkProvider = (props) =>{
    const [bookMark, setBookMark] = useState(null);
    return(
        <BookMarkPlayers.Provider value={bookMark}>
            <setBookMarkPlayers.Provider value={setBookMark}>
                {props.children}
            </setBookMarkPlayers.Provider>
        </BookMarkPlayers.Provider>
    )
};

export default BookMarkProvider;