import React from 'react'
import ContainerPage from "./../ContainerPage"
import {Link} from "react-router-dom";

const NotFound = (props)=>{
    return(
        <ContainerPage pageName="player">
            <div className="not-found-player">
                <div className="img">
                    <img src="/soccor.svg" alt="soccor"/>
                </div>
                <h3 className="font-title color-brown">
                    Page Not Found
                </h3>
                <Link to="/" className="btn-home">Go to home</Link>
            </div>
        </ContainerPage>
    )
};

export default NotFound;