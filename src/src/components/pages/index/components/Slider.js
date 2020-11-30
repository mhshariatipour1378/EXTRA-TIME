import {React, useEffect, useState} from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';


const Slider = (props) => {

    console.log(props.players);


    const params = {
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        spaceBetween: 30
    };

    return(
        <>
            <div className="top-player-slider">

                <h1 className="slider-title color-brown font-title">
                    {props.title}
                </h1>

                    <div className="slider">
                        {
                            props.players.length > 0 ?
                                <Swiper {...params}>
                                    {
                                        props.players.map( (player, index) => (
                                            <div>
                                                <div className="top-player">
                                                    <div className="top-info">
                                                        <div className="p-img">
                                                            <img src="/football-player.png" alt="img"/>
                                                        </div>
                                                        <div className="t-i-text color-brown">
                                                            <div className="ova font-title">{player.OVA}</div>
                                                            <div className="bp">{player.BP}</div>
                                                        </div>
                                                    </div>

                                                    <div className="bottom-info color-brown">
                                                        <div className="p-name font-title color-brown">{player.Name}</div>
                                                        <div className="p-club">
                                                            <b className="font-title">Club: </b>
                                                            {player.Club}
                                                        </div>

                                                        <div className="p-nationality">
                                                            <b className="font-title">Nationality: </b>
                                                            {player.Nationality}
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
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Swiper>
                                : <div>loadding</div>
                        }
                    </div>



            </div>

        </>
    )
};

export default Slider;