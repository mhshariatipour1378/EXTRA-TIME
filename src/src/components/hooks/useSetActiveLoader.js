import React from "react"
import {SetActiveLoader} from "../contexts/LoaderProvider";

const useActiveLoader = ()=>{
    return(
        React.useContext(SetActiveLoader)
    )
};

export default useActiveLoader;