/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSetup = /* GraphQL */ `
  query GetSetup($id: ID!) {
    getSetup(id: $id) {
      id
      name
      carID
      trackID
      tyres {
        compound
        pressure {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        toe {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        camber {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        caster {
          left
          right
        }
      }
      electronics {
        tc
        abs
        ecuMap
        tc2
      }
      mechanicalGrip {
        antirollBar {
          front
          rear
        }
        preload
        brakePower
        brakeBias
        steerRatio
        wheelRate {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        bumpStopRate {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        bumpStopRange {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
      }
      dampers {
        bump {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        fastBump {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        rebound {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
        fastRebound {
          frontLeft
          frontRight
          rearLeft
          rearRight
        }
      }
      aero {
        rideHeight {
          front
          rear
        }
        brakeDucts {
          front
          rear
        }
        splitter
        wing
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      car {
        id
        make
        model
        year
        class
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        setups {
          items {
            id
            name
            carID
            trackID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      track {
        id
        name
        location
        length
        lapRecord
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        setups {
          items {
            id
            name
            carID
            trackID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listSetups = /* GraphQL */ `
  query ListSetups(
    $filter: ModelSetupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSetups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        carID
        trackID
        tyres {
          compound
          pressure {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          toe {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          camber {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          caster {
            left
            right
          }
        }
        electronics {
          tc
          abs
          ecuMap
          tc2
        }
        mechanicalGrip {
          antirollBar {
            front
            rear
          }
          preload
          brakePower
          brakeBias
          steerRatio
          wheelRate {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          bumpStopRate {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          bumpStopRange {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
        }
        dampers {
          bump {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          fastBump {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          rebound {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          fastRebound {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
        }
        aero {
          rideHeight {
            front
            rear
          }
          brakeDucts {
            front
            rear
          }
          splitter
          wing
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        car {
          id
          make
          model
          year
          class
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          setups {
            nextToken
            startedAt
          }
        }
        track {
          id
          name
          location
          length
          lapRecord
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          setups {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSetups = /* GraphQL */ `
  query SyncSetups(
    $filter: ModelSetupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSetups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        carID
        trackID
        tyres {
          compound
          pressure {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          toe {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          camber {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          caster {
            left
            right
          }
        }
        electronics {
          tc
          abs
          ecuMap
          tc2
        }
        mechanicalGrip {
          antirollBar {
            front
            rear
          }
          preload
          brakePower
          brakeBias
          steerRatio
          wheelRate {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          bumpStopRate {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          bumpStopRange {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
        }
        dampers {
          bump {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          fastBump {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          rebound {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
          fastRebound {
            frontLeft
            frontRight
            rearLeft
            rearRight
          }
        }
        aero {
          rideHeight {
            front
            rear
          }
          brakeDucts {
            front
            rear
          }
          splitter
          wing
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        car {
          id
          make
          model
          year
          class
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          setups {
            nextToken
            startedAt
          }
        }
        track {
          id
          name
          location
          length
          lapRecord
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          setups {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listLiveryMaterials = /* GraphQL */ `
  query ListLiveryMaterials(
    $filter: ModelLiveryMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiveryMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        baseRoughness
        clearCoat
        clearCoatRoughness
        metallic
        layerType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLiveryMaterial = /* GraphQL */ `
  query GetLiveryMaterial($id: ID!) {
    getLiveryMaterial(id: $id) {
      id
      baseRoughness
      clearCoat
      clearCoatRoughness
      metallic
      layerType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const syncLiveryMaterials = /* GraphQL */ `
  query SyncLiveryMaterials(
    $filter: ModelLiveryMaterialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiveryMaterials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        baseRoughness
        clearCoat
        clearCoatRoughness
        metallic
        layerType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLivery = /* GraphQL */ `
  query GetLivery($id: ID!) {
    getLivery(id: $id) {
      id
      carGuid
      teamGuid
      raceNumber
      raceNumberPadding
      auxLightKey
      auxLightKeyColor
      skinTemplateKey
      skinColor1Id
      skinColor2Id
      skinColor3Id
      sponsorId
      skinMaterialType1
      skinMaterialType2
      skinMaterialType3
      rimColor1Id
      rimColor2Id
      rimMaterialType1
      rimMaterialType2
      teamName
      nationality
      displayName
      competitorName
      competitorNationality
      teamTemplateKey
      carModelType
      cupCategory
      licenceType
      useEnduranceKit
      customSkinName
      bannerTemplateKey
      decalLiveryMaterialId
      sponsorLiveryMaterialId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      decalLiveryMaterial {
        id
        baseRoughness
        clearCoat
        clearCoatRoughness
        metallic
        layerType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      sponsorLiveryMaterial {
        id
        baseRoughness
        clearCoat
        clearCoatRoughness
        metallic
        layerType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listLiverys = /* GraphQL */ `
  query ListLiverys(
    $filter: ModelLiveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiverys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        carGuid
        teamGuid
        raceNumber
        raceNumberPadding
        auxLightKey
        auxLightKeyColor
        skinTemplateKey
        skinColor1Id
        skinColor2Id
        skinColor3Id
        sponsorId
        skinMaterialType1
        skinMaterialType2
        skinMaterialType3
        rimColor1Id
        rimColor2Id
        rimMaterialType1
        rimMaterialType2
        teamName
        nationality
        displayName
        competitorName
        competitorNationality
        teamTemplateKey
        carModelType
        cupCategory
        licenceType
        useEnduranceKit
        customSkinName
        bannerTemplateKey
        decalLiveryMaterialId
        sponsorLiveryMaterialId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        decalLiveryMaterial {
          id
          baseRoughness
          clearCoat
          clearCoatRoughness
          metallic
          layerType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        sponsorLiveryMaterial {
          id
          baseRoughness
          clearCoat
          clearCoatRoughness
          metallic
          layerType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLiveries = /* GraphQL */ `
  query SyncLiveries(
    $filter: ModelLiveryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiveries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        carGuid
        teamGuid
        raceNumber
        raceNumberPadding
        auxLightKey
        auxLightKeyColor
        skinTemplateKey
        skinColor1Id
        skinColor2Id
        skinColor3Id
        sponsorId
        skinMaterialType1
        skinMaterialType2
        skinMaterialType3
        rimColor1Id
        rimColor2Id
        rimMaterialType1
        rimMaterialType2
        teamName
        nationality
        displayName
        competitorName
        competitorNationality
        teamTemplateKey
        carModelType
        cupCategory
        licenceType
        useEnduranceKit
        customSkinName
        bannerTemplateKey
        decalLiveryMaterialId
        sponsorLiveryMaterialId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        decalLiveryMaterial {
          id
          baseRoughness
          clearCoat
          clearCoatRoughness
          metallic
          layerType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        sponsorLiveryMaterial {
          id
          baseRoughness
          clearCoat
          clearCoatRoughness
          metallic
          layerType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        make
        model
        year
        class
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        setups {
          items {
            id
            name
            carID
            trackID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      make
      model
      year
      class
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      setups {
        items {
          id
          name
          carID
          trackID
          tyres {
            compound
          }
          electronics {
            tc
            abs
            ecuMap
            tc2
          }
          mechanicalGrip {
            preload
            brakePower
            brakeBias
            steerRatio
          }
          aero {
            splitter
            wing
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          car {
            id
            make
            model
            year
            class
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          track {
            id
            name
            location
            length
            lapRecord
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncCars = /* GraphQL */ `
  query SyncCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        make
        model
        year
        class
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        setups {
          items {
            id
            name
            carID
            trackID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listTracks = /* GraphQL */ `
  query ListTracks(
    $filter: ModelTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        length
        lapRecord
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        setups {
          items {
            id
            name
            carID
            trackID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTrack = /* GraphQL */ `
  query GetTrack($id: ID!) {
    getTrack(id: $id) {
      id
      name
      location
      length
      lapRecord
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      setups {
        items {
          id
          name
          carID
          trackID
          tyres {
            compound
          }
          electronics {
            tc
            abs
            ecuMap
            tc2
          }
          mechanicalGrip {
            preload
            brakePower
            brakeBias
            steerRatio
          }
          aero {
            splitter
            wing
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          car {
            id
            make
            model
            year
            class
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          track {
            id
            name
            location
            length
            lapRecord
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncTracks = /* GraphQL */ `
  query SyncTracks(
    $filter: ModelTrackFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTracks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        location
        length
        lapRecord
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        setups {
          items {
            id
            name
            carID
            trackID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
