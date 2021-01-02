import React, {useEffect} from 'react'
import Header from "./../header/Header"
import Footer from "./../footer/Footer"
import useSetPlayersBookMark from "./../hooks/useSetPlayersBookMark"
import usePlayersBookMark from "./../hooks/usePlayersBookMark"
import useSetCounterPlayersBookMark from "./../hooks/useSetCounterPlayersBookMark"
import useActiveLoader from "./../hooks/useActiveLoader"
import useSetActiveLoader from "./../hooks/useSetActiveLoader"
import Cookies from 'universal-cookie';
import Loader from "react-loader-spinner";



const ContainerPage = (props)=>{

    const bookMark = usePlayersBookMark();
    const cookies = new Cookies();
    const activeLoader = useActiveLoader();
    const setActiveLoader = useSetActiveLoader();
    const setPlayerBookMark = useSetPlayersBookMark();
    const {setCounter} = useSetCounterPlayersBookMark();



    useEffect(()=>{


        const lastPlayer = cookies.get('player') ? cookies.get('player') : [];

        setPlayerBookMark(lastPlayer);

        setCounter(lastPlayer.length);

        setActiveLoader(0);

    },[]);

    return(
        <>
            {
                bookMark != null ? (
                    <>
                        <div className={`loader-page ${activeLoader ? "active" : ""}`}>
                            <Loader
                                type="Rings"
                                color="#ffffff"
                                height={100}
                                width={100}
                                visible={activeLoader}
                            />
                        </div>

                        <Header
                            searchBox={props.searchBox}
                        />
                        <section id={props.pageName}>
                            {props.children}
                        </section>
                        <Footer/>
                    </>
                ) :
                    (
                        <div className={`loader-page active`}>
                            <Loader
                                type="Rings"
                                color="#ffffff"
                                height={100}
                                width={100}
                            />
                        </div>
                    )
            }
        </>
    )
};

export default ContainerPage;