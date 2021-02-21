import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CarClass {
  GTTHREE = "GTTHREE",
  GTFOUR = "GTFOUR"
}

export enum LiveryLayer {
  DECALS = "DECALS",
  SPONSORS = "SPONSORS"
}

export enum TyreCompound {
  DRY = "DRY",
  WET = "WET"
}

export declare class TyreSetup {
  readonly compound: TyreCompound | keyof typeof TyreCompound;
  readonly pressure: TyrePressure;
  readonly toe: TyreToe;
  readonly camber: TyreCamber;
  readonly caster: TyreCaster;
  constructor(init: ModelInit<TyreSetup>);
}

export declare class TyrePressure {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<TyrePressure>);
}

export declare class TyreToe {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<TyreToe>);
}

export declare class TyreCamber {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<TyreCamber>);
}

export declare class TyreCaster {
  readonly left: number;
  readonly right: number;
  constructor(init: ModelInit<TyreCaster>);
}

export declare class ElectronicsSetup {
  readonly tc: number;
  readonly abs: number;
  readonly ecuMap: number;
  readonly tc2?: number;
  constructor(init: ModelInit<ElectronicsSetup>);
}

export declare class MechanicalGripSetup {
  readonly antirollBar: MechanicalGripAntirollBar;
  readonly preload: number;
  readonly brakePower: number;
  readonly brakeBias: number;
  readonly steerRatio: number;
  readonly wheelRate: MechanicalGripWheelRate;
  readonly bumpStopRate: MechanicalGripBumpRate;
  readonly bumpStopRange: MechanicalGripBumpRange;
  constructor(init: ModelInit<MechanicalGripSetup>);
}

export declare class MechanicalGripAntirollBar {
  readonly front: number;
  readonly rear: number;
  constructor(init: ModelInit<MechanicalGripAntirollBar>);
}

export declare class MechanicalGripWheelRate {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<MechanicalGripWheelRate>);
}

export declare class MechanicalGripBumpRate {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<MechanicalGripBumpRate>);
}

export declare class MechanicalGripBumpRange {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<MechanicalGripBumpRange>);
}

export declare class DampersSetup {
  readonly bump: DampersBump;
  readonly fastBump: DampersFastBump;
  readonly rebound: DampersRebound;
  readonly fastRebound: DampersFastRebound;
  constructor(init: ModelInit<DampersSetup>);
}

export declare class DampersBump {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<DampersBump>);
}

export declare class DampersFastBump {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<DampersFastBump>);
}

export declare class DampersRebound {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<DampersRebound>);
}

export declare class DampersFastRebound {
  readonly frontLeft: number;
  readonly frontRight: number;
  readonly rearLeft: number;
  readonly rearRight: number;
  constructor(init: ModelInit<DampersFastRebound>);
}

export declare class AeroSetup {
  readonly rideHeight: AeroRideHeight;
  readonly brakeDucts: AeroBrakeDucts;
  readonly splitter: number;
  readonly wing: number;
  constructor(init: ModelInit<AeroSetup>);
}

export declare class AeroRideHeight {
  readonly front: number;
  readonly rear: number;
  constructor(init: ModelInit<AeroRideHeight>);
}

export declare class AeroBrakeDucts {
  readonly front: number;
  readonly rear: number;
  constructor(init: ModelInit<AeroBrakeDucts>);
}

export declare class Setup {
  readonly id: string;
  readonly name?: string;
  readonly tyres: TyreSetup;
  readonly electronics: ElectronicsSetup;
  readonly mechanicalGrip: MechanicalGripSetup;
  readonly dampers: DampersSetup;
  readonly aero: AeroSetup;
  readonly car?: Car;
  readonly track?: Track;
  constructor(init: ModelInit<Setup>);
  static copyOf(source: Setup, mutator: (draft: MutableModel<Setup>) => MutableModel<Setup> | void): Setup;
}

export declare class Car {
  readonly id: string;
  readonly make: string;
  readonly model: string;
  readonly year?: number;
  readonly class: CarClass | keyof typeof CarClass;
  readonly setups?: (Setup | null)[];
  constructor(init: ModelInit<Car>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car>) => MutableModel<Car> | void): Car;
}

export declare class Track {
  readonly id: string;
  readonly name: string;
  readonly location?: string;
  readonly length?: string;
  readonly lapRecord?: string;
  readonly setups?: (Setup | null)[];
  constructor(init: ModelInit<Track>);
  static copyOf(source: Track, mutator: (draft: MutableModel<Track>) => MutableModel<Track> | void): Track;
}

export declare class LiveryMaterial {
  readonly id: string;
  readonly baseRoughness?: number;
  readonly clearCoat?: number;
  readonly clearCoatRoughness?: number;
  readonly metallic?: number;
  readonly layerType?: LiveryLayer | keyof typeof LiveryLayer;
  constructor(init: ModelInit<LiveryMaterial>);
  static copyOf(source: LiveryMaterial, mutator: (draft: MutableModel<LiveryMaterial>) => MutableModel<LiveryMaterial> | void): LiveryMaterial;
}

export declare class Livery {
  readonly id: string;
  readonly carGuid?: number;
  readonly teamGuid?: number;
  readonly raceNumber?: number;
  readonly raceNumberPadding?: number;
  readonly auxLightKey?: number;
  readonly auxLightKeyColor?: number;
  readonly skinTemplateKey?: number;
  readonly skinColor1Id?: number;
  readonly skinColor2Id?: number;
  readonly skinColor3Id?: number;
  readonly sponsorId?: number;
  readonly skinMaterialType1?: number;
  readonly skinMaterialType2?: number;
  readonly skinMaterialType3?: number;
  readonly rimColor1Id?: number;
  readonly rimColor2Id?: number;
  readonly rimMaterialType1?: number;
  readonly rimMaterialType2?: number;
  readonly teamName: string;
  readonly nationality?: number;
  readonly displayName?: string;
  readonly competitorName?: string;
  readonly competitorNationality?: number;
  readonly teamTemplateKey?: number;
  readonly carModelType?: number;
  readonly cupCategory?: number;
  readonly licenceType?: number;
  readonly useEnduranceKit?: number;
  readonly customSkinName: string;
  readonly bannerTemplateKey?: number;
  readonly decalLiveryMaterialId: string;
  readonly sponsorLiveryMaterialId: string;
  readonly decalLiveryMaterial?: LiveryMaterial;
  readonly sponsorLiveryMaterial?: LiveryMaterial;
  constructor(init: ModelInit<Livery>);
  static copyOf(source: Livery, mutator: (draft: MutableModel<Livery>) => MutableModel<Livery> | void): Livery;
}