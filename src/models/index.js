// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CarClass = {
  "GTTHREE": "GTTHREE",
  "GTFOUR": "GTFOUR"
};

const LiveryLayer = {
  "DECALS": "DECALS",
  "SPONSORS": "SPONSORS"
};

const TyreCompound = {
  "DRY": "DRY",
  "WET": "WET"
};

const { Setup, Car, Track, LiveryMaterial, Livery, TyreSetup, TyrePressure, TyreToe, TyreCamber, TyreCaster, ElectronicsSetup, MechanicalGripSetup, MechanicalGripAntirollBar, MechanicalGripWheelRate, MechanicalGripBumpRate, MechanicalGripBumpRange, DampersSetup, DampersBump, DampersFastBump, DampersRebound, DampersFastRebound, AeroSetup, AeroRideHeight, AeroBrakeDucts } = initSchema(schema);

export {
  Setup,
  Car,
  Track,
  LiveryMaterial,
  Livery,
  CarClass,
  LiveryLayer,
  TyreCompound,
  TyreSetup,
  TyrePressure,
  TyreToe,
  TyreCamber,
  TyreCaster,
  ElectronicsSetup,
  MechanicalGripSetup,
  MechanicalGripAntirollBar,
  MechanicalGripWheelRate,
  MechanicalGripBumpRate,
  MechanicalGripBumpRange,
  DampersSetup,
  DampersBump,
  DampersFastBump,
  DampersRebound,
  DampersFastRebound,
  AeroSetup,
  AeroRideHeight,
  AeroBrakeDucts
};