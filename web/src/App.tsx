import { observer } from 'mobx-react-lite';
import React from 'react';
import { useQuery } from './models';

function App() {
  const { data, loading, error } = useQuery((store) =>
    store.queryStations(undefined, (qb) =>
      qb.name.metrics((metric) => metric.margin.profit),
    ),
  );

  if (loading) {
    return <i>Loading...</i>;
  }

  if (error) {
    return <b>ERROR</b>;
  }

  return (
    <div>
      {data?.stations.map((station) => (
        <div>
          {station.name} - {JSON.stringify(station.metrics)}
        </div>
      ))}
    </div>
  );
}

export default observer(App);
