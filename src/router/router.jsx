import { createBrowserRouter } from "react-router";
import Layout from "../components/layout";
import Homepage from "../views/homepage";
import routes from "../router/routes";
import {getAllGamesLoader, getAllGenres, getSearchedGames , getFilteredByCategory} from "./loaders"
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage"

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
        children: [
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader,
            },
            {
                path: routes.search,
                Component: SearchPage,
                loader: getSearchedGames
            },
            {
                path: routes.genre,
                Component: GenrePage,
                loader: getFilteredByCategory,
            }
        ]
        
    }
])

export default router;