var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.JointSpring' )
  var i1069 = data
  i1068.spring = i1069[0]
  i1068.damper = i1069[1]
  i1068.targetPosition = i1069[2]
  return i1068
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.JointMotor' )
  var i1071 = data
  i1070.m_TargetVelocity = i1071[0]
  i1070.m_Force = i1071[1]
  i1070.m_FreeSpin = i1071[2]
  return i1070
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.JointLimits' )
  var i1073 = data
  i1072.m_Min = i1073[0]
  i1072.m_Max = i1073[1]
  i1072.m_Bounciness = i1073[2]
  i1072.m_BounceMinVelocity = i1073[3]
  i1072.m_ContactDistance = i1073[4]
  i1072.minBounce = i1073[5]
  i1072.maxBounce = i1073[6]
  return i1072
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.JointDrive' )
  var i1075 = data
  i1074.m_PositionSpring = i1075[0]
  i1074.m_PositionDamper = i1075[1]
  i1074.m_MaximumForce = i1075[2]
  i1074.m_UseAcceleration = i1075[3]
  return i1074
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1077 = data
  i1076.m_Spring = i1077[0]
  i1076.m_Damper = i1077[1]
  return i1076
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1079 = data
  i1078.m_Limit = i1079[0]
  i1078.m_Bounciness = i1079[1]
  i1078.m_ContactDistance = i1079[2]
  return i1078
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1081 = data
  i1080.m_ExtremumSlip = i1081[0]
  i1080.m_ExtremumValue = i1081[1]
  i1080.m_AsymptoteSlip = i1081[2]
  i1080.m_AsymptoteValue = i1081[3]
  i1080.m_Stiffness = i1081[4]
  return i1080
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1083 = data
  i1082.m_LowerAngle = i1083[0]
  i1082.m_UpperAngle = i1083[1]
  return i1082
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1085 = data
  i1084.m_MotorSpeed = i1085[0]
  i1084.m_MaximumMotorTorque = i1085[1]
  return i1084
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1087 = data
  i1086.m_DampingRatio = i1087[0]
  i1086.m_Frequency = i1087[1]
  i1086.m_Angle = i1087[2]
  return i1086
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1089 = data
  i1088.m_LowerTranslation = i1089[0]
  i1088.m_UpperTranslation = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1091 = data
  i1090.position = new pc.Vec3( i1091[0], i1091[1], i1091[2] )
  i1090.scale = new pc.Vec3( i1091[3], i1091[4], i1091[5] )
  i1090.rotation = new pc.Quat(i1091[6], i1091[7], i1091[8], i1091[9])
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'animatorController')
  request.r(i1093[2], i1093[3], 0, i1092, 'avatar')
  i1092.updateMode = i1093[4]
  i1092.hasTransformHierarchy = !!i1093[5]
  i1092.applyRootMotion = !!i1093[6]
  var i1095 = i1093[7]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.humanBones = i1094
  i1092.enabled = !!i1093[8]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.tagId = i1099[1]
  i1098.enabled = !!i1099[2]
  i1098.isStatic = !!i1099[3]
  i1098.layer = i1099[4]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'sharedMesh')
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'additionalVertexStreams')
  i1102.enabled = !!i1103[2]
  request.r(i1103[3], i1103[4], 0, i1102, 'sharedMaterial')
  var i1105 = i1103[5]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1102.sharedMaterials = i1104
  i1102.receiveShadows = !!i1103[6]
  i1102.shadowCastingMode = i1103[7]
  i1102.sortingLayerID = i1103[8]
  i1102.sortingOrder = i1103[9]
  i1102.lightmapIndex = i1103[10]
  i1102.lightmapSceneIndex = i1103[11]
  i1102.lightmapScaleOffset = new pc.Vec4( i1103[12], i1103[13], i1103[14], i1103[15] )
  i1102.lightProbeUsage = i1103[16]
  i1102.reflectionProbeUsage = i1103[17]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'sharedMesh')
  var i1111 = i1109[2]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 2, i1110, '')
  }
  i1108.bones = i1110
  i1108.updateWhenOffscreen = !!i1109[3]
  i1108.localBounds = i1109[4]
  request.r(i1109[5], i1109[6], 0, i1108, 'rootBone')
  var i1113 = i1109[7]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1113[i + 0]) );
  }
  i1108.blendShapesWeights = i1112
  i1108.enabled = !!i1109[8]
  request.r(i1109[9], i1109[10], 0, i1108, 'sharedMaterial')
  var i1115 = i1109[11]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 2, i1114, '')
  }
  i1108.sharedMaterials = i1114
  i1108.receiveShadows = !!i1109[12]
  i1108.shadowCastingMode = i1109[13]
  i1108.sortingLayerID = i1109[14]
  i1108.sortingOrder = i1109[15]
  i1108.lightmapIndex = i1109[16]
  i1108.lightmapSceneIndex = i1109[17]
  i1108.lightmapScaleOffset = new pc.Vec4( i1109[18], i1109[19], i1109[20], i1109[21] )
  i1108.lightProbeUsage = i1109[22]
  i1108.reflectionProbeUsage = i1109[23]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1119 = data
  i1118.weight = i1119[0]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.halfPrecision = !!i1121[1]
  i1120.useSimplification = !!i1121[2]
  i1120.useUInt32IndexFormat = !!i1121[3]
  i1120.vertexCount = i1121[4]
  i1120.aabb = i1121[5]
  var i1123 = i1121[6]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( !!i1123[i + 0] );
  }
  i1120.streams = i1122
  i1120.vertices = i1121[7]
  var i1125 = i1121[8]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1125[i + 0]) );
  }
  i1120.subMeshes = i1124
  var i1127 = i1121[9]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 16) {
    i1126.push( new pc.Mat4().setData(i1127[i + 0], i1127[i + 1], i1127[i + 2], i1127[i + 3],  i1127[i + 4], i1127[i + 5], i1127[i + 6], i1127[i + 7],  i1127[i + 8], i1127[i + 9], i1127[i + 10], i1127[i + 11],  i1127[i + 12], i1127[i + 13], i1127[i + 14], i1127[i + 15]) );
  }
  i1120.bindposes = i1126
  var i1129 = i1121[10]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1129[i + 0]) );
  }
  i1120.blendShapes = i1128
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1135 = data
  i1134.triangles = i1135[0]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1141 = data
  i1140.name = i1141[0]
  var i1143 = i1141[1]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1143[i + 0]) );
  }
  i1140.frames = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1144 = root || new pc.UnityMaterial()
  var i1145 = data
  i1144.name = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'shader')
  i1144.renderQueue = i1145[3]
  i1144.enableInstancing = !!i1145[4]
  var i1147 = i1145[5]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1147[i + 0]) );
  }
  i1144.floatParameters = i1146
  var i1149 = i1145[6]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1149[i + 0]) );
  }
  i1144.colorParameters = i1148
  var i1151 = i1145[7]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1151[i + 0]) );
  }
  i1144.vectorParameters = i1150
  var i1153 = i1145[8]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1153[i + 0]) );
  }
  i1144.textureParameters = i1152
  var i1155 = i1145[9]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1155[i + 0]) );
  }
  i1144.materialFlags = i1154
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.value = i1159[1]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.value = new pc.Color(i1163[1], i1163[2], i1163[3], i1163[4])
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.value = new pc.Vec4( i1167[1], i1167[2], i1167[3], i1167[4] )
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1171 = data
  i1170.name = i1171[0]
  request.r(i1171[1], i1171[2], 0, i1170, 'value')
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.enabled = !!i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.width = i1177[1]
  i1176.height = i1177[2]
  i1176.mipmapCount = i1177[3]
  i1176.anisoLevel = i1177[4]
  i1176.filterMode = i1177[5]
  i1176.hdr = !!i1177[6]
  i1176.format = i1177[7]
  i1176.wrapMode = i1177[8]
  i1176.alphaIsTransparency = !!i1177[9]
  i1176.alphaSource = i1177[10]
  i1176.graphicsFormat = i1177[11]
  i1176.sRGBTexture = !!i1177[12]
  i1176.desiredColorSpace = i1177[13]
  i1176.wrapU = i1177[14]
  i1176.wrapV = i1177[15]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1181 = data
  i1180.weight = i1181[0]
  i1180.vertices = i1181[1]
  i1180.normals = i1181[2]
  i1180.tangents = i1181[3]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.atlasId = i1183[1]
  i1182.mipmapCount = i1183[2]
  i1182.hdr = !!i1183[3]
  i1182.size = i1183[4]
  i1182.anisoLevel = i1183[5]
  i1182.filterMode = i1183[6]
  var i1185 = i1183[7]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 4) {
    i1184.push( UnityEngine.Rect.MinMaxRect(i1185[i + 0], i1185[i + 1], i1185[i + 2], i1185[i + 3]) );
  }
  i1182.rects = i1184
  i1182.wrapU = i1183[8]
  i1182.wrapV = i1183[9]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.index = i1189[1]
  i1188.startup = !!i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1191 = data
  i1190.aspect = i1191[0]
  i1190.orthographic = !!i1191[1]
  i1190.orthographicSize = i1191[2]
  i1190.backgroundColor = new pc.Color(i1191[3], i1191[4], i1191[5], i1191[6])
  i1190.nearClipPlane = i1191[7]
  i1190.farClipPlane = i1191[8]
  i1190.fieldOfView = i1191[9]
  i1190.depth = i1191[10]
  i1190.clearFlags = i1191[11]
  i1190.cullingMask = i1191[12]
  i1190.rect = i1191[13]
  request.r(i1191[14], i1191[15], 0, i1190, 'targetTexture')
  i1190.usePhysicalProperties = !!i1191[16]
  i1190.focalLength = i1191[17]
  i1190.sensorSize = new pc.Vec2( i1191[18], i1191[19] )
  i1190.lensShift = new pc.Vec2( i1191[20], i1191[21] )
  i1190.gateFit = i1191[22]
  i1190.commandBufferCount = i1191[23]
  i1190.cameraType = i1191[24]
  i1190.enabled = !!i1191[25]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1193 = data
  i1192.type = i1193[0]
  i1192.color = new pc.Color(i1193[1], i1193[2], i1193[3], i1193[4])
  i1192.cullingMask = i1193[5]
  i1192.intensity = i1193[6]
  i1192.range = i1193[7]
  i1192.spotAngle = i1193[8]
  i1192.shadows = i1193[9]
  i1192.shadowNormalBias = i1193[10]
  i1192.shadowBias = i1193[11]
  i1192.shadowStrength = i1193[12]
  i1192.shadowResolution = i1193[13]
  i1192.lightmapBakeType = i1193[14]
  i1192.renderMode = i1193[15]
  request.r(i1193[16], i1193[17], 0, i1192, 'cookie')
  i1192.cookieSize = i1193[18]
  i1192.shadowNearPlane = i1193[19]
  i1192.occlusionMaskChannel = i1193[20]
  i1192.enabled = !!i1193[21]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1195 = data
  i1194.ambientIntensity = i1195[0]
  i1194.reflectionIntensity = i1195[1]
  i1194.ambientMode = i1195[2]
  i1194.ambientLight = new pc.Color(i1195[3], i1195[4], i1195[5], i1195[6])
  i1194.ambientSkyColor = new pc.Color(i1195[7], i1195[8], i1195[9], i1195[10])
  i1194.ambientGroundColor = new pc.Color(i1195[11], i1195[12], i1195[13], i1195[14])
  i1194.ambientEquatorColor = new pc.Color(i1195[15], i1195[16], i1195[17], i1195[18])
  i1194.fogColor = new pc.Color(i1195[19], i1195[20], i1195[21], i1195[22])
  i1194.fogEndDistance = i1195[23]
  i1194.fogStartDistance = i1195[24]
  i1194.fogDensity = i1195[25]
  i1194.fog = !!i1195[26]
  request.r(i1195[27], i1195[28], 0, i1194, 'skybox')
  i1194.fogMode = i1195[29]
  var i1197 = i1195[30]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1197[i + 0]) );
  }
  i1194.lightmaps = i1196
  i1194.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1195[31], i1194.lightProbes)
  i1194.lightmapsMode = i1195[32]
  i1194.mixedBakeMode = i1195[33]
  i1194.environmentLightingMode = i1195[34]
  i1194.ambientProbe = new pc.SphericalHarmonicsL2(i1195[35])
  i1194.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1195[36])
  i1194.useReferenceAmbientProbe = !!i1195[37]
  request.r(i1195[38], i1195[39], 0, i1194, 'customReflection')
  request.r(i1195[40], i1195[41], 0, i1194, 'defaultReflection')
  i1194.defaultReflectionMode = i1195[42]
  i1194.defaultReflectionResolution = i1195[43]
  i1194.sunLightObjectId = i1195[44]
  i1194.pixelLightCount = i1195[45]
  i1194.defaultReflectionHDR = !!i1195[46]
  i1194.hasLightDataAsset = !!i1195[47]
  i1194.hasManualGenerate = !!i1195[48]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'lightmapColor')
  request.r(i1201[2], i1201[3], 0, i1200, 'lightmapDirection')
  request.r(i1201[4], i1201[5], 0, i1200, 'shadowMask')
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1202 = root || new UnityEngine.LightProbes()
  var i1203 = data
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1211 = data
  var i1213 = i1211[0]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1213[i + 0]));
  }
  i1210.ShaderCompilationErrors = i1212
  i1210.name = i1211[1]
  i1210.guid = i1211[2]
  var i1215 = i1211[3]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( i1215[i + 0] );
  }
  i1210.shaderDefinedKeywords = i1214
  var i1217 = i1211[4]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1217[i + 0]) );
  }
  i1210.passes = i1216
  var i1219 = i1211[5]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1219[i + 0]) );
  }
  i1210.usePasses = i1218
  var i1221 = i1211[6]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1221[i + 0]) );
  }
  i1210.defaultParameterValues = i1220
  request.r(i1211[7], i1211[8], 0, i1210, 'unityFallbackShader')
  i1210.readDepth = !!i1211[9]
  i1210.hasDepthOnlyPass = !!i1211[10]
  i1210.isCreatedByShaderGraph = !!i1211[11]
  i1210.disableBatching = !!i1211[12]
  i1210.compiled = !!i1211[13]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1225 = data
  i1224.shaderName = i1225[0]
  i1224.errorMessage = i1225[1]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1230 = root || new pc.UnityShaderPass()
  var i1231 = data
  i1230.id = i1231[0]
  i1230.subShaderIndex = i1231[1]
  i1230.name = i1231[2]
  i1230.passType = i1231[3]
  i1230.grabPassTextureName = i1231[4]
  i1230.usePass = !!i1231[5]
  i1230.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[6], i1230.zTest)
  i1230.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[7], i1230.zWrite)
  i1230.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[8], i1230.culling)
  i1230.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1231[9], i1230.blending)
  i1230.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1231[10], i1230.alphaBlending)
  i1230.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[11], i1230.colorWriteMask)
  i1230.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[12], i1230.offsetUnits)
  i1230.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[13], i1230.offsetFactor)
  i1230.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[14], i1230.stencilRef)
  i1230.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[15], i1230.stencilReadMask)
  i1230.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[16], i1230.stencilWriteMask)
  i1230.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1231[17], i1230.stencilOp)
  i1230.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1231[18], i1230.stencilOpFront)
  i1230.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1231[19], i1230.stencilOpBack)
  var i1233 = i1231[20]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1233[i + 0]) );
  }
  i1230.tags = i1232
  var i1235 = i1231[21]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( i1235[i + 0] );
  }
  i1230.passDefinedKeywords = i1234
  var i1237 = i1231[22]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1237[i + 0]) );
  }
  i1230.passDefinedKeywordGroups = i1236
  var i1239 = i1231[23]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1239[i + 0]) );
  }
  i1230.variants = i1238
  var i1241 = i1231[24]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1241[i + 0]) );
  }
  i1230.excludedVariants = i1240
  i1230.hasDepthReader = !!i1231[25]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1243 = data
  i1242.val = i1243[0]
  i1242.name = i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1245 = data
  i1244.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1245[0], i1244.src)
  i1244.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1245[1], i1244.dst)
  i1244.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1245[2], i1244.op)
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1247 = data
  i1246.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[0], i1246.pass)
  i1246.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[1], i1246.fail)
  i1246.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[2], i1246.zFail)
  i1246.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[3], i1246.comp)
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.value = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1254.keywords = i1256
  i1254.hasDiscard = !!i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1261 = data
  i1260.passId = i1261[0]
  i1260.subShaderIndex = i1261[1]
  var i1263 = i1261[2]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1260.keywords = i1262
  i1260.vertexProgram = i1261[3]
  i1260.fragmentProgram = i1261[4]
  i1260.exportedForWebGl2 = !!i1261[5]
  i1260.readDepth = !!i1261[6]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'shader')
  i1266.pass = i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.type = i1271[1]
  i1270.value = new pc.Vec4( i1271[2], i1271[3], i1271[4], i1271[5] )
  i1270.textureValue = i1271[6]
  i1270.shaderPropertyFlag = i1271[7]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.wrapMode = i1273[1]
  i1272.isLooping = !!i1273[2]
  i1272.length = i1273[3]
  var i1275 = i1273[4]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1275[i + 0]) );
  }
  i1272.curves = i1274
  var i1277 = i1273[5]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1277[i + 0]) );
  }
  i1272.events = i1276
  i1272.halfPrecision = !!i1273[6]
  i1272._frameRate = i1273[7]
  i1272.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1273[8], i1272.localBounds)
  i1272.hasMuscleCurves = !!i1273[9]
  var i1279 = i1273[10]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( i1279[i + 0] );
  }
  i1272.clipMuscleConstant = i1278
  i1272.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1273[11], i1272.clipBindingConstant)
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1283 = data
  i1282.path = i1283[0]
  i1282.hash = i1283[1]
  i1282.componentType = i1283[2]
  i1282.property = i1283[3]
  i1282.keys = i1283[4]
  var i1285 = i1283[5]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1285[i + 0]) );
  }
  i1282.objectReferenceKeys = i1284
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1289 = data
  i1288.time = i1289[0]
  request.r(i1289[1], i1289[2], 0, i1288, 'value')
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1293 = data
  i1292.functionName = i1293[0]
  i1292.floatParameter = i1293[1]
  i1292.intParameter = i1293[2]
  i1292.stringParameter = i1293[3]
  request.r(i1293[4], i1293[5], 0, i1292, 'objectReferenceParameter')
  i1292.time = i1293[6]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1295 = data
  i1294.center = new pc.Vec3( i1295[0], i1295[1], i1295[2] )
  i1294.extends = new pc.Vec3( i1295[3], i1295[4], i1295[5] )
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( i1301[i + 0] );
  }
  i1298.genericBindings = i1300
  var i1303 = i1299[1]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( i1303[i + 0] );
  }
  i1298.pptrCurveMapping = i1302
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1305 = data
  i1304.name = i1305[0]
  var i1307 = i1305[1]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1307[i + 0]) );
  }
  i1304.layers = i1306
  var i1309 = i1305[2]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1309[i + 0]) );
  }
  i1304.parameters = i1308
  i1304.animationClips = i1305[3]
  i1304.avatarUnsupported = i1305[4]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.defaultWeight = i1313[1]
  i1312.blendingMode = i1313[2]
  i1312.avatarMask = i1313[3]
  i1312.syncedLayerIndex = i1313[4]
  i1312.syncedLayerAffectsTiming = !!i1313[5]
  i1312.syncedLayers = i1313[6]
  i1312.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1313[7], i1312.stateMachine)
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.name = i1315[1]
  i1314.path = i1315[2]
  var i1317 = i1315[3]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1317[i + 0]) );
  }
  i1314.states = i1316
  var i1319 = i1315[4]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1319[i + 0]) );
  }
  i1314.machines = i1318
  var i1321 = i1315[5]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1321[i + 0]) );
  }
  i1314.entryStateTransitions = i1320
  var i1323 = i1315[6]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1323[i + 0]) );
  }
  i1314.exitStateTransitions = i1322
  var i1325 = i1315[7]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1325[i + 0]) );
  }
  i1314.anyStateTransitions = i1324
  i1314.defaultStateId = i1315[8]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1329 = data
  i1328.id = i1329[0]
  i1328.name = i1329[1]
  i1328.cycleOffset = i1329[2]
  i1328.cycleOffsetParameter = i1329[3]
  i1328.cycleOffsetParameterActive = !!i1329[4]
  i1328.mirror = !!i1329[5]
  i1328.mirrorParameter = i1329[6]
  i1328.mirrorParameterActive = !!i1329[7]
  i1328.motionId = i1329[8]
  i1328.nameHash = i1329[9]
  i1328.fullPathHash = i1329[10]
  i1328.speed = i1329[11]
  i1328.speedParameter = i1329[12]
  i1328.speedParameterActive = !!i1329[13]
  i1328.tag = i1329[14]
  i1328.tagHash = i1329[15]
  i1328.writeDefaultValues = !!i1329[16]
  var i1331 = i1329[17]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 2, i1330, '')
  }
  i1328.behaviours = i1330
  var i1333 = i1329[18]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1333[i + 0]) );
  }
  i1328.transitions = i1332
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1339 = data
  i1338.fullPath = i1339[0]
  i1338.canTransitionToSelf = !!i1339[1]
  i1338.duration = i1339[2]
  i1338.exitTime = i1339[3]
  i1338.hasExitTime = !!i1339[4]
  i1338.hasFixedDuration = !!i1339[5]
  i1338.interruptionSource = i1339[6]
  i1338.offset = i1339[7]
  i1338.orderedInterruption = !!i1339[8]
  i1338.destinationStateId = i1339[9]
  i1338.isExit = !!i1339[10]
  i1338.mute = !!i1339[11]
  i1338.solo = !!i1339[12]
  var i1341 = i1339[13]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1341[i + 0]) );
  }
  i1338.conditions = i1340
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1345 = data
  i1344.mode = i1345[0]
  i1344.parameter = i1345[1]
  i1344.threshold = i1345[2]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1351 = data
  i1350.destinationStateId = i1351[0]
  i1350.isExit = !!i1351[1]
  i1350.mute = !!i1351[2]
  i1350.solo = !!i1351[3]
  var i1353 = i1351[4]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1353[i + 0]) );
  }
  i1350.conditions = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1357 = data
  i1356.defaultBool = !!i1357[0]
  i1356.defaultFloat = i1357[1]
  i1356.defaultInt = i1357[2]
  i1356.name = i1357[3]
  i1356.nameHash = i1357[4]
  i1356.type = i1357[5]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1361[i + 0]) );
  }
  i1358.files = i1360
  i1358.componentToPrefabIds = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1365 = data
  i1364.path = i1365[0]
  request.r(i1365[1], i1365[2], 0, i1364, 'unityObject')
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1369[i + 0]) );
  }
  i1366.scriptsExecutionOrder = i1368
  var i1371 = i1367[1]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1371[i + 0]) );
  }
  i1366.sortingLayers = i1370
  var i1373 = i1367[2]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1373[i + 0]) );
  }
  i1366.cullingLayers = i1372
  i1366.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1367[3], i1366.timeSettings)
  i1366.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1367[4], i1366.physicsSettings)
  i1366.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1367[5], i1366.physics2DSettings)
  i1366.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1367[6], i1366.qualitySettings)
  i1366.enableRealtimeShadows = !!i1367[7]
  i1366.enableAutoInstancing = !!i1367[8]
  i1366.enableStaticBatching = !!i1367[9]
  i1366.enableDynamicBatching = !!i1367[10]
  i1366.lightmapEncodingQuality = i1367[11]
  i1366.desiredColorSpace = i1367[12]
  var i1375 = i1367[13]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1366.allTags = i1374
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1379 = data
  i1378.name = i1379[0]
  i1378.value = i1379[1]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1383 = data
  i1382.id = i1383[0]
  i1382.name = i1383[1]
  i1382.value = i1383[2]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1387 = data
  i1386.id = i1387[0]
  i1386.name = i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1389 = data
  i1388.fixedDeltaTime = i1389[0]
  i1388.maximumDeltaTime = i1389[1]
  i1388.timeScale = i1389[2]
  i1388.maximumParticleTimestep = i1389[3]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1391 = data
  i1390.gravity = new pc.Vec3( i1391[0], i1391[1], i1391[2] )
  i1390.defaultSolverIterations = i1391[3]
  i1390.bounceThreshold = i1391[4]
  i1390.autoSyncTransforms = !!i1391[5]
  i1390.autoSimulation = !!i1391[6]
  var i1393 = i1391[7]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1393[i + 0]) );
  }
  i1390.collisionMatrix = i1392
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1397 = data
  i1396.enabled = !!i1397[0]
  i1396.layerId = i1397[1]
  i1396.otherLayerId = i1397[2]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1399 = data
  request.r(i1399[0], i1399[1], 0, i1398, 'material')
  i1398.gravity = new pc.Vec2( i1399[2], i1399[3] )
  i1398.positionIterations = i1399[4]
  i1398.velocityIterations = i1399[5]
  i1398.velocityThreshold = i1399[6]
  i1398.maxLinearCorrection = i1399[7]
  i1398.maxAngularCorrection = i1399[8]
  i1398.maxTranslationSpeed = i1399[9]
  i1398.maxRotationSpeed = i1399[10]
  i1398.baumgarteScale = i1399[11]
  i1398.baumgarteTOIScale = i1399[12]
  i1398.timeToSleep = i1399[13]
  i1398.linearSleepTolerance = i1399[14]
  i1398.angularSleepTolerance = i1399[15]
  i1398.defaultContactOffset = i1399[16]
  i1398.autoSimulation = !!i1399[17]
  i1398.queriesHitTriggers = !!i1399[18]
  i1398.queriesStartInColliders = !!i1399[19]
  i1398.callbacksOnDisable = !!i1399[20]
  i1398.reuseCollisionCallbacks = !!i1399[21]
  i1398.autoSyncTransforms = !!i1399[22]
  var i1401 = i1399[23]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1401[i + 0]) );
  }
  i1398.collisionMatrix = i1400
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.layerId = i1405[1]
  i1404.otherLayerId = i1405[2]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1407 = data
  var i1409 = i1407[0]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1409[i + 0]) );
  }
  i1406.qualityLevels = i1408
  var i1411 = i1407[1]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( i1411[i + 0] );
  }
  i1406.names = i1410
  i1406.shadows = i1407[2]
  i1406.anisotropicFiltering = i1407[3]
  i1406.antiAliasing = i1407[4]
  i1406.lodBias = i1407[5]
  i1406.shadowCascades = i1407[6]
  i1406.shadowDistance = i1407[7]
  i1406.shadowmaskMode = i1407[8]
  i1406.shadowProjection = i1407[9]
  i1406.shadowResolution = i1407[10]
  i1406.softParticles = !!i1407[11]
  i1406.softVegetation = !!i1407[12]
  i1406.activeColorSpace = i1407[13]
  i1406.desiredColorSpace = i1407[14]
  i1406.masterTextureLimit = i1407[15]
  i1406.maxQueuedFrames = i1407[16]
  i1406.particleRaycastBudget = i1407[17]
  i1406.pixelLightCount = i1407[18]
  i1406.realtimeReflectionProbes = !!i1407[19]
  i1406.shadowCascade2Split = i1407[20]
  i1406.shadowCascade4Split = new pc.Vec3( i1407[21], i1407[22], i1407[23] )
  i1406.streamingMipmapsActive = !!i1407[24]
  i1406.vSyncCount = i1407[25]
  i1406.asyncUploadBufferSize = i1407[26]
  i1406.asyncUploadTimeSlice = i1407[27]
  i1406.billboardsFaceCameraPosition = !!i1407[28]
  i1406.shadowNearPlaneOffset = i1407[29]
  i1406.streamingMipmapsMemoryBudget = i1407[30]
  i1406.maximumLODLevel = i1407[31]
  i1406.streamingMipmapsAddAllCameras = !!i1407[32]
  i1406.streamingMipmapsMaxLevelReduction = i1407[33]
  i1406.streamingMipmapsRenderersPerFrame = i1407[34]
  i1406.resolutionScalingFixedDPIFactor = i1407[35]
  i1406.streamingMipmapsMaxFileIORequests = i1407[36]
  i1406.currentQualityLevel = i1407[37]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1415 = data
  i1414.name = i1415[0]
  var i1417 = i1415[1]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1417[i + 0]) );
  }
  i1414.tos = i1416
  var i1419 = i1415[2]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1414.constant = i1418
  i1414.isValid = !!i1415[3]
  i1414.isHuman = !!i1415[4]
  i1414.hasRootMotion = !!i1415[5]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1423 = data
  i1422.hash = i1423[0]
  i1422.path = i1423[1]
  return i1422
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

Deserializers.creativeName = "Congthanh";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1817";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3258";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection";

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

Deserializers.buildID = "4d56f0b1-eb3e-4045-8b11-9456afcdc7ce";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

