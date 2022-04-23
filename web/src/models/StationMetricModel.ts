import { Instance } from "mobx-state-tree"
import { StationMetricModelBase } from "./StationMetricModel.base"

/* The TypeScript type of an instance of StationMetricModel */
export interface StationMetricModelType extends Instance<typeof StationMetricModel.Type> {}

/* A graphql query fragment builders for StationMetricModel */
export { selectFromStationMetric, stationMetricModelPrimitives, StationMetricModelSelector } from "./StationMetricModel.base"

/**
 * StationMetricModel
 */
export const StationMetricModel = StationMetricModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
