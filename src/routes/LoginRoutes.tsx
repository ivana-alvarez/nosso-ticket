import { lazy } from 'react'

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard'
import MinimalLayout from 'layout/MinimalLayout'
import NavMotion from 'layout/NavMotion'
import Loadable from 'ui-component/Loadable'

// login routing
const AuthLogin = Loadable(
    lazy(() => import('views/pages/authentication/authentication1/Login1'))
)
const Register = Loadable(
    lazy(() => import('views/pages/authentication/registration/Register'))
)
const Recover = Loadable(
    lazy(() => import('views/pages/authentication/recover/Recover'))
)
const Landing = Loadable(
    lazy(() => import('views/pages/authentication/landing/index'))
)
const Products = Loadable(
    lazy(() => import('views/pages/authentication/products/index'))
)
const Red =Loadable(
    lazy(()=> import('views/pages/authentication/Red/index'))
)
const Company = Loadable(
    lazy(() => import('views/pages/authentication/company/index'))
)


// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = [
    {
        path: '/',
        element: <MinimalLayout />,
        children: [
            {
                path: '/',
                element: (
                    <NavMotion>
                        {/* //  <GuestGuard> */}
                            <Landing />
                        {/* // </GuestGuard>  */}
                    </NavMotion> 
                ),
            },
        ],
    },
    {
        path: 'products',
        element: <MinimalLayout />,
        children: [
            {
                path: '/products',
                element: (
                    <NavMotion>
                        {/* //  <GuestGuard> */}
                            <Products />
                        {/* // </GuestGuard>  */}
                    </NavMotion> 
                ),
            },
        ],
    },
    {
        path: 'company',
        element: <MinimalLayout />,
        children: [
            {
                path: '/company',
                element: (
                    <NavMotion>
                        {/* //  <GuestGuard> */}
                            <Company />
                        {/* // </GuestGuard>  */}
                    </NavMotion> 
                ),
            },
        ],
    },
    {
        path: 'red',
        element: <MinimalLayout />,
        children: [
            {
                path: '/red',
                element: (
                    <NavMotion>
                        {/* //  <GuestGuard> */}
                            <Red />
                        {/* // </GuestGuard>  */}
                    </NavMotion> 
                ),
            },
        ],
    },
    {
        path: 'login',
        element: <MinimalLayout />,
        children: [
            {
                path: '/login',
                element: (
                    <NavMotion>
                        <GuestGuard>
                            <AuthLogin />
                        </GuestGuard>
                    </NavMotion>
                ),
            },
        ],
    },
    {
        path: 'register',
        element: <MinimalLayout />,
        children: [
            {
                path: '/register',
                element: (
                    // <NavMotion>
                    <Register />
                    // </NavMotion>
                ),
            },
        ],
    },
    {
        path: 'recover',
        element: <MinimalLayout />,
        children: [
            {
                path: '/recover',
                element: (
                    // <NavMotion>
                    <Recover />
                    // </NavMotion>
                ),
            },
        ],
    },
]

export default LoginRoutes
