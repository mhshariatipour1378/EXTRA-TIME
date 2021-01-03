import {React, useEffect, useState }from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faPlus} from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
import useSetPlayersBookMark from "./../../../hooks/useSetPlayersBookMark"
import usePlayersBookMark from "./../../../hooks/usePlayersBookMark"
import useSetCounterPlayersBookMark from "./../../../hooks/useSetCounterPlayersBookMark"
import useCounterPlayersBookMark from "./../../../hooks/useCounterPlayersBookMark"

const Information = (props)=>{

    const playersBookMark = usePlayersBookMark();
    const setPlayerBookMark = useSetPlayersBookMark();
    const cookies = new Cookies();
    const {counterPlus, counterMines} = useSetCounterPlayersBookMark();
    const [bookMarkActive, setBookMarkActive] = useState(0);
    const counterPlayer = useCounterPlayersBookMark();


    useEffect(()=>{

        for(var i = 0 ; i < playersBookMark.length ; i++){
            if (props.id === playersBookMark[i].id) {
                setBookMarkActive(1);
                break;
            }else if(i === playersBookMark.length-1){
                setBookMarkActive(0);
            }
        }

        if(playersBookMark.length <= 0){
            setBookMarkActive(0);
        }

        console.log("use-Effect-information");

    },[playersBookMark,counterPlayer]);

    const togglePlayerBookMark = (id, name, src)=>{
        if(!bookMarkActive){
            let temp = playersBookMark ? playersBookMark : [];
            temp.push({
                id: id,
                name: name,
                src: src
            });
            setPlayerBookMark(temp);
            counterPlus();
            console.log(playersBookMark);
            cookies.set('player', temp, { path: '/' });
        }else{
            var temp = playersBookMark;
            for(var i = 0 ; i < temp.length ; i++){
                if (id === temp[i].id) {
                    temp.splice(i, 1);
                }
            }
            setPlayerBookMark(temp);
            console.log(playersBookMark);
            counterMines();
            cookies.set('player', temp, { path: '/' });
        }

        setBookMarkActive(!bookMarkActive);
    };


    return(
      <div className="information-holder">
          <div className="information">

              <div
                  className={`bookmark ${bookMarkActive ? "active" : ""}`}
                  onClick={()=>togglePlayerBookMark(
                      props.id,
                      props.information.Name,
                      props.src
                  )}
              >
                  <FontAwesomeIcon className="icon" icon={faBookmark} />
              </div>

              <div className="add-compare">
                  <FontAwesomeIcon className="icon" icon={faPlus} />
              </div>

              <div className="p-img">
                  <img src="/football-player.png" />
              </div>
              <h3 className="full-name  font-title">
                  {props.information.Name}
              </h3>

              <div className="ova font-title color-brown">
                  {props.ova}
              </div>

              <h4 className="bp font-title">
                  {props.bp}
              </h4>

              <div className="info-item">
                  <span className="font-title">Nationality:</span>
                  {props.information.Nationality}
              </div>

              <div className="info-item">
                  <span className="font-title">Club:</span>
                  {props.information.Club}
              </div>

              <div className="info-item">
                  <span className="font-title">Foot:</span>
                  {props.information.foot}
              </div>

              <div className="info-item">
                  <span className="font-title">Age:</span>
                  {props.information.Age}
              </div>

              <div className="info-item">
                  <span className="font-title">Height:</span>
                  {props.information.Height}
              </div>

              <div className="info-item">
                  <span className="font-title">Weight:</span>
                  {props.information.Weight}
              </div>
          </div>
      </div>
    );
};

export default Information;