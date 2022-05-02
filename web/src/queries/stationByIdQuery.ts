import { gql } from '@apollo/client';

const stationByIdQuery = gql`
  query station($id: Float!) {
    station(id: $id) {
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

export default stationByIdQuery;
