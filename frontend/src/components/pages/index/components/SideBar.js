import {React, useEffect, useState} from 'react'
import TopPlayers from './TopPlayers'


const SideBar = ()=>{

    const [playerGK, setPlayerGK] = useState([]);
    const [playerDefender, setPlayerDefender] = useState([]);
    const [playerMidfielder, setPlayerMidfielder] = useState([]);
    const [playerAttacker, setPlayerAttacker] = useState([]);

    useEffect(() => {
        fetch("http://nabzsalamati.ir/FIFA/?Best=GK&num=5")
            .then(res => res.json())
            .then(
                (result) => {
                    setPlayerGK(result);
                },

                (error) => {

                }
            );

        fetch("http://nabzsalamati.ir/FIFA/?Best=Defender&num=5")
            .then(res => res.json())
            .then(
                (result) => {
                    setPlayerDefender(result);
                },

                (error) => {

                }
            );


        fetch("http://nabzsalamati.ir/FIFA/?Best=Midfielder&num=5")
            .then(res => res.json())
            .then(
                (result) => {
                    setPlayerMidfielder(result);
                },

                (error) => {

                }
            );


        fetch("http://nabzsalamati.ir/FIFA/?Best=Attacker&num=5")
            .then(res => res.json())
            .then(
                (result) => {
                    setPlayerAttacker(result);
                },

                (error) => {

                }
            )
    }, []);

    return(
        <>
            <div className="side-bar">
                <TopPlayers title="Goalkeepers" players={playerGK} slug="GK"/>

                <TopPlayers title="Defenders" players={playerDefender} slug="Defender"/>

                <TopPlayers title="Midfielders" players={playerMidfielder} slug="Midfielder"/>

                <TopPlayers title="Forwards" players={playerAttacker} slug="Attacker"/>
            </div>
        </>
    );
};


export default SideBar