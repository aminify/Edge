import { Instance } from "mobx-state-tree"
import { StationModelBase } from "./StationModel.base"

/* The TypeScript type of an instance of StationModel */
export interface StationModelType extends Instance<typeof StationModel.Type> {}

/* A graphql query fragment builders for StationModel */
export { selectFromStation, stationModelPrimitives, StationModelSelector } from "./StationModel.base"

/**
 * StationModel
 */
export const StationModel = StationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
