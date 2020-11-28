import {React, useEffect, useState} from 'react'
import TopPlayers from './TopPlayers'


const SideBar = ()=>{

    const [playerGK, setPlayerGK] = useState(null);

    useEffect(() => {
        fetch("http://mhshariatipour.ir/Fifa/?Best=GK&num=5")
            .then(res => res.json())
            .then(
                (result) => {
                    setPlayerGK(result);
                    console.log(result)
                },

                (error) => {

                }
            )
    }, []);

    return(
        <>
            <div className="side-bar">
                <TopPlayers title="Goalkeepers" players={playerGK}/>

                <TopPlayers title="Defenders" players={playerGK}/>

                <TopPlayers title="Midfielders" players={playerGK}/>

                <TopPlayers title="Forwards" players={playerGK}/>
            </div>
        </>
    );
};


export default SideBar;