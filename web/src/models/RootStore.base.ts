/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { StationMetricModel, StationMetricModelType } from "./StationMetricModel"
import { stationMetricModelPrimitives, StationMetricModelSelector } from "./StationMetricModel.base"
import { StationModel, StationModelType } from "./StationModel"
import { stationModelPrimitives, StationModelSelector } from "./StationModel.base"



/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {

}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryStations="queryStations",
queryStation="queryStation"
}


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['StationMetric', () => StationMetricModel], ['Station', () => StationModel]], [], "js"))
  .props({

  })
  .actions(self => ({
    queryStations(variables?: {  }, resultSelector: string | ((qb: StationModelSelector) => StationModelSelector) = stationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ stations: StationModelType[]}>(`query stations { stations {
        ${typeof resultSelector === "function" ? resultSelector(new StationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryStation(variables: { id: number }, resultSelector: string | ((qb: StationModelSelector) => StationModelSelector) = stationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ station: StationModelType}>(`query station($id: Float!) { station(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new StationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  })))
