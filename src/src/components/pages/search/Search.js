import React from 'react'
import ContainerPage from "./../ContainerPage"
import Filters from "./components/Filters"
import Shows from "./components/Shows"
import Inputs from "./components/Inputs"
import "./style/checkbox.css"
import "./style/search.css"
import FilterProvider from "./../../contexts/FilterProvider"



const Search = ()=>{



    return(
        <FilterProvider>
            <ContainerPage pageName="search">

                    <div className="container">
                        <div className="row">

                            <div className="col-3">
                                <Filters/>
                            </div>
                            <div className="col-9">
                                <Inputs/>

                                <Shows/>
                            </div>

                        </div>
                    </div>
            </ContainerPage>
        </FilterProvider>
    );

};

export default Search;