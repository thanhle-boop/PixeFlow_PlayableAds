var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.JointSpring' )
  var i2011 = data
  i2010.spring = i2011[0]
  i2010.damper = i2011[1]
  i2010.targetPosition = i2011[2]
  return i2010
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.JointMotor' )
  var i2013 = data
  i2012.m_TargetVelocity = i2013[0]
  i2012.m_Force = i2013[1]
  i2012.m_FreeSpin = i2013[2]
  return i2012
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.JointLimits' )
  var i2015 = data
  i2014.m_Min = i2015[0]
  i2014.m_Max = i2015[1]
  i2014.m_Bounciness = i2015[2]
  i2014.m_BounceMinVelocity = i2015[3]
  i2014.m_ContactDistance = i2015[4]
  i2014.minBounce = i2015[5]
  i2014.maxBounce = i2015[6]
  return i2014
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.JointDrive' )
  var i2017 = data
  i2016.m_PositionSpring = i2017[0]
  i2016.m_PositionDamper = i2017[1]
  i2016.m_MaximumForce = i2017[2]
  i2016.m_UseAcceleration = i2017[3]
  return i2016
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2019 = data
  i2018.m_Spring = i2019[0]
  i2018.m_Damper = i2019[1]
  return i2018
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2021 = data
  i2020.m_Limit = i2021[0]
  i2020.m_Bounciness = i2021[1]
  i2020.m_ContactDistance = i2021[2]
  return i2020
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2023 = data
  i2022.m_ExtremumSlip = i2023[0]
  i2022.m_ExtremumValue = i2023[1]
  i2022.m_AsymptoteSlip = i2023[2]
  i2022.m_AsymptoteValue = i2023[3]
  i2022.m_Stiffness = i2023[4]
  return i2022
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2025 = data
  i2024.m_LowerAngle = i2025[0]
  i2024.m_UpperAngle = i2025[1]
  return i2024
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2027 = data
  i2026.m_MotorSpeed = i2027[0]
  i2026.m_MaximumMotorTorque = i2027[1]
  return i2026
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2029 = data
  i2028.m_DampingRatio = i2029[0]
  i2028.m_Frequency = i2029[1]
  i2028.m_Angle = i2029[2]
  return i2028
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2031 = data
  i2030.m_LowerTranslation = i2031[0]
  i2030.m_UpperTranslation = i2031[1]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2033 = data
  i2032.name = i2033[0]
  i2032.halfPrecision = !!i2033[1]
  i2032.useSimplification = !!i2033[2]
  i2032.useUInt32IndexFormat = !!i2033[3]
  i2032.vertexCount = i2033[4]
  i2032.aabb = i2033[5]
  var i2035 = i2033[6]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( !!i2035[i + 0] );
  }
  i2032.streams = i2034
  i2032.vertices = i2033[7]
  var i2037 = i2033[8]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2037[i + 0]) );
  }
  i2032.subMeshes = i2036
  var i2039 = i2033[9]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 16) {
    i2038.push( new pc.Mat4().setData(i2039[i + 0], i2039[i + 1], i2039[i + 2], i2039[i + 3],  i2039[i + 4], i2039[i + 5], i2039[i + 6], i2039[i + 7],  i2039[i + 8], i2039[i + 9], i2039[i + 10], i2039[i + 11],  i2039[i + 12], i2039[i + 13], i2039[i + 14], i2039[i + 15]) );
  }
  i2032.bindposes = i2038
  var i2041 = i2033[10]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2041[i + 0]) );
  }
  i2032.blendShapes = i2040
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2047 = data
  i2046.triangles = i2047[0]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2053 = data
  i2052.name = i2053[0]
  var i2055 = i2053[1]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2055[i + 0]) );
  }
  i2052.frames = i2054
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2056 = root || new pc.UnityMaterial()
  var i2057 = data
  i2056.name = i2057[0]
  request.r(i2057[1], i2057[2], 0, i2056, 'shader')
  i2056.renderQueue = i2057[3]
  i2056.enableInstancing = !!i2057[4]
  var i2059 = i2057[5]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2059[i + 0]) );
  }
  i2056.floatParameters = i2058
  var i2061 = i2057[6]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2061[i + 0]) );
  }
  i2056.colorParameters = i2060
  var i2063 = i2057[7]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2063[i + 0]) );
  }
  i2056.vectorParameters = i2062
  var i2065 = i2057[8]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2065[i + 0]) );
  }
  i2056.textureParameters = i2064
  var i2067 = i2057[9]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2067[i + 0]) );
  }
  i2056.materialFlags = i2066
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2071 = data
  i2070.name = i2071[0]
  i2070.value = i2071[1]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2075 = data
  i2074.name = i2075[0]
  i2074.value = new pc.Color(i2075[1], i2075[2], i2075[3], i2075[4])
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2079 = data
  i2078.name = i2079[0]
  i2078.value = new pc.Vec4( i2079[1], i2079[2], i2079[3], i2079[4] )
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2083 = data
  i2082.name = i2083[0]
  request.r(i2083[1], i2083[2], 0, i2082, 'value')
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.enabled = !!i2087[1]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2089 = data
  i2088.name = i2089[0]
  i2088.width = i2089[1]
  i2088.height = i2089[2]
  i2088.mipmapCount = i2089[3]
  i2088.anisoLevel = i2089[4]
  i2088.filterMode = i2089[5]
  i2088.hdr = !!i2089[6]
  i2088.format = i2089[7]
  i2088.wrapMode = i2089[8]
  i2088.alphaIsTransparency = !!i2089[9]
  i2088.alphaSource = i2089[10]
  i2088.graphicsFormat = i2089[11]
  i2088.sRGBTexture = !!i2089[12]
  i2088.desiredColorSpace = i2089[13]
  i2088.wrapU = i2089[14]
  i2088.wrapV = i2089[15]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2091 = data
  i2090.position = new pc.Vec3( i2091[0], i2091[1], i2091[2] )
  i2090.scale = new pc.Vec3( i2091[3], i2091[4], i2091[5] )
  i2090.rotation = new pc.Quat(i2091[6], i2091[7], i2091[8], i2091[9])
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'sharedMesh')
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'additionalVertexStreams')
  i2094.enabled = !!i2095[2]
  request.r(i2095[3], i2095[4], 0, i2094, 'sharedMaterial')
  var i2097 = i2095[5]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 2, i2096, '')
  }
  i2094.sharedMaterials = i2096
  i2094.receiveShadows = !!i2095[6]
  i2094.shadowCastingMode = i2095[7]
  i2094.sortingLayerID = i2095[8]
  i2094.sortingOrder = i2095[9]
  i2094.lightmapIndex = i2095[10]
  i2094.lightmapSceneIndex = i2095[11]
  i2094.lightmapScaleOffset = new pc.Vec4( i2095[12], i2095[13], i2095[14], i2095[15] )
  i2094.lightProbeUsage = i2095[16]
  i2094.reflectionProbeUsage = i2095[17]
  return i2094
}

Deserializers["Block"] = function (request, data, root) {
  var i2100 = root || request.c( 'Block' )
  var i2101 = data
  i2100.color = i2101[0]
  i2100.isAlreadyDestroyed = !!i2101[1]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2103 = data
  i2102.center = new pc.Vec3( i2103[0], i2103[1], i2103[2] )
  i2102.size = new pc.Vec3( i2103[3], i2103[4], i2103[5] )
  i2102.enabled = !!i2103[6]
  i2102.isTrigger = !!i2103[7]
  request.r(i2103[8], i2103[9], 0, i2102, 'material')
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.tagId = i2105[1]
  i2104.enabled = !!i2105[2]
  i2104.isStatic = !!i2105[3]
  i2104.layer = i2105[4]
  return i2104
}

Deserializers["PigComponent"] = function (request, data, root) {
  var i2106 = root || request.c( 'PigComponent' )
  var i2107 = data
  i2106.color = i2107[0]
  i2106.Bullet = i2107[1]
  i2106.laneIndex = i2107[2]
  request.r(i2107[3], i2107[4], 0, i2106, 'rayCastPoint')
  request.r(i2107[5], i2107[6], 0, i2106, 'rb')
  i2106.isOnTop = !!i2107[7]
  i2106.isOnBelt = !!i2107[8]
  i2106.currentState = i2107[9]
  i2106.blockLayer = UnityEngine.LayerMask.FromIntegerValue( i2107[10] )
  request.r(i2107[11], i2107[12], 0, i2106, 'bulletText')
  request.r(i2107[13], i2107[14], 0, i2106, 'pigModel')
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2109 = data
  i2108.mass = i2109[0]
  i2108.drag = i2109[1]
  i2108.angularDrag = i2109[2]
  i2108.useGravity = !!i2109[3]
  i2108.isKinematic = !!i2109[4]
  i2108.constraints = i2109[5]
  i2108.maxAngularVelocity = i2109[6]
  i2108.collisionDetectionMode = i2109[7]
  i2108.interpolation = i2109[8]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2111 = data
  i2110.textureMode = i2111[0]
  i2110.alignment = i2111[1]
  i2110.widthCurve = new pc.AnimationCurve( { keys_flow: i2111[2] } )
  i2110.colorGradient = i2111[3] ? new pc.ColorGradient(i2111[3][0], i2111[3][1], i2111[3][2]) : null
  var i2113 = i2111[4]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 3) {
    i2112.push( new pc.Vec3( i2113[i + 0], i2113[i + 1], i2113[i + 2] ) );
  }
  i2110.positions = i2112
  i2110.positionCount = i2111[5]
  i2110.widthMultiplier = i2111[6]
  i2110.startWidth = i2111[7]
  i2110.endWidth = i2111[8]
  i2110.numCornerVertices = i2111[9]
  i2110.numCapVertices = i2111[10]
  i2110.useWorldSpace = !!i2111[11]
  i2110.loop = !!i2111[12]
  i2110.startColor = new pc.Color(i2111[13], i2111[14], i2111[15], i2111[16])
  i2110.endColor = new pc.Color(i2111[17], i2111[18], i2111[19], i2111[20])
  i2110.generateLightingData = !!i2111[21]
  i2110.enabled = !!i2111[22]
  request.r(i2111[23], i2111[24], 0, i2110, 'sharedMaterial')
  var i2115 = i2111[25]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 2) {
  request.r(i2115[i + 0], i2115[i + 1], 2, i2114, '')
  }
  i2110.sharedMaterials = i2114
  i2110.receiveShadows = !!i2111[26]
  i2110.shadowCastingMode = i2111[27]
  i2110.sortingLayerID = i2111[28]
  i2110.sortingOrder = i2111[29]
  i2110.lightmapIndex = i2111[30]
  i2110.lightmapSceneIndex = i2111[31]
  i2110.lightmapScaleOffset = new pc.Vec4( i2111[32], i2111[33], i2111[34], i2111[35] )
  i2110.lightProbeUsage = i2111[36]
  i2110.reflectionProbeUsage = i2111[37]
  return i2110
}

Deserializers["WavyLineRenderer"] = function (request, data, root) {
  var i2118 = root || request.c( 'WavyLineRenderer' )
  var i2119 = data
  i2118.waveSegments = i2119[0]
  i2118.waveAmplitudeMin = i2119[1]
  i2118.waveAmplitudeMax = i2119[2]
  i2118.amplitudeChangeSpeed = i2119[3]
  i2118.waveFrequency = i2119[4]
  i2118.waveSpeed = i2119[5]
  request.r(i2119[6], i2119[7], 0, i2118, 'lineMaterial')
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'animatorController')
  request.r(i2121[2], i2121[3], 0, i2120, 'avatar')
  i2120.updateMode = i2121[4]
  i2120.hasTransformHierarchy = !!i2121[5]
  i2120.applyRootMotion = !!i2121[6]
  var i2123 = i2121[7]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2120.humanBones = i2122
  i2120.enabled = !!i2121[8]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'sharedMesh')
  var i2129 = i2127[2]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 2) {
  request.r(i2129[i + 0], i2129[i + 1], 2, i2128, '')
  }
  i2126.bones = i2128
  i2126.updateWhenOffscreen = !!i2127[3]
  i2126.localBounds = i2127[4]
  request.r(i2127[5], i2127[6], 0, i2126, 'rootBone')
  var i2131 = i2127[7]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2131[i + 0]) );
  }
  i2126.blendShapesWeights = i2130
  i2126.enabled = !!i2127[8]
  request.r(i2127[9], i2127[10], 0, i2126, 'sharedMaterial')
  var i2133 = i2127[11]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2126.sharedMaterials = i2132
  i2126.receiveShadows = !!i2127[12]
  i2126.shadowCastingMode = i2127[13]
  i2126.sortingLayerID = i2127[14]
  i2126.sortingOrder = i2127[15]
  i2126.lightmapIndex = i2127[16]
  i2126.lightmapSceneIndex = i2127[17]
  i2126.lightmapScaleOffset = new pc.Vec4( i2127[18], i2127[19], i2127[20], i2127[21] )
  i2126.lightProbeUsage = i2127[22]
  i2126.reflectionProbeUsage = i2127[23]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2137 = data
  i2136.weight = i2137[0]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2139 = data
  i2138.pivot = new pc.Vec2( i2139[0], i2139[1] )
  i2138.anchorMin = new pc.Vec2( i2139[2], i2139[3] )
  i2138.anchorMax = new pc.Vec2( i2139[4], i2139[5] )
  i2138.sizeDelta = new pc.Vec2( i2139[6], i2139[7] )
  i2138.anchoredPosition3D = new pc.Vec3( i2139[8], i2139[9], i2139[10] )
  i2138.rotation = new pc.Quat(i2139[11], i2139[12], i2139[13], i2139[14])
  i2138.scale = new pc.Vec3( i2139[15], i2139[16], i2139[17] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2141 = data
  i2140.planeDistance = i2141[0]
  i2140.referencePixelsPerUnit = i2141[1]
  i2140.isFallbackOverlay = !!i2141[2]
  i2140.renderMode = i2141[3]
  i2140.renderOrder = i2141[4]
  i2140.sortingLayerName = i2141[5]
  i2140.sortingOrder = i2141[6]
  i2140.scaleFactor = i2141[7]
  request.r(i2141[8], i2141[9], 0, i2140, 'worldCamera')
  i2140.overrideSorting = !!i2141[10]
  i2140.pixelPerfect = !!i2141[11]
  i2140.targetDisplay = i2141[12]
  i2140.overridePixelPerfect = !!i2141[13]
  i2140.enabled = !!i2141[14]
  return i2140
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2143 = data
  i2142.m_UiScaleMode = i2143[0]
  i2142.m_ReferencePixelsPerUnit = i2143[1]
  i2142.m_ScaleFactor = i2143[2]
  i2142.m_ReferenceResolution = new pc.Vec2( i2143[3], i2143[4] )
  i2142.m_ScreenMatchMode = i2143[5]
  i2142.m_MatchWidthOrHeight = i2143[6]
  i2142.m_PhysicalUnit = i2143[7]
  i2142.m_FallbackScreenDPI = i2143[8]
  i2142.m_DefaultSpriteDPI = i2143[9]
  i2142.m_DynamicPixelsPerUnit = i2143[10]
  i2142.m_PresetInfoIsWorld = !!i2143[11]
  return i2142
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2145 = data
  i2144.m_IgnoreReversedGraphics = !!i2145[0]
  i2144.m_BlockingObjects = i2145[1]
  i2144.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2145[2] )
  return i2144
}

Deserializers["BillboardUI"] = function (request, data, root) {
  var i2146 = root || request.c( 'BillboardUI' )
  var i2147 = data
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2149 = data
  i2148.cullTransparentMesh = !!i2149[0]
  return i2148
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2150 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2151 = data
  i2150.m_hasFontAssetChanged = !!i2151[0]
  request.r(i2151[1], i2151[2], 0, i2150, 'm_baseMaterial')
  i2150.m_maskOffset = new pc.Vec4( i2151[3], i2151[4], i2151[5], i2151[6] )
  i2150.m_text = i2151[7]
  i2150.m_isRightToLeft = !!i2151[8]
  request.r(i2151[9], i2151[10], 0, i2150, 'm_fontAsset')
  request.r(i2151[11], i2151[12], 0, i2150, 'm_sharedMaterial')
  var i2153 = i2151[13]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 2) {
  request.r(i2153[i + 0], i2153[i + 1], 2, i2152, '')
  }
  i2150.m_fontSharedMaterials = i2152
  request.r(i2151[14], i2151[15], 0, i2150, 'm_fontMaterial')
  var i2155 = i2151[16]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 2) {
  request.r(i2155[i + 0], i2155[i + 1], 2, i2154, '')
  }
  i2150.m_fontMaterials = i2154
  i2150.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2151[17], i2151[18], i2151[19], i2151[20])
  i2150.m_fontColor = new pc.Color(i2151[21], i2151[22], i2151[23], i2151[24])
  i2150.m_enableVertexGradient = !!i2151[25]
  i2150.m_colorMode = i2151[26]
  i2150.m_fontColorGradient = request.d('TMPro.VertexGradient', i2151[27], i2150.m_fontColorGradient)
  request.r(i2151[28], i2151[29], 0, i2150, 'm_fontColorGradientPreset')
  request.r(i2151[30], i2151[31], 0, i2150, 'm_spriteAsset')
  i2150.m_tintAllSprites = !!i2151[32]
  request.r(i2151[33], i2151[34], 0, i2150, 'm_StyleSheet')
  i2150.m_TextStyleHashCode = i2151[35]
  i2150.m_overrideHtmlColors = !!i2151[36]
  i2150.m_faceColor = UnityEngine.Color32.ConstructColor(i2151[37], i2151[38], i2151[39], i2151[40])
  i2150.m_fontSize = i2151[41]
  i2150.m_fontSizeBase = i2151[42]
  i2150.m_fontWeight = i2151[43]
  i2150.m_enableAutoSizing = !!i2151[44]
  i2150.m_fontSizeMin = i2151[45]
  i2150.m_fontSizeMax = i2151[46]
  i2150.m_fontStyle = i2151[47]
  i2150.m_HorizontalAlignment = i2151[48]
  i2150.m_VerticalAlignment = i2151[49]
  i2150.m_textAlignment = i2151[50]
  i2150.m_characterSpacing = i2151[51]
  i2150.m_characterHorizontalScale = i2151[52]
  i2150.m_wordSpacing = i2151[53]
  i2150.m_lineSpacing = i2151[54]
  i2150.m_lineSpacingMax = i2151[55]
  i2150.m_paragraphSpacing = i2151[56]
  i2150.m_charWidthMaxAdj = i2151[57]
  i2150.m_TextWrappingMode = i2151[58]
  i2150.m_wordWrappingRatios = i2151[59]
  i2150.m_overflowMode = i2151[60]
  request.r(i2151[61], i2151[62], 0, i2150, 'm_linkedTextComponent')
  request.r(i2151[63], i2151[64], 0, i2150, 'parentLinkedComponent')
  i2150.m_enableKerning = !!i2151[65]
  var i2157 = i2151[66]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.add(i2157[i + 0]);
  }
  i2150.m_ActiveFontFeatures = i2156
  i2150.m_enableExtraPadding = !!i2151[67]
  i2150.checkPaddingRequired = !!i2151[68]
  i2150.m_isRichText = !!i2151[69]
  i2150.m_parseCtrlCharacters = !!i2151[70]
  i2150.m_isOrthographic = !!i2151[71]
  i2150.m_isCullingEnabled = !!i2151[72]
  i2150.m_horizontalMapping = i2151[73]
  i2150.m_verticalMapping = i2151[74]
  i2150.m_uvLineOffset = i2151[75]
  i2150.m_geometrySortingOrder = i2151[76]
  i2150.m_IsTextObjectScaleStatic = !!i2151[77]
  i2150.m_VertexBufferAutoSizeReduction = !!i2151[78]
  i2150.m_useMaxVisibleDescender = !!i2151[79]
  i2150.m_pageToDisplay = i2151[80]
  i2150.m_margin = new pc.Vec4( i2151[81], i2151[82], i2151[83], i2151[84] )
  i2150.m_isUsingLegacyAnimationComponent = !!i2151[85]
  i2150.m_isVolumetricText = !!i2151[86]
  request.r(i2151[87], i2151[88], 0, i2150, 'm_Material')
  i2150.m_EmojiFallbackSupport = !!i2151[89]
  i2150.m_Maskable = !!i2151[90]
  i2150.m_Color = new pc.Color(i2151[91], i2151[92], i2151[93], i2151[94])
  i2150.m_RaycastTarget = !!i2151[95]
  i2150.m_RaycastPadding = new pc.Vec4( i2151[96], i2151[97], i2151[98], i2151[99] )
  return i2150
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2158 = root || request.c( 'TMPro.VertexGradient' )
  var i2159 = data
  i2158.topLeft = new pc.Color(i2159[0], i2159[1], i2159[2], i2159[3])
  i2158.topRight = new pc.Color(i2159[4], i2159[5], i2159[6], i2159[7])
  i2158.bottomLeft = new pc.Color(i2159[8], i2159[9], i2159[10], i2159[11])
  i2158.bottomRight = new pc.Color(i2159[12], i2159[13], i2159[14], i2159[15])
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2165 = data
  i2164.weight = i2165[0]
  i2164.vertices = i2165[1]
  i2164.normals = i2165[2]
  i2164.tangents = i2165[3]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.atlasId = i2167[1]
  i2166.mipmapCount = i2167[2]
  i2166.hdr = !!i2167[3]
  i2166.size = i2167[4]
  i2166.anisoLevel = i2167[5]
  i2166.filterMode = i2167[6]
  var i2169 = i2167[7]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 4) {
    i2168.push( UnityEngine.Rect.MinMaxRect(i2169[i + 0], i2169[i + 1], i2169[i + 2], i2169[i + 3]) );
  }
  i2166.rects = i2168
  i2166.wrapU = i2167[8]
  i2166.wrapV = i2167[9]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2173 = data
  i2172.name = i2173[0]
  i2172.index = i2173[1]
  i2172.startup = !!i2173[2]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2175 = data
  i2174.aspect = i2175[0]
  i2174.orthographic = !!i2175[1]
  i2174.orthographicSize = i2175[2]
  i2174.backgroundColor = new pc.Color(i2175[3], i2175[4], i2175[5], i2175[6])
  i2174.nearClipPlane = i2175[7]
  i2174.farClipPlane = i2175[8]
  i2174.fieldOfView = i2175[9]
  i2174.depth = i2175[10]
  i2174.clearFlags = i2175[11]
  i2174.cullingMask = i2175[12]
  i2174.rect = i2175[13]
  request.r(i2175[14], i2175[15], 0, i2174, 'targetTexture')
  i2174.usePhysicalProperties = !!i2175[16]
  i2174.focalLength = i2175[17]
  i2174.sensorSize = new pc.Vec2( i2175[18], i2175[19] )
  i2174.lensShift = new pc.Vec2( i2175[20], i2175[21] )
  i2174.gateFit = i2175[22]
  i2174.commandBufferCount = i2175[23]
  i2174.cameraType = i2175[24]
  i2174.enabled = !!i2175[25]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2177 = data
  i2176.type = i2177[0]
  i2176.color = new pc.Color(i2177[1], i2177[2], i2177[3], i2177[4])
  i2176.cullingMask = i2177[5]
  i2176.intensity = i2177[6]
  i2176.range = i2177[7]
  i2176.spotAngle = i2177[8]
  i2176.shadows = i2177[9]
  i2176.shadowNormalBias = i2177[10]
  i2176.shadowBias = i2177[11]
  i2176.shadowStrength = i2177[12]
  i2176.shadowResolution = i2177[13]
  i2176.lightmapBakeType = i2177[14]
  i2176.renderMode = i2177[15]
  request.r(i2177[16], i2177[17], 0, i2176, 'cookie')
  i2176.cookieSize = i2177[18]
  i2176.shadowNearPlane = i2177[19]
  i2176.occlusionMaskChannel = i2177[20]
  i2176.enabled = !!i2177[21]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'sharedMesh')
  i2178.convex = !!i2179[2]
  i2178.enabled = !!i2179[3]
  i2178.isTrigger = !!i2179[4]
  request.r(i2179[5], i2179[6], 0, i2178, 'material')
  return i2178
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_FirstSelected')
  i2180.m_sendNavigationEvents = !!i2181[2]
  i2180.m_DragThreshold = i2181[3]
  return i2180
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i2183 = data
  i2182.m_MoveRepeatDelay = i2183[0]
  i2182.m_MoveRepeatRate = i2183[1]
  request.r(i2183[2], i2183[3], 0, i2182, 'm_XRTrackingOrigin')
  request.r(i2183[4], i2183[5], 0, i2182, 'm_ActionsAsset')
  request.r(i2183[6], i2183[7], 0, i2182, 'm_PointAction')
  request.r(i2183[8], i2183[9], 0, i2182, 'm_MoveAction')
  request.r(i2183[10], i2183[11], 0, i2182, 'm_SubmitAction')
  request.r(i2183[12], i2183[13], 0, i2182, 'm_CancelAction')
  request.r(i2183[14], i2183[15], 0, i2182, 'm_LeftClickAction')
  request.r(i2183[16], i2183[17], 0, i2182, 'm_MiddleClickAction')
  request.r(i2183[18], i2183[19], 0, i2182, 'm_RightClickAction')
  request.r(i2183[20], i2183[21], 0, i2182, 'm_ScrollWheelAction')
  request.r(i2183[22], i2183[23], 0, i2182, 'm_TrackedDevicePositionAction')
  request.r(i2183[24], i2183[25], 0, i2182, 'm_TrackedDeviceOrientationAction')
  i2182.m_DeselectOnBackgroundClick = !!i2183[26]
  i2182.m_PointerBehavior = i2183[27]
  i2182.m_CursorLockBehavior = i2183[28]
  i2182.m_ScrollDeltaPerTick = i2183[29]
  i2182.m_SendPointerHoverToParent = !!i2183[30]
  return i2182
}

Deserializers["FlashObject"] = function (request, data, root) {
  var i2184 = root || request.c( 'FlashObject' )
  var i2185 = data
  i2184.flashSpeed = i2185[0]
  i2184.minAlpha = i2185[1]
  i2184.maxAlpha = i2185[2]
  i2184.flashDuration = i2185[3]
  return i2184
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i2186 = root || request.c( 'Conveyor' )
  var i2187 = data
  return i2186
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2188 = root || request.c( 'GameManager' )
  var i2189 = data
  return i2188
}

Deserializers["SpawnerManager"] = function (request, data, root) {
  var i2190 = root || request.c( 'SpawnerManager' )
  var i2191 = data
  i2190.currentLevel = i2191[0]
  request.r(i2191[1], i2191[2], 0, i2190, 'blockPrefab')
  request.r(i2191[3], i2191[4], 0, i2190, 'blockSpawnPoint')
  request.r(i2191[5], i2191[6], 0, i2190, 'blockGroup')
  request.r(i2191[7], i2191[8], 0, i2190, 'pigSpawnPoint')
  var i2193 = i2191[9]
  var i2192 = new (System.Collections.Generic.List$1(Bridge.ns('LevelDataSO')))
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 1, i2192, '')
  }
  i2190.Levels = i2192
  i2190.blockSpacing = i2191[10]
  request.r(i2191[11], i2191[12], 0, i2190, 'pigSpawnPos')
  request.r(i2191[13], i2191[14], 0, i2190, 'pigPrefab')
  var i2195 = i2191[15]
  var i2194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 1, i2194, '')
  }
  i2190.allWaypoints = i2194
  var i2197 = i2191[16]
  var i2196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 1, i2196, '')
  }
  i2190.queuePos = i2196
  i2190._straightSlot = i2191[17]
  i2190._maxstraightSlot = i2191[18]
  i2190.speedOnStraight = i2191[19]
  i2190.speedOnCurve = i2191[20]
  i2190.jumpToQueueSpeed = i2191[21]
  return i2190
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.UI.Image' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'm_Sprite')
  i2202.m_Type = i2203[2]
  i2202.m_PreserveAspect = !!i2203[3]
  i2202.m_FillCenter = !!i2203[4]
  i2202.m_FillMethod = i2203[5]
  i2202.m_FillAmount = i2203[6]
  i2202.m_FillClockwise = !!i2203[7]
  i2202.m_FillOrigin = i2203[8]
  i2202.m_UseSpriteMesh = !!i2203[9]
  i2202.m_PixelsPerUnitMultiplier = i2203[10]
  request.r(i2203[11], i2203[12], 0, i2202, 'm_Material')
  i2202.m_Maskable = !!i2203[13]
  i2202.m_Color = new pc.Color(i2203[14], i2203[15], i2203[16], i2203[17])
  i2202.m_RaycastTarget = !!i2203[18]
  i2202.m_RaycastPadding = new pc.Vec4( i2203[19], i2203[20], i2203[21], i2203[22] )
  return i2202
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.UI.Button' )
  var i2205 = data
  i2204.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2205[0], i2204.m_OnClick)
  i2204.m_Navigation = request.d('UnityEngine.UI.Navigation', i2205[1], i2204.m_Navigation)
  i2204.m_Transition = i2205[2]
  i2204.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2205[3], i2204.m_Colors)
  i2204.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2205[4], i2204.m_SpriteState)
  i2204.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2205[5], i2204.m_AnimationTriggers)
  i2204.m_Interactable = !!i2205[6]
  request.r(i2205[7], i2205[8], 0, i2204, 'm_TargetGraphic')
  return i2204
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2207 = data
  i2206.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2207[0], i2206.m_PersistentCalls)
  return i2206
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2209 = data
  var i2211 = i2209[0]
  var i2210 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.add(request.d('UnityEngine.Events.PersistentCall', i2211[i + 0]));
  }
  i2208.m_Calls = i2210
  return i2208
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'm_Target')
  i2214.m_TargetAssemblyTypeName = i2215[2]
  i2214.m_MethodName = i2215[3]
  i2214.m_Mode = i2215[4]
  i2214.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2215[5], i2214.m_Arguments)
  i2214.m_CallState = i2215[6]
  return i2214
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'm_ObjectArgument')
  i2216.m_ObjectArgumentAssemblyTypeName = i2217[2]
  i2216.m_IntArgument = i2217[3]
  i2216.m_FloatArgument = i2217[4]
  i2216.m_StringArgument = i2217[5]
  i2216.m_BoolArgument = !!i2217[6]
  return i2216
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2219 = data
  i2218.m_Mode = i2219[0]
  i2218.m_WrapAround = !!i2219[1]
  request.r(i2219[2], i2219[3], 0, i2218, 'm_SelectOnUp')
  request.r(i2219[4], i2219[5], 0, i2218, 'm_SelectOnDown')
  request.r(i2219[6], i2219[7], 0, i2218, 'm_SelectOnLeft')
  request.r(i2219[8], i2219[9], 0, i2218, 'm_SelectOnRight')
  return i2218
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2221 = data
  i2220.m_NormalColor = new pc.Color(i2221[0], i2221[1], i2221[2], i2221[3])
  i2220.m_HighlightedColor = new pc.Color(i2221[4], i2221[5], i2221[6], i2221[7])
  i2220.m_PressedColor = new pc.Color(i2221[8], i2221[9], i2221[10], i2221[11])
  i2220.m_SelectedColor = new pc.Color(i2221[12], i2221[13], i2221[14], i2221[15])
  i2220.m_DisabledColor = new pc.Color(i2221[16], i2221[17], i2221[18], i2221[19])
  i2220.m_ColorMultiplier = i2221[20]
  i2220.m_FadeDuration = i2221[21]
  return i2220
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'm_HighlightedSprite')
  request.r(i2223[2], i2223[3], 0, i2222, 'm_PressedSprite')
  request.r(i2223[4], i2223[5], 0, i2222, 'm_SelectedSprite')
  request.r(i2223[6], i2223[7], 0, i2222, 'm_DisabledSprite')
  return i2222
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2225 = data
  i2224.m_NormalTrigger = i2225[0]
  i2224.m_HighlightedTrigger = i2225[1]
  i2224.m_PressedTrigger = i2225[2]
  i2224.m_SelectedTrigger = i2225[3]
  i2224.m_DisabledTrigger = i2225[4]
  return i2224
}

Deserializers["PlayerInput"] = function (request, data, root) {
  var i2226 = root || request.c( 'PlayerInput' )
  var i2227 = data
  i2226.pigLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2227[0] )
  request.r(i2227[1], i2227[2], 0, i2226, 'target')
  return i2226
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2228 = root || request.c( 'SoundManager' )
  var i2229 = data
  i2228.musicVolume = i2229[0]
  i2228.sfxVolume = i2229[1]
  request.r(i2229[2], i2229[3], 0, i2228, 'musicAus')
  request.r(i2229[4], i2229[5], 0, i2228, 'sfxAus')
  request.r(i2229[6], i2229[7], 0, i2228, 'validCat')
  request.r(i2229[8], i2229[9], 0, i2228, 'error')
  request.r(i2229[10], i2229[11], 0, i2228, 'yarn')
  request.r(i2229[12], i2229[13], 0, i2228, 'win')
  request.r(i2229[14], i2229[15], 0, i2228, 'lose')
  request.r(i2229[16], i2229[17], 0, i2228, 'invalidCat')
  var i2231 = i2229[18]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 2, i2230, '')
  }
  i2228.backgroundMusics = i2230
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'clip')
  request.r(i2235[2], i2235[3], 0, i2234, 'outputAudioMixerGroup')
  i2234.playOnAwake = !!i2235[4]
  i2234.loop = !!i2235[5]
  i2234.time = i2235[6]
  i2234.volume = i2235[7]
  i2234.pitch = i2235[8]
  i2234.enabled = !!i2235[9]
  return i2234
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2236 = root || request.c( 'UIManager' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'straightSlotText')
  request.r(i2237[2], i2237[3], 0, i2236, 'scoreText')
  request.r(i2237[4], i2237[5], 0, i2236, 'gameOverPanel')
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2239 = data
  i2238.ambientIntensity = i2239[0]
  i2238.reflectionIntensity = i2239[1]
  i2238.ambientMode = i2239[2]
  i2238.ambientLight = new pc.Color(i2239[3], i2239[4], i2239[5], i2239[6])
  i2238.ambientSkyColor = new pc.Color(i2239[7], i2239[8], i2239[9], i2239[10])
  i2238.ambientGroundColor = new pc.Color(i2239[11], i2239[12], i2239[13], i2239[14])
  i2238.ambientEquatorColor = new pc.Color(i2239[15], i2239[16], i2239[17], i2239[18])
  i2238.fogColor = new pc.Color(i2239[19], i2239[20], i2239[21], i2239[22])
  i2238.fogEndDistance = i2239[23]
  i2238.fogStartDistance = i2239[24]
  i2238.fogDensity = i2239[25]
  i2238.fog = !!i2239[26]
  request.r(i2239[27], i2239[28], 0, i2238, 'skybox')
  i2238.fogMode = i2239[29]
  var i2241 = i2239[30]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2241[i + 0]) );
  }
  i2238.lightmaps = i2240
  i2238.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2239[31], i2238.lightProbes)
  i2238.lightmapsMode = i2239[32]
  i2238.mixedBakeMode = i2239[33]
  i2238.environmentLightingMode = i2239[34]
  i2238.ambientProbe = new pc.SphericalHarmonicsL2(i2239[35])
  i2238.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2239[36])
  i2238.useReferenceAmbientProbe = !!i2239[37]
  request.r(i2239[38], i2239[39], 0, i2238, 'customReflection')
  request.r(i2239[40], i2239[41], 0, i2238, 'defaultReflection')
  i2238.defaultReflectionMode = i2239[42]
  i2238.defaultReflectionResolution = i2239[43]
  i2238.sunLightObjectId = i2239[44]
  i2238.pixelLightCount = i2239[45]
  i2238.defaultReflectionHDR = !!i2239[46]
  i2238.hasLightDataAsset = !!i2239[47]
  i2238.hasManualGenerate = !!i2239[48]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'lightmapColor')
  request.r(i2245[2], i2245[3], 0, i2244, 'lightmapDirection')
  request.r(i2245[4], i2245[5], 0, i2244, 'shadowMask')
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2246 = root || new UnityEngine.LightProbes()
  var i2247 = data
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2253 = data
  var i2255 = i2253[0]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2255[i + 0]));
  }
  i2252.ShaderCompilationErrors = i2254
  i2252.name = i2253[1]
  i2252.guid = i2253[2]
  var i2257 = i2253[3]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( i2257[i + 0] );
  }
  i2252.shaderDefinedKeywords = i2256
  var i2259 = i2253[4]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2259[i + 0]) );
  }
  i2252.passes = i2258
  var i2261 = i2253[5]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2261[i + 0]) );
  }
  i2252.usePasses = i2260
  var i2263 = i2253[6]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2263[i + 0]) );
  }
  i2252.defaultParameterValues = i2262
  request.r(i2253[7], i2253[8], 0, i2252, 'unityFallbackShader')
  i2252.readDepth = !!i2253[9]
  i2252.hasDepthOnlyPass = !!i2253[10]
  i2252.isCreatedByShaderGraph = !!i2253[11]
  i2252.disableBatching = !!i2253[12]
  i2252.compiled = !!i2253[13]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2267 = data
  i2266.shaderName = i2267[0]
  i2266.errorMessage = i2267[1]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2272 = root || new pc.UnityShaderPass()
  var i2273 = data
  i2272.id = i2273[0]
  i2272.subShaderIndex = i2273[1]
  i2272.name = i2273[2]
  i2272.passType = i2273[3]
  i2272.grabPassTextureName = i2273[4]
  i2272.usePass = !!i2273[5]
  i2272.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[6], i2272.zTest)
  i2272.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[7], i2272.zWrite)
  i2272.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[8], i2272.culling)
  i2272.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2273[9], i2272.blending)
  i2272.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2273[10], i2272.alphaBlending)
  i2272.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[11], i2272.colorWriteMask)
  i2272.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[12], i2272.offsetUnits)
  i2272.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[13], i2272.offsetFactor)
  i2272.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[14], i2272.stencilRef)
  i2272.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[15], i2272.stencilReadMask)
  i2272.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2273[16], i2272.stencilWriteMask)
  i2272.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2273[17], i2272.stencilOp)
  i2272.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2273[18], i2272.stencilOpFront)
  i2272.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2273[19], i2272.stencilOpBack)
  var i2275 = i2273[20]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2275[i + 0]) );
  }
  i2272.tags = i2274
  var i2277 = i2273[21]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( i2277[i + 0] );
  }
  i2272.passDefinedKeywords = i2276
  var i2279 = i2273[22]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2279[i + 0]) );
  }
  i2272.passDefinedKeywordGroups = i2278
  var i2281 = i2273[23]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2281[i + 0]) );
  }
  i2272.variants = i2280
  var i2283 = i2273[24]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2283[i + 0]) );
  }
  i2272.excludedVariants = i2282
  i2272.hasDepthReader = !!i2273[25]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2285 = data
  i2284.val = i2285[0]
  i2284.name = i2285[1]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2287 = data
  i2286.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2287[0], i2286.src)
  i2286.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2287[1], i2286.dst)
  i2286.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2287[2], i2286.op)
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2289 = data
  i2288.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2289[0], i2288.pass)
  i2288.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2289[1], i2288.fail)
  i2288.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2289[2], i2288.zFail)
  i2288.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2289[3], i2288.comp)
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2293 = data
  i2292.name = i2293[0]
  i2292.value = i2293[1]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2297 = data
  var i2299 = i2297[0]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( i2299[i + 0] );
  }
  i2296.keywords = i2298
  i2296.hasDiscard = !!i2297[1]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2303 = data
  i2302.passId = i2303[0]
  i2302.subShaderIndex = i2303[1]
  var i2305 = i2303[2]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( i2305[i + 0] );
  }
  i2302.keywords = i2304
  i2302.vertexProgram = i2303[3]
  i2302.fragmentProgram = i2303[4]
  i2302.exportedForWebGl2 = !!i2303[5]
  i2302.readDepth = !!i2303[6]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'shader')
  i2308.pass = i2309[2]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2313 = data
  i2312.name = i2313[0]
  i2312.type = i2313[1]
  i2312.value = new pc.Vec4( i2313[2], i2313[3], i2313[4], i2313[5] )
  i2312.textureValue = i2313[6]
  i2312.shaderPropertyFlag = i2313[7]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2315 = data
  i2314.name = i2315[0]
  request.r(i2315[1], i2315[2], 0, i2314, 'texture')
  i2314.aabb = i2315[3]
  i2314.vertices = i2315[4]
  i2314.triangles = i2315[5]
  i2314.textureRect = UnityEngine.Rect.MinMaxRect(i2315[6], i2315[7], i2315[8], i2315[9])
  i2314.packedRect = UnityEngine.Rect.MinMaxRect(i2315[10], i2315[11], i2315[12], i2315[13])
  i2314.border = new pc.Vec4( i2315[14], i2315[15], i2315[16], i2315[17] )
  i2314.transparency = i2315[18]
  i2314.bounds = i2315[19]
  i2314.pixelsPerUnit = i2315[20]
  i2314.textureWidth = i2315[21]
  i2314.textureHeight = i2315[22]
  i2314.nativeSize = new pc.Vec2( i2315[23], i2315[24] )
  i2314.pivot = new pc.Vec2( i2315[25], i2315[26] )
  i2314.textureRectOffset = new pc.Vec2( i2315[27], i2315[28] )
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2317 = data
  i2316.name = i2317[0]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2319 = data
  i2318.name = i2319[0]
  i2318.wrapMode = i2319[1]
  i2318.isLooping = !!i2319[2]
  i2318.length = i2319[3]
  var i2321 = i2319[4]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2321[i + 0]) );
  }
  i2318.curves = i2320
  var i2323 = i2319[5]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2323[i + 0]) );
  }
  i2318.events = i2322
  i2318.halfPrecision = !!i2319[6]
  i2318._frameRate = i2319[7]
  i2318.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2319[8], i2318.localBounds)
  i2318.hasMuscleCurves = !!i2319[9]
  var i2325 = i2319[10]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( i2325[i + 0] );
  }
  i2318.clipMuscleConstant = i2324
  i2318.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2319[11], i2318.clipBindingConstant)
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2329 = data
  i2328.path = i2329[0]
  i2328.hash = i2329[1]
  i2328.componentType = i2329[2]
  i2328.property = i2329[3]
  i2328.keys = i2329[4]
  var i2331 = i2329[5]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2331[i + 0]) );
  }
  i2328.objectReferenceKeys = i2330
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2335 = data
  i2334.time = i2335[0]
  request.r(i2335[1], i2335[2], 0, i2334, 'value')
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2339 = data
  i2338.functionName = i2339[0]
  i2338.floatParameter = i2339[1]
  i2338.intParameter = i2339[2]
  i2338.stringParameter = i2339[3]
  request.r(i2339[4], i2339[5], 0, i2338, 'objectReferenceParameter')
  i2338.time = i2339[6]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2341 = data
  i2340.center = new pc.Vec3( i2341[0], i2341[1], i2341[2] )
  i2340.extends = new pc.Vec3( i2341[3], i2341[4], i2341[5] )
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2345 = data
  var i2347 = i2345[0]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( i2347[i + 0] );
  }
  i2344.genericBindings = i2346
  var i2349 = i2345[1]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( i2349[i + 0] );
  }
  i2344.pptrCurveMapping = i2348
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2351 = data
  i2350.name = i2351[0]
  i2350.ascent = i2351[1]
  i2350.originalLineHeight = i2351[2]
  i2350.fontSize = i2351[3]
  var i2353 = i2351[4]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2353[i + 0]) );
  }
  i2350.characterInfo = i2352
  request.r(i2351[5], i2351[6], 0, i2350, 'texture')
  i2350.originalFontSize = i2351[7]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2357 = data
  i2356.index = i2357[0]
  i2356.advance = i2357[1]
  i2356.bearing = i2357[2]
  i2356.glyphWidth = i2357[3]
  i2356.glyphHeight = i2357[4]
  i2356.minX = i2357[5]
  i2356.maxX = i2357[6]
  i2356.minY = i2357[7]
  i2356.maxY = i2357[8]
  i2356.uvBottomLeftX = i2357[9]
  i2356.uvBottomLeftY = i2357[10]
  i2356.uvBottomRightX = i2357[11]
  i2356.uvBottomRightY = i2357[12]
  i2356.uvTopLeftX = i2357[13]
  i2356.uvTopLeftY = i2357[14]
  i2356.uvTopRightX = i2357[15]
  i2356.uvTopRightY = i2357[16]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2359 = data
  i2358.name = i2359[0]
  var i2361 = i2359[1]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2361[i + 0]) );
  }
  i2358.layers = i2360
  var i2363 = i2359[2]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2363[i + 0]) );
  }
  i2358.parameters = i2362
  i2358.animationClips = i2359[3]
  i2358.avatarUnsupported = i2359[4]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.defaultWeight = i2367[1]
  i2366.blendingMode = i2367[2]
  i2366.avatarMask = i2367[3]
  i2366.syncedLayerIndex = i2367[4]
  i2366.syncedLayerAffectsTiming = !!i2367[5]
  i2366.syncedLayers = i2367[6]
  i2366.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2367[7], i2366.stateMachine)
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2369 = data
  i2368.id = i2369[0]
  i2368.name = i2369[1]
  i2368.path = i2369[2]
  var i2371 = i2369[3]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2371[i + 0]) );
  }
  i2368.states = i2370
  var i2373 = i2369[4]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2373[i + 0]) );
  }
  i2368.machines = i2372
  var i2375 = i2369[5]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2375[i + 0]) );
  }
  i2368.entryStateTransitions = i2374
  var i2377 = i2369[6]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2377[i + 0]) );
  }
  i2368.exitStateTransitions = i2376
  var i2379 = i2369[7]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2379[i + 0]) );
  }
  i2368.anyStateTransitions = i2378
  i2368.defaultStateId = i2369[8]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2383 = data
  i2382.id = i2383[0]
  i2382.name = i2383[1]
  i2382.cycleOffset = i2383[2]
  i2382.cycleOffsetParameter = i2383[3]
  i2382.cycleOffsetParameterActive = !!i2383[4]
  i2382.mirror = !!i2383[5]
  i2382.mirrorParameter = i2383[6]
  i2382.mirrorParameterActive = !!i2383[7]
  i2382.motionId = i2383[8]
  i2382.nameHash = i2383[9]
  i2382.fullPathHash = i2383[10]
  i2382.speed = i2383[11]
  i2382.speedParameter = i2383[12]
  i2382.speedParameterActive = !!i2383[13]
  i2382.tag = i2383[14]
  i2382.tagHash = i2383[15]
  i2382.writeDefaultValues = !!i2383[16]
  var i2385 = i2383[17]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 2, i2384, '')
  }
  i2382.behaviours = i2384
  var i2387 = i2383[18]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2387[i + 0]) );
  }
  i2382.transitions = i2386
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2393 = data
  i2392.fullPath = i2393[0]
  i2392.canTransitionToSelf = !!i2393[1]
  i2392.duration = i2393[2]
  i2392.exitTime = i2393[3]
  i2392.hasExitTime = !!i2393[4]
  i2392.hasFixedDuration = !!i2393[5]
  i2392.interruptionSource = i2393[6]
  i2392.offset = i2393[7]
  i2392.orderedInterruption = !!i2393[8]
  i2392.destinationStateId = i2393[9]
  i2392.isExit = !!i2393[10]
  i2392.mute = !!i2393[11]
  i2392.solo = !!i2393[12]
  var i2395 = i2393[13]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2395[i + 0]) );
  }
  i2392.conditions = i2394
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2401 = data
  i2400.destinationStateId = i2401[0]
  i2400.isExit = !!i2401[1]
  i2400.mute = !!i2401[2]
  i2400.solo = !!i2401[3]
  var i2403 = i2401[4]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2403[i + 0]) );
  }
  i2400.conditions = i2402
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2407 = data
  i2406.defaultBool = !!i2407[0]
  i2406.defaultFloat = i2407[1]
  i2406.defaultInt = i2407[2]
  i2406.name = i2407[3]
  i2406.nameHash = i2407[4]
  i2406.type = i2407[5]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2411 = data
  i2410.mode = i2411[0]
  i2410.parameter = i2411[1]
  i2410.threshold = i2411[2]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2413 = data
  i2412.name = i2413[0]
  i2412.bytes64 = i2413[1]
  i2412.data = i2413[2]
  return i2412
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i2415 = data
  var i2417 = i2415[0]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('UnityEngine.InputSystem.InputActionMap', i2417[i + 0]) );
  }
  i2414.m_ActionMaps = i2416
  var i2419 = i2415[1]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('UnityEngine.InputSystem.InputControlScheme', i2419[i + 0]) );
  }
  i2414.m_ControlSchemes = i2418
  i2414.m_IsProjectWide = !!i2415[2]
  return i2414
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i2423 = data
  i2422.m_Name = i2423[0]
  i2422.m_Id = i2423[1]
  request.r(i2423[2], i2423[3], 0, i2422, 'm_Asset')
  var i2425 = i2423[4]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('UnityEngine.InputSystem.InputAction', i2425[i + 0]) );
  }
  i2422.m_Actions = i2424
  var i2427 = i2423[5]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('UnityEngine.InputSystem.InputBinding', i2427[i + 0]) );
  }
  i2422.m_Bindings = i2426
  return i2422
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i2431 = data
  i2430.m_Name = i2431[0]
  i2430.m_Type = i2431[1]
  i2430.m_ExpectedControlType = i2431[2]
  i2430.m_Id = i2431[3]
  i2430.m_Processors = i2431[4]
  i2430.m_Interactions = i2431[5]
  var i2433 = i2431[6]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('UnityEngine.InputSystem.InputBinding', i2433[i + 0]) );
  }
  i2430.m_SingletonActionBindings = i2432
  i2430.m_Flags = i2431[7]
  return i2430
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i2437 = data
  i2436.m_Name = i2437[0]
  i2436.m_Id = i2437[1]
  i2436.m_Path = i2437[2]
  i2436.m_Interactions = i2437[3]
  i2436.m_Processors = i2437[4]
  i2436.m_Groups = i2437[5]
  i2436.m_Action = i2437[6]
  i2436.m_Flags = i2437[7]
  return i2436
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i2441 = data
  i2440.m_Name = i2441[0]
  i2440.m_BindingGroup = i2441[1]
  var i2443 = i2441[2]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i2443[i + 0]) );
  }
  i2440.m_DeviceRequirements = i2442
  return i2440
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i2447 = data
  i2446.m_ControlPath = i2447[0]
  i2446.m_Flags = i2447[1]
  return i2446
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'm_Asset')
  i2448.m_ActionId = i2449[2]
  return i2448
}

Deserializers["LevelDataSO"] = function (request, data, root) {
  var i2450 = root || request.c( 'LevelDataSO' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'sourceJson')
  i2450.levelIndex = i2451[2]
  i2450.width = i2451[3]
  i2450.height = i2451[4]
  var i2453 = i2451[5]
  var i2452 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.add(i2453[i + 0]);
  }
  i2450.gridData = i2452
  var i2455 = i2451[6]
  var i2454 = new (System.Collections.Generic.List$1(Bridge.ns('LaneConfig')))
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.add(request.d('LaneConfig', i2455[i + 0]));
  }
  i2450.lanes = i2454
  return i2450
}

Deserializers["LaneConfig"] = function (request, data, root) {
  var i2460 = root || request.c( 'LaneConfig' )
  var i2461 = data
  var i2463 = i2461[0]
  var i2462 = new (System.Collections.Generic.List$1(Bridge.ns('PigConfig')))
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.add(request.d('PigConfig', i2463[i + 0]));
  }
  i2460.pigs = i2462
  return i2460
}

Deserializers["PigConfig"] = function (request, data, root) {
  var i2466 = root || request.c( 'PigConfig' )
  var i2467 = data
  i2466.colorName = i2467[0]
  i2466.bullets = i2467[1]
  return i2466
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2468 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2469 = data
  i2468.normalStyle = i2469[0]
  i2468.normalSpacingOffset = i2469[1]
  i2468.boldStyle = i2469[2]
  i2468.boldSpacing = i2469[3]
  i2468.italicStyle = i2469[4]
  i2468.tabSize = i2469[5]
  request.r(i2469[6], i2469[7], 0, i2468, 'atlas')
  i2468.m_SourceFontFileGUID = i2469[8]
  i2468.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2469[9], i2468.m_CreationSettings)
  request.r(i2469[10], i2469[11], 0, i2468, 'm_SourceFontFile')
  i2468.m_SourceFontFilePath = i2469[12]
  i2468.m_AtlasPopulationMode = i2469[13]
  i2468.InternalDynamicOS = !!i2469[14]
  var i2471 = i2469[15]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.add(request.d('UnityEngine.TextCore.Glyph', i2471[i + 0]));
  }
  i2468.m_GlyphTable = i2470
  var i2473 = i2469[16]
  var i2472 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.add(request.d('TMPro.TMP_Character', i2473[i + 0]));
  }
  i2468.m_CharacterTable = i2472
  var i2475 = i2469[17]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 2) {
  request.r(i2475[i + 0], i2475[i + 1], 2, i2474, '')
  }
  i2468.m_AtlasTextures = i2474
  i2468.m_AtlasTextureIndex = i2469[18]
  i2468.m_IsMultiAtlasTexturesEnabled = !!i2469[19]
  i2468.m_GetFontFeatures = !!i2469[20]
  i2468.m_ClearDynamicDataOnBuild = !!i2469[21]
  i2468.m_AtlasWidth = i2469[22]
  i2468.m_AtlasHeight = i2469[23]
  i2468.m_AtlasPadding = i2469[24]
  i2468.m_AtlasRenderMode = i2469[25]
  var i2477 = i2469[26]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.add(request.d('UnityEngine.TextCore.GlyphRect', i2477[i + 0]));
  }
  i2468.m_UsedGlyphRects = i2476
  var i2479 = i2469[27]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.add(request.d('UnityEngine.TextCore.GlyphRect', i2479[i + 0]));
  }
  i2468.m_FreeGlyphRects = i2478
  i2468.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2469[28], i2468.m_FontFeatureTable)
  i2468.m_ShouldReimportFontFeatures = !!i2469[29]
  var i2481 = i2469[30]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 1, i2480, '')
  }
  i2468.m_FallbackFontAssetTable = i2480
  var i2483 = i2469[31]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('TMPro.TMP_FontWeightPair', i2483[i + 0]) );
  }
  i2468.m_FontWeightTable = i2482
  var i2485 = i2469[32]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('TMPro.TMP_FontWeightPair', i2485[i + 0]) );
  }
  i2468.fontWeights = i2484
  i2468.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2469[33], i2468.m_fontInfo)
  var i2487 = i2469[34]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.add(request.d('TMPro.TMP_Glyph', i2487[i + 0]));
  }
  i2468.m_glyphInfoList = i2486
  i2468.m_KerningTable = request.d('TMPro.KerningTable', i2469[35], i2468.m_KerningTable)
  var i2489 = i2469[36]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 1, i2488, '')
  }
  i2468.fallbackFontAssets = i2488
  i2468.m_Version = i2469[37]
  i2468.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2469[38], i2468.m_FaceInfo)
  request.r(i2469[39], i2469[40], 0, i2468, 'm_Material')
  return i2468
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2491 = data
  i2490.sourceFontFileName = i2491[0]
  i2490.sourceFontFileGUID = i2491[1]
  i2490.faceIndex = i2491[2]
  i2490.pointSizeSamplingMode = i2491[3]
  i2490.pointSize = i2491[4]
  i2490.padding = i2491[5]
  i2490.paddingMode = i2491[6]
  i2490.packingMode = i2491[7]
  i2490.atlasWidth = i2491[8]
  i2490.atlasHeight = i2491[9]
  i2490.characterSetSelectionMode = i2491[10]
  i2490.characterSequence = i2491[11]
  i2490.referencedFontAssetGUID = i2491[12]
  i2490.referencedTextAssetGUID = i2491[13]
  i2490.fontStyle = i2491[14]
  i2490.fontStyleModifier = i2491[15]
  i2490.renderMode = i2491[16]
  i2490.includeFontFeatures = !!i2491[17]
  return i2490
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2495 = data
  i2494.m_Index = i2495[0]
  i2494.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2495[1], i2494.m_Metrics)
  i2494.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2495[2], i2494.m_GlyphRect)
  i2494.m_Scale = i2495[3]
  i2494.m_AtlasIndex = i2495[4]
  i2494.m_ClassDefinitionType = i2495[5]
  return i2494
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2497 = data
  i2496.m_Width = i2497[0]
  i2496.m_Height = i2497[1]
  i2496.m_HorizontalBearingX = i2497[2]
  i2496.m_HorizontalBearingY = i2497[3]
  i2496.m_HorizontalAdvance = i2497[4]
  return i2496
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2499 = data
  i2498.m_X = i2499[0]
  i2498.m_Y = i2499[1]
  i2498.m_Width = i2499[2]
  i2498.m_Height = i2499[3]
  return i2498
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2502 = root || request.c( 'TMPro.TMP_Character' )
  var i2503 = data
  i2502.m_ElementType = i2503[0]
  i2502.m_Unicode = i2503[1]
  i2502.m_GlyphIndex = i2503[2]
  i2502.m_Scale = i2503[3]
  return i2502
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2508 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2509 = data
  var i2511 = i2509[0]
  var i2510 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.add(request.d('TMPro.MultipleSubstitutionRecord', i2511[i + 0]));
  }
  i2508.m_MultipleSubstitutionRecords = i2510
  var i2513 = i2509[1]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('TMPro.LigatureSubstitutionRecord', i2513[i + 0]));
  }
  i2508.m_LigatureSubstitutionRecords = i2512
  var i2515 = i2509[2]
  var i2514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2515[i + 0]));
  }
  i2508.m_GlyphPairAdjustmentRecords = i2514
  var i2517 = i2509[3]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2517[i + 0]));
  }
  i2508.m_MarkToBaseAdjustmentRecords = i2516
  var i2519 = i2509[4]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2519[i + 0]));
  }
  i2508.m_MarkToMarkAdjustmentRecords = i2518
  return i2508
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2522 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2523 = data
  i2522.m_TargetGlyphID = i2523[0]
  i2522.m_SubstituteGlyphIDs = i2523[1]
  return i2522
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2526 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2527 = data
  i2526.m_ComponentGlyphIDs = i2527[0]
  i2526.m_LigatureGlyphID = i2527[1]
  return i2526
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2530 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2531 = data
  i2530.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2531[0], i2530.m_FirstAdjustmentRecord)
  i2530.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2531[1], i2530.m_SecondAdjustmentRecord)
  i2530.m_FeatureLookupFlags = i2531[2]
  return i2530
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2532 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2533 = data
  i2532.m_GlyphIndex = i2533[0]
  i2532.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2533[1], i2532.m_GlyphValueRecord)
  return i2532
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2535 = data
  i2534.m_XPlacement = i2535[0]
  i2534.m_YPlacement = i2535[1]
  i2534.m_XAdvance = i2535[2]
  i2534.m_YAdvance = i2535[3]
  return i2534
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2539 = data
  i2538.m_BaseGlyphID = i2539[0]
  i2538.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2539[1], i2538.m_BaseGlyphAnchorPoint)
  i2538.m_MarkGlyphID = i2539[2]
  i2538.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2539[3], i2538.m_MarkPositionAdjustment)
  return i2538
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2542 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2543 = data
  i2542.m_BaseMarkGlyphID = i2543[0]
  i2542.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2543[1], i2542.m_BaseMarkGlyphAnchorPoint)
  i2542.m_CombiningMarkGlyphID = i2543[2]
  i2542.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2543[3], i2542.m_CombiningMarkPositionAdjustment)
  return i2542
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2548 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'regularTypeface')
  request.r(i2549[2], i2549[3], 0, i2548, 'italicTypeface')
  return i2548
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2551 = data
  i2550.Name = i2551[0]
  i2550.PointSize = i2551[1]
  i2550.Scale = i2551[2]
  i2550.CharacterCount = i2551[3]
  i2550.LineHeight = i2551[4]
  i2550.Baseline = i2551[5]
  i2550.Ascender = i2551[6]
  i2550.CapHeight = i2551[7]
  i2550.Descender = i2551[8]
  i2550.CenterLine = i2551[9]
  i2550.SuperscriptOffset = i2551[10]
  i2550.SubscriptOffset = i2551[11]
  i2550.SubSize = i2551[12]
  i2550.Underline = i2551[13]
  i2550.UnderlineThickness = i2551[14]
  i2550.strikethrough = i2551[15]
  i2550.strikethroughThickness = i2551[16]
  i2550.TabWidth = i2551[17]
  i2550.Padding = i2551[18]
  i2550.AtlasWidth = i2551[19]
  i2550.AtlasHeight = i2551[20]
  return i2550
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2554 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2555 = data
  i2554.id = i2555[0]
  i2554.x = i2555[1]
  i2554.y = i2555[2]
  i2554.width = i2555[3]
  i2554.height = i2555[4]
  i2554.xOffset = i2555[5]
  i2554.yOffset = i2555[6]
  i2554.xAdvance = i2555[7]
  i2554.scale = i2555[8]
  return i2554
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.KerningTable' )
  var i2557 = data
  var i2559 = i2557[0]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.add(request.d('TMPro.KerningPair', i2559[i + 0]));
  }
  i2556.kerningPairs = i2558
  return i2556
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2562 = root || request.c( 'TMPro.KerningPair' )
  var i2563 = data
  i2562.xOffset = i2563[0]
  i2562.m_FirstGlyph = i2563[1]
  i2562.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2563[2], i2562.m_FirstGlyphAdjustments)
  i2562.m_SecondGlyph = i2563[3]
  i2562.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2563[4], i2562.m_SecondGlyphAdjustments)
  i2562.m_IgnoreSpacingAdjustments = !!i2563[5]
  return i2562
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2565 = data
  i2564.m_FaceIndex = i2565[0]
  i2564.m_FamilyName = i2565[1]
  i2564.m_StyleName = i2565[2]
  i2564.m_PointSize = i2565[3]
  i2564.m_Scale = i2565[4]
  i2564.m_UnitsPerEM = i2565[5]
  i2564.m_LineHeight = i2565[6]
  i2564.m_AscentLine = i2565[7]
  i2564.m_CapLine = i2565[8]
  i2564.m_MeanLine = i2565[9]
  i2564.m_Baseline = i2565[10]
  i2564.m_DescentLine = i2565[11]
  i2564.m_SuperscriptOffset = i2565[12]
  i2564.m_SuperscriptSize = i2565[13]
  i2564.m_SubscriptOffset = i2565[14]
  i2564.m_SubscriptSize = i2565[15]
  i2564.m_UnderlineOffset = i2565[16]
  i2564.m_UnderlineThickness = i2565[17]
  i2564.m_StrikethroughOffset = i2565[18]
  i2564.m_StrikethroughThickness = i2565[19]
  i2564.m_TabWidth = i2565[20]
  return i2564
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2566 = root || request.c( 'TMPro.TMP_Settings' )
  var i2567 = data
  i2566.assetVersion = i2567[0]
  i2566.m_TextWrappingMode = i2567[1]
  i2566.m_enableKerning = !!i2567[2]
  var i2569 = i2567[3]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.add(i2569[i + 0]);
  }
  i2566.m_ActiveFontFeatures = i2568
  i2566.m_enableExtraPadding = !!i2567[4]
  i2566.m_enableTintAllSprites = !!i2567[5]
  i2566.m_enableParseEscapeCharacters = !!i2567[6]
  i2566.m_EnableRaycastTarget = !!i2567[7]
  i2566.m_GetFontFeaturesAtRuntime = !!i2567[8]
  i2566.m_missingGlyphCharacter = i2567[9]
  i2566.m_ClearDynamicDataOnBuild = !!i2567[10]
  i2566.m_warningsDisabled = !!i2567[11]
  request.r(i2567[12], i2567[13], 0, i2566, 'm_defaultFontAsset')
  i2566.m_defaultFontAssetPath = i2567[14]
  i2566.m_defaultFontSize = i2567[15]
  i2566.m_defaultAutoSizeMinRatio = i2567[16]
  i2566.m_defaultAutoSizeMaxRatio = i2567[17]
  i2566.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2567[18], i2567[19] )
  i2566.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2567[20], i2567[21] )
  i2566.m_autoSizeTextContainer = !!i2567[22]
  i2566.m_IsTextObjectScaleStatic = !!i2567[23]
  var i2571 = i2567[24]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2571.length; i += 2) {
  request.r(i2571[i + 0], i2571[i + 1], 1, i2570, '')
  }
  i2566.m_fallbackFontAssets = i2570
  i2566.m_matchMaterialPreset = !!i2567[25]
  i2566.m_HideSubTextObjects = !!i2567[26]
  request.r(i2567[27], i2567[28], 0, i2566, 'm_defaultSpriteAsset')
  i2566.m_defaultSpriteAssetPath = i2567[29]
  i2566.m_enableEmojiSupport = !!i2567[30]
  i2566.m_MissingCharacterSpriteUnicode = i2567[31]
  var i2573 = i2567[32]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 1, i2572, '')
  }
  i2566.m_EmojiFallbackTextAssets = i2572
  i2566.m_defaultColorGradientPresetsPath = i2567[33]
  request.r(i2567[34], i2567[35], 0, i2566, 'm_defaultStyleSheet')
  i2566.m_StyleSheetsResourcePath = i2567[36]
  request.r(i2567[37], i2567[38], 0, i2566, 'm_leadingCharacters')
  request.r(i2567[39], i2567[40], 0, i2566, 'm_followingCharacters')
  i2566.m_UseModernHangulLineBreakingRules = !!i2567[41]
  return i2566
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2576 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'spriteSheet')
  var i2579 = i2577[2]
  var i2578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.add(request.d('TMPro.TMP_Sprite', i2579[i + 0]));
  }
  i2576.spriteInfoList = i2578
  var i2581 = i2577[3]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2581.length; i += 2) {
  request.r(i2581[i + 0], i2581[i + 1], 1, i2580, '')
  }
  i2576.fallbackSpriteAssets = i2580
  var i2583 = i2577[4]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.add(request.d('TMPro.TMP_SpriteCharacter', i2583[i + 0]));
  }
  i2576.m_SpriteCharacterTable = i2582
  var i2585 = i2577[5]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('TMPro.TMP_SpriteGlyph', i2585[i + 0]));
  }
  i2576.m_GlyphTable = i2584
  i2576.m_Version = i2577[6]
  i2576.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2577[7], i2576.m_FaceInfo)
  request.r(i2577[8], i2577[9], 0, i2576, 'm_Material')
  return i2576
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2589 = data
  i2588.name = i2589[0]
  i2588.hashCode = i2589[1]
  i2588.unicode = i2589[2]
  i2588.pivot = new pc.Vec2( i2589[3], i2589[4] )
  request.r(i2589[5], i2589[6], 0, i2588, 'sprite')
  i2588.id = i2589[7]
  i2588.x = i2589[8]
  i2588.y = i2589[9]
  i2588.width = i2589[10]
  i2588.height = i2589[11]
  i2588.xOffset = i2589[12]
  i2588.yOffset = i2589[13]
  i2588.xAdvance = i2589[14]
  i2588.scale = i2589[15]
  return i2588
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2595 = data
  i2594.m_Name = i2595[0]
  i2594.m_ElementType = i2595[1]
  i2594.m_Unicode = i2595[2]
  i2594.m_GlyphIndex = i2595[3]
  i2594.m_Scale = i2595[4]
  return i2594
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2598 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2599 = data
  request.r(i2599[0], i2599[1], 0, i2598, 'sprite')
  i2598.m_Index = i2599[2]
  i2598.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2599[3], i2598.m_Metrics)
  i2598.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2599[4], i2598.m_GlyphRect)
  i2598.m_Scale = i2599[5]
  i2598.m_AtlasIndex = i2599[6]
  i2598.m_ClassDefinitionType = i2599[7]
  return i2598
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2601 = data
  var i2603 = i2601[0]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('TMPro.TMP_Style', i2603[i + 0]));
  }
  i2600.m_StyleList = i2602
  return i2600
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2606 = root || request.c( 'TMPro.TMP_Style' )
  var i2607 = data
  i2606.m_Name = i2607[0]
  i2606.m_HashCode = i2607[1]
  i2606.m_OpeningDefinition = i2607[2]
  i2606.m_ClosingDefinition = i2607[3]
  i2606.m_OpeningTagArray = i2607[4]
  i2606.m_ClosingTagArray = i2607[5]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2609 = data
  var i2611 = i2609[0]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2611[i + 0]) );
  }
  i2608.files = i2610
  i2608.componentToPrefabIds = i2609[1]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2615 = data
  i2614.path = i2615[0]
  request.r(i2615[1], i2615[2], 0, i2614, 'unityObject')
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2617 = data
  var i2619 = i2617[0]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2619[i + 0]) );
  }
  i2616.scriptsExecutionOrder = i2618
  var i2621 = i2617[1]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2621[i + 0]) );
  }
  i2616.sortingLayers = i2620
  var i2623 = i2617[2]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2623[i + 0]) );
  }
  i2616.cullingLayers = i2622
  i2616.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2617[3], i2616.timeSettings)
  i2616.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2617[4], i2616.physicsSettings)
  i2616.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2617[5], i2616.physics2DSettings)
  i2616.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2617[6], i2616.qualitySettings)
  i2616.enableRealtimeShadows = !!i2617[7]
  i2616.enableAutoInstancing = !!i2617[8]
  i2616.enableStaticBatching = !!i2617[9]
  i2616.enableDynamicBatching = !!i2617[10]
  i2616.lightmapEncodingQuality = i2617[11]
  i2616.desiredColorSpace = i2617[12]
  var i2625 = i2617[13]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( i2625[i + 0] );
  }
  i2616.allTags = i2624
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2629 = data
  i2628.name = i2629[0]
  i2628.value = i2629[1]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2633 = data
  i2632.id = i2633[0]
  i2632.name = i2633[1]
  i2632.value = i2633[2]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2637 = data
  i2636.id = i2637[0]
  i2636.name = i2637[1]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2639 = data
  i2638.fixedDeltaTime = i2639[0]
  i2638.maximumDeltaTime = i2639[1]
  i2638.timeScale = i2639[2]
  i2638.maximumParticleTimestep = i2639[3]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2641 = data
  i2640.gravity = new pc.Vec3( i2641[0], i2641[1], i2641[2] )
  i2640.defaultSolverIterations = i2641[3]
  i2640.bounceThreshold = i2641[4]
  i2640.autoSyncTransforms = !!i2641[5]
  i2640.autoSimulation = !!i2641[6]
  var i2643 = i2641[7]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2643[i + 0]) );
  }
  i2640.collisionMatrix = i2642
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2647 = data
  i2646.enabled = !!i2647[0]
  i2646.layerId = i2647[1]
  i2646.otherLayerId = i2647[2]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'material')
  i2648.gravity = new pc.Vec2( i2649[2], i2649[3] )
  i2648.positionIterations = i2649[4]
  i2648.velocityIterations = i2649[5]
  i2648.velocityThreshold = i2649[6]
  i2648.maxLinearCorrection = i2649[7]
  i2648.maxAngularCorrection = i2649[8]
  i2648.maxTranslationSpeed = i2649[9]
  i2648.maxRotationSpeed = i2649[10]
  i2648.baumgarteScale = i2649[11]
  i2648.baumgarteTOIScale = i2649[12]
  i2648.timeToSleep = i2649[13]
  i2648.linearSleepTolerance = i2649[14]
  i2648.angularSleepTolerance = i2649[15]
  i2648.defaultContactOffset = i2649[16]
  i2648.autoSimulation = !!i2649[17]
  i2648.queriesHitTriggers = !!i2649[18]
  i2648.queriesStartInColliders = !!i2649[19]
  i2648.callbacksOnDisable = !!i2649[20]
  i2648.reuseCollisionCallbacks = !!i2649[21]
  i2648.autoSyncTransforms = !!i2649[22]
  var i2651 = i2649[23]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2651[i + 0]) );
  }
  i2648.collisionMatrix = i2650
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2655 = data
  i2654.enabled = !!i2655[0]
  i2654.layerId = i2655[1]
  i2654.otherLayerId = i2655[2]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2657 = data
  var i2659 = i2657[0]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2659[i + 0]) );
  }
  i2656.qualityLevels = i2658
  var i2661 = i2657[1]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( i2661[i + 0] );
  }
  i2656.names = i2660
  i2656.shadows = i2657[2]
  i2656.anisotropicFiltering = i2657[3]
  i2656.antiAliasing = i2657[4]
  i2656.lodBias = i2657[5]
  i2656.shadowCascades = i2657[6]
  i2656.shadowDistance = i2657[7]
  i2656.shadowmaskMode = i2657[8]
  i2656.shadowProjection = i2657[9]
  i2656.shadowResolution = i2657[10]
  i2656.softParticles = !!i2657[11]
  i2656.softVegetation = !!i2657[12]
  i2656.activeColorSpace = i2657[13]
  i2656.desiredColorSpace = i2657[14]
  i2656.masterTextureLimit = i2657[15]
  i2656.maxQueuedFrames = i2657[16]
  i2656.particleRaycastBudget = i2657[17]
  i2656.pixelLightCount = i2657[18]
  i2656.realtimeReflectionProbes = !!i2657[19]
  i2656.shadowCascade2Split = i2657[20]
  i2656.shadowCascade4Split = new pc.Vec3( i2657[21], i2657[22], i2657[23] )
  i2656.streamingMipmapsActive = !!i2657[24]
  i2656.vSyncCount = i2657[25]
  i2656.asyncUploadBufferSize = i2657[26]
  i2656.asyncUploadTimeSlice = i2657[27]
  i2656.billboardsFaceCameraPosition = !!i2657[28]
  i2656.shadowNearPlaneOffset = i2657[29]
  i2656.streamingMipmapsMemoryBudget = i2657[30]
  i2656.maximumLODLevel = i2657[31]
  i2656.streamingMipmapsAddAllCameras = !!i2657[32]
  i2656.streamingMipmapsMaxLevelReduction = i2657[33]
  i2656.streamingMipmapsRenderersPerFrame = i2657[34]
  i2656.resolutionScalingFixedDPIFactor = i2657[35]
  i2656.streamingMipmapsMaxFileIORequests = i2657[36]
  i2656.currentQualityLevel = i2657[37]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2665 = data
  i2664.name = i2665[0]
  var i2667 = i2665[1]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2667[i + 0]) );
  }
  i2664.tos = i2666
  var i2669 = i2665[2]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( i2669[i + 0] );
  }
  i2664.constant = i2668
  i2664.isValid = !!i2665[3]
  i2664.isHuman = !!i2665[4]
  i2664.hasRootMotion = !!i2665[5]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2673 = data
  i2672.hash = i2673[0]
  i2672.path = i2673[1]
  return i2672
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2675 = data
  i2674.m_XCoordinate = i2675[0]
  i2674.m_YCoordinate = i2675[1]
  return i2674
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2676 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2677 = data
  i2676.m_XPositionAdjustment = i2677[0]
  i2676.m_YPositionAdjustment = i2677[1]
  return i2676
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2679 = data
  i2678.xPlacement = i2679[0]
  i2678.yPlacement = i2679[1]
  i2678.xAdvance = i2679[2]
  i2678.yAdvance = i2679[3]
  return i2678
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[19],"63":[28],"64":[11],"65":[11],"66":[11],"67":[11],"68":[11],"69":[11],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[71],"79":[71],"80":[71],"81":[71],"82":[71],"83":[71],"84":[28],"85":[5],"86":[87],"88":[87],"21":[20],"89":[90],"91":[28],"92":[93],"33":[32],"94":[21],"95":[20],"96":[26,20],"97":[5],"98":[26,20],"99":[20],"100":[20],"101":[5,20],"12":[20,26],"102":[103],"104":[103],"105":[103],"106":[20],"107":[20],"24":[21],"41":[26,20],"108":[20],"23":[21],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[20],"118":[26,20],"119":[20],"120":[20],"121":[20],"122":[20],"123":[26,20],"124":[20],"125":[32],"126":[32],"127":[32],"128":[32],"129":[28],"130":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Block","UnityEngine.BoxCollider","PigComponent","UnityEngine.Rigidbody","TMPro.TextMeshProUGUI","UnityEngine.GameObject","UnityEngine.LineRenderer","WavyLineRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BillboardUI","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","FlashObject","Conveyor","GameManager","SpawnerManager","LevelDataSO","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UIManager","PlayerInput","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.69f1";

Deserializers.productName = "Playable Ad";

Deserializers.lunaInitializationTime = "03/10/2026 02:29:47";

Deserializers.lunaDaysRunning = "6.4";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Yarn-Flow-2-0";

Deserializers.lunaAppID = "37618";

Deserializers.projectId = "6f0517ec927523b4899bd1d5f4562f01";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.timeline: 1.8.10\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1658";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4065";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "31228a3c-582e-40fe-a743-299dbca23f09";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

