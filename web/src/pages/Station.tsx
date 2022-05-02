import { useQuery } from '@apollo/client';
import { lighten } from 'color2k';
import icons from 'icons';
import stationByIdQuery from 'queries/stationByIdQuery';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';
import theme from 'theme';

function Station() {
  const params = useParams();
  const { data, loading, error } = useQuery(stationByIdQuery, {
    variables: {
      id: +params.id!,
    },
  });

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
      <Link to={-1 as any}>{icons.BACK} Stations</Link>
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

export default Station;

const cardAnimation = keyframes`
  0% {
    transform: scale(0.1);
    background-color: ${theme.gray};
  }
  100% {
    transform: scale(1) rotate(360deg);
    background-color: ${lighten(theme.secondary, 0.4)};
  }
`;

const DetailCard = styled.div`
  color: white;
  width: 150px;
  padding: 20px 0;
  text-align: center;
  background-color: ${lighten(theme.secondary, 0.4)};
  border-radius: 10px;
  transform: scale(1);
  animation: ${cardAnimation} 0.3s;
`;
