import {React, useRef, useState} from 'react'
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import { Swiper, Navigation, Pagination } from 'swiper/swiper.esm';
import 'swiper/swiper-bundle.css'


const Slider = (props) => {

    console.log(props.players);

    const params = {
        // Provide Swiper class as props
        Swiper,
        // Add modules you need
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next.btn-slider',
            prevEl: '.swiper-button-prev.btn-slider'
        },
        renderPrevButton: () => <button className="swiper-button-prev btn-slider"></button>,
        renderNextButton: () => <button className="swiper-button-next btn-slider"></button>,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            577: {
                slidesPerView: 1,

            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    };



    return(
        <>
            <div className="top-player-slider">

                <h1 className="slider-title color-dark-Blue font-title">
                    {props.title}
                </h1>

                    <div className="slider">
                        {
                            props.players.length > 0 ?
                                <ReactIdSwiperCustom {...params}>
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
                                </ReactIdSwiperCustom>
                                : <div>loadding</div>
                        }
                    </div>




            </div>

        </>
    )
};

export default Slider;