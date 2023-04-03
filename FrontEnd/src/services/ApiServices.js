import axios from 'axios'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.56.1:3000/personas',
  cache: new InMemoryCache(),
});

const getUserQuery = gql`
  query($email: String!, $password:String!) {
    user(email: $email, password:$password) {
      email
    }
  }`;

const postUserQuery = gql`

    mutation createUser($email: String!, $password:String!){
        createUser(email:$email, password:$password){
            response
        }
    }`;

export const getUser = (email, password) => {
    return client.query({
                query: getUserQuery,
                variables: { email, password }});
}

export const postUser = (email, password) => {
    return client.mutate({
                mutation: postUserQuery,
                variables: { email, password }});
}


export const getDataApi = () => {
    return axios.get("http://192.168.56.1:3000/personas/rickapi/1");
}