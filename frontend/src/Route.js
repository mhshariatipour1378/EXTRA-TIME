import Index from "./components/pages/index/index"
import Player from "./components/pages/Player/Player"
import Search from "./components/pages/search/Search"
import NotFound from "./components/pages/notFound404/NotFound"

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

    {
        name : "Search",
        path : "/search",
        component : Search,
    },

    {
        name : "404",
        component : NotFound,
    },


];
