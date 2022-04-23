import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Station } from './models/station.model';
import { StationsService } from './stations.service';

@Resolver(() => Station)
export class StationsResolver {
  constructor(private readonly stationsService: StationsService) {}

  @Query(() => [Station])
  stations(): Station[] {
    return this.stationsService.findAll();
  }

  @Query(() => Station)
  station(@Args('id') id: number): Station {
    const station = this.stationsService.findOneById(id);
    if (!station) {
      throw new NotFoundException(id);
    }
    return station;
  }
}
