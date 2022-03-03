import { AnyAction } from 'redux'
import { initialLoginContextProps } from 'types'

const isLogged = (): boolean =>
    localStorage.getItem('isLoggedIn') !== null &&
    localStorage.getItem('isLoggedIn') !== undefined
        ? true
        : false

const initialState: initialLoginContextProps = {
    isLoggedIn: isLogged(),
    // isLoggedIn: false,
    isInitialized: false,
    user: isLogged() ? JSON.parse(localStorage.getItem('user') || '') : null,
}

export interface AccountReducerActionProps {
    type: string
    payload?: initialLoginContextProps
}

const loginReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('user', JSON.stringify(action.info))
            localStorage.setItem('token', action.info?._token)
            return {
                isLoggedIn: true,
                user: action.info,

                //content: action.info.content ? action.info.content : null
            }

        case 'LOGOUT_REQUEST':
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            return {
                ...state,
                user: action.info
                    ? action.info
                    : { content: { permissions: [] } },
            }
        default:
            return state
    }
}

export default loginReducer
