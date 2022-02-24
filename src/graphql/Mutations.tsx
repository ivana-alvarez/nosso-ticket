import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser($data: CreateUserInput!) {
        createUser(createUserInput: $data) {
            name
            lastname
            docCode
            docNum
            email
            role {
                _id
            }
            _id
            _token
        }
    }
`

export const LOGIN = gql`
    mutation ($data: AuthUserInput!) {
        login(authUserInput: $data) {
            _id
            _token
            email
        }
    }
`

export const CREATE_CARD = gql`
    mutation createCard($data: CreateCardInput!, $id: String!) {
        createCard(createCardInput: $data, id: $id) {
            card_no
            dept_no
            card_serial
            card_type
            card_status
            order_no
            init_time
            opcard_no
            issue_time
            cash_serial
            bt_time
            last_supply_time
            last_riding_time
            ss_times
            supply_money
            paid
            card_money
            card_deposit
            name1
            name2
            surname1
            surname2
            id_no
            _id
            user {
                _id
            }
        }
    }
`
export const UPDATE_USER = gql`
    mutation updateUser($data: UpdateUserInput!) {
        updateUser(updateUserInput: $data) {
            docCode
            docNum
            email
            lastname
            name
            role {
                _id
            }
            _id
        }
    }
`
