import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  country: Scalars['String'];
  id: Scalars['Int'];
  region: Scalars['String'];
  street: Scalars['String'];
  zip_code: Scalars['Int'];
};

export type Breed = {
  __typename?: 'Breed';
  breed_characteristics: Array<BreedCharacteristic>;
  id: Scalars['Int'];
  name: Scalars['String'];
  type: PetType;
};

export type BreedCharacteristic = {
  __typename?: 'BreedCharacteristic';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label: Scalars['String'];
};

export type Conversation = {
  __typename?: 'Conversation';
  id: Scalars['Int'];
  match: Match;
  messages: Array<Message>;
};

export type CreateAddressInput = {
  country: Scalars['String'];
  region: Scalars['String'];
  street: Scalars['String'];
  zip_code: Scalars['Int'];
};

export type CreateBreedCharacteristicInput = {
  description?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

export type CreateBreedInput = {
  breed_characteristics: Array<CreateBreedCharacteristicInput>;
  name: Scalars['String'];
  type: CreatePetTypeInput;
};

export type CreateConversationInput = {
  match: CreateMatchInput;
  messages: Array<CreateMessageInput>;
};

export type CreateLikePetInput = {
  likedPet: CreatePetInput;
  pet: CreatePetInput;
};

export type CreateMatchInput = {
  likePetLeft: CreateLikePetInput;
  likePetRight: CreateLikePetInput;
};

export type CreateMessageInput = {
  content: Scalars['String'];
  conversation: CreateConversationInput;
  receiver: CreatePetInput;
  sender: CreatePetInput;
};

export type CreatePetInput = {
  aboutMe: Scalars['String'];
  age: Scalars['Int'];
  image1: Scalars['String'];
  image2: Scalars['String'];
  image3: Scalars['String'];
  image4: Scalars['String'];
  image5: Scalars['String'];
  name: Scalars['String'];
  sexe: SexeEnum;
  type: CreatePetTypeInput;
  user: CreateUserInput;
};

export type CreatePetTypeInput = {
  breeds: Array<CreateBreedInput>;
  name: Scalars['String'];
  pets: Array<CreatePetInput>;
};

export type CreateReviewInput = {
  description: Scalars['String'];
  pet: CreatePetInput;
};

export type CreateUserInput = {
  address: CreateAddressInput;
  birth_date: Scalars['DateTime'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  image: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['Int'];
};

export type LikePet = {
  __typename?: 'LikePet';
  id: Scalars['Int'];
  likedPet: Pet;
  pet: Pet;
};

export type Match = {
  __typename?: 'Match';
  id: Scalars['Int'];
  likePetLeft: LikePet;
  likePetRight: LikePet;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  conversation: Conversation;
  id: Scalars['Int'];
  receiver: Pet;
  sender: Pet;
};

export type Mutation = {
  __typename?: 'Mutation';
  SignUp: User;
  createAddress: Address;
  createBreed: Breed;
  createBreedCharacteristic: BreedCharacteristic;
  createConversation: Conversation;
  createLike: LikePet;
  createMatch: Match;
  createMessage: Message;
  createPet: Pet;
  createReview: Review;
  createType: PetType;
  createUser: User;
  removeAddress: Scalars['String'];
  removeBreed: Breed;
  removeBreedCharacteristic: Scalars['String'];
  removeConversation: Conversation;
  removeLike: LikePet;
  removeMatch: Match;
  removeMessage: Scalars['String'];
  removePet: Scalars['String'];
  removeReview: Scalars['String'];
  removeType: Scalars['String'];
  removeUser: Scalars['String'];
  updateAddress: Address;
  updateBreed: Breed;
  updateBreedCharacteristic: BreedCharacteristic;
  updateConversation: Conversation;
  updateLike: LikePet;
  updateMatch: Match;
  updateMessage: Message;
  updatePet: Pet;
  updateReview: Review;
  updateType: PetType;
  updateUser: User;
};


export type MutationSignUpArgs = {
  registerDto: RegisterDto;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateBreedArgs = {
  createBreedInput: CreateBreedInput;
};


export type MutationCreateBreedCharacteristicArgs = {
  createBreedCharacteristicInput: CreateBreedCharacteristicInput;
};


export type MutationCreateConversationArgs = {
  createConversationInput: CreateConversationInput;
};


export type MutationCreateLikeArgs = {
  createLikeInput: CreateLikePetInput;
};


export type MutationCreateMatchArgs = {
  createMatchInput: CreateMatchInput;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationCreatePetArgs = {
  createPetInput: CreatePetInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateTypeArgs = {
  createTypeInput: CreatePetTypeInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveAddressArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveBreedArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveBreedCharacteristicArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveConversationArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveLikeArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMatchArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMessageArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePetArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTypeArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};


export type MutationUpdateBreedArgs = {
  updateBreedInput: UpdateBreedInput;
};


export type MutationUpdateBreedCharacteristicArgs = {
  updateBreedCharacteristicInput: UpdateBreedCharacteristicInput;
};


export type MutationUpdateConversationArgs = {
  updateConversationInput: UpdateConversationInput;
};


export type MutationUpdateLikeArgs = {
  updateLikeInput: UpdateLikePetInput;
};


export type MutationUpdateMatchArgs = {
  updateMatchInput: UpdateMatchInput;
};


export type MutationUpdateMessageArgs = {
  updateMessageInput: UpdateMessageInput;
};


export type MutationUpdatePetArgs = {
  updatePetInput: UpdatePetInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};


export type MutationUpdateTypeArgs = {
  updateTypeInput: UpdatePetTypeInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Pet = {
  __typename?: 'Pet';
  aboutMe: Scalars['String'];
  age: Scalars['Int'];
  id: Scalars['Int'];
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  image3?: Maybe<Scalars['String']>;
  image4?: Maybe<Scalars['String']>;
  image5?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sexe: Sexe;
  type: PetType;
  user: User;
};

export type PetType = {
  __typename?: 'PetType';
  breeds: Array<Breed>;
  id: Scalars['Int'];
  name: Scalars['String'];
  pets: Array<Pet>;
};

export type Query = {
  __typename?: 'Query';
  Address: Address;
  Addresses: Array<Address>;
  breed: Breed;
  breed_Characteristic: BreedCharacteristic;
  breed_Characteristics: Array<BreedCharacteristic>;
  breeds: Array<Breed>;
  conversation: Conversation;
  conversations: Array<Conversation>;
  login: SignInResponseDto;
  match: Match;
  matches: Array<Match>;
  message: Message;
  messages: Array<Message>;
  pet: Pet;
  pet_like: LikePet;
  pet_likes: Array<LikePet>;
  pet_type: PetType;
  pet_types: Array<PetType>;
  pets: Array<Pet>;
  review: Review;
  reviews: Array<Review>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  validateEmail: ValidateEmailResponseDto;
};


export type QueryAddressArgs = {
  id: Scalars['Int'];
};


export type QueryBreedArgs = {
  id: Scalars['Int'];
};


export type QueryBreed_CharacteristicArgs = {
  id: Scalars['Int'];
};


export type QueryConversationArgs = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  credentials: SignInDto;
};


export type QueryMatchArgs = {
  id: Scalars['Int'];
};


export type QueryMessageArgs = {
  id: Scalars['Int'];
};


export type QueryPetArgs = {
  id: Scalars['Int'];
};


export type QueryPet_LikeArgs = {
  id: Scalars['Int'];
};


export type QueryPet_TypeArgs = {
  id: Scalars['Int'];
};


export type QueryReviewArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryValidateEmailArgs = {
  email: Scalars['String'];
};

export type RegisterDto = {
  address: CreateAddressInput;
  birth_date: Scalars['DateTime'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['Int'];
};

export type Review = {
  __typename?: 'Review';
  description: Scalars['String'];
  id: Scalars['Int'];
  pet: Pet;
  user: User;
};

export enum Sexe {
  Feminin = 'Feminin',
  Masculin = 'Masculin'
}

export enum SexeEnum {
  Feminin = 'Feminin',
  Masculin = 'Masculin'
}

export type SignInDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInResponseDto = {
  __typename?: 'SignInResponseDto';
  token: Scalars['String'];
  user: User;
};

export type UpdateAddressInput = {
  country?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  region?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  zip_code?: InputMaybe<Scalars['Int']>;
};

export type UpdateBreedCharacteristicInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: InputMaybe<Scalars['String']>;
};

export type UpdateBreedInput = {
  breed_characteristics?: InputMaybe<Array<CreateBreedCharacteristicInput>>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CreatePetTypeInput>;
};

export type UpdateConversationInput = {
  id: Scalars['Int'];
  match?: InputMaybe<CreateMatchInput>;
  messages?: InputMaybe<Array<CreateMessageInput>>;
};

export type UpdateLikePetInput = {
  id: Scalars['Int'];
  likedPet?: InputMaybe<CreatePetInput>;
  pet?: InputMaybe<CreatePetInput>;
};

export type UpdateMatchInput = {
  id: Scalars['Int'];
  likePetLeft?: InputMaybe<CreateLikePetInput>;
  likePetRight?: InputMaybe<CreateLikePetInput>;
};

export type UpdateMessageInput = {
  content?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<CreateConversationInput>;
  id: Scalars['Int'];
  receiver?: InputMaybe<CreatePetInput>;
  sender?: InputMaybe<CreatePetInput>;
};

export type UpdatePetInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  image4?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sexe?: InputMaybe<SexeEnum>;
  type?: InputMaybe<CreatePetTypeInput>;
  user?: InputMaybe<CreateUserInput>;
};

export type UpdatePetTypeInput = {
  breeds?: InputMaybe<Array<CreateBreedInput>>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  pets?: InputMaybe<Array<CreatePetInput>>;
};

export type UpdateReviewInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  pet?: InputMaybe<CreatePetInput>;
};

export type UpdateUserInput = {
  address?: InputMaybe<CreateAddressInput>;
  birth_date?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  address: Address;
  birth_date: Scalars['DateTime'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  password: Scalars['String'];
  pets: Array<Pet>;
  phone: Scalars['Int'];
};

export type ValidateEmailResponseDto = {
  __typename?: 'ValidateEmailResponseDto';
  user_exists: Scalars['Boolean'];
};

export type ValidateEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type ValidateEmailQuery = { __typename?: 'Query', validateEmail: { __typename?: 'ValidateEmailResponseDto', user_exists: boolean } };

export type LoginQueryVariables = Exact<{
  credentials: SignInDto;
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'SignInResponseDto', token: string, user: { __typename?: 'User', first_name: string, last_name: string, id: number, phone: number, email: string, password: string, birth_date: any, image?: string | null | undefined, address: { __typename?: 'Address', id: number, zip_code: number, region: string, country: string, street: string }, pets: Array<{ __typename?: 'Pet', id: number }> } } };

export type SignUpMutationVariables = Exact<{
  registerDto: RegisterDto;
}>;


export type SignUpMutation = { __typename?: 'Mutation', SignUp: { __typename?: 'User', id: number, first_name: string, last_name: string, phone: number, email: string, password: string, birth_date: any, address: { __typename?: 'Address', id: number, zip_code: number, street: string, region: string, country: string } } };

export type UserFullDataQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type UserFullDataQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, first_name: string, last_name: string, phone: number, email: string, birth_date: any, image?: string | null | undefined, address: { __typename?: 'Address', zip_code: number, street: string, region: string, country: string, id: number }, pets: Array<{ __typename?: 'Pet', id: number, name: string, age: number, sexe: Sexe, aboutMe: string, type: { __typename?: 'PetType', id: number } }> } | null | undefined };

export const ValidateEmailDocument = gql`
    query ValidateEmail($email: String!) {
  validateEmail(email: $email) {
    user_exists
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ValidateEmailGQL extends Apollo.Query<ValidateEmailQuery, ValidateEmailQueryVariables> {
    document = ValidateEmailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    query Login($credentials: SignInDto!) {
  login(credentials: $credentials) {
    user {
      address {
        id
        zip_code
        region
        country
        street
      }
      first_name
      last_name
      id
      phone
      email
      password
      birth_date
      pets {
        id
      }
      image
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignUpDocument = gql`
    mutation SignUp($registerDto: RegisterDto!) {
  SignUp(registerDto: $registerDto) {
    id
    first_name
    last_name
    phone
    email
    password
    address {
      id
      zip_code
      street
      region
      country
    }
    birth_date
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    document = SignUpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserFullDataDocument = gql`
    query UserFullData($userId: Int!) {
  user(id: $userId) {
    id
    first_name
    last_name
    phone
    email
    birth_date
    image
    address {
      zip_code
      street
      region
      country
      id
    }
    pets {
      id
      name
      age
      sexe
      aboutMe
      type {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserFullDataGQL extends Apollo.Query<UserFullDataQuery, UserFullDataQueryVariables> {
    document = UserFullDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }