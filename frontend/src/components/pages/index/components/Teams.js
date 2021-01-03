import React from 'react'
import {Link} from "react-router-dom";
import {premierLeague} from './../../../data/teams'

const Teams = ()=>{



    return(
        <>
            <div className="teams">
                <h1 className="title color-white font-title" >PremierLeague Players</h1>
                <div className="logo-teams">


                    {
                        premierLeague.map((team)=>{
                            return(
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search:`?team=${team.slug}`
                                    }}
                                    className="logo-team"
                                >
                                    <img src={"/assets/img/teams/"+team.img} />
                                </Link>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
};


export default Teams;

