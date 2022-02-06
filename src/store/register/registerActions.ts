import { SNACKBAR_OPEN } from 'store/actions'
// import { axiosRequest } from 'store/axios'
import { TRegister } from 'types/index'

export const listRegister = (payload) => ({
    type: 'LIST_REGISTER',
    payload,
})

export const addRegister = (payload) => ({
    type: 'ADD_REGISTER',
    payload,
})

export const updateRegister = (payload) => ({
    type: 'UPDATE_REGISTER',
    payload,
})

// async request
// export const getCardsRequest = () => {
//     return async (dispatch) => {
//         try {
//             // const { data } = await axiosRequest('post', 'card_category/get/', {
//             //     _all_: true,
//             // })
//             // if (data.message === 'Operación Exitosa')
//             dispatch(listCards({}))
//         } catch (error) {
//             dispatch({
//                 type: SNACKBAR_OPEN,
//                 open: true,
//                 message: 'Error de conexion',
//                 anchorOrigin: { vertical: 'top', horizontal: 'right' },
//                 variant: 'alert',
//                 alertSeverity: 'error',
//             })
//         }
//     }
// }

export const createCardsRequest = (register: TRegister) => {
    return async (dispatch) => {
        try {
            // console.log('cardsData', cardsData)
            // const { data } = await axiosRequest(
            //     'post',
            //     'card_category/create/',
            //     cardsData
            // )

            dispatch(addRegister(register))
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Tarjeta creada correctamente',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                variant: 'alert',
                alertSeverity: 'success',
            })
        } catch (error) {
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Error de conexion',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                variant: 'alert',
                alertSeverity: 'error',
            })
        }
    }
}

// export const updateCardsRequest = (cardsData: TCardsProps) => {
//     return async (dispatch) => {
//         try {
//             // const { data } = await axiosRequest(
//             //     'put',
//             //     'card_category/update/',
//             //     cardsData
//             // )
//             dispatch(updateCards(cardsData))
//             dispatch({
//                 type: SNACKBAR_OPEN,
//                 open: true,
//                 message: 'Tarjeta actualizada correctamente',
//                 anchorOrigin: { vertical: 'top', horizontal: 'right' },
//                 variant: 'alert',
//                 alertSeverity: 'success',
//             })
//         } catch (error) {
//             console.log('error update ', error)

//             dispatch({
//                 type: SNACKBAR_OPEN,
//                 open: true,
//                 message: 'Error de conexion',
//                 anchorOrigin: { vertical: 'top', horizontal: 'right' },
//                 variant: 'alert',
//                 alertSeverity: 'error',
//             })
//         }
//     }
// }
