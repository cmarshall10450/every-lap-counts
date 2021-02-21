import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CarClass {
  ID = "ID",
  GTTHREE = "GTTHREE",
  GTFOUR = "GTFOUR"
}



export declare class Car {
  readonly id: string;
  readonly make: string;
  readonly model: string;
  readonly year?: number;
  readonly class: CarClass | keyof typeof CarClass;
  constructor(init: ModelInit<Car>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car>) => MutableModel<Car> | void): Car;
}

export declare class Track {
  readonly id: string;
  readonly name: string;
  readonly location?: string;
  readonly length?: string;
  readonly lapRecord?: string;
  constructor(init: ModelInit<Track>);
  static copyOf(source: Track, mutator: (draft: MutableModel<Track>) => MutableModel<Track> | void): Track;
}