const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
admin.initializeApp(functions.config().firebase);

const typeDefs = gql`
  type User {
    email: String
    nombre: String
    uid: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      let users: any[] = [];
      try {
        await admin
          .database()
          .collection('users')
          .get()
          .then(function (querySnapshot: any) {
            if (querySnapshot) {
              querySnapshot.forEach(function (doc: any) {
                users.push(doc.data());
              });
            } else {
              console.log('Do Not Exist In DB');
            }
          });
      } catch (error) {
        console.log(error);
      }
      return users;
    },

    user: async (parent, args) => {
      const { id } = args;
      let user;
      try {
        await db
          .collection('users')
          .doc(id)
          .get()
          .then(function (doc) {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              user = doc.data();
            }
          })
          .catch((err) => {
            console.log('Error getting document', err);
          });
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
