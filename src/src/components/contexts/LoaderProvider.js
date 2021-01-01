import React from 'react'

export const ActiveLoader = React.createContext();
export const SetActiveLoader = React.createContext();

const LoaderProvider = (props)=>{
  const [active, setActive] = React.useState(1);

  return(
      <ActiveLoader.Provider value={active}>
          <SetActiveLoader.Provider value={setActive}>
              {props.children}
          </SetActiveLoader.Provider>
      </ActiveLoader.Provider>
  )


};


export default LoaderProvider;