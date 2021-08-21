import { ApolloServer } from 'apollo-server-express';
import { env } from '../config';
import schema from './schema';
import context from './context';

const apolloServer = new ApolloServer({
  schema,
  context,
  playground: env.development,
});

export default apolloServer;