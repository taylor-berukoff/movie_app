import Movie_vault from "../pages/Movie_vault";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes : RouteType[] = [
    {
        path: "/movie_vault",
        component: Movie_vault,
        name: "Movie_vault"
    }
];

export default routes