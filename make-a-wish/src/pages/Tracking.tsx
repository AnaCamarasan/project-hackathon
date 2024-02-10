
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_HELLO = gql`
  query GetHello {
    hello
  }
`;

const Tracking: React.FC = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <div>{data.hello}</div>;
}

export default Tracking;