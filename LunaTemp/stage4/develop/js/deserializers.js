var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointSpring' )
  var i357 = data
  i356.spring = i357[0]
  i356.damper = i357[1]
  i356.targetPosition = i357[2]
  return i356
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointMotor' )
  var i359 = data
  i358.m_TargetVelocity = i359[0]
  i358.m_Force = i359[1]
  i358.m_FreeSpin = i359[2]
  return i358
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointLimits' )
  var i361 = data
  i360.m_Min = i361[0]
  i360.m_Max = i361[1]
  i360.m_Bounciness = i361[2]
  i360.m_BounceMinVelocity = i361[3]
  i360.m_ContactDistance = i361[4]
  i360.minBounce = i361[5]
  i360.maxBounce = i361[6]
  return i360
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.JointDrive' )
  var i363 = data
  i362.m_PositionSpring = i363[0]
  i362.m_PositionDamper = i363[1]
  i362.m_MaximumForce = i363[2]
  i362.m_UseAcceleration = i363[3]
  return i362
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i365 = data
  i364.m_Spring = i365[0]
  i364.m_Damper = i365[1]
  return i364
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i367 = data
  i366.m_Limit = i367[0]
  i366.m_Bounciness = i367[1]
  i366.m_ContactDistance = i367[2]
  return i366
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i369 = data
  i368.m_ExtremumSlip = i369[0]
  i368.m_ExtremumValue = i369[1]
  i368.m_AsymptoteSlip = i369[2]
  i368.m_AsymptoteValue = i369[3]
  i368.m_Stiffness = i369[4]
  return i368
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i371 = data
  i370.m_LowerAngle = i371[0]
  i370.m_UpperAngle = i371[1]
  return i370
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i373 = data
  i372.m_MotorSpeed = i373[0]
  i372.m_MaximumMotorTorque = i373[1]
  return i372
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i375 = data
  i374.m_DampingRatio = i375[0]
  i374.m_Frequency = i375[1]
  i374.m_Angle = i375[2]
  return i374
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i377 = data
  i376.m_LowerTranslation = i377[0]
  i376.m_UpperTranslation = i377[1]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i379 = data
  i378.position = new pc.Vec3( i379[0], i379[1], i379[2] )
  i378.scale = new pc.Vec3( i379[3], i379[4], i379[5] )
  i378.rotation = new pc.Quat(i379[6], i379[7], i379[8], i379[9])
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i381 = data
  request.r(i381[0], i381[1], 0, i380, 'animatorController')
  request.r(i381[2], i381[3], 0, i380, 'avatar')
  i380.updateMode = i381[4]
  i380.hasTransformHierarchy = !!i381[5]
  i380.applyRootMotion = !!i381[6]
  var i383 = i381[7]
  var i382 = []
  for(var i = 0; i < i383.length; i += 2) {
  request.r(i383[i + 0], i383[i + 1], 2, i382, '')
  }
  i380.humanBones = i382
  i380.enabled = !!i381[8]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i387 = data
  i386.name = i387[0]
  i386.tagId = i387[1]
  i386.enabled = !!i387[2]
  i386.isStatic = !!i387[3]
  i386.layer = i387[4]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i389 = data
  request.r(i389[0], i389[1], 0, i388, 'sharedMesh')
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i391 = data
  request.r(i391[0], i391[1], 0, i390, 'additionalVertexStreams')
  i390.enabled = !!i391[2]
  request.r(i391[3], i391[4], 0, i390, 'sharedMaterial')
  var i393 = i391[5]
  var i392 = []
  for(var i = 0; i < i393.length; i += 2) {
  request.r(i393[i + 0], i393[i + 1], 2, i392, '')
  }
  i390.sharedMaterials = i392
  i390.receiveShadows = !!i391[6]
  i390.shadowCastingMode = i391[7]
  i390.sortingLayerID = i391[8]
  i390.sortingOrder = i391[9]
  i390.lightmapIndex = i391[10]
  i390.lightmapSceneIndex = i391[11]
  i390.lightmapScaleOffset = new pc.Vec4( i391[12], i391[13], i391[14], i391[15] )
  i390.lightProbeUsage = i391[16]
  i390.reflectionProbeUsage = i391[17]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i397 = data
  request.r(i397[0], i397[1], 0, i396, 'sharedMesh')
  var i399 = i397[2]
  var i398 = []
  for(var i = 0; i < i399.length; i += 2) {
  request.r(i399[i + 0], i399[i + 1], 2, i398, '')
  }
  i396.bones = i398
  i396.updateWhenOffscreen = !!i397[3]
  i396.localBounds = i397[4]
  request.r(i397[5], i397[6], 0, i396, 'rootBone')
  var i401 = i397[7]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i401[i + 0]) );
  }
  i396.blendShapesWeights = i400
  i396.enabled = !!i397[8]
  request.r(i397[9], i397[10], 0, i396, 'sharedMaterial')
  var i403 = i397[11]
  var i402 = []
  for(var i = 0; i < i403.length; i += 2) {
  request.r(i403[i + 0], i403[i + 1], 2, i402, '')
  }
  i396.sharedMaterials = i402
  i396.receiveShadows = !!i397[12]
  i396.shadowCastingMode = i397[13]
  i396.sortingLayerID = i397[14]
  i396.sortingOrder = i397[15]
  i396.lightmapIndex = i397[16]
  i396.lightmapSceneIndex = i397[17]
  i396.lightmapScaleOffset = new pc.Vec4( i397[18], i397[19], i397[20], i397[21] )
  i396.lightProbeUsage = i397[22]
  i396.reflectionProbeUsage = i397[23]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i407 = data
  i406.weight = i407[0]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i409 = data
  i408.name = i409[0]
  i408.halfPrecision = !!i409[1]
  i408.useSimplification = !!i409[2]
  i408.useUInt32IndexFormat = !!i409[3]
  i408.vertexCount = i409[4]
  i408.aabb = i409[5]
  var i411 = i409[6]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( !!i411[i + 0] );
  }
  i408.streams = i410
  i408.vertices = i409[7]
  var i413 = i409[8]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i413[i + 0]) );
  }
  i408.subMeshes = i412
  var i415 = i409[9]
  var i414 = []
  for(var i = 0; i < i415.length; i += 16) {
    i414.push( new pc.Mat4().setData(i415[i + 0], i415[i + 1], i415[i + 2], i415[i + 3],  i415[i + 4], i415[i + 5], i415[i + 6], i415[i + 7],  i415[i + 8], i415[i + 9], i415[i + 10], i415[i + 11],  i415[i + 12], i415[i + 13], i415[i + 14], i415[i + 15]) );
  }
  i408.bindposes = i414
  var i417 = i409[10]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i417[i + 0]) );
  }
  i408.blendShapes = i416
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i423 = data
  i422.triangles = i423[0]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i429 = data
  i428.name = i429[0]
  var i431 = i429[1]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i431[i + 0]) );
  }
  i428.frames = i430
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i432 = root || new pc.UnityMaterial()
  var i433 = data
  i432.name = i433[0]
  request.r(i433[1], i433[2], 0, i432, 'shader')
  i432.renderQueue = i433[3]
  i432.enableInstancing = !!i433[4]
  var i435 = i433[5]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i435[i + 0]) );
  }
  i432.floatParameters = i434
  var i437 = i433[6]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i437[i + 0]) );
  }
  i432.colorParameters = i436
  var i439 = i433[7]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i439[i + 0]) );
  }
  i432.vectorParameters = i438
  var i441 = i433[8]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i441[i + 0]) );
  }
  i432.textureParameters = i440
  var i443 = i433[9]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i443[i + 0]) );
  }
  i432.materialFlags = i442
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i447 = data
  i446.name = i447[0]
  i446.value = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i451 = data
  i450.name = i451[0]
  i450.value = new pc.Color(i451[1], i451[2], i451[3], i451[4])
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i455 = data
  i454.name = i455[0]
  i454.value = new pc.Vec4( i455[1], i455[2], i455[3], i455[4] )
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i459 = data
  i458.name = i459[0]
  request.r(i459[1], i459[2], 0, i458, 'value')
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i463 = data
  i462.name = i463[0]
  i462.enabled = !!i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i465 = data
  i464.name = i465[0]
  i464.width = i465[1]
  i464.height = i465[2]
  i464.mipmapCount = i465[3]
  i464.anisoLevel = i465[4]
  i464.filterMode = i465[5]
  i464.hdr = !!i465[6]
  i464.format = i465[7]
  i464.wrapMode = i465[8]
  i464.alphaIsTransparency = !!i465[9]
  i464.alphaSource = i465[10]
  i464.graphicsFormat = i465[11]
  i464.sRGBTexture = !!i465[12]
  i464.desiredColorSpace = i465[13]
  i464.wrapU = i465[14]
  i464.wrapV = i465[15]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i469 = data
  i468.weight = i469[0]
  i468.vertices = i469[1]
  i468.normals = i469[2]
  i468.tangents = i469[3]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i471 = data
  i470.name = i471[0]
  i470.atlasId = i471[1]
  i470.mipmapCount = i471[2]
  i470.hdr = !!i471[3]
  i470.size = i471[4]
  i470.anisoLevel = i471[5]
  i470.filterMode = i471[6]
  var i473 = i471[7]
  var i472 = []
  for(var i = 0; i < i473.length; i += 4) {
    i472.push( UnityEngine.Rect.MinMaxRect(i473[i + 0], i473[i + 1], i473[i + 2], i473[i + 3]) );
  }
  i470.rects = i472
  i470.wrapU = i471[8]
  i470.wrapV = i471[9]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i477 = data
  i476.name = i477[0]
  i476.index = i477[1]
  i476.startup = !!i477[2]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i479 = data
  i478.aspect = i479[0]
  i478.orthographic = !!i479[1]
  i478.orthographicSize = i479[2]
  i478.backgroundColor = new pc.Color(i479[3], i479[4], i479[5], i479[6])
  i478.nearClipPlane = i479[7]
  i478.farClipPlane = i479[8]
  i478.fieldOfView = i479[9]
  i478.depth = i479[10]
  i478.clearFlags = i479[11]
  i478.cullingMask = i479[12]
  i478.rect = i479[13]
  request.r(i479[14], i479[15], 0, i478, 'targetTexture')
  i478.usePhysicalProperties = !!i479[16]
  i478.focalLength = i479[17]
  i478.sensorSize = new pc.Vec2( i479[18], i479[19] )
  i478.lensShift = new pc.Vec2( i479[20], i479[21] )
  i478.gateFit = i479[22]
  i478.commandBufferCount = i479[23]
  i478.cameraType = i479[24]
  i478.enabled = !!i479[25]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i481 = data
  i480.type = i481[0]
  i480.color = new pc.Color(i481[1], i481[2], i481[3], i481[4])
  i480.cullingMask = i481[5]
  i480.intensity = i481[6]
  i480.range = i481[7]
  i480.spotAngle = i481[8]
  i480.shadows = i481[9]
  i480.shadowNormalBias = i481[10]
  i480.shadowBias = i481[11]
  i480.shadowStrength = i481[12]
  i480.shadowResolution = i481[13]
  i480.lightmapBakeType = i481[14]
  i480.renderMode = i481[15]
  request.r(i481[16], i481[17], 0, i480, 'cookie')
  i480.cookieSize = i481[18]
  i480.shadowNearPlane = i481[19]
  i480.occlusionMaskChannel = i481[20]
  i480.enabled = !!i481[21]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i483 = data
  i482.ambientIntensity = i483[0]
  i482.reflectionIntensity = i483[1]
  i482.ambientMode = i483[2]
  i482.ambientLight = new pc.Color(i483[3], i483[4], i483[5], i483[6])
  i482.ambientSkyColor = new pc.Color(i483[7], i483[8], i483[9], i483[10])
  i482.ambientGroundColor = new pc.Color(i483[11], i483[12], i483[13], i483[14])
  i482.ambientEquatorColor = new pc.Color(i483[15], i483[16], i483[17], i483[18])
  i482.fogColor = new pc.Color(i483[19], i483[20], i483[21], i483[22])
  i482.fogEndDistance = i483[23]
  i482.fogStartDistance = i483[24]
  i482.fogDensity = i483[25]
  i482.fog = !!i483[26]
  request.r(i483[27], i483[28], 0, i482, 'skybox')
  i482.fogMode = i483[29]
  var i485 = i483[30]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i485[i + 0]) );
  }
  i482.lightmaps = i484
  i482.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i483[31], i482.lightProbes)
  i482.lightmapsMode = i483[32]
  i482.mixedBakeMode = i483[33]
  i482.environmentLightingMode = i483[34]
  i482.ambientProbe = new pc.SphericalHarmonicsL2(i483[35])
  i482.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i483[36])
  i482.useReferenceAmbientProbe = !!i483[37]
  request.r(i483[38], i483[39], 0, i482, 'customReflection')
  request.r(i483[40], i483[41], 0, i482, 'defaultReflection')
  i482.defaultReflectionMode = i483[42]
  i482.defaultReflectionResolution = i483[43]
  i482.sunLightObjectId = i483[44]
  i482.pixelLightCount = i483[45]
  i482.defaultReflectionHDR = !!i483[46]
  i482.hasLightDataAsset = !!i483[47]
  i482.hasManualGenerate = !!i483[48]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'lightmapColor')
  request.r(i489[2], i489[3], 0, i488, 'lightmapDirection')
  request.r(i489[4], i489[5], 0, i488, 'shadowMask')
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i490 = root || new UnityEngine.LightProbes()
  var i491 = data
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i499 = data
  var i501 = i499[0]
  var i500 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i501.length; i += 1) {
    i500.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i501[i + 0]));
  }
  i498.ShaderCompilationErrors = i500
  i498.name = i499[1]
  i498.guid = i499[2]
  var i503 = i499[3]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( i503[i + 0] );
  }
  i498.shaderDefinedKeywords = i502
  var i505 = i499[4]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i505[i + 0]) );
  }
  i498.passes = i504
  var i507 = i499[5]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i507[i + 0]) );
  }
  i498.usePasses = i506
  var i509 = i499[6]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i509[i + 0]) );
  }
  i498.defaultParameterValues = i508
  request.r(i499[7], i499[8], 0, i498, 'unityFallbackShader')
  i498.readDepth = !!i499[9]
  i498.hasDepthOnlyPass = !!i499[10]
  i498.isCreatedByShaderGraph = !!i499[11]
  i498.disableBatching = !!i499[12]
  i498.compiled = !!i499[13]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i513 = data
  i512.shaderName = i513[0]
  i512.errorMessage = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i518 = root || new pc.UnityShaderPass()
  var i519 = data
  i518.id = i519[0]
  i518.subShaderIndex = i519[1]
  i518.name = i519[2]
  i518.passType = i519[3]
  i518.grabPassTextureName = i519[4]
  i518.usePass = !!i519[5]
  i518.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[6], i518.zTest)
  i518.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[7], i518.zWrite)
  i518.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[8], i518.culling)
  i518.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i519[9], i518.blending)
  i518.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i519[10], i518.alphaBlending)
  i518.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[11], i518.colorWriteMask)
  i518.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[12], i518.offsetUnits)
  i518.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[13], i518.offsetFactor)
  i518.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[14], i518.stencilRef)
  i518.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[15], i518.stencilReadMask)
  i518.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[16], i518.stencilWriteMask)
  i518.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i519[17], i518.stencilOp)
  i518.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i519[18], i518.stencilOpFront)
  i518.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i519[19], i518.stencilOpBack)
  var i521 = i519[20]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i521[i + 0]) );
  }
  i518.tags = i520
  var i523 = i519[21]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( i523[i + 0] );
  }
  i518.passDefinedKeywords = i522
  var i525 = i519[22]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i525[i + 0]) );
  }
  i518.passDefinedKeywordGroups = i524
  var i527 = i519[23]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i527[i + 0]) );
  }
  i518.variants = i526
  var i529 = i519[24]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i529[i + 0]) );
  }
  i518.excludedVariants = i528
  i518.hasDepthReader = !!i519[25]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i531 = data
  i530.val = i531[0]
  i530.name = i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i533 = data
  i532.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[0], i532.src)
  i532.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[1], i532.dst)
  i532.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[2], i532.op)
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i535 = data
  i534.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[0], i534.pass)
  i534.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[1], i534.fail)
  i534.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[2], i534.zFail)
  i534.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[3], i534.comp)
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i539 = data
  i538.name = i539[0]
  i538.value = i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i543 = data
  var i545 = i543[0]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( i545[i + 0] );
  }
  i542.keywords = i544
  i542.hasDiscard = !!i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i549 = data
  i548.passId = i549[0]
  i548.subShaderIndex = i549[1]
  var i551 = i549[2]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( i551[i + 0] );
  }
  i548.keywords = i550
  i548.vertexProgram = i549[3]
  i548.fragmentProgram = i549[4]
  i548.exportedForWebGl2 = !!i549[5]
  i548.readDepth = !!i549[6]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'shader')
  i554.pass = i555[2]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i559 = data
  i558.name = i559[0]
  i558.type = i559[1]
  i558.value = new pc.Vec4( i559[2], i559[3], i559[4], i559[5] )
  i558.textureValue = i559[6]
  i558.shaderPropertyFlag = i559[7]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i561 = data
  i560.name = i561[0]
  i560.wrapMode = i561[1]
  i560.isLooping = !!i561[2]
  i560.length = i561[3]
  var i563 = i561[4]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i563[i + 0]) );
  }
  i560.curves = i562
  var i565 = i561[5]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i565[i + 0]) );
  }
  i560.events = i564
  i560.halfPrecision = !!i561[6]
  i560._frameRate = i561[7]
  i560.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i561[8], i560.localBounds)
  i560.hasMuscleCurves = !!i561[9]
  var i567 = i561[10]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( i567[i + 0] );
  }
  i560.clipMuscleConstant = i566
  i560.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i561[11], i560.clipBindingConstant)
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i571 = data
  i570.path = i571[0]
  i570.hash = i571[1]
  i570.componentType = i571[2]
  i570.property = i571[3]
  i570.keys = i571[4]
  var i573 = i571[5]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i573[i + 0]) );
  }
  i570.objectReferenceKeys = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i577 = data
  i576.time = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'value')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i581 = data
  i580.functionName = i581[0]
  i580.floatParameter = i581[1]
  i580.intParameter = i581[2]
  i580.stringParameter = i581[3]
  request.r(i581[4], i581[5], 0, i580, 'objectReferenceParameter')
  i580.time = i581[6]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i583 = data
  i582.center = new pc.Vec3( i583[0], i583[1], i583[2] )
  i582.extends = new pc.Vec3( i583[3], i583[4], i583[5] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i587 = data
  var i589 = i587[0]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( i589[i + 0] );
  }
  i586.genericBindings = i588
  var i591 = i587[1]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i586.pptrCurveMapping = i590
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i593 = data
  i592.name = i593[0]
  var i595 = i593[1]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i595[i + 0]) );
  }
  i592.layers = i594
  var i597 = i593[2]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i597[i + 0]) );
  }
  i592.parameters = i596
  i592.animationClips = i593[3]
  i592.avatarUnsupported = i593[4]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i601 = data
  i600.name = i601[0]
  i600.defaultWeight = i601[1]
  i600.blendingMode = i601[2]
  i600.avatarMask = i601[3]
  i600.syncedLayerIndex = i601[4]
  i600.syncedLayerAffectsTiming = !!i601[5]
  i600.syncedLayers = i601[6]
  i600.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i601[7], i600.stateMachine)
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i603 = data
  i602.id = i603[0]
  i602.name = i603[1]
  i602.path = i603[2]
  var i605 = i603[3]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i605[i + 0]) );
  }
  i602.states = i604
  var i607 = i603[4]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i607[i + 0]) );
  }
  i602.machines = i606
  var i609 = i603[5]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i609[i + 0]) );
  }
  i602.entryStateTransitions = i608
  var i611 = i603[6]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i611[i + 0]) );
  }
  i602.exitStateTransitions = i610
  var i613 = i603[7]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i613[i + 0]) );
  }
  i602.anyStateTransitions = i612
  i602.defaultStateId = i603[8]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i617 = data
  i616.id = i617[0]
  i616.name = i617[1]
  i616.cycleOffset = i617[2]
  i616.cycleOffsetParameter = i617[3]
  i616.cycleOffsetParameterActive = !!i617[4]
  i616.mirror = !!i617[5]
  i616.mirrorParameter = i617[6]
  i616.mirrorParameterActive = !!i617[7]
  i616.motionId = i617[8]
  i616.nameHash = i617[9]
  i616.fullPathHash = i617[10]
  i616.speed = i617[11]
  i616.speedParameter = i617[12]
  i616.speedParameterActive = !!i617[13]
  i616.tag = i617[14]
  i616.tagHash = i617[15]
  i616.writeDefaultValues = !!i617[16]
  var i619 = i617[17]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.behaviours = i618
  var i621 = i617[18]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i621[i + 0]) );
  }
  i616.transitions = i620
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i627 = data
  i626.fullPath = i627[0]
  i626.canTransitionToSelf = !!i627[1]
  i626.duration = i627[2]
  i626.exitTime = i627[3]
  i626.hasExitTime = !!i627[4]
  i626.hasFixedDuration = !!i627[5]
  i626.interruptionSource = i627[6]
  i626.offset = i627[7]
  i626.orderedInterruption = !!i627[8]
  i626.destinationStateId = i627[9]
  i626.isExit = !!i627[10]
  i626.mute = !!i627[11]
  i626.solo = !!i627[12]
  var i629 = i627[13]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i629[i + 0]) );
  }
  i626.conditions = i628
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i633 = data
  i632.mode = i633[0]
  i632.parameter = i633[1]
  i632.threshold = i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i639 = data
  i638.destinationStateId = i639[0]
  i638.isExit = !!i639[1]
  i638.mute = !!i639[2]
  i638.solo = !!i639[3]
  var i641 = i639[4]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i641[i + 0]) );
  }
  i638.conditions = i640
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i645 = data
  i644.defaultBool = !!i645[0]
  i644.defaultFloat = i645[1]
  i644.defaultInt = i645[2]
  i644.name = i645[3]
  i644.nameHash = i645[4]
  i644.type = i645[5]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i647 = data
  var i649 = i647[0]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i649[i + 0]) );
  }
  i646.files = i648
  i646.componentToPrefabIds = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i653 = data
  i652.path = i653[0]
  request.r(i653[1], i653[2], 0, i652, 'unityObject')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i655 = data
  var i657 = i655[0]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i657[i + 0]) );
  }
  i654.scriptsExecutionOrder = i656
  var i659 = i655[1]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i659[i + 0]) );
  }
  i654.sortingLayers = i658
  var i661 = i655[2]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i661[i + 0]) );
  }
  i654.cullingLayers = i660
  i654.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i655[3], i654.timeSettings)
  i654.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i655[4], i654.physicsSettings)
  i654.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i655[5], i654.physics2DSettings)
  i654.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i655[6], i654.qualitySettings)
  i654.enableRealtimeShadows = !!i655[7]
  i654.enableAutoInstancing = !!i655[8]
  i654.enableStaticBatching = !!i655[9]
  i654.enableDynamicBatching = !!i655[10]
  i654.lightmapEncodingQuality = i655[11]
  i654.desiredColorSpace = i655[12]
  var i663 = i655[13]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( i663[i + 0] );
  }
  i654.allTags = i662
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i667 = data
  i666.name = i667[0]
  i666.value = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i671 = data
  i670.id = i671[0]
  i670.name = i671[1]
  i670.value = i671[2]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i675 = data
  i674.id = i675[0]
  i674.name = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i677 = data
  i676.fixedDeltaTime = i677[0]
  i676.maximumDeltaTime = i677[1]
  i676.timeScale = i677[2]
  i676.maximumParticleTimestep = i677[3]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i679 = data
  i678.gravity = new pc.Vec3( i679[0], i679[1], i679[2] )
  i678.defaultSolverIterations = i679[3]
  i678.bounceThreshold = i679[4]
  i678.autoSyncTransforms = !!i679[5]
  i678.autoSimulation = !!i679[6]
  var i681 = i679[7]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i681[i + 0]) );
  }
  i678.collisionMatrix = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i685 = data
  i684.enabled = !!i685[0]
  i684.layerId = i685[1]
  i684.otherLayerId = i685[2]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'material')
  i686.gravity = new pc.Vec2( i687[2], i687[3] )
  i686.positionIterations = i687[4]
  i686.velocityIterations = i687[5]
  i686.velocityThreshold = i687[6]
  i686.maxLinearCorrection = i687[7]
  i686.maxAngularCorrection = i687[8]
  i686.maxTranslationSpeed = i687[9]
  i686.maxRotationSpeed = i687[10]
  i686.baumgarteScale = i687[11]
  i686.baumgarteTOIScale = i687[12]
  i686.timeToSleep = i687[13]
  i686.linearSleepTolerance = i687[14]
  i686.angularSleepTolerance = i687[15]
  i686.defaultContactOffset = i687[16]
  i686.autoSimulation = !!i687[17]
  i686.queriesHitTriggers = !!i687[18]
  i686.queriesStartInColliders = !!i687[19]
  i686.callbacksOnDisable = !!i687[20]
  i686.reuseCollisionCallbacks = !!i687[21]
  i686.autoSyncTransforms = !!i687[22]
  var i689 = i687[23]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i689[i + 0]) );
  }
  i686.collisionMatrix = i688
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i693 = data
  i692.enabled = !!i693[0]
  i692.layerId = i693[1]
  i692.otherLayerId = i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i695 = data
  var i697 = i695[0]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i697[i + 0]) );
  }
  i694.qualityLevels = i696
  var i699 = i695[1]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.names = i698
  i694.shadows = i695[2]
  i694.anisotropicFiltering = i695[3]
  i694.antiAliasing = i695[4]
  i694.lodBias = i695[5]
  i694.shadowCascades = i695[6]
  i694.shadowDistance = i695[7]
  i694.shadowmaskMode = i695[8]
  i694.shadowProjection = i695[9]
  i694.shadowResolution = i695[10]
  i694.softParticles = !!i695[11]
  i694.softVegetation = !!i695[12]
  i694.activeColorSpace = i695[13]
  i694.desiredColorSpace = i695[14]
  i694.masterTextureLimit = i695[15]
  i694.maxQueuedFrames = i695[16]
  i694.particleRaycastBudget = i695[17]
  i694.pixelLightCount = i695[18]
  i694.realtimeReflectionProbes = !!i695[19]
  i694.shadowCascade2Split = i695[20]
  i694.shadowCascade4Split = new pc.Vec3( i695[21], i695[22], i695[23] )
  i694.streamingMipmapsActive = !!i695[24]
  i694.vSyncCount = i695[25]
  i694.asyncUploadBufferSize = i695[26]
  i694.asyncUploadTimeSlice = i695[27]
  i694.billboardsFaceCameraPosition = !!i695[28]
  i694.shadowNearPlaneOffset = i695[29]
  i694.streamingMipmapsMemoryBudget = i695[30]
  i694.maximumLODLevel = i695[31]
  i694.streamingMipmapsAddAllCameras = !!i695[32]
  i694.streamingMipmapsMaxLevelReduction = i695[33]
  i694.streamingMipmapsRenderersPerFrame = i695[34]
  i694.resolutionScalingFixedDPIFactor = i695[35]
  i694.streamingMipmapsMaxFileIORequests = i695[36]
  i694.currentQualityLevel = i695[37]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i703 = data
  i702.name = i703[0]
  var i705 = i703[1]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i705[i + 0]) );
  }
  i702.tos = i704
  var i707 = i703[2]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i702.constant = i706
  i702.isValid = !!i703[3]
  i702.isHuman = !!i703[4]
  i702.hasRootMotion = !!i703[5]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i711 = data
  i710.hash = i711[0]
  i710.path = i711[1]
  return i710
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1}}

Deserializers.requiredComponents = {"15":[16],"17":[16],"18":[16],"19":[16],"20":[16],"21":[16],"22":[8],"23":[11],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[32],"39":[32],"40":[32],"41":[32],"42":[32],"43":[32],"44":[32],"45":[11],"46":[6],"47":[48],"49":[48],"50":[51],"52":[53],"54":[50],"55":[51],"56":[57,51],"58":[6],"59":[57,51],"60":[51],"61":[51],"62":[6,51],"63":[51,57],"64":[65],"66":[65],"67":[65],"68":[51],"69":[51],"70":[50],"71":[57,51],"72":[51],"73":[50],"74":[51],"75":[51],"76":[51],"77":[51],"78":[51],"79":[51],"80":[51],"81":[51],"82":[51],"83":[57,51],"84":[51],"85":[51],"86":[51],"87":[51],"88":[57,51],"89":[51],"90":[53],"91":[53],"92":[53],"93":[53],"94":[11],"95":[11]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SkinnedMeshRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","UnityEngine.CanvasRenderer","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.69f1";

Deserializers.productName = "Playable Ad";

Deserializers.lunaInitializationTime = "03/10/2026 02:29:47";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "b1d58725-b9c6-4fc1-a44a-aa85c4ab97b4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

