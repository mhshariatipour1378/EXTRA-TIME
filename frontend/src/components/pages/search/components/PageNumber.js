import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import useFilters from "../../../hooks/useFilters";
import useSetFilters from "./../../../hooks/useSetFilters"
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

const PageNumber = (props)=>{

    const history = useHistory();
    const showFilter = useFilters();
    const [pageIn, setPageIn] = useState(showFilter.page);
    const {setPage} = useSetFilters();


    useEffect(()=>{
        setPageIn(showFilter.page);
    },[showFilter]);

    function changePage(e) {
        e.preventDefault();

        /*const searchQuery = parseQuery(window.location.search);
        console.log(searchQuery);
        let path="";

        if(searchQuery.name){
            path+=`?name=${searchQuery.name}&`;
            if(searchQuery.team){
                path+=`team=${searchQuery.team}&`;
            }
        }else if(searchQuery.team){
            path+=`?team=${searchQuery.team}&`;
        }*/


        if(pageIn < 1){
            //history.push(window.location.pathname+path+`page=${1}`);
            setPage(1);
        }else if(pageIn > (props.totalPlayer / 12)){
           // history.push(window.location.pathname+path+`page=${props.totalPlayer}`);
            setPage(props.totalPlayer);
        }else{
            //history.push(window.location.pathname+path+`page=${pageIn}`);
            setPage(pageIn);
        }

    }

    function nextPage() {
        if(pageIn >= props.totalPlayer){
            setPage(props.totalPlayer);
        }else{
            setPage(pageIn+1);
        }
    }

    function prevPage() {
        if(pageIn <= 1){
            setPage(1);
        }else{
            setPage(pageIn-1);
        }
    }


    return(
      <div className="number-pages">

          <button className="next-page" onClick={()=>nextPage()}>
              <FontAwesomeIcon className="icon" icon={faAngleLeft} />
          </button>
          <button className="next-page" onClick={()=>prevPage()}>
              <FontAwesomeIcon className="icon" icon={faAngleRight} />
          </button>

          &nbsp; Page
          <form onSubmit={(e)=>changePage(e)}>
              <input
                  maxLength={4}
                  value={pageIn}
                  onChange={(e)=>setPageIn(e.target.value)}
              />
          </form>
          Of {props.totalPlayer}
      </div>
  )
};

export default PageNumber;