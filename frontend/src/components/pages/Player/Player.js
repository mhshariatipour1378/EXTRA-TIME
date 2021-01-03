import React, {useEffect, useState} from 'react'
import "./style/player.css"
import BoxInfo from './components/BoxInfo'
import Information from './components/Information'
import ContainerPage from "./../ContainerPage"
import useSetActiveLoader from "./../../hooks/useSetActiveLoader"
import {useHistory} from "react-router-dom";


const Player = (props) => {

    const [playerInfo, setPlayerInfo] = useState(null);
    const setActiveLoader = useSetActiveLoader();
    const history = useHistory();


    console.log("RE-render-Player");

    useEffect(()=>{
        setPlayerInfo(null);
        setActiveLoader(1);
        fetch(`http://nabzsalamati.ir/FIFA/?playerId=${props.match.params.playerId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result[0].data){
                        setPlayerInfo(result[0].data);
                        console.log(result);
                        document.title = result[0].data.INFO.Name;
                        setActiveLoader(0);
                    }else{
                        history.push(`/404`);
                    }
                },

                (error) => {

                }
            );
    }, [props.match.params.playerId]);

    return(
        <ContainerPage pageName="player">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-    4">
                        <div className="sticky-top">
                            {
                                playerInfo != null ?
                                    <Information
                                        information={playerInfo.INFO}
                                        ova={playerInfo.OVA}
                                        bp={playerInfo.BP}
                                        src={playerInfo.photo.PlayerPhoto}
                                        id={playerInfo.ID}
                                    />
                                    : ""
                            }

                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="holder-boxes">
                            <div className="row">
                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Attacking"
                                                items={playerInfo.Attacking}
                                            />
                                            : ""
                                    }
                                </div>

                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Skill"
                                                items={playerInfo.Skill}
                                            />
                                            : ""
                                    }
                                </div>

                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Movement"
                                                items={playerInfo.Movement}
                                                theme="brown"
                                            />
                                            : ""
                                    }
                                </div>


                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Power"
                                                items={playerInfo.Power}
                                                theme="brown"
                                            />
                                            : ""
                                    }
                                </div>


                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Mentality"
                                                items={playerInfo.Mentality}
                                            />
                                            : ""
                                    }
                                </div>




                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Goalkeeping"
                                                items={playerInfo.Goalkeeping}
                                            />
                                            : ""
                                    }
                                </div>

                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Defending"
                                                items={playerInfo.Defending}
                                                theme="brown"
                                            />
                                            : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </ContainerPage>
    )
};

export default Player;