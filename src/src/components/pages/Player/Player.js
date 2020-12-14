import {React, useEffect, useState} from 'react'
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
        <ContainerPage>

            {
                playerInfo != null ? playerInfo.INFO.Name : "Loading"
            }

        </ContainerPage>
    )
};

export default Player;