import Ranking from "./components/Ranking"
import Search from "./components/Search"
import Home from "./components/Home"

 const routes = [
    {
        path:'/home',component:Home
    },
    {
        path:'/ranking',component:Ranking
    },
    {
        path:'/search',component:Search
    },
    {
        path:'*',redirect:'/home'
    },
]

export default routes