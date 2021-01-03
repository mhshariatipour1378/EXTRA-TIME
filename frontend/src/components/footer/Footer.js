import React from 'react'
import "./style/footer.css"
import {Link} from "react-router-dom";


const Footer = ()=>{
  return(
      <>
        <footer className="text-white" style={{marginTop : 150}}>
            <div className="explain">

                <h3>Unrivaled Authenticity</h3>
                <h3>The World’s Game</h3>

                <p>EA SPORTS FIFA 21 brings you unrivaled authenticity with more than 30 official leagues, 700+ teams, and 17,000+ authentic players.</p>

            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6">

                    <h3 className="head-link">Top Players</h3>
                    <ul className="links">

                        <li>
                            <Link
                                to={{
                                    pathname: "/search",
                                    search:`?position=GK`
                                }}
                                className="link"
                            >
                                Goalkeepers
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={{
                                    pathname: "/search",
                                    search:`?position=Defender`
                                }}
                                className="link"
                            >
                                Defenders
                            </Link>
                        </li>


                        <li>
                            <Link
                                to={{
                                    pathname: "/search",
                                    search:`?position=Midfielder`
                                }}
                                className="link"
                            >
                                Midfielders
                            </Link>
                        </li>


                       <li>
                           <Link
                               to={{
                                   pathname: "/search",
                                   search:`?position=Attacker`
                               }}
                               className="link"
                           >
                               Forwards
                           </Link>
                       </li>


                    </ul>
                </div>

                    <div className="col-md-3 col-sm-6">

                        <h3 className="head-link">Team Players</h3>
                        <ul className="links">


                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search:`?team=Chelsea`
                                    }}
                                    className="link"
                                >
                                    Chelsea
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search:`?team=Liverpool`
                                    }}
                                    className="link"
                                >
                                    Liverpool
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search:`?team=Juventus`
                                    }}
                                    className="link"
                                >
                                    Juventus
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search:`?team=Real Madrid`
                                    }}
                                    className="link"
                                >
                                    Real Madrid
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search:`?team=FC Barcelona`
                                    }}
                                    className="link"
                                >
                                    Barcelona
                                </Link>
                            </li>

                          

                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="logo">
                            <img src="/logo.png" alt="LOGO" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
  )
};


export default Footer;

