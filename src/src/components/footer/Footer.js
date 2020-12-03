import React from 'react'
import "./style/footer.css"


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
                        <li className="link">
                            <a>
                                Goalkeepers
                            </a>
                        </li>

                        <li className="link">
                            <a>
                                Defenders
                            </a>
                        </li>

                        <li className="link">
                            <a>
                                Midfielders
                            </a>
                        </li>

                        <li className="link">
                            <a>
                                Forwards
                            </a>
                        </li>

                        <li className="link">
                            <a>
                                Young
                            </a>
                        </li>
                    </ul>
                </div>

                    <div className="col-md-3 col-sm-6">

                        <h3 className="head-link">Team Players</h3>
                        <ul className="links">
                            <li className="link">
                                <a>
                                    Gelsea
                                </a>
                            </li>

                            <li className="link">
                                <a>
                                    Wolves
                                </a>
                            </li>

                            <li className="link">
                                <a>
                                    Liverpool
                                </a>
                            </li>

                            <li className="link">
                                <a>
                                    Everton
                                </a>
                            </li>

                            <li className="link">
                                <a>
                                    Leicester
                                </a>
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

