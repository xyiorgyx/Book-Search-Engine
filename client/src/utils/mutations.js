import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
                user {
                    _id
                }
        }
    }
`;

export const ADD_USER = gql`
     mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
     }
`;

export const SAVE_BOOK = gql`
     mutation saveBook($input: BookInput) {
            saveBook(input: $input) {
                _id
                savedBooks {
                    bookId
                    authors
                    title
                    description
                    image
                }
            }
        }
`

export const REMOVE_BOOK = gql`
     mutation deleteBook($_id: ID, $bookId: ID) {
        deleteBook(_id: $_id, bookId: $bookId) {
            _id
            savedBooks {
                bookId
            }
        }
    }
`