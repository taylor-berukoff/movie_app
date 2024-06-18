import Home from "../pages/Home ";
import Movie_vault from "../pages/Movie_vault";
import User_Profile from "../pages/User_Profile";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes : RouteType[] = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/movie_vault",
        component: Movie_vault,
        name: "Movie_vault"
    },
    {
        path: "/user_profile",
        component: User_Profile,
        name: "User_Profile"
    }
];

export default routes