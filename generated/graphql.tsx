import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  _allUsersMeta: _QueryMeta;
  User: User;
  allPosts: Array<Post>;
  _allPostsMeta: _QueryMeta;
  Post: Post;
};


export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryAllPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderBy>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type UserOrderBy = {
  firstName?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};


export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count: Scalars['Int'];
};

export type PostOrderBy = {
  title?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  votes?: Maybe<OrderBy>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  url: Scalars['String'];
  votes: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  votePost: Post;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  url: Scalars['String'];
};


export type MutationVotePostArgs = {
  id: Scalars['String'];
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'votes' | 'url' | 'createdAt'>
  ) }
);

export type AllPostsQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { allPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'votes' | 'url' | 'createdAt'>
  )>, _allPostsMeta: (
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  ) }
);

export type VotePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type VotePostMutation = (
  { __typename?: 'Mutation' }
  & { votePost: (
    { __typename: 'Post' }
    & Pick<Post, 'id' | 'votes'>
  ) }
);


export const CreatePostDocument = gql`
    mutation createPost($title: String!, $url: String!) {
  createPost(title: $title, url: $url) {
    id
    title
    votes
    url
    createdAt
  }
}
    `;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const AllPostsDocument = gql`
    query allPosts($first: Int!, $skip: Int!) {
  allPosts(orderBy: {createdAt: desc}, first: $first, skip: $skip) {
    id
    title
    votes
    url
    createdAt
  }
  _allPostsMeta {
    count
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const VotePostDocument = gql`
    mutation votePost($id: String!) {
  votePost(id: $id) {
    __typename
    id
    votes
  }
}
    `;

/**
 * __useVotePostMutation__
 *
 * To run a mutation, you first call `useVotePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVotePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [votePostMutation, { data, loading, error }] = useVotePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVotePostMutation(baseOptions?: Apollo.MutationHookOptions<VotePostMutation, VotePostMutationVariables>) {
        return Apollo.useMutation<VotePostMutation, VotePostMutationVariables>(VotePostDocument, baseOptions);
      }
export type VotePostMutationHookResult = ReturnType<typeof useVotePostMutation>;
export type VotePostMutationResult = Apollo.MutationResult<VotePostMutation>;
export type VotePostMutationOptions = Apollo.BaseMutationOptions<VotePostMutation, VotePostMutationVariables>;