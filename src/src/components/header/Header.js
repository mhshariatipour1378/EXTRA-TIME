import React from 'react';
import "./style/header.css"
import Logo from "./img/logo.png"
import {faAngleDown, faBookmark, faTimes, faSearch, faList} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({txt})=>{

    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navigation">

                            <div className="nav-box">
                                <a className="logo">
                                    <img src={Logo} alt="LOGO"/>
                                </a>

                                <ul className="menu-items d-md-block d-none">

                                    <li className="m-item">
                                        <a className="m-link">
                                            HOME
                                        </a>
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


                                <div className="bookmark-players circle-menu">
                                    <span className="icon">
                                        <FontAwesomeIcon  icon={faBookmark} />
                                    </span>
                                    <div className="num-bookmark b-g-gold color-brown">99</div>

                                    <div className="holder-items color-brown">
                                        <div className="h-items">
                                           <div className="scroll-bar">
                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p1.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       T. Werner
                                                   </div>
                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p2.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       Eden hazard
                                                   </div>

                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p1.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       T. Werner
                                                   </div>
                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p2.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       Eden hazard
                                                   </div>

                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p1.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       T. Werner
                                                   </div>
                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p2.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       Eden hazard
                                                   </div>

                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p1.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       T. Werner
                                                   </div>
                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p2.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       Eden hazard
                                                   </div>

                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p1.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       T. Werner
                                                   </div>
                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                               <a href="#" className="b-player">
                                                   <div className="p-img">
                                                       <img src="/p2.png" alt="player" />
                                                   </div>
                                                   <div className="p-name">
                                                       Eden hazard
                                                   </div>

                                                   <button className="delete">
                                                       <FontAwesomeIcon   icon={faTimes} />
                                                   </button>
                                               </a>

                                           </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </nav>

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
                    </div>
                </div>
            </div>
        </header>
    )
};



export default Header;