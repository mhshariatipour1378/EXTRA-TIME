import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import useSetFilters from "./../../../hooks/useSetFilters"
import useFilters from "./../../../hooks/useFilters"
import {useHistory} from "react-router-dom";

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

const typeSort = [
    { value: 1, label: 'OVA(DESC)' },
    { value: 2, label: 'OVA(ASC)' },
    { value: 3, label: 'AGE(DESC)' },
    { value: 4, label: 'AGE(ASC)' },
];


const Inputs = (props)=>{

    const [valueName, setValueName] = useState("");
    const filtersActive = useFilters();
    const {setSort, setName, toggleTeam} = useSetFilters();



    const history = useHistory();
    const routeChange = () =>{

        const searchQuery = parseQuery(window.location.search);
        console.log(searchQuery);
        let path="";

        if(searchQuery.position){
            path+=`?position=${searchQuery.position}&`;
            if(searchQuery.team){
                path+=`team=${searchQuery.team}&`;
            }
        }else if(searchQuery.team){
            path+=`?team=${searchQuery.team}&`;
        }

        if (path.length > 0){
            path+=`name=${valueName}`
        }else{
            path+=`?name=${valueName}`
        }

        history.push(window.location.pathname+path);

    };

    const customStyles = {

        control: (provided, state) => ({
            ...provided,
            borderColor: "transparent !important",
            boxShadow: "none",
            padding: "9px 0"
        }),
    };



    return(
        <div className="inputs">
            <div className="input search-by-name">
                <input value={valueName} onChange={e=>setValueName(e.target.value)} placeholder="Enter the player name"/>
                <button onClick={()=>routeChange()}>
                    <FontAwesomeIcon className="icon" icon={faSearch}  />
                </button>
            </div>
            <div className="sort-by input">
                <div className="text">Sort by :</div>
                <Select
                    value={typeSort[filtersActive.sort - 1]}
                    options={typeSort}
                    onChange={val => setSort(val.value)}
                    className="select-box"
                    styles={customStyles}
                />
            </div>


        </div>
    )
};

export default Inputs;