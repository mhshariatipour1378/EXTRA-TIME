import React, {useContext} from 'react'
import {SetFilters} from '../contexts/FilterProvider'



const useFilters = ()=>{
    const set = useContext(SetFilters);

    function setRangeAge(value) {
        set(pre=>{
            var temp = {
                age:{
                    min: value.min,
                    max: value.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : pre.team,

                position : pre.position,

                sort : pre.sort,

                name : pre.name,

                page : 1,

            };
            return temp;
        });

    }

    function setRangeOva(value) {
        set(pre=>{
            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: value.min,
                    max: value.max,
                },

                team : pre.team,

                position : pre.position,

                sort : pre.sort,

                name : pre.name,

                page : 1,

            };
            return temp;
        });

    }

    function toggleTeam(value) {
        //console.log("call-add-team");
        set(pre=>{

            var add = true;
            var teams = pre.team;

            for(var i = 0 ; i < teams.length ; i++){
                if(teams[i] === value){
                   // console.log("تکراری");
                    teams.splice(i, 1);
                    add = false;
                    break;
                }
            }

            if(add){
                teams.push(value);
            }

            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : teams,

                position : pre.position,

                sort : pre.sort,

                name : pre.name,

                page : 1,

            };
            return temp;
        });
    }

    function setNewTeam(value) {

        set(pre=>{

            var add = true;
            var teams = pre.team;

            for(var i = 0 ; i < teams.length ; i++){
                if(teams[i] === value){
                    add = false;
                    break;
                }
            }

            if(add){
                teams.push(value);
            }

            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : teams,

                position : pre.position,

                sort : pre.sort,

                name : pre.name,

                page : 1,

            };
            return temp;
        });
    }

    function setNewPosition(value) {
        set(pre=>{

            var add = true;
            var positions = pre.position;

            for(var i = 0 ; i < positions.length ; i++){
                if(positions[i] === value){
                    add = false;
                    break;
                }
            }

            if(add){
                positions.push(value);
            }

            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : pre.team,

                position : positions,

                sort : pre.sort,

                name : pre.name,

                page : 1,

            };
            return temp;
        });
    }

    function togglePosition(value) {
       // console.log("call-add-position");
        set(pre=>{

            var add = true;
            var positions = pre.position;

            for(var i = 0 ; i < positions.length ; i++){
                if(positions[i] === value){
                 //   console.log("تکراری");
                    positions.splice(i, 1);
                    add = false;
                    break;
                }
            }

            if(add){
                positions.push(value);
            }

            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : pre.team,

                position : positions,

                sort : pre.sort,

                name : pre.name,

                page : 1,

            };
            return temp;
        });
    }

    function setSort(value) {
        set(pre=>{

            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : pre.team,

                position : pre.position,

                sort : value,

                name : pre.name,


                page : 1,

            };
            return temp;
        });
    }

    function setName(value) {
        set(pre=>{

            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : pre.team,

                position : pre.position,

                sort : pre.sort,

                name : value.length > 0 ? value : "",

                page : 1,

            };
            return temp;
        });
    }

    function setPage(value) {
        set(pre=>{

            var temp = {
                age:{
                    min: pre.age.min,
                    max: pre.age.max,
                },

                ova:{
                    min: pre.ova.min,
                    max: pre.ova.max,
                },

                team : pre.team,

                position : pre.position,

                sort : pre.sort,

                name : pre.name,

                page : value,

            };
            return temp;
        });
    }

    function resetFilter() {
        set({
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

        });
    }

    return {setRangeAge, setRangeOva, setNewTeam ,toggleTeam, setNewPosition, togglePosition, setSort, setName, setPage, resetFilter};
};

export default useFilters;