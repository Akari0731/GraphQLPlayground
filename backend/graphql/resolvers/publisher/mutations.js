import { Publisher } from '../../../db/models';

const publisherMutations = {
  createPublisher: async (_, { publisher}) => {
    const newPublisher = new Publisher(publisher);

    return newPublisher.save();
  },
  updatePublisher: async (_, { id, publisher }) => {
    const updatedPublisher = await publisher.findByIdAndUpdate(
      id,
      {
        $set: { ...publisher },
      },
      { new: true }
    );

    return updatedPublisher.save();
  },
};

export default publisherMutations;