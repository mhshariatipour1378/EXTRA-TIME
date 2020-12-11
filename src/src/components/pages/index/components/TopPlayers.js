import React from 'react'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

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
                                <Link to={`/player/${player.ID}`} className="player" key={player.ID}>
                                    <div className="p-rank">
                                        {index + 1}
                                    </div>
                                    <div className="p-img">
                                        <img src="/football-player.png" alt="player" />
                                    </div>
                                    <div className="p-name">
                                        {player['Name']}
                                    </div>
                                    <div className="p-ova">
                                        {player.OVA}
                                    </div>
                                </Link>
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