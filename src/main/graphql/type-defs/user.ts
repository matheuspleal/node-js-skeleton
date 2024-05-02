import gql from 'graphql-tag'

export default gql`
  input PaginationParams {
    offset: Int
    limit: Int
  }

  type FetchUsers {
    count: Int!
    users: [User!]!
  }

  type GetUsersById {
    user: User
  }

  extend type Query {
    fetchUsers(params: PaginationParams): FetchUsers!
    getUserById(userId: ID!): GetUsersById
  }
`
