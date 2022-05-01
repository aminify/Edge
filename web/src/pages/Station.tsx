import icons from 'icons';
import { observer } from 'mobx-react-lite';
import { useQuery } from 'models';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import routes from 'routes';
import styled from 'styled-components/macro';

function Station() {
  const params = useParams();
  const { data, loading, error } = useQuery((store) =>
    store.queryStation({ id: +params.id! }, (qb) =>
      qb.name.metrics((metric) => metric.margin.profit.volume),
    ),
  );

  if (loading) {
    return <i>Loading...</i>;
  }

  if (error) {
    return <b>ERROR</b>;
  }

  const name = data?.station.name!;
  const { margin, profit, volume } = data?.station.metrics;

  return (
    <div>
      <Link to={routes.STATIONS_LIST}>{icons.BACK} Stations</Link>
      <h1 style={{ textAlign: 'center' }}>{name}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DetailCard>
          <h3>Margin:</h3>
          <h3>{margin}</h3>
        </DetailCard>
        <DetailCard>
          <h3>Profit:</h3>
          <h3>{profit}</h3>
        </DetailCard>
        <DetailCard>
          <h3>Volume:</h3>
          <h3>{volume}</h3>
        </DetailCard>
      </div>
    </div>
  );
}

export default observer(Station);

const DetailCard = styled.div`
  width: 150px;
  padding: 20px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.gray};
  transition: transform 0.3s;
  border-radius: 10px;
  :hover {
    transform: scale(1.2) rotate(3deg);
    background-color: ${({ theme }) => theme.green};
  }
`;
