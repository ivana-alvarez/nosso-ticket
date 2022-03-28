import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// reducer import
import customizationReducer from './customizationReducer'
import snackbarReducer from './snackbarReducer'
import cartReducer from './cartReducer'
import loginReducer from './login/loginReducer'
import cardsReducer from './cards/cardsReducer'
import registerReducer from './register/registerReducer'
import usersReducer from './user/usersReducer'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    login: loginReducer,
    customization: customizationReducer,
    snackbar: snackbarReducer,
    cards: cardsReducer,
    register: registerReducer,
    users: usersReducer,

    cart: persistReducer(
        {
            key: 'cart',
            storage,
            keyPrefix: 'berry-',
        },
        cartReducer
    ),
})

export default reducer
