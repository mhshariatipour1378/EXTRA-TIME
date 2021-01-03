import React from 'react'

const NotFoundPlayer = ()=>{
    return(
        <div className="not-found-player">
            <div className="img">
                <img src="/soccor.svg" alt="soccor"/>
            </div>
            <h3 className="font-title color-brown">
                No player found for applied filters
            </h3>
        </div>
    )
};

export default NotFoundPlayer;