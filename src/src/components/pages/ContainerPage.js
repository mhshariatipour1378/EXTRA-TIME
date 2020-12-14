import React from 'react'
import Header from "./../header/Header"
import Footer from "./../footer/Footer"

const ContainerPage = (props)=>{
    return(
        <>
            <Header searchBox={props.searchBox} />
                <section id={props.pageName}>
                    {props.children}
                </section>
            <Footer/>
        </>
    )
};

export default ContainerPage;