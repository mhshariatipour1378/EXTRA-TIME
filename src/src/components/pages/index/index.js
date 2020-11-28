import React from 'react'
import "./style/index.css"
import SideBar from "./components/SideBar"
import Teams from "./components/Teams"

const Index = ()=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-12">
                        <SideBar />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-12">
                        <Teams/>
                    </div>
                </div>
            </div>
        </>
    );
};

export  default  Index;