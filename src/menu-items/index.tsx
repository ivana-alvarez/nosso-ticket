import { NavItemType } from 'types'
import Main from './Main'

// ==============================|| MENU ITEMS ||============================== //

const handleItems = () => {
    const menuItems: { items: NavItemType[] } = {
        items: [Main],
    }
    return menuItems
}

export default handleItems
