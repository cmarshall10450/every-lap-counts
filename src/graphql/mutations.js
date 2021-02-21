/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSetup = /* GraphQL */ `
  mutation CreateSetup(
    $input: CreateSetupInput!
    $condition: ModelSetupConditionInput
  ) {
    createSetup(input: $input, condition: $condition) {
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
export const updateSetup = /* GraphQL */ `
  mutation UpdateSetup(
    $input: UpdateSetupInput!
    $condition: ModelSetupConditionInput
  ) {
    updateSetup(input: $input, condition: $condition) {
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
export const deleteSetup = /* GraphQL */ `
  mutation DeleteSetup(
    $input: DeleteSetupInput!
    $condition: ModelSetupConditionInput
  ) {
    deleteSetup(input: $input, condition: $condition) {
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
export const createLiveryMaterial = /* GraphQL */ `
  mutation CreateLiveryMaterial(
    $input: CreateLiveryMaterialInput!
    $condition: ModelLiveryMaterialConditionInput
  ) {
    createLiveryMaterial(input: $input, condition: $condition) {
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
export const updateLiveryMaterial = /* GraphQL */ `
  mutation UpdateLiveryMaterial(
    $input: UpdateLiveryMaterialInput!
    $condition: ModelLiveryMaterialConditionInput
  ) {
    updateLiveryMaterial(input: $input, condition: $condition) {
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
export const deleteLiveryMaterial = /* GraphQL */ `
  mutation DeleteLiveryMaterial(
    $input: DeleteLiveryMaterialInput!
    $condition: ModelLiveryMaterialConditionInput
  ) {
    deleteLiveryMaterial(input: $input, condition: $condition) {
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
export const createLivery = /* GraphQL */ `
  mutation CreateLivery(
    $input: CreateLiveryInput!
    $condition: ModelLiveryConditionInput
  ) {
    createLivery(input: $input, condition: $condition) {
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
export const updateLivery = /* GraphQL */ `
  mutation UpdateLivery(
    $input: UpdateLiveryInput!
    $condition: ModelLiveryConditionInput
  ) {
    updateLivery(input: $input, condition: $condition) {
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
export const deleteLivery = /* GraphQL */ `
  mutation DeleteLivery(
    $input: DeleteLiveryInput!
    $condition: ModelLiveryConditionInput
  ) {
    deleteLivery(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createTrack = /* GraphQL */ `
  mutation CreateTrack(
    $input: CreateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    createTrack(input: $input, condition: $condition) {
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
export const updateTrack = /* GraphQL */ `
  mutation UpdateTrack(
    $input: UpdateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    updateTrack(input: $input, condition: $condition) {
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
export const deleteTrack = /* GraphQL */ `
  mutation DeleteTrack(
    $input: DeleteTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    deleteTrack(input: $input, condition: $condition) {
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
