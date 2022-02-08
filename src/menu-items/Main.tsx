// third-party
import { FormattedMessage } from 'react-intl'

// assets
import { IconBrandChrome } from '@tabler/icons'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import RechargePayments from '../components/icons/RechargePayments'
import TransferIconSide from '../components/icons/TransferIconSide'

// constant
const icons = {
    IconBrandChrome,
    InsertChartOutlinedIcon,
    HistoryEduIcon,
    RechargePayments,
    TransferIconSide,
}

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const Cards = {
    id: 'cards',
    type: 'group',
    children: [
        {
            id: 'summary',
            title: <FormattedMessage id="Resumen" />,
            type: 'item',
            url: '/summary',
            icon: icons.InsertChartOutlinedIcon,
            breadcrumbs: false,
        },
        {
            id: 'cards',
            title: <FormattedMessage id="Gestión de Tarjetas" />,
            type: 'collapse',
            // url: '/cards/list',
            icon: icons.HistoryEduIcon,
            breadcrumbs: false,
            children: [
                {
                    id: 'Listar tarjetas',
                    title: <FormattedMessage id="Listar de tarjetas" />,
                    type: 'item',
                    // icon: icons.ReportsDetailsOperators,
                    url: '/system/list',
                    breadcrumbs: false,
                },
                {
                    id: 'Comprar Tarjeta',
                    title: <FormattedMessage id="Comprar Tarjeta" />,
                    type: 'item',
                    // icon: icons.ReportsDetailsOperators,
                    url: '/cards/list',
                    breadcrumbs: false,
                },
            ],
        },
        {
            id: 'payments',
            title: <FormattedMessage id="Pagos y Recargas" />,
            type: 'collapse',
            // url: '/payments/list',
            icon: icons.RechargePayments,
            // breadcrumbs: false,
            children: [
                {
                    id: 'detalles_income',
                    title: <FormattedMessage id="Gestion de pagos" />,
                    type: 'item',
                    // icon: icons.ReportsDetailsOperators,
                    url: '/payment_management',
                    breadcrumbs: false,
                },
            ],
        },
        {
            id: 'balance transfer',
            title: <FormattedMessage id="Transferencia de Saldo" />,
            type: 'item',
            url: '/transfer/list',
            icon: icons.TransferIconSide,
            breadcrumbs: false,
        },
        // {
        //     id: 'system',
        //     title: <FormattedMessage id="Estado del sistema" />,
        //     type: 'item',
        //     url: '/system/list',
        //     icon: icons.IconBrandChrome,
        //     breadcrumbs: false,
        // },
    ],
}

export default Cards
