import React, {useContext} from 'react'
import {Filters} from './../contexts/FilterProvider'

const useFilters = ()=>{
    return(
        useContext(Filters)
    )
};

export default useFilters;