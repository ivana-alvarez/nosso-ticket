import { AnyAction } from 'redux'
// import { TCardsProps } from 'types'
import { REGISTER } from '_mockApis/register/register'

const registerReducer = (state = REGISTER, action: AnyAction) => {
    switch (action.type) {
        case 'LIST_REGISTER':
            return action.payload
        case 'ADD_REGISTER':
            return [action.payload, ...state]
        case 'UPDATE_REGISTER': {
            const deleteFleet = state.filter(
                (cards) => cards?.email !== action.payload.card_serial
            )
            return [action.payload, ...deleteFleet]
        }
        default:
            return state
    }
}

export default registerReducer
