import React, {useEffect, useState} from 'react'
import "./style/player.css"
import BoxInfo from './component/BoxInfo'
import Information from './component/Information'
import ContainerPage from "./../ContainerPage"

const Player = (props) => {

    const [playerInfo, setPlayerInfo] = useState(null);

    useEffect(()=>{
        fetch(`http://nabzsalamati.ir/FIFA/?playerId=${props.match.params.playerId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setPlayerInfo(result[0].data);
                    console.log(result[0].data);
                    document.title = result[0].data.INFO.Name;
                },

                (error) => {

                }
            );
    }, []);

    return(
        <ContainerPage pageName="player">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4">
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
                                    : "Loading"
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
                                            : "Loading"
                                    }
                                </div>

                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Skill"
                                                items={playerInfo.Skill}
                                            />
                                            : "Loading"
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
                                            : "Loading"
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
                                            : "Loading"
                                    }
                                </div>


                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Mentality"
                                                items={playerInfo.Mentality}
                                            />
                                            : "Loading"
                                    }
                                </div>




                                <div className="col-xl-6 col-12">
                                    {
                                        playerInfo != null ?
                                            <BoxInfo
                                                title="Goalkeeping"
                                                items={playerInfo.Goalkeeping}
                                            />
                                            : "Loading"
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
                                            : "Loading"
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