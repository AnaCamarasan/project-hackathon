import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<LoginData>;
};

export type Interest = {
  __typename?: 'Interest';
  id: Scalars['ID']['output'];
  interest_name: Scalars['String']['output'];
};

export type LoginData = {
  __typename?: 'LoginData';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthPayload>;
  registerUser?: Maybe<User>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterUserArgs = {
  age: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getInterests: Array<Interest>;
  getRegions: Array<Region>;
  getUsers: Array<User>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'LoginData', id: string, email: string } | null } | null };

export type GetInterestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInterestsQuery = { __typename?: 'Query', getInterests: Array<{ __typename?: 'Interest', id: string, interest_name: string }> };

export type GetRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRegionsQuery = { __typename?: 'Query', getRegions: Array<{ __typename?: 'Region', id: string, name: string }> };

export type RegisterUserMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  age: Scalars['Int']['input'];
  phoneNumber: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'User', firstName: string, lastName: string, email: string, password: string, age: number, phoneNumber: string, region?: string | null, role?: string | null, gender?: string | null } | null };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetInterestsDocument = gql`
    query GetInterests {
  getInterests {
    id
    interest_name
  }
}
    `;

/**
 * __useGetInterestsQuery__
 *
 * To run a query within a React component, call `useGetInterestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInterestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInterestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInterestsQuery(baseOptions?: Apollo.QueryHookOptions<GetInterestsQuery, GetInterestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInterestsQuery, GetInterestsQueryVariables>(GetInterestsDocument, options);
      }
export function useGetInterestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInterestsQuery, GetInterestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInterestsQuery, GetInterestsQueryVariables>(GetInterestsDocument, options);
        }
export function useGetInterestsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetInterestsQuery, GetInterestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetInterestsQuery, GetInterestsQueryVariables>(GetInterestsDocument, options);
        }
export type GetInterestsQueryHookResult = ReturnType<typeof useGetInterestsQuery>;
export type GetInterestsLazyQueryHookResult = ReturnType<typeof useGetInterestsLazyQuery>;
export type GetInterestsSuspenseQueryHookResult = ReturnType<typeof useGetInterestsSuspenseQuery>;
export type GetInterestsQueryResult = Apollo.QueryResult<GetInterestsQuery, GetInterestsQueryVariables>;
export const GetRegionsDocument = gql`
    query GetRegions {
  getRegions {
    id
    name
  }
}
    `;

/**
 * __useGetRegionsQuery__
 *
 * To run a query within a React component, call `useGetRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRegionsQuery(baseOptions?: Apollo.QueryHookOptions<GetRegionsQuery, GetRegionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegionsQuery, GetRegionsQueryVariables>(GetRegionsDocument, options);
      }
export function useGetRegionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegionsQuery, GetRegionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegionsQuery, GetRegionsQueryVariables>(GetRegionsDocument, options);
        }
export function useGetRegionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRegionsQuery, GetRegionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRegionsQuery, GetRegionsQueryVariables>(GetRegionsDocument, options);
        }
export type GetRegionsQueryHookResult = ReturnType<typeof useGetRegionsQuery>;
export type GetRegionsLazyQueryHookResult = ReturnType<typeof useGetRegionsLazyQuery>;
export type GetRegionsSuspenseQueryHookResult = ReturnType<typeof useGetRegionsSuspenseQuery>;
export type GetRegionsQueryResult = Apollo.QueryResult<GetRegionsQuery, GetRegionsQueryVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $age: Int!, $phoneNumber: String!, $region: String, $role: String, $gender: String) {
  registerUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
    age: $age
    phoneNumber: $phoneNumber
    region: $region
    role: $role
    gender: $gender
  ) {
    firstName
    lastName
    email
    password
    age
    phoneNumber
    region
    role
    gender
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      age: // value for 'age'
 *      phoneNumber: // value for 'phoneNumber'
 *      region: // value for 'region'
 *      role: // value for 'role'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;