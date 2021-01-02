import React, {useEffect, useState} from 'react';
import "./style/header.css"
import Logo from "./img/logo.png"
import {faAngleDown, faBookmark, faTimes, faSearch, faList} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useRouteMatch, useHistory} from "react-router-dom";
import usePlayersBookMark from "./../hooks/usePlayersBookMark"
import useSetPlayersBookMark from "./../hooks/useSetPlayersBookMark"
import useCounterPlayersBookMark from "./../hooks/useCounterPlayersBookMark"
import useSetCounterPlayersBookMark from "./../hooks/useSetCounterPlayersBookMark"

import Cookies from 'universal-cookie';

const Header = (props)=>{

        const [playerName, setPlayerName] = useState('')
        const playersBookMark = usePlayersBookMark();
        const [players, setPlayers] = useState(playersBookMark);
        const setPlayersBookMark = useSetPlayersBookMark();
        const [active, setActive] = useState(0);
        const countPlayers = useCounterPlayersBookMark();
        const {counterMines} = useSetCounterPlayersBookMark();
        const cookies = new Cookies();


        useEffect(()=>{

            setPlayers(playersBookMark);
            console.log("re-render-Header-Use-Effect");

        },[countPlayers]);

      console.log("re-render-Header");

        function setPlayerForShow(){

        }

        function removerPlayerBookMark(id) {
            var temp = players;
            for(var i = 0 ; i < temp.length ; i++){
                if (id === temp[i].id) {
                    temp.splice(i, 1);
                }
            }
            setPlayersBookMark(temp);
            console.log(players);
            counterMines();
            cookies.set('player', temp, { path: '/' });
        }

        const history = useHistory();

        const routeChange = () =>{
            let path = `/search?name=${playerName}`;
            history.push(path);
        };

        return(
            <header className={props.searchBox ? "active-search-box" : ""}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navigation">

                                <div className="nav-box">
                                    <Link to="/" className="logo">
                                        <img src={Logo} alt="LOGO"/>
                                    </Link>

                                    <ul className="menu-items d-md-block d-none">

                                        <li className="m-item">
                                            <Link to="/" className="m-link">
                                                HOME
                                            </Link>
                                        </li>


                                        <li className="m-item">
                                            <div className="m-link has-dropdown">
                                                PLAYERS
                                                <FontAwesomeIcon className="icon" icon={faAngleDown} />
                                                <div className="holder-items">
                                                    <ul className="d-items color-brown">
                                                        <li className="d-item">
                                                            <Link
                                                                to={{
                                                                    pathname: "/search",
                                                                    search:`?position=GK`
                                                                }}
                                                                className="d-link"
                                                            >
                                                                Goalkeepers
                                                            </Link>
                                                        </li>

                                                        <li className="d-item">
                                                            <Link
                                                                to={{
                                                                    pathname: "/search",
                                                                    search:`?position=Defender`
                                                                }}
                                                                className="d-link"
                                                            >
                                                                Defenders
                                                            </Link>
                                                        </li>


                                                        <li className="d-item">
                                                            <Link
                                                                to={{
                                                                    pathname: "/search",
                                                                    search:`?position=Midfielder`
                                                                }}
                                                                className="d-link"
                                                            >
                                                                Midfielders
                                                            </Link>
                                                        </li>


                                                        <li className="d-item">
                                                            <Link
                                                                to={{
                                                                    pathname: "/search",
                                                                    search:`?position=Attacker`
                                                                }}
                                                                className="d-link"
                                                            >
                                                                Forwards
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="m-item">
                                            <a className="m-link">
                                                COMPARISON
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="nav-box">

                                    <div className="res-menu circle-menu d-md-none d-flex">
                                    <span className="icon">
                                        <FontAwesomeIcon  icon={faList} />
                                    </span>

                                        <div className="holder-items color-brown">
                                            <div className="h-items">
                                                <div className="scroll-bar">
                                                    <ul className="r-menu-items">
                                                        <li className="r-menu-item">
                                                            <a className="r-menu-link">
                                                                HOME
                                                            </a>
                                                        </li>
                                                        <li className="r-menu-item">
                                                            <div className="r-menu-link">
                                                                PLAYERS
                                                            </div>
                                                            <div className="under-menu">
                                                                <a className="u-link">Goalkeepers</a>
                                                                <a className="u-link">Defenders</a>
                                                                <a className="u-link">Midfielders</a>
                                                                <a className="u-link">Forwards</a>
                                                            </div>
                                                        </li>
                                                        <li className="r-menu-item">
                                                            <a className="r-menu-link">
                                                                COMPARISON
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bookmark-players circle-menu" onMouseEnter={()=>setPlayerForShow()} >
                                    <span className="icon">
                                        <FontAwesomeIcon  icon={faBookmark} />
                                    </span>
                                        <div className="num-bookmark b-g-gold color-brown">{countPlayers}</div>

                                                <div className={`holder-items color-brown ${active ? "active" : ""}`}>
                                                    <div className="h-items">
                                                        <div className="scroll-bar">

                                                            {
                                                                players.length > 0 ? players.map(
                                                                    (player, index) => (
                                                                        <div className="b-player">
                                                                            <Link

                                                                                to={{
                                                                                    pathname: `/player/${player.id}`,
                                                                                    state: { fromDashboard: true }
                                                                                }}
                                                                                key={`player.id`+index}
                                                                                className="p-link"
                                                                            >
                                                                                <div className="p-img">
                                                                                    <img src="/p1.png" alt="player" />
                                                                                </div>
                                                                                <div className="p-name">
                                                                                    {player.name}
                                                                                </div>

                                                                            </Link>
                                                                            <button className="delete" onClick={()=>removerPlayerBookMark(player.id)}>
                                                                                <FontAwesomeIcon   icon={faTimes} />
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                ) : <div className="text-danger text-center">No players added</div>
                                                            }


                                                        </div>
                                                    </div>
                                                </div>





                                    </div>

                                </div>

                            </nav>

                            {
                                props.searchBox ? (
                                    <>
                                        <h1 className="font-title info-website">
                                            FIFA 2021 Player
                                            <br/>
                                            Information
                                        </h1>
                                        <form className="header-search">
                                            <div className="input-s-container">
                                                <input className="input" value={playerName} onChange={(e)=>setPlayerName(e.target.value)} placeholder="Enter the player name" />
                                                <button onClick={()=>routeChange()}>
                                                    <FontAwesomeIcon className="icon" icon={faSearch} />
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                ) : ''
                            }

                        </div>
                    </div>
                </div>
            </header>
        )
};




export default Header;