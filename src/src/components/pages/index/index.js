import React, {useEffect, useState} from 'react'
import "./style/index.css"
import SideBar from "./components/SideBar"
import Teams from "./components/Teams"
import Slider from "./components/Slider"
import CenterBox from "./components/CenterBox"
import ContainerPage from "./../ContainerPage"

const Index = ()=>{

    const [playerYoung, setPlayerYoung] = useState([]);
    const [topPlayer, setTopPlayer] = useState([]);
    const [playerMidfielder, setPlayerMidfielder] = useState([]);
    const [playerAttacker, setPlayerAttacker] = useState([]);

    useEffect(() => {
        fetch("http://nabzsalamati.ir/FIFA/?Best=Young")
            .then(res => res.json())
            .then(
                (result) => {
                    setPlayerYoung(result);
                },

                (error) => {

                }
            );

        fetch("http://nabzsalamati.ir/FIFA/?Best=Player")
            .then(res => res.json())
            .then(
                (result) => {
                    setTopPlayer(result);
                },

                (error) => {

                }
            );

        document.title = "FIFA 21 Player Information";



    }, []);


    return(
        <ContainerPage pageName="index" searchBox={true}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-12">
                        <SideBar />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-12">
                        <Slider  players={topPlayer} title="Top Players"/>

                        <Teams/>

                        <CenterBox/>

                        <Slider  players={playerYoung} title={"Top Young Players"}/>

                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export  default  Index;