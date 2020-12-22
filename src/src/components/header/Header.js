import React, {useEffect, useState} from 'react';
import "./style/header.css"
import Logo from "./img/logo.png"
import {faAngleDown, faBookmark, faTimes, faSearch, faList} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import usePlayersBookMark from "./../hooks/usePlayersBookMark"
import useSetPlayersBookMark from "./../hooks/useSetPlayersBookMark"
import useCounterPlayersBookMark from "./../hooks/useCounterPlayersBookMark"
import useSetCounterPlayersBookMark from "./../hooks/useSetCounterPlayersBookMark"

import Cookies from 'universal-cookie';

const Header = ({txt, searchBox})=>{


        const players = usePlayersBookMark();
        const setPlayers = useSetPlayersBookMark();
        const [active, setActive] = useState(0);
        const countPlayers = useCounterPlayersBookMark();
        const {counterMines} = useSetCounterPlayersBookMark();
        const cookies = new Cookies();



    /*        console.log("re-render");*/

        function toggleActive(){
            setActive(!active);
        }

        function removerPlayerBookMark(id) {
            var temp = players;
            for(var i = 0 ; i < temp.length ; i++){
                if (id === temp[i].id) {
                    temp.splice(i, 1);
                }
            }
            setPlayers(temp);
            console.log(players);
            counterMines();
            cookies.set('player', temp, { path: '/' });
        }

        return(
            <header className={searchBox ? "active-search-box" : ""}>
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
                                                            <a className="d-link">
                                                                Goalkeepers
                                                            </a>
                                                        </li>

                                                        <li className="d-item">
                                                            <a className="d-link">
                                                                Defenders
                                                            </a>
                                                        </li>

                                                        <li className="d-item">
                                                            <a className="d-link">
                                                                Midfielders
                                                            </a>
                                                        </li>


                                                        <li className="d-item">
                                                            <a className="d-link">
                                                                Forwards
                                                            </a>
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


                                    <div className="bookmark-players circle-menu" onMouseEnter={()=>toggleActive()} onMouseLeave={()=>toggleActive()}>
                                    <span className="icon">
                                        <FontAwesomeIcon  icon={faBookmark} />
                                    </span>
                                        <div className="num-bookmark b-g-gold color-brown">{countPlayers}</div>

                                                <div className={`holder-items color-brown ${active ? "active" : ""}`}>
                                                    <div className="h-items">
                                                        <div className="scroll-bar">

                                                            {
                                                                players.map(
                                                                    (player, index) => (
                                                                        <Link to={`/player/${player.id}`} key={`player.id`+index} className="b-player">
                                                                            <div className="p-img">
                                                                                <img src="/p1.png" alt="player" />
                                                                            </div>
                                                                            <div className="p-name">
                                                                                {player.name}
                                                                            </div>
                                                                            <button className="delete" onClick={()=>removerPlayerBookMark(player.id)}>
                                                                                <FontAwesomeIcon   icon={faTimes} />
                                                                            </button>
                                                                        </Link>
                                                                    )
                                                                )
                                                            }


                                                        </div>
                                                    </div>
                                                </div>





                                    </div>

                                </div>

                            </nav>

                            {
                                searchBox ? (
                                    <>
                                        <h1 className="font-title info-website">
                                            FIFA 2021 Player
                                            <br/>
                                            Information
                                        </h1>
                                        <form className="header-search">
                                            <div className="input-s-container">
                                                <input className="input" placeholder="Enter the player name" />
                                                <button>
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