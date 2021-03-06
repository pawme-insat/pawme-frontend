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
  name: Scalars['String'];
  type: Scalars['Float'];
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
  birth_date: Scalars['DateTime'];
  breedType: CreateBreedInput;
  name: Scalars['String'];
  sexe: SexeEnum;
  user: Scalars['Float'];
};

export type CreatePetTypeInput = {
  name: Scalars['String'];
};

export type CreateReviewInput = {
  description: Scalars['String'];
  pet: CreatePetInput;
};

export type CreateUserInput = {
  address: CreateAddressInput;
  bio: Scalars['String'];
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
  birth_date: Scalars['DateTime'];
  breedType: Breed;
  gallery: Array<PetGallery>;
  id: Scalars['Int'];
  name: Scalars['String'];
  pdp: Scalars['String'];
  sexe: Sexe;
  user: User;
};

export type PetGallery = {
  __typename?: 'PetGallery';
  filename: Scalars['String'];
  id: Scalars['Int'];
  pet: Pet;
};

export type PetType = {
  __typename?: 'PetType';
  breeds: Array<Breed>;
  id: Scalars['Int'];
  name: Scalars['String'];
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
  Masculin = 'Masculin',
}

export enum SexeEnum {
  Feminin = 'Feminin',
  Masculin = 'Masculin',
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
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Float']>;
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
  birth_date?: InputMaybe<Scalars['DateTime']>;
  breedType?: InputMaybe<CreateBreedInput>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  sexe?: InputMaybe<SexeEnum>;
  user?: InputMaybe<Scalars['Float']>;
};

export type UpdatePetTypeInput = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateReviewInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  pet?: InputMaybe<CreatePetInput>;
};

export type UpdateUserInput = {
  address?: InputMaybe<CreateAddressInput>;
  bio?: InputMaybe<Scalars['String']>;
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
  bio?: Maybe<Scalars['String']>;
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

export type ValidateEmailQuery = {
  __typename?: 'Query';
  validateEmail: { __typename?: 'ValidateEmailResponseDto'; user_exists: boolean };
};

export type LoginQueryVariables = Exact<{
  credentials: SignInDto;
}>;

export type LoginQuery = {
  __typename?: 'Query';
  login: {
    __typename?: 'SignInResponseDto';
    token: string;
    user: {
      __typename?: 'User';
      first_name: string;
      last_name: string;
      id: number;
      phone: number;
      email: string;
      bio?: string | null | undefined;
      password: string;
      birth_date: any;
      image?: string | null | undefined;
      address: {
        __typename?: 'Address';
        id: number;
        zip_code: number;
        region: string;
        country: string;
        street: string;
      };
      pets: Array<{ __typename?: 'Pet'; id: number }>;
    };
  };
};

export type SignUpMutationVariables = Exact<{
  registerDto: RegisterDto;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  SignUp: {
    __typename?: 'User';
    id: number;
    first_name: string;
    last_name: string;
    phone: number;
    email: string;
    bio?: string | null | undefined;
    password: string;
    birth_date: any;
    address: { __typename?: 'Address'; id: number; zip_code: number; street: string; region: string; country: string };
  };
};

export type CreateTypeMutationVariables = Exact<{
  createTypeInput: CreatePetTypeInput;
}>;

export type CreateTypeMutation = {
  __typename?: 'Mutation';
  createType: { __typename?: 'PetType'; name: string; id: number };
};

export type CreatePetMutationVariables = Exact<{
  createPetInput: CreatePetInput;
}>;

export type CreatePetMutation = {
  __typename?: 'Mutation';
  createPet: { __typename?: 'Pet'; name: string; birth_date: any; sexe: Sexe; aboutMe: string };
};

export type GetPetQueryVariables = Exact<{
  petId: Scalars['Int'];
}>;

export type GetPetQuery = {
  __typename?: 'Query';
  pet: {
    __typename?: 'Pet';
    id: number;
    name: string;
    birth_date: any;
    sexe: Sexe;
    aboutMe: string;
    pdp: string;
    user: { __typename?: 'User'; image?: string | null | undefined; first_name: string; last_name: string; id: number };
    breedType: {
      __typename?: 'Breed';
      name: string;
      breed_characteristics: Array<{
        __typename?: 'BreedCharacteristic';
        label: string;
        id: number;
        description?: string | null | undefined;
      }>;
      type: { __typename?: 'PetType'; id: number; name: string };
    };
  };
};

export type GetPetTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPetTypesQuery = {
  __typename?: 'Query';
  pet_types: Array<{ __typename?: 'PetType'; id: number; name: string }>;
};

export type UpdateBioMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;

export type UpdateBioMutation = {
  __typename?: 'Mutation';
  updateUser: { __typename?: 'User'; bio?: string | null | undefined };
};

export type UserFullDataQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;

export type UserFullDataQuery = {
  __typename?: 'Query';
  user?:
    | {
        __typename?: 'User';
        id: number;
        first_name: string;
        last_name: string;
        phone: number;
        email: string;
        birth_date: any;
        bio?: string | null | undefined;
        image?: string | null | undefined;
        address: {
          __typename?: 'Address';
          zip_code: number;
          street: string;
          region: string;
          country: string;
          id: number;
        };
        pets: Array<{
          __typename?: 'Pet';
          id: number;
          name: string;
          birth_date: any;
          sexe: Sexe;
          aboutMe: string;
          breedType: {
            __typename?: 'Breed';
            name: string;
            breed_characteristics: Array<{
              __typename?: 'BreedCharacteristic';
              label: string;
              id: number;
              description?: string | null | undefined;
            }>;
            type: { __typename?: 'PetType'; id: number; name: string };
          };
        }>;
      }
    | null
    | undefined;
};

export const ValidateEmailDocument = gql`
  query ValidateEmail($email: String!) {
    validateEmail(email: $email) {
      user_exists
    }
  }
`;

@Injectable({
  providedIn: 'root',
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
        bio
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
  providedIn: 'root',
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
      bio
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
  providedIn: 'root',
})
export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
  document = SignUpDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreateTypeDocument = gql`
  mutation CreateType($createTypeInput: CreatePetTypeInput!) {
    createType(createTypeInput: $createTypeInput) {
      name
      id
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateTypeGQL extends Apollo.Mutation<CreateTypeMutation, CreateTypeMutationVariables> {
  document = CreateTypeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreatePetDocument = gql`
  mutation CreatePet($createPetInput: CreatePetInput!) {
    createPet(createPetInput: $createPetInput) {
      name
      birth_date
      sexe
      aboutMe
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreatePetGQL extends Apollo.Mutation<CreatePetMutation, CreatePetMutationVariables> {
  document = CreatePetDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetPetDocument = gql`
  query GetPet($petId: Int!) {
    pet(id: $petId) {
      id
      name
      birth_date
      sexe
      aboutMe
      user {
        image
        first_name
        last_name
        id
      }
      pdp
      breedType {
        name
        breed_characteristics {
          label
          id
          description
        }
        type {
          id
          name
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetPetGQL extends Apollo.Query<GetPetQuery, GetPetQueryVariables> {
  document = GetPetDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetPetTypesDocument = gql`
  query GetPetTypes {
    pet_types {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetPetTypesGQL extends Apollo.Query<GetPetTypesQuery, GetPetTypesQueryVariables> {
  document = GetPetTypesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdateBioDocument = gql`
  mutation UpdateBio($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      bio
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UpdateBioGQL extends Apollo.Mutation<UpdateBioMutation, UpdateBioMutationVariables> {
  document = UpdateBioDocument;

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
      bio
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
        birth_date
        sexe
        aboutMe
        breedType {
          name
          breed_characteristics {
            label
            id
            description
          }
          type {
            id
            name
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UserFullDataGQL extends Apollo.Query<UserFullDataQuery, UserFullDataQueryVariables> {
  document = UserFullDataDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
