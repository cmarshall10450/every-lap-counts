export const schema = {
    "models": {
        "Setup": {
            "name": "Setup",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tyres": {
                    "name": "tyres",
                    "isArray": false,
                    "type": {
                        "nonModel": "TyreSetup"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "electronics": {
                    "name": "electronics",
                    "isArray": false,
                    "type": {
                        "nonModel": "ElectronicsSetup"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "mechanicalGrip": {
                    "name": "mechanicalGrip",
                    "isArray": false,
                    "type": {
                        "nonModel": "MechanicalGripSetup"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "dampers": {
                    "name": "dampers",
                    "isArray": false,
                    "type": {
                        "nonModel": "DampersSetup"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "aero": {
                    "name": "aero",
                    "isArray": false,
                    "type": {
                        "nonModel": "AeroSetup"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "car": {
                    "name": "car",
                    "isArray": false,
                    "type": {
                        "model": "Car"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "carID"
                    }
                },
                "track": {
                    "name": "track",
                    "isArray": false,
                    "type": {
                        "model": "Track"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "trackID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Setups",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCar",
                        "fields": [
                            "carID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTrack",
                        "fields": [
                            "trackID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Car": {
            "name": "Car",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "make": {
                    "name": "make",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "model": {
                    "name": "model",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "year": {
                    "name": "year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "enum": "CarClass"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "setups": {
                    "name": "setups",
                    "isArray": true,
                    "type": {
                        "model": "Setup"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "car"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Cars",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Track": {
            "name": "Track",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "length": {
                    "name": "length",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lapRecord": {
                    "name": "lapRecord",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "setups": {
                    "name": "setups",
                    "isArray": true,
                    "type": {
                        "model": "Setup"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "track"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Tracks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "LiveryMaterial": {
            "name": "LiveryMaterial",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "baseRoughness": {
                    "name": "baseRoughness",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "clearCoat": {
                    "name": "clearCoat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "clearCoatRoughness": {
                    "name": "clearCoatRoughness",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "metallic": {
                    "name": "metallic",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "layerType": {
                    "name": "layerType",
                    "isArray": false,
                    "type": {
                        "enum": "LiveryLayer"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "LiveryMaterials",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Livery": {
            "name": "Livery",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "carGuid": {
                    "name": "carGuid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "teamGuid": {
                    "name": "teamGuid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "raceNumber": {
                    "name": "raceNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "raceNumberPadding": {
                    "name": "raceNumberPadding",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "auxLightKey": {
                    "name": "auxLightKey",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "auxLightKeyColor": {
                    "name": "auxLightKeyColor",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skinTemplateKey": {
                    "name": "skinTemplateKey",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skinColor1Id": {
                    "name": "skinColor1Id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skinColor2Id": {
                    "name": "skinColor2Id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skinColor3Id": {
                    "name": "skinColor3Id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sponsorId": {
                    "name": "sponsorId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skinMaterialType1": {
                    "name": "skinMaterialType1",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skinMaterialType2": {
                    "name": "skinMaterialType2",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skinMaterialType3": {
                    "name": "skinMaterialType3",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rimColor1Id": {
                    "name": "rimColor1Id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rimColor2Id": {
                    "name": "rimColor2Id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rimMaterialType1": {
                    "name": "rimMaterialType1",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rimMaterialType2": {
                    "name": "rimMaterialType2",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "teamName": {
                    "name": "teamName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "nationality": {
                    "name": "nationality",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "displayName": {
                    "name": "displayName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "competitorName": {
                    "name": "competitorName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "competitorNationality": {
                    "name": "competitorNationality",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "teamTemplateKey": {
                    "name": "teamTemplateKey",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "carModelType": {
                    "name": "carModelType",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "cupCategory": {
                    "name": "cupCategory",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "licenceType": {
                    "name": "licenceType",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "useEnduranceKit": {
                    "name": "useEnduranceKit",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "customSkinName": {
                    "name": "customSkinName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "bannerTemplateKey": {
                    "name": "bannerTemplateKey",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "decalLiveryMaterialId": {
                    "name": "decalLiveryMaterialId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "sponsorLiveryMaterialId": {
                    "name": "sponsorLiveryMaterialId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "decalLiveryMaterial": {
                    "name": "decalLiveryMaterial",
                    "isArray": false,
                    "type": {
                        "model": "LiveryMaterial"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "liveryDecalLiveryMaterialId"
                    }
                },
                "sponsorLiveryMaterial": {
                    "name": "sponsorLiveryMaterial",
                    "isArray": false,
                    "type": {
                        "model": "LiveryMaterial"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "liverySponsorLiveryMaterialId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Liveries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "CarClass": {
            "name": "CarClass",
            "values": [
                "GTTHREE",
                "GTFOUR"
            ]
        },
        "LiveryLayer": {
            "name": "LiveryLayer",
            "values": [
                "DECALS",
                "SPONSORS"
            ]
        },
        "TyreCompound": {
            "name": "TyreCompound",
            "values": [
                "DRY",
                "WET"
            ]
        }
    },
    "nonModels": {
        "TyreSetup": {
            "name": "TyreSetup",
            "fields": {
                "compound": {
                    "name": "compound",
                    "isArray": false,
                    "type": {
                        "enum": "TyreCompound"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "pressure": {
                    "name": "pressure",
                    "isArray": false,
                    "type": {
                        "nonModel": "TyrePressure"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "toe": {
                    "name": "toe",
                    "isArray": false,
                    "type": {
                        "nonModel": "TyreToe"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "camber": {
                    "name": "camber",
                    "isArray": false,
                    "type": {
                        "nonModel": "TyreCamber"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "caster": {
                    "name": "caster",
                    "isArray": false,
                    "type": {
                        "nonModel": "TyreCaster"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "TyrePressure": {
            "name": "TyrePressure",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "TyreToe": {
            "name": "TyreToe",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "TyreCamber": {
            "name": "TyreCamber",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "TyreCaster": {
            "name": "TyreCaster",
            "fields": {
                "left": {
                    "name": "left",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "right": {
                    "name": "right",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ElectronicsSetup": {
            "name": "ElectronicsSetup",
            "fields": {
                "tc": {
                    "name": "tc",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "abs": {
                    "name": "abs",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "ecuMap": {
                    "name": "ecuMap",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "tc2": {
                    "name": "tc2",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MechanicalGripSetup": {
            "name": "MechanicalGripSetup",
            "fields": {
                "antirollBar": {
                    "name": "antirollBar",
                    "isArray": false,
                    "type": {
                        "nonModel": "MechanicalGripAntirollBar"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "preload": {
                    "name": "preload",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "brakePower": {
                    "name": "brakePower",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "brakeBias": {
                    "name": "brakeBias",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "steerRatio": {
                    "name": "steerRatio",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "wheelRate": {
                    "name": "wheelRate",
                    "isArray": false,
                    "type": {
                        "nonModel": "MechanicalGripWheelRate"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "bumpStopRate": {
                    "name": "bumpStopRate",
                    "isArray": false,
                    "type": {
                        "nonModel": "MechanicalGripBumpRate"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "bumpStopRange": {
                    "name": "bumpStopRange",
                    "isArray": false,
                    "type": {
                        "nonModel": "MechanicalGripBumpRange"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "MechanicalGripAntirollBar": {
            "name": "MechanicalGripAntirollBar",
            "fields": {
                "front": {
                    "name": "front",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rear": {
                    "name": "rear",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "MechanicalGripWheelRate": {
            "name": "MechanicalGripWheelRate",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "MechanicalGripBumpRate": {
            "name": "MechanicalGripBumpRate",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "MechanicalGripBumpRange": {
            "name": "MechanicalGripBumpRange",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DampersSetup": {
            "name": "DampersSetup",
            "fields": {
                "bump": {
                    "name": "bump",
                    "isArray": false,
                    "type": {
                        "nonModel": "DampersBump"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fastBump": {
                    "name": "fastBump",
                    "isArray": false,
                    "type": {
                        "nonModel": "DampersFastBump"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "rebound": {
                    "name": "rebound",
                    "isArray": false,
                    "type": {
                        "nonModel": "DampersRebound"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fastRebound": {
                    "name": "fastRebound",
                    "isArray": false,
                    "type": {
                        "nonModel": "DampersFastRebound"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DampersBump": {
            "name": "DampersBump",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DampersFastBump": {
            "name": "DampersFastBump",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DampersRebound": {
            "name": "DampersRebound",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DampersFastRebound": {
            "name": "DampersFastRebound",
            "fields": {
                "frontLeft": {
                    "name": "frontLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "frontRight": {
                    "name": "frontRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearLeft": {
                    "name": "rearLeft",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rearRight": {
                    "name": "rearRight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "AeroSetup": {
            "name": "AeroSetup",
            "fields": {
                "rideHeight": {
                    "name": "rideHeight",
                    "isArray": false,
                    "type": {
                        "nonModel": "AeroRideHeight"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "brakeDucts": {
                    "name": "brakeDucts",
                    "isArray": false,
                    "type": {
                        "nonModel": "AeroBrakeDucts"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "splitter": {
                    "name": "splitter",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "wing": {
                    "name": "wing",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "AeroRideHeight": {
            "name": "AeroRideHeight",
            "fields": {
                "front": {
                    "name": "front",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rear": {
                    "name": "rear",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "AeroBrakeDucts": {
            "name": "AeroBrakeDucts",
            "fields": {
                "front": {
                    "name": "front",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rear": {
                    "name": "rear",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "253da696d3b5120cf4c1fb0fae6d0384"
};