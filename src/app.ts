import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, Config, gql } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import * as resolvers from './graphql/resolvers'

const typeDefs = gql`
  type Airport {
    id: Int!
    icao_code: String!
    iata_code: String!
    name: String!
    city: String!
    country: String!
    altitude: Float!
    lat_decimal: Float!
    lon_decimal: Float!
  }

  type Query {
    ping: String
    airports(icao_code: String!): [Airport]
  }
`

async function startApolloServer(config: Config<ExpressContext>): Promise<ApolloServer<ExpressContext>> {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    ...config,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return server;
}

export const server = startApolloServer({ typeDefs, resolvers })