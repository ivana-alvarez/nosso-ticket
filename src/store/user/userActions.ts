import { UserProps } from 'types'

export const listUsers = (payload) => ({
    type: 'LIST_USERS',
    payload,
})

export const addUser = (payload) => ({
    type: 'ADD_USER',
    payload,
})

export const updateUser = (payload) => ({
    type: 'UPDATE_USER',
    payload,
})

export const createUserRequest = (user: UserProps) => {
    return async (dispatch) => {
        try {
            dispatch(addUser(user))
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateUserRequest = (user: UserProps) => {
    return async (dispatch) => {
        try {
            dispatch(updateUser(user))
        } catch (error) {
            console.log(error)
        }
    }
}
