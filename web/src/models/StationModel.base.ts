/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { StationMetricModel, StationMetricModelType } from "./StationMetricModel"
import { StationMetricModelSelector } from "./StationMetricModel.base"
import { RootStoreType } from "./index"


/**
 * StationBase
 * auto generated base class for the model StationModel.
 */
export const StationModelBase = ModelBase
  .named('Station')
  .props({
    __typename: types.optional(types.literal("Station"), "Station"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    metrics: types.union(types.undefined, types.late((): any => StationMetricModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class StationModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  metrics(builder: string | StationMetricModelSelector | ((selector: StationMetricModelSelector) => StationMetricModelSelector) | undefined) { return this.__child(`metrics`, StationMetricModelSelector, builder) }
}
export function selectFromStation() {
  return new StationModelSelector()
}

export const stationModelPrimitives = selectFromStation().name
