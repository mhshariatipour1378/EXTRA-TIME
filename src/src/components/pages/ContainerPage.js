import React from 'react'
import Header from "./../header/Header"
import Footer from "./../footer/Footer"

const ContainerPage = (props)=>{
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
};

export default ContainerPage;