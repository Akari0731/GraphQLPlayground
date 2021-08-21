import { ApolloServer } from 'apollo-server-express';
import { env } from '../config';
import schema from './schema';

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
});

export default apolloServer;