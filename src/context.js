import { BaseRatingContext } from "@shipengine/connect-native-rating-api";
import pkg from "@shipengine/connect-runtime";
import { dhlGermanyData } from "./dhl-germany-data.js"; // change this import according to your module

const { logger } = pkg;
const ratingContext = new BaseRatingContext(dhlGermanyData);

export const context = {
  getZone: async (zoneKeys) => ratingContext.getZone(zoneKeys),
  getRates: async (rateKeys) => ratingContext.getRates(rateKeys),
  getVariables: async (variableKeys) =>
    ratingContext.getVariables(variableKeys),
  log: logger // alternatively you can use ratingContext.log
};
