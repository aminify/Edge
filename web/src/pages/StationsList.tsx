import React from 'react';
import OrderingArrows from 'components/OrderingArrows';
import Table from 'components/ui/Table';
import { Link, useSearchParams } from 'react-router-dom';
import routes from 'routes';
import { useQuery } from '@apollo/client';
import stationsQuery from 'queries/stationsQuery';

function StationsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ordering = {
    key: searchParams.get('orderBy')!,
    ascending: searchParams.get('asc') === 'false' ? false : true,
  };
  const { data, loading, error } = useQuery(stationsQuery);

  if (loading) {
    return <i>Loading...</i>;
  }

  if (error) {
    return <b>ERROR</b>;
  }

  const generateArrowsJSX = (key: string) => (
    <OrderingArrows
      active={
        ordering.key === key ? (ordering.ascending ? 'down' : 'up') : null
      }
    />
  );

  const generateOnClick = (key: string) => () => {
    if (ordering.key === key) {
      if (!ordering.ascending) {
        setSearchParams({ orderBy: key, asc: 'true' }, { replace: true });
      } else {
        setSearchParams({}, { replace: true });
      }
    } else {
      setSearchParams({ orderBy: key, asc: 'false' }, { replace: true });
    }
  };

  const rows: any[] = data!.stations.map((station: any) => ({
    ...station.metrics,
    name: station.name,
    key: station.id!.toString(),
  }));

  const sortedRows = rows
    .map((i) => i)
    .sort((a, b) =>
      negateIf(!ordering.ascending)(
        typeof rows[0]?.[ordering.key] === 'string'
          ? a[ordering.key].localeCompare(b[ordering.key])
          : a[ordering.key] - b[ordering.key],
      ),
    );

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Edge Stations</h1>
      <Table
        style={{ margin: '0 auto' }}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            icon: generateArrowsJSX('name'),
            onClick: generateOnClick('name'),
            render: (name, record) => (
              <Link to={routes.STATION.replace(':id', record.key)}>{name}</Link>
            ),
          },
          {
            title: 'Volume',
            icon: generateArrowsJSX('volume'),
            onClick: generateOnClick('volume'),
            dataIndex: 'volume',
          },
          {
            title: 'Margin',
            dataIndex: 'margin',
            icon: generateArrowsJSX('margin'),
            onClick: generateOnClick('margin'),
          },
          {
            title: 'Profit',
            dataIndex: 'profit',
            icon: generateArrowsJSX('profit'),
            onClick: generateOnClick('profit'),
          },
        ]}
        data={sortedRows}
      />
      <br />
      <small>ⓘ You can click on each column to change ordering.</small>
    </div>
  );
}

export default StationsList;

const negateIf = (condition: boolean) => (value: any) =>
  condition ? -value : value;
