/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSetup = /* GraphQL */ `
  subscription OnCreateSetup {
    onCreateSetup {
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
export const onUpdateSetup = /* GraphQL */ `
  subscription OnUpdateSetup {
    onUpdateSetup {
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
export const onDeleteSetup = /* GraphQL */ `
  subscription OnDeleteSetup {
    onDeleteSetup {
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
export const onCreateLiveryMaterial = /* GraphQL */ `
  subscription OnCreateLiveryMaterial {
    onCreateLiveryMaterial {
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
export const onUpdateLiveryMaterial = /* GraphQL */ `
  subscription OnUpdateLiveryMaterial {
    onUpdateLiveryMaterial {
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
export const onDeleteLiveryMaterial = /* GraphQL */ `
  subscription OnDeleteLiveryMaterial {
    onDeleteLiveryMaterial {
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
export const onCreateLivery = /* GraphQL */ `
  subscription OnCreateLivery {
    onCreateLivery {
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
export const onUpdateLivery = /* GraphQL */ `
  subscription OnUpdateLivery {
    onUpdateLivery {
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
export const onDeleteLivery = /* GraphQL */ `
  subscription OnDeleteLivery {
    onDeleteLivery {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
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
export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack {
    onCreateTrack {
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
export const onUpdateTrack = /* GraphQL */ `
  subscription OnUpdateTrack {
    onUpdateTrack {
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
export const onDeleteTrack = /* GraphQL */ `
  subscription OnDeleteTrack {
    onDeleteTrack {
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
