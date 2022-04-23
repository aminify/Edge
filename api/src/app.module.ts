import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StationsModule } from './stations/stations.module';

@Module({
  imports: [
    StationsModule,
    GraphQLModule.forRoot({ autoSchemaFile: true, cors: true }),
  ],
})
export class AppModule {}
