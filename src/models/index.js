// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CarClass = {
  "ID": "ID",
  "GTTHREE": "GTTHREE",
  "GTFOUR": "GTFOUR"
};

const { Car, Track } = initSchema(schema);

export {
  Car,
  Track,
  CarClass
};