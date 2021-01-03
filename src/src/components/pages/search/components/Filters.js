import React, {useState, useEffect} from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"
import useFilters from "./../../../hooks/useFilters"
import useSetFilters from "./../../../hooks/useSetFilters"
import {premierLeague, laLiga, serieA} from './../../../data/teams'
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons'

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}


const Filters = (props)=>{




    const filtersActive = useFilters();
    const [rangeInputAge,setRangeInputAge] = useState({ min: filtersActive.age.min, max: filtersActive.age.max });
    const [rangeInputOva,setRangeInputOva] = useState({ min: filtersActive.ova.min, max: filtersActive.ova.max });
    const {setRangeAge, setRangeOva, toggleTeam, togglePosition, setName, setNewTeam, resetFilter, setNewPosition} = useSetFilters();
    const history = useHistory();
    const [activeBoxFilter, setActiveBoxFilter] = useState(0);

    console.log("re-filter.js");


    useEffect(()=>{
        resetFilter();
        const querySearch = parseQuery(window.location.search);
        if(querySearch.name){
            setName(querySearch.name);
        }else{
            setName("");
        }

        if(querySearch.team){
            setNewTeam(querySearch.team);
        }

        if(querySearch.position){
            setNewPosition(querySearch.position)
        }
    },[]);

    useEffect(()=>{
        console.log("re-setName");
        const querySearch = parseQuery(window.location.search);
        if(querySearch.name){
            setName(querySearch.name);
        }else{
            setName("");
        }

        if(querySearch.team){
            setNewTeam(querySearch.team);
        }

        if(querySearch.position){
            setNewPosition(querySearch.position)
        }

    },[window.location.search]);

    useEffect(()=>{
        setRangeInputAge({ min: filtersActive.age.min, max: filtersActive.age.max });
        setRangeInputOva({ min: filtersActive.ova.min, max: filtersActive.ova.max });
    },[filtersActive.age, filtersActive.ova]);



    function  clearFilter() {
        resetFilter();
        history.push(window.location.pathname);
    }

    return(
        <div className="filters">
            <button className="show-filter" onClick={()=>  setActiveBoxFilter(!activeBoxFilter)}>
                Search filters
            </button>
            <div className={`filters-holder ${activeBoxFilter ? "active" : ""} `}>

                <button className="close-filters" onClick={()=>  setActiveBoxFilter(!activeBoxFilter)}>
                    <FontAwesomeIcon className="icon" icon={faTimes} />
                </button>

                <div className="filter">

                    <div className="filter-title">
                        <span className="f-text font-title">By Position</span>
                    </div>
                    <div className="types">
                        <div className="types-holder">


                            <div className="type">
                                <label className="checkbox bounce" >
                                    <input type="checkbox" onChange={()=>togglePosition("GK")}/>
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                    <span className="value">Goalkeepers</span>
                                </label>
                            </div>

                            <div className="type">
                                <label className="checkbox bounce">
                                    <input type="checkbox" onChange={()=>togglePosition("Defender")}/>
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                    <span className="value">Defenders</span>
                                </label>
                            </div>


                            <div className="type">
                                <label className="checkbox bounce">
                                    <input type="checkbox"  onChange={()=>togglePosition("Midfielder")}/>
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                    <span className="value">Midfielders</span>
                                </label>
                            </div>

                            <div className="type">
                                <label className="checkbox bounce">
                                    <input type="checkbox" onChange={()=>togglePosition("Attacker")}/>
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                    <span className="value">Forwards</span>
                                </label>
                            </div>

                            <div className="type">
                                <label className="checkbox bounce">
                                    <input type="checkbox" onChange={()=>togglePosition("All")}/>
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                    <span className="value">All</span>
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="filter">
                    <div className="filter-title">
                        <span className="f-text font-title">By Team</span>
                    </div>
                    <div className="types">
                        <div className="types-holder">

                            {
                                premierLeague.map((team)=>{
                                    return(
                                        <div className="type">
                                            <label className="checkbox bounce">
                                                <input type="checkbox" onChange={(e)=>toggleTeam(team.slug)}/>
                                                <svg viewBox="0 0 21 21">
                                                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                                </svg>
                                                <span className="value">{team.name}</span>
                                            </label>
                                        </div>
                                    )
                                })
                            }

                            {
                                laLiga.map((team)=>{
                                    return(
                                        <div className="type">
                                            <label className="checkbox bounce">
                                                <input type="checkbox" onChange={(e)=>toggleTeam(team.slug)}/>
                                                <svg viewBox="0 0 21 21">
                                                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                                </svg>
                                                <span className="value">{team.name}</span>
                                            </label>
                                        </div>
                                    )
                                })
                            }

                            {
                                serieA.map((team)=>{
                                    return(
                                        <div className="type">
                                            <label className="checkbox bounce">
                                                <input type="checkbox" onChange={(e)=>toggleTeam(team.slug)}/>
                                                <svg viewBox="0 0 21 21">
                                                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                                </svg>
                                                <span className="value">{team.name}</span>
                                            </label>
                                        </div>
                                    )
                                })
                            }



                        </div>
                    </div>
                </div>

                <div className="filter">
                    <div className="filter-title">
                        <span className="f-text font-title">By Age</span>
                    </div>
                    <div className="range">
                        <InputRange
                            minValue={16}
                            maxValue={53}
                            value={rangeInputAge}
                            onChange={val=>setRangeAge(val)}
                        />
                    </div>
                </div>

                <div className="filter">
                    <div className="filter-title">
                        <span className="f-text font-title">By Ova</span>
                    </div>
                    <div className="range">
                        <InputRange
                            minValue={38}
                            maxValue={93}
                            value={rangeInputOva}
                            onChange={val=>setRangeOva(val)}
                        />
                    </div>
                </div>

                <button className="clear-filter" onClick={()=> clearFilter()}>
                    Clear Filters
                </button>
            </div>
        </div>
    )
};

export default Filters;