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
