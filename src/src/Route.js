import Index from "./components/pages/index/index"
import Player from "./components/pages/Player/Player"

export var routes = [

    {
        exact: true,
        name : "Home",
        path : "/",
        component : Index,
    },

    {
        name : "Player",
        path : "/player/:playerId",
        component : Player,
    },


];
