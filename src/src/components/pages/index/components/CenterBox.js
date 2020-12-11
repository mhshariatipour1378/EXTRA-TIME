import React, {useEffect, useState} from 'react'

const CenterBox = ()=>{

    return(
      <>
        <div className="center-box">

            <div className="popular-teams">
                <a href="" className="team">
                    <img src="/assets/img/popular/Barcelona.png" alt="" />
                </a>
                <a href="" className="team">
                    <img src="/assets/img/popular/RealMadrid.png" alt="" />
                </a>
                <a href="" className="team">
                    <img src="/assets/img/popular/AtleticoMadrid.png" alt="" />
                </a>
                <a href="" className="team">
                    <img src="/assets/img/popular/Valencia.png" alt="" />
                </a>
            </div>

            <a className="comparison">
                <div className="text font-title color-white">Compare Players</div>
            </a>

            <div className="popular-teams">
                <a href="" className="team">
                    <img src="/assets/img/popular/milan.png" alt="" />
                </a>
                <a href="" className="team">
                    <img src="/assets/img/popular/juve.png" alt="" />
                </a>
                <a href="" className="team">
                    <img src="/assets/img/popular/napoli.png" alt="" />
                </a>
                <a href="" className="team">
                    <img src="/assets/img/popular/roma.png" alt="" />
                </a>
            </div>


        </div>
      </>
    );

};

export default CenterBox;