import {gql} from "@apollo/client";

export const GET_AUTHORS = gql`
    {
        authors(params: { page: 1, pageSize: 20 }) {
    		results {
     			 name
    		}
  		}
    }
`;