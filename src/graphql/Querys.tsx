import { gql } from '@apollo/client'

export const USER_CARD = gql`
    query UsersCard($user: String!) {
        UsersCards(user: $user) {
            _id
            card_status
            card_money
            init_time
            issue_time
            card_type
            card_no
            user {
                _id
                name
            }
        }
    }
`
export const FIND_TRANSFER = gql`
    query findAllTransfers($userPayer: String!) {
        findAllTransfers(userPayer: $userPayer) {
            _id
            amount
            completed
            txRef
            fromCard {
                _id
                card_money
                card_serial
                card_no
            }
            payer {
                _id
                name
                lastname
                email
            }
            regionalStatus
            toCardSerial
        }
    }
`
