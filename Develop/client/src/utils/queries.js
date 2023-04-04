import { gql } from '@apollo/client';

export const GET = gql`
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