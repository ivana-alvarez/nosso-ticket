import { AnyAction } from 'redux'
// import { TCardsProps } from 'types'
import { cardsData } from '_mockApis/cards/cardsData'
// import { cardsData } from '_mockApis/cards/cardsData'

const cardsReducer = (state = cardsData, action: AnyAction) => {
    switch (action.type) {
        case 'LIST_CARDS':
            return action.payload
        case 'ADD_CARDS':
            return [action.payload, ...state]
        case 'UPDATE_CARDS': {
            const deleteFleet = state.filter(
                (cards) => cards?.card_serial !== action.payload.card_serial
            )
            return [action.payload, ...deleteFleet]
        }
        default:
            return state
    }
}

export default cardsReducer
