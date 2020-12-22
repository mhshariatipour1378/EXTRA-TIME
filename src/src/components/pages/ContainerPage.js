import React, {useEffect} from 'react'
import Header from "./../header/Header"
import Footer from "./../footer/Footer"
import useSetPlayersBookMark from "./../hooks/useSetPlayersBookMark"
import usePlayersBookMark from "./../hooks/usePlayersBookMark"
import useSetCounterPlayersBookMark from "./../hooks/useSetCounterPlayersBookMark"
import Cookies from 'universal-cookie';


const ContainerPage = (props)=>{

    const cookies = new Cookies();
    const setPlayerBookMark = useSetPlayersBookMark();
    const {setCounter} = useSetCounterPlayersBookMark();



    useEffect(()=>{
        const lastPlayer = cookies.get('player') ? cookies.get('player') : [];

        setPlayerBookMark(lastPlayer);

        setCounter(lastPlayer.length);

    },[]);

    return(
        <>
            {
                usePlayersBookMark() != null ? (
                    <>
                        <Header
                            searchBox={props.searchBox}
                        />
                        <section id={props.pageName}>
                            {props.children}
                        </section>
                        <Footer/>
                    </>
                ) : <div>Loading</div>
            }
        </>
    )
};

export default ContainerPage;