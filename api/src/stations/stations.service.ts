import { Injectable } from '@nestjs/common';
import { stations } from './data/stations';
import { Station } from './models/station.model';

@Injectable()
export class StationsService {
  findAll(): Station[] {
    return stations;
  }

  findOneById(id: number): Station {
    return stations.find((station) => station.id === id);
  }
}
