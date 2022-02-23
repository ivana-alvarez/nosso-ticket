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
            user {
                _id
                name
            }
        }
    }
`
