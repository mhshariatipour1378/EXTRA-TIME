import React from 'react'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const TopPlayers = (props)=>{
    return(
        <>
            <div className="top-players color-dark-Blue">
                <h2 className="title font-title">
                    <span className="t-text">{props.title}</span>
                </h2>

                <div className="players ">

                    {props.players.length > 0
                        ? props.players.map( (player, index) => (
                                <a className="player" key={player.ID}>
                                    <div className="p-rank">
                                        {index + 1}
                                    </div>
                                    <div className="p-img">
                                        <img src="data:image/png;base64,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" alt="player" />
                                    </div>
                                    <div className="p-name">
                                        {player['Name']}
                                    </div>
                                    <div className="p-ova">
                                        {player.OVA}
                                    </div>
                                </a>
                            )
                        )
                        : <div>loadding</div>
                    }








                </div>

                <div className="show-all">
                    <a>
                        <span className="text">show all</span>
                        <FontAwesomeIcon  icon={faLongArrowAltRight} />
                    </a>
                </div>
            </div>
        </>
    );
};


export default TopPlayers;