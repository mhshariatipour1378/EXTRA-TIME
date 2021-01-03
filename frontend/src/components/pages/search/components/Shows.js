import React, {useEffect, useState} from 'react'
import useFilters from "./../../../hooks/useFilters"
import useSetActiveLoader from "./../../../hooks/useSetActiveLoader"
import {Link} from "react-router-dom";
import PageNumber from "./PageNumber"
import NotFoundPlayer from "./NotFoundPlayer"


const Shows = (props)=>{

    const showFilter = useFilters();
    const [players, setPlayers] = useState([]);
    const [notFound, setNotFound] = useState(1);
    const [totalPlayer, setTotalPlayer] = useState(showFilter.page);
    const setActiveLoader = useSetActiveLoader();


    useEffect(()=>{

        var activeFilter = [];
        var allFilters = "";

        setActiveLoader(1);

        activeFilter.push(`OVA=${showFilter.ova.min},${showFilter.ova.max}`);
        activeFilter.push(`Age=${showFilter.age.min},${showFilter.age.max}`);
        activeFilter.push(`Sort=${showFilter.sort}`);
        if(showFilter.position.length > 0){
            activeFilter.push(`Position=${showFilter.position.toString()}`);
        }
        if(showFilter.team.length > 0){
            activeFilter.push(`Club=${showFilter.team.toString()}`);
        }
        if(showFilter.name.length > 0){
            activeFilter.push(`Name=${showFilter.name}`);
        }

        activeFilter.push(`Page=${showFilter.page}`);


        for (var i = 0 ; i < activeFilter.length; i++){
            allFilters+= activeFilter[i];
            if(i !== activeFilter.length-1){
                allFilters+="&";
            }
        }

        var timeout = null;

        clearTimeout(timeout);

        timeout = setTimeout(function () {
            fetch(`http://nabzsalamati.ir/FIFA/?${allFilters}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setPlayers(result.data);
                        setTotalPlayer(result.count);
                       // console.log(result.data);
                        setActiveLoader(0);
                        if(result.data.length >0){
                            setNotFound(0);
                        }else{
                            setNotFound(1);
                        }
                    },

                    (error) => {

                    }
                );
        },2000 );

       // console.log("CALL FETCH");

    },[showFilter]);

    return(
        <div className="row show-result">
            <div className="bg-info col-12 d-none">
                <div>
                    Teams:&nbsp;
                    {
                        showFilter.team.map((team) => <span>{team},&nbsp;</span>)
                    }
                </div>

                <div>
                    Position:&nbsp;
                    {
                        showFilter.position.map((team) => <span>{team},&nbsp;</span>)
                    }
                </div>
                <div>
                    Sort:&nbsp;
                        <span>{showFilter.sort},&nbsp;</span>
                </div>
                <div>
                    Name:&nbsp;
                    <span>{showFilter.name},&nbsp;</span>
                </div>
                <div>
                    Page:&nbsp;
                    <span>{showFilter.page},&nbsp;</span>
                </div>
                <Link
                    to={{
                        path : window.location.pathname,
                        search: window.location.search.length > 0
                            ? window.location.search+"&team=Juventus"
                            : "?team=Juventus"
                    }}
                >
                    page5
                </Link>
            </div>
            {
                players.length > 0 ? players.map((player)=>{
                    return(
                        <div className="col-xl-4 col-sm-6 col-12 text-center"  key={player.ID}>
                            <Link className="res-player" to={`/player/${player.ID}`}>
                                <div className="res-info">
                                    <div className="p-img"><img src="/football-player.png" alt="img"/></div>
                                    <div className="t-i-text color-brown">
                                        <div className="ova font-title">{player.OVA}</div>
                                        <div className="bp">{player.BP}</div>
                                    </div>
                                </div>
                                <div className="bottom-info color-brown">
                                    <div className="p-name font-title color-brown">{player.Name}</div>
                                    <div className="p-club"><b className="font-title">Club: </b>{player.Club}
                                    </div>
                                    <div className="p-nationality"><b className="font-title">Nationality: </b>{player.Nationality}
                                    </div>
                                    <div className="card-items">
                                        {
                                            player.card.map(
                                                (item, index)=>(
                                                    <div className="item">
                                                        <div className="i-name">{item.val}</div>
                                                        <div className="i-value">{item.name}</div>
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
                : ""
            }

            <div className="col-12">
                {
                    notFound ? <NotFoundPlayer/> : ""
                }
            </div>

            <div className="col-12">
                {
                    !notFound ? <PageNumber totalPlayer={parseInt(totalPlayer/12) + 1} inPage={showFilter.page}/> : ""
                }

            </div>
        </div>
    )
};

export default Shows;