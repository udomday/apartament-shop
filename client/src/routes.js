import UserOrder from "./pages/UserOrders"
import Admin from "./pages/Admin"
import ApartamentPage from "./pages/ApartamentPage"
import Auth from "./pages/Auth"
import DistrictPage from "./pages/DistrictPage"
import Districts from "./pages/Districts"
import FavoritePage from "./pages/FavoritePage"
import UserPage from "./pages/UserPage"
import { ADMIN_ROUTE, APARTAMENT_ROUTE, DISTRICTS_ROUTE, DISTRICT_ROUTE, FAVLIST_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from "./utils/consts"


export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const authRoutes = [
    {
        path: FAVLIST_ROUTE + '/:id',
        Component: FavoritePage
    }, 
    {
        path: USER_ROUTE + '/:id',
        Component: UserPage
    },
    {
        path: ORDERS_ROUTE + '/:id',
        Component: UserOrder
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