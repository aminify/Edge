import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StationMetric {
  @Field(() => Int)
  volume: number;

  @Field(() => Float)
  margin: number;

  @Field(() => Int)
  profit: number;
}

@ObjectType()
export class Station {
  @Field(() => Int)
  id: number;

  @Field()
  name?: string;

  @Field()
  metrics: StationMetric;
}
