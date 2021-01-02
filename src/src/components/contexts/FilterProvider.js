import React, {useState} from "react"

export const Filters = React.createContext();
export const SetFilters = React.createContext();



const defaultFilters = {
    age:{
        min: 20,
        max: 37,
    },

    ova:{
        min: 80,
        max: 93,
    },

    team : [],

    position : [],

    sort: 1,

    name: "",

    page: 1,

};

const FilterProvider = (props) =>{
  const [filters, setFilters] = useState(defaultFilters);

  console.log( "Filters.Provider");

  return(
    <Filters.Provider value={filters}>
        <SetFilters.Provider  value={setFilters}>
            {props.children}
        </SetFilters.Provider>
    </Filters.Provider>
  );

};

export default FilterProvider;