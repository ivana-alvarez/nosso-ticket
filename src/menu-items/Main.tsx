// third-party
import { FormattedMessage } from 'react-intl'

// assets
import { IconBrandChrome } from '@tabler/icons'

// constant
const icons = {
    IconBrandChrome,
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
            icon: icons.IconBrandChrome,
            breadcrumbs: false,
        },
        {
            id: 'cards',
            title: <FormattedMessage id="Gestión de Tarjetas" />,
            type: 'item',
            url: '/cards/list',
            icon: icons.IconBrandChrome,
            breadcrumbs: false,
        },
        {
            id: 'payments',
            title: <FormattedMessage id="Pagos y Recargas" />,
            type: 'item',
            url: '/payments/list',
            icon: icons.IconBrandChrome,
            breadcrumbs: false,
        },
        {
            id: 'balance transfer',
            title: <FormattedMessage id="Transferencia de Saldo" />,
            type: 'item',
            url: '/transfer/list',
            icon: icons.IconBrandChrome,
            breadcrumbs: false,
        },
        {
            id: 'system',
            title: <FormattedMessage id="Estado del sistema" />,
            type: 'item',
            url: '/system/list',
            icon: icons.IconBrandChrome,
            breadcrumbs: false,
        },
    ],
}

export default Cards
