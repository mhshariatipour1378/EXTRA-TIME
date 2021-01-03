import React from "react"
import {ActiveLoader} from "../contexts/LoaderProvider";

const useActiveLoader = ()=>{
    return(
        React.useContext(ActiveLoader)
    )
};

export default useActiveLoader;