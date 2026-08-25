import { createBrowserRouter } from "react-router";
import Layout from "../components/layout";
import Homepage from "../views/homepage";
import routes from "../router/routes";
import {getAllGamesLoader} from "./loaders"

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children: [
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader,
            },
        ]
        
    }
])

export default router;