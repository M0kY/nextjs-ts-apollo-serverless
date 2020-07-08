import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** Meta information about the query. */
export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count: Scalars['Int'];
};

export type Auth_Provider_Email = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthProviderSignupData = {
  email?: Maybe<Auth_Provider_Email>;
};

export type CreateFile = {
  name: Scalars['String'];
};

export type CreatePost = {
  title: Scalars['String'];
  url: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type CreateUser = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type File = Node & {
  __typename?: 'File';
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  secret: Scalars['String'];
  size: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type FileFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileFilter>>;
  contentType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contentType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contentType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contentType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  contentType_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  contentType_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  contentType_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  contentType_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  contentType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contentType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contentType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contentType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  secret_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secret_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  secret_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  secret_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  secret_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  secret_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  secret_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  secret_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  secret_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  secret_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  secret_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  secret_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  secret_not_ends_with?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FileOrderBy {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type FilePreviousValues = {
  __typename?: 'FilePreviousValues';
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  secret: Scalars['String'];
  size: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type FileSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<FileSubscriptionFilterNode>;
};

export type FileSubscriptionFilterNode = {
  contentType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contentType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contentType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contentType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  contentType_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  contentType_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  contentType_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  contentType_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  contentType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contentType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contentType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contentType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  secret_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secret_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  secret_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  secret_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  secret_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  secret_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  secret_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  secret_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  secret_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  secret_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  secret_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  secret_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  secret_not_ends_with?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
};

export type FileSubscriptionPayload = {
  __typename?: 'FileSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<File>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<FilePreviousValues>;
};

export type InvokeFunctionInput = {
  name: Scalars['String'];
  input: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InvokeFunctionPayload = {
  __typename?: 'InvokeFunctionPayload';
  result: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFile?: Maybe<File>;
  createPost?: Maybe<Post>;
  updateFile?: Maybe<File>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
  updateOrCreateFile?: Maybe<File>;
  updateOrCreatePost?: Maybe<Post>;
  updateOrCreateUser?: Maybe<User>;
  deleteFile?: Maybe<File>;
  deletePost?: Maybe<Post>;
  deleteUser?: Maybe<User>;
  signinUser: SigninPayload;
  createUser?: Maybe<User>;
  invokeFunction?: Maybe<InvokeFunctionPayload>;
};


export type MutationCreateFileArgs = {
  name: Scalars['String'];
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  url: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};


export type MutationUpdateFileArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
};


export type MutationUpdateUserArgs = {
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};


export type MutationUpdateOrCreateFileArgs = {
  update: UpdateFile;
  create: CreateFile;
};


export type MutationUpdateOrCreatePostArgs = {
  update: UpdatePost;
  create: CreatePost;
};


export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser;
  create: CreateUser;
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationSigninUserArgs = {
  email?: Maybe<Auth_Provider_Email>;
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  authProvider: AuthProviderSignupData;
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Post = Node & {
  __typename?: 'Post';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type PostFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostFilter>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  votes_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  votes_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  votes_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  votes_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  votes_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  votes_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  votes_gte?: Maybe<Scalars['Int']>;
};

export enum PostOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VotesAsc = 'votes_ASC',
  VotesDesc = 'votes_DESC'
}

export type PostPreviousValues = {
  __typename?: 'PostPreviousValues';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type PostSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PostSubscriptionFilterNode>;
};

export type PostSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  votes_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  votes_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  votes_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  votes_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  votes_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  votes_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  votes_gte?: Maybe<Scalars['Int']>;
};

export type PostSubscriptionPayload = {
  __typename?: 'PostSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<Post>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PostPreviousValues>;
};

export type Query = {
  __typename?: 'Query';
  allFiles: Array<File>;
  allPosts: Array<Post>;
  allUsers: Array<User>;
  _allFilesMeta: _QueryMeta;
  _allPostsMeta: _QueryMeta;
  _allUsersMeta: _QueryMeta;
  File?: Maybe<File>;
  Post?: Maybe<Post>;
  User?: Maybe<User>;
  user?: Maybe<User>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};


export type QueryAllFilesArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<FileOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllPostsArgs = {
  filter?: Maybe<PostFilter>;
  orderBy?: Maybe<PostOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Query_AllFilesMetaArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<FileOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Query_AllPostsMetaArgs = {
  filter?: Maybe<PostFilter>;
  orderBy?: Maybe<PostOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>;
  secret?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** If authentication was successful the payload contains the user and a token. If unsuccessful this payload is null. */
export type SigninPayload = {
  __typename?: 'SigninPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Subscription = {
  __typename?: 'Subscription';
  File?: Maybe<FileSubscriptionPayload>;
  Post?: Maybe<PostSubscriptionPayload>;
  User?: Maybe<UserSubscriptionPayload>;
};


export type SubscriptionFileArgs = {
  filter?: Maybe<FileSubscriptionFilter>;
};


export type SubscriptionPostArgs = {
  filter?: Maybe<PostSubscriptionFilter>;
};


export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type UpdateFile = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdatePost = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
};

export type UpdateUser = {
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};

export type User = Node & {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserFilter>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserPreviousValues = {
  __typename?: 'UserPreviousValues';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserSubscriptionFilterNode>;
};

export type UserSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type UserSubscriptionPayload = {
  __typename?: 'UserSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'votes' | 'url' | 'createdAt'>
  )> }
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
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const AllPostsDocument = gql`
    query allPosts($first: Int!, $skip: Int!) {
  allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
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
export function useAllPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = ApolloReactCommon.QueryResult<AllPostsQuery, AllPostsQueryVariables>;