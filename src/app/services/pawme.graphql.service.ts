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
  removeAddress: Address;
  removeBreed: Breed;
  removeBreedCharacteristic: BreedCharacteristic;
  removeConversation: Conversation;
  removeLike: LikePet;
  removeMatch: Match;
  removeMessage: Message;
  removePet: Pet;
  removeReview: Review;
  removeType: PetType;
  removeUser: User;
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
  breed: Breed;
  breedCharacteristic: BreedCharacteristic;
  conversation: Conversation;
  like: LikePet;
  match: Match;
  message: Message;
  pet: Pet;
  review: Review;
  type: PetType;
  user?: Maybe<User>;
};


export type QueryAddressArgs = {
  id: Scalars['Int'];
};


export type QueryBreedArgs = {
  id: Scalars['Int'];
};


export type QueryBreedCharacteristicArgs = {
  id: Scalars['Int'];
};


export type QueryConversationArgs = {
  id: Scalars['Int'];
};


export type QueryLikeArgs = {
  id: Scalars['Int'];
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


export type QueryReviewArgs = {
  id: Scalars['Int'];
};


export type QueryTypeArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
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
  last_name: Scalars['String'];
  password: Scalars['String'];
  pets: Array<Pet>;
  phone: Scalars['Int'];
};

export type PetQueryVariables = Exact<{
  petId: Scalars['Int'];
}>;


export type PetQuery = { __typename?: 'Query', pet: { __typename?: 'Pet', id: number } };

export const PetDocument = gql`
    query Pet($petId: Int!) {
  pet(id: $petId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PetGQL extends Apollo.Query<PetQuery, PetQueryVariables> {
    document = PetDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }