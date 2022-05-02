import { gql } from '@apollo/client';

const stationsQuery = gql`
  query stations {
    stations {
      id
      name
      metrics {
        volume
        margin
        profit
      }
    }
  }
`;

export default stationsQuery;
