import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_AUTHORS} from './graphql/queries/getAuthors';

export const App: React.FunctionComponent = () => {
 const { loading, error, data } = useQuery(GET_AUTHORS);

	return (
		<>
			{
				loading ? <div>loading...</div> :
				(
					<>
						<div>Authors</div>
						<ul>{data.authors.results.map((author: any, i: number) => <li key={i}>{author.name}</li>)}</ul>
					</>
				)
			}
	</>
	);
};