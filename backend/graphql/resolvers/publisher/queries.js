import { Publisher } from '../../../db/models';

const publisherQueries = {
  publishers: async (_, args) => {
    const publishers = Publisher.find();

    return publishers;
  },
  publisher: async (_, { id }) => {
   const publisher = await Book.findById(id);

    return publisher;
  },
};

export default publisherQueries;
