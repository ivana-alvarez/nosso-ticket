import { lazy } from 'react'

// project imports
import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/Loadable'
import AuthGuard from 'utils/route-guard/AuthGuard'

//Empresas operadoras
const ViewCards = Loadable(lazy(() => import('views/cards/ViewCards')))
const CreateCards = Loadable(lazy(() => import('views/cards/CreateCards')))
const ViewPayments = Loadable(lazy(() => import('views/payments/ViewPayments')))
const CreatePayments = Loadable(
    lazy(() => import('views/payments/CreatePayments'))
)
const ViewTransfer = Loadable(lazy(() => import('views/transfer/ViewTransfer')))
const CreateTransfer = Loadable(
    lazy(() => import('views/transfer/CreateTransfer'))
)
const ViewSystem = Loadable(lazy(() => import('views/system/ViewSystem')))
const CreateSystem = Loadable(lazy(() => import('views/system/CreateSystem')))


const ViewSummary = Loadable(lazy(()=> import('views/summary/ViewSummary')))

const ProfileForm = Loadable(lazy(() => import('views/profile/CreateProfile')))
const PaymentManagement = Loadable(lazy(()=> import('views/payments/ViewPaymentManagement')))


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/cards/list',
            element: <ViewCards />,
        },
        {
            path: '/cards/create',
            element: <CreateCards />,
        },
        {
            path: '/payments/list',
            element: <ViewPayments />,
        },
        {
            path: '/payments/create',
            element: <CreatePayments />,
        },
        {
            path: '/transfer/list',
            element: <ViewTransfer />,
        },
        {
            path: '/transfer/create',
            element: <CreateTransfer />,
        },
        {
            path: '/system/list',
            element: <ViewSystem />,
        },
        {
            path: '/system/create',
            element: <CreateSystem />,
        },
        {
            path: '/summary',
            element:<ViewSummary />,
        },
        {

            path: '/profile',
            element: <ProfileForm />,
        },
        {
            path:'/payment_management',
            element: <PaymentManagement />,
        }
    ],
}

export default MainRoutes
