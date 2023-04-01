import { gql } from '@apollo/client';

export const Get = gql`
    {
        user {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                title
                description
                image
            }
        }
    }`