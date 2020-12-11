import React from 'react'
import Header from "./../header/Header"
import Footer from "./../footer/Footer"

const ContainerPage = (props)=>{
    return(
        <>
            <Header searchBox={props.searchBox} />
            {props.children}
            <Footer/>
        </>
    )
};

export default ContainerPage;