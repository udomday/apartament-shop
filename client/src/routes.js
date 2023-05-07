import Admin from "./pages/Admin"
import ApartamentPage from "./pages/ApartamentPage"
import Auth from "./pages/Auth"
import DistrictPage from "./pages/DistrictPage"
import Districts from "./pages/Districts"
import FavoritePage from "./pages/FavoritePage"
import { ADMIN_ROUTE, APARTAMENT_ROUTE, DISTRICTS_ROUTE, DISTRICT_ROUTE, FAVLIST_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVLIST_ROUTE,
        Component: FavoritePage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }, 
    {
        path: DISTRICTS_ROUTE,
        Component: Districts
    },
    {
        path: APARTAMENT_ROUTE + '/:id',
        Component: ApartamentPage
    },
    {
        path: DISTRICT_ROUTE + '/:id',
        Component: DistrictPage
    }
]