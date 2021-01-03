import React from 'react'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Loader from "react-loader-spinner";

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
                                        <img src={`http://nabzsalamati.ir/FIFA/img/${player.ID}.webp`} alt="player" />
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
                        : (
                            <div className="text-center">
                                <Loader
                                    type="ThreeDots"
                                    color="#255965"
                                    height={25}
                                    width={25}
                                />
                            </div>
                        )
                    }








                </div>

                <div className="show-all">
                    <Link
                        to={{
                            pathname: "/search",
                            search:`?position=${props.slug}`
                        }}
                    >
                        <span className="text">show all</span>
                        <FontAwesomeIcon  icon={faLongArrowAltRight} />
                    </Link>
                </div>
            </div>
        </>
    );
};


export default TopPlayers;