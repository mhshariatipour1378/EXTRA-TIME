import React, {useEffect, useState} from 'react'
import {laLiga, serieA} from './../../../data/teams'
import {Link} from "react-router-dom";

const CenterBox = ()=>{

    return(
      <>
        <div className="center-box">

            <div className="popular-teams">
                {
                    serieA.map((team)=>{
                        return(
                            <Link
                                to={{
                                    pathname: "/search",
                                    search:`?team=${team.slug}`
                                }}
                                className="team"
                            >
                                <img src={"/assets/img/popular/"+team.img} />
                            </Link>
                        )
                    })
                }
            </div>

            <a className="comparison">
                <div className="text font-title color-white">Compare Players</div>
            </a>

            <div className="popular-teams">
                {
                    laLiga.map((team)=>{
                        return(
                            <Link
                                to={{
                                    pathname: "/search",
                                    search:`?team=${team.slug}`
                                }}
                                className="team"
                            >
                                <img src={"/assets/img/popular/"+team.img} />
                            </Link>
                        )
                    })
                }
            </div>


        </div>
      </>
    );

};

export default CenterBox;