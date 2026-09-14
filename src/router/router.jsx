import { createBrowserRouter } from "react-router";
import Layout from "../layouts/layout";
import Homepage from "../views/homepage";
import routes from "../router/routes";
import {getAllGamesLoader, getAllGenres, getSearchedGames , getFilteredByCategory , getGameDetails} from "./loaders"
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage"
import AuthLayout from "../layouts/AuthLayout";
import RegisterPage from "../views/auth/RegisterPage";
import LoginPage from "../views/auth/LoginPage";
import ProfilePage from "../views/auth/ProfilePage"
import ProfileSettingsPage from "../views/auth/ProfileSettingsPage";
import DetailPage from "../views/DetailPage";

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
        
    },
    {
                path: routes.detail,
                Component: DetailPage,
                loader: getGameDetails,
            },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: routes.register,
                Component: RegisterPage
            },
            {
                path: routes.login,
                Component: LoginPage
            },
            {
                path: routes.profile,
                Component: ProfilePage
            },
            {
                path: routes.profile_settings,
                Component: ProfileSettingsPage
            }
        ]
    },
    
])

export default router;