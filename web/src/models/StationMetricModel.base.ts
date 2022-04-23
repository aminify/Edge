/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * StationMetricBase
 * auto generated base class for the model StationMetricModel.
 */
export const StationMetricModelBase = ModelBase
  .named('StationMetric')
  .props({
    __typename: types.optional(types.literal("StationMetric"), "StationMetric"),
    volume: types.union(types.undefined, types.integer),
    margin: types.union(types.undefined, types.number),
    profit: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class StationMetricModelSelector extends QueryBuilder {
  get volume() { return this.__attr(`volume`) }
  get margin() { return this.__attr(`margin`) }
  get profit() { return this.__attr(`profit`) }
}
export function selectFromStationMetric() {
  return new StationMetricModelSelector()
}

export const stationMetricModelPrimitives = selectFromStationMetric().volume.margin.profit
