var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointSpring' )
  var i671 = data
  i670.spring = i671[0]
  i670.damper = i671[1]
  i670.targetPosition = i671[2]
  return i670
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointMotor' )
  var i673 = data
  i672.m_TargetVelocity = i673[0]
  i672.m_Force = i673[1]
  i672.m_FreeSpin = i673[2]
  return i672
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointLimits' )
  var i675 = data
  i674.m_Min = i675[0]
  i674.m_Max = i675[1]
  i674.m_Bounciness = i675[2]
  i674.m_BounceMinVelocity = i675[3]
  i674.m_ContactDistance = i675[4]
  i674.minBounce = i675[5]
  i674.maxBounce = i675[6]
  return i674
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointDrive' )
  var i677 = data
  i676.m_PositionSpring = i677[0]
  i676.m_PositionDamper = i677[1]
  i676.m_MaximumForce = i677[2]
  i676.m_UseAcceleration = i677[3]
  return i676
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i679 = data
  i678.m_Spring = i679[0]
  i678.m_Damper = i679[1]
  return i678
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i681 = data
  i680.m_Limit = i681[0]
  i680.m_Bounciness = i681[1]
  i680.m_ContactDistance = i681[2]
  return i680
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i683 = data
  i682.m_ExtremumSlip = i683[0]
  i682.m_ExtremumValue = i683[1]
  i682.m_AsymptoteSlip = i683[2]
  i682.m_AsymptoteValue = i683[3]
  i682.m_Stiffness = i683[4]
  return i682
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i685 = data
  i684.m_LowerAngle = i685[0]
  i684.m_UpperAngle = i685[1]
  return i684
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i687 = data
  i686.m_MotorSpeed = i687[0]
  i686.m_MaximumMotorTorque = i687[1]
  return i686
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i689 = data
  i688.m_DampingRatio = i689[0]
  i688.m_Frequency = i689[1]
  i688.m_Angle = i689[2]
  return i688
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i691 = data
  i690.m_LowerTranslation = i691[0]
  i690.m_UpperTranslation = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i693 = data
  i692.name = i693[0]
  i692.halfPrecision = !!i693[1]
  i692.useSimplification = !!i693[2]
  i692.useUInt32IndexFormat = !!i693[3]
  i692.vertexCount = i693[4]
  i692.aabb = i693[5]
  var i695 = i693[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( !!i695[i + 0] );
  }
  i692.streams = i694
  i692.vertices = i693[7]
  var i697 = i693[8]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i697[i + 0]) );
  }
  i692.subMeshes = i696
  var i699 = i693[9]
  var i698 = []
  for(var i = 0; i < i699.length; i += 16) {
    i698.push( new pc.Mat4().setData(i699[i + 0], i699[i + 1], i699[i + 2], i699[i + 3],  i699[i + 4], i699[i + 5], i699[i + 6], i699[i + 7],  i699[i + 8], i699[i + 9], i699[i + 10], i699[i + 11],  i699[i + 12], i699[i + 13], i699[i + 14], i699[i + 15]) );
  }
  i692.bindposes = i698
  var i701 = i693[10]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i701[i + 0]) );
  }
  i692.blendShapes = i700
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i707 = data
  i706.triangles = i707[0]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i713 = data
  i712.name = i713[0]
  var i715 = i713[1]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i715[i + 0]) );
  }
  i712.frames = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i716 = root || new pc.UnityMaterial()
  var i717 = data
  i716.name = i717[0]
  request.r(i717[1], i717[2], 0, i716, 'shader')
  i716.renderQueue = i717[3]
  i716.enableInstancing = !!i717[4]
  var i719 = i717[5]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i719[i + 0]) );
  }
  i716.floatParameters = i718
  var i721 = i717[6]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i721[i + 0]) );
  }
  i716.colorParameters = i720
  var i723 = i717[7]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i723[i + 0]) );
  }
  i716.vectorParameters = i722
  var i725 = i717[8]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i725[i + 0]) );
  }
  i716.textureParameters = i724
  var i727 = i717[9]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i727[i + 0]) );
  }
  i716.materialFlags = i726
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i731 = data
  i730.name = i731[0]
  i730.value = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i735 = data
  i734.name = i735[0]
  i734.value = new pc.Color(i735[1], i735[2], i735[3], i735[4])
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = new pc.Vec4( i739[1], i739[2], i739[3], i739[4] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i743 = data
  i742.name = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'value')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i747 = data
  i746.name = i747[0]
  i746.enabled = !!i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i749 = data
  i748.name = i749[0]
  i748.width = i749[1]
  i748.height = i749[2]
  i748.mipmapCount = i749[3]
  i748.anisoLevel = i749[4]
  i748.filterMode = i749[5]
  i748.hdr = !!i749[6]
  i748.format = i749[7]
  i748.wrapMode = i749[8]
  i748.alphaIsTransparency = !!i749[9]
  i748.alphaSource = i749[10]
  i748.graphicsFormat = i749[11]
  i748.sRGBTexture = !!i749[12]
  i748.desiredColorSpace = i749[13]
  i748.wrapU = i749[14]
  i748.wrapV = i749[15]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i751 = data
  i750.position = new pc.Vec3( i751[0], i751[1], i751[2] )
  i750.scale = new pc.Vec3( i751[3], i751[4], i751[5] )
  i750.rotation = new pc.Quat(i751[6], i751[7], i751[8], i751[9])
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'sharedMesh')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'additionalVertexStreams')
  i754.enabled = !!i755[2]
  request.r(i755[3], i755[4], 0, i754, 'sharedMaterial')
  var i757 = i755[5]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.sharedMaterials = i756
  i754.receiveShadows = !!i755[6]
  i754.shadowCastingMode = i755[7]
  i754.sortingLayerID = i755[8]
  i754.sortingOrder = i755[9]
  i754.lightmapIndex = i755[10]
  i754.lightmapSceneIndex = i755[11]
  i754.lightmapScaleOffset = new pc.Vec4( i755[12], i755[13], i755[14], i755[15] )
  i754.lightProbeUsage = i755[16]
  i754.reflectionProbeUsage = i755[17]
  return i754
}

Deserializers["Block"] = function (request, data, root) {
  var i760 = root || request.c( 'Block' )
  var i761 = data
  i760.color = i761[0]
  i760.isAlreadyDestroyed = !!i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i763 = data
  i762.center = new pc.Vec3( i763[0], i763[1], i763[2] )
  i762.size = new pc.Vec3( i763[3], i763[4], i763[5] )
  i762.enabled = !!i763[6]
  i762.isTrigger = !!i763[7]
  request.r(i763[8], i763[9], 0, i762, 'material')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i765 = data
  i764.name = i765[0]
  i764.tagId = i765[1]
  i764.enabled = !!i765[2]
  i764.isStatic = !!i765[3]
  i764.layer = i765[4]
  return i764
}

Deserializers["PigComponent"] = function (request, data, root) {
  var i766 = root || request.c( 'PigComponent' )
  var i767 = data
  i766.color = i767[0]
  i766.Bullet = i767[1]
  i766.laneIndex = i767[2]
  request.r(i767[3], i767[4], 0, i766, 'rayCastPoint')
  request.r(i767[5], i767[6], 0, i766, 'rb')
  i766.isOnTop = !!i767[7]
  i766.isOnBelt = !!i767[8]
  i766.currentState = i767[9]
  i766.blockLayer = UnityEngine.LayerMask.FromIntegerValue( i767[10] )
  request.r(i767[11], i767[12], 0, i766, 'bulletText')
  request.r(i767[13], i767[14], 0, i766, 'pigModel')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i769 = data
  i768.mass = i769[0]
  i768.drag = i769[1]
  i768.angularDrag = i769[2]
  i768.useGravity = !!i769[3]
  i768.isKinematic = !!i769[4]
  i768.constraints = i769[5]
  i768.maxAngularVelocity = i769[6]
  i768.collisionDetectionMode = i769[7]
  i768.interpolation = i769[8]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i771 = data
  i770.textureMode = i771[0]
  i770.alignment = i771[1]
  i770.widthCurve = new pc.AnimationCurve( { keys_flow: i771[2] } )
  i770.colorGradient = i771[3] ? new pc.ColorGradient(i771[3][0], i771[3][1], i771[3][2]) : null
  var i773 = i771[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 3) {
    i772.push( new pc.Vec3( i773[i + 0], i773[i + 1], i773[i + 2] ) );
  }
  i770.positions = i772
  i770.positionCount = i771[5]
  i770.widthMultiplier = i771[6]
  i770.startWidth = i771[7]
  i770.endWidth = i771[8]
  i770.numCornerVertices = i771[9]
  i770.numCapVertices = i771[10]
  i770.useWorldSpace = !!i771[11]
  i770.loop = !!i771[12]
  i770.startColor = new pc.Color(i771[13], i771[14], i771[15], i771[16])
  i770.endColor = new pc.Color(i771[17], i771[18], i771[19], i771[20])
  i770.generateLightingData = !!i771[21]
  i770.enabled = !!i771[22]
  request.r(i771[23], i771[24], 0, i770, 'sharedMaterial')
  var i775 = i771[25]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i770.sharedMaterials = i774
  i770.receiveShadows = !!i771[26]
  i770.shadowCastingMode = i771[27]
  i770.sortingLayerID = i771[28]
  i770.sortingOrder = i771[29]
  i770.lightmapIndex = i771[30]
  i770.lightmapSceneIndex = i771[31]
  i770.lightmapScaleOffset = new pc.Vec4( i771[32], i771[33], i771[34], i771[35] )
  i770.lightProbeUsage = i771[36]
  i770.reflectionProbeUsage = i771[37]
  return i770
}

Deserializers["WavyLineRenderer"] = function (request, data, root) {
  var i778 = root || request.c( 'WavyLineRenderer' )
  var i779 = data
  i778.waveSegments = i779[0]
  i778.waveAmplitudeMin = i779[1]
  i778.waveAmplitudeMax = i779[2]
  i778.amplitudeChangeSpeed = i779[3]
  i778.waveFrequency = i779[4]
  i778.waveSpeed = i779[5]
  request.r(i779[6], i779[7], 0, i778, 'lineMaterial')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'animatorController')
  request.r(i781[2], i781[3], 0, i780, 'avatar')
  i780.updateMode = i781[4]
  i780.hasTransformHierarchy = !!i781[5]
  i780.applyRootMotion = !!i781[6]
  var i783 = i781[7]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i780.humanBones = i782
  i780.enabled = !!i781[8]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'sharedMesh')
  var i789 = i787[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.bones = i788
  i786.updateWhenOffscreen = !!i787[3]
  i786.localBounds = i787[4]
  request.r(i787[5], i787[6], 0, i786, 'rootBone')
  var i791 = i787[7]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i791[i + 0]) );
  }
  i786.blendShapesWeights = i790
  i786.enabled = !!i787[8]
  request.r(i787[9], i787[10], 0, i786, 'sharedMaterial')
  var i793 = i787[11]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i786.sharedMaterials = i792
  i786.receiveShadows = !!i787[12]
  i786.shadowCastingMode = i787[13]
  i786.sortingLayerID = i787[14]
  i786.sortingOrder = i787[15]
  i786.lightmapIndex = i787[16]
  i786.lightmapSceneIndex = i787[17]
  i786.lightmapScaleOffset = new pc.Vec4( i787[18], i787[19], i787[20], i787[21] )
  i786.lightProbeUsage = i787[22]
  i786.reflectionProbeUsage = i787[23]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i797 = data
  i796.weight = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i799 = data
  i798.pivot = new pc.Vec2( i799[0], i799[1] )
  i798.anchorMin = new pc.Vec2( i799[2], i799[3] )
  i798.anchorMax = new pc.Vec2( i799[4], i799[5] )
  i798.sizeDelta = new pc.Vec2( i799[6], i799[7] )
  i798.anchoredPosition3D = new pc.Vec3( i799[8], i799[9], i799[10] )
  i798.rotation = new pc.Quat(i799[11], i799[12], i799[13], i799[14])
  i798.scale = new pc.Vec3( i799[15], i799[16], i799[17] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i801 = data
  i800.planeDistance = i801[0]
  i800.referencePixelsPerUnit = i801[1]
  i800.isFallbackOverlay = !!i801[2]
  i800.renderMode = i801[3]
  i800.renderOrder = i801[4]
  i800.sortingLayerName = i801[5]
  i800.sortingOrder = i801[6]
  i800.scaleFactor = i801[7]
  request.r(i801[8], i801[9], 0, i800, 'worldCamera')
  i800.overrideSorting = !!i801[10]
  i800.pixelPerfect = !!i801[11]
  i800.targetDisplay = i801[12]
  i800.overridePixelPerfect = !!i801[13]
  i800.enabled = !!i801[14]
  return i800
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i803 = data
  i802.m_UiScaleMode = i803[0]
  i802.m_ReferencePixelsPerUnit = i803[1]
  i802.m_ScaleFactor = i803[2]
  i802.m_ReferenceResolution = new pc.Vec2( i803[3], i803[4] )
  i802.m_ScreenMatchMode = i803[5]
  i802.m_MatchWidthOrHeight = i803[6]
  i802.m_PhysicalUnit = i803[7]
  i802.m_FallbackScreenDPI = i803[8]
  i802.m_DefaultSpriteDPI = i803[9]
  i802.m_DynamicPixelsPerUnit = i803[10]
  i802.m_PresetInfoIsWorld = !!i803[11]
  return i802
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i805 = data
  i804.m_IgnoreReversedGraphics = !!i805[0]
  i804.m_BlockingObjects = i805[1]
  i804.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i805[2] )
  return i804
}

Deserializers["BillboardUI"] = function (request, data, root) {
  var i806 = root || request.c( 'BillboardUI' )
  var i807 = data
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i809 = data
  i808.cullTransparentMesh = !!i809[0]
  return i808
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i811 = data
  i810.m_hasFontAssetChanged = !!i811[0]
  request.r(i811[1], i811[2], 0, i810, 'm_baseMaterial')
  i810.m_maskOffset = new pc.Vec4( i811[3], i811[4], i811[5], i811[6] )
  i810.m_text = i811[7]
  i810.m_isRightToLeft = !!i811[8]
  request.r(i811[9], i811[10], 0, i810, 'm_fontAsset')
  request.r(i811[11], i811[12], 0, i810, 'm_sharedMaterial')
  var i813 = i811[13]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.m_fontSharedMaterials = i812
  request.r(i811[14], i811[15], 0, i810, 'm_fontMaterial')
  var i815 = i811[16]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i810.m_fontMaterials = i814
  i810.m_fontColor32 = UnityEngine.Color32.ConstructColor(i811[17], i811[18], i811[19], i811[20])
  i810.m_fontColor = new pc.Color(i811[21], i811[22], i811[23], i811[24])
  i810.m_enableVertexGradient = !!i811[25]
  i810.m_colorMode = i811[26]
  i810.m_fontColorGradient = request.d('TMPro.VertexGradient', i811[27], i810.m_fontColorGradient)
  request.r(i811[28], i811[29], 0, i810, 'm_fontColorGradientPreset')
  request.r(i811[30], i811[31], 0, i810, 'm_spriteAsset')
  i810.m_tintAllSprites = !!i811[32]
  request.r(i811[33], i811[34], 0, i810, 'm_StyleSheet')
  i810.m_TextStyleHashCode = i811[35]
  i810.m_overrideHtmlColors = !!i811[36]
  i810.m_faceColor = UnityEngine.Color32.ConstructColor(i811[37], i811[38], i811[39], i811[40])
  i810.m_fontSize = i811[41]
  i810.m_fontSizeBase = i811[42]
  i810.m_fontWeight = i811[43]
  i810.m_enableAutoSizing = !!i811[44]
  i810.m_fontSizeMin = i811[45]
  i810.m_fontSizeMax = i811[46]
  i810.m_fontStyle = i811[47]
  i810.m_HorizontalAlignment = i811[48]
  i810.m_VerticalAlignment = i811[49]
  i810.m_textAlignment = i811[50]
  i810.m_characterSpacing = i811[51]
  i810.m_characterHorizontalScale = i811[52]
  i810.m_wordSpacing = i811[53]
  i810.m_lineSpacing = i811[54]
  i810.m_lineSpacingMax = i811[55]
  i810.m_paragraphSpacing = i811[56]
  i810.m_charWidthMaxAdj = i811[57]
  i810.m_TextWrappingMode = i811[58]
  i810.m_wordWrappingRatios = i811[59]
  i810.m_overflowMode = i811[60]
  request.r(i811[61], i811[62], 0, i810, 'm_linkedTextComponent')
  request.r(i811[63], i811[64], 0, i810, 'parentLinkedComponent')
  i810.m_enableKerning = !!i811[65]
  var i817 = i811[66]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(i817[i + 0]);
  }
  i810.m_ActiveFontFeatures = i816
  i810.m_enableExtraPadding = !!i811[67]
  i810.checkPaddingRequired = !!i811[68]
  i810.m_isRichText = !!i811[69]
  i810.m_parseCtrlCharacters = !!i811[70]
  i810.m_isOrthographic = !!i811[71]
  i810.m_isCullingEnabled = !!i811[72]
  i810.m_horizontalMapping = i811[73]
  i810.m_verticalMapping = i811[74]
  i810.m_uvLineOffset = i811[75]
  i810.m_geometrySortingOrder = i811[76]
  i810.m_IsTextObjectScaleStatic = !!i811[77]
  i810.m_VertexBufferAutoSizeReduction = !!i811[78]
  i810.m_useMaxVisibleDescender = !!i811[79]
  i810.m_pageToDisplay = i811[80]
  i810.m_margin = new pc.Vec4( i811[81], i811[82], i811[83], i811[84] )
  i810.m_isUsingLegacyAnimationComponent = !!i811[85]
  i810.m_isVolumetricText = !!i811[86]
  request.r(i811[87], i811[88], 0, i810, 'm_Material')
  i810.m_EmojiFallbackSupport = !!i811[89]
  i810.m_Maskable = !!i811[90]
  i810.m_Color = new pc.Color(i811[91], i811[92], i811[93], i811[94])
  i810.m_RaycastTarget = !!i811[95]
  i810.m_RaycastPadding = new pc.Vec4( i811[96], i811[97], i811[98], i811[99] )
  return i810
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.VertexGradient' )
  var i819 = data
  i818.topLeft = new pc.Color(i819[0], i819[1], i819[2], i819[3])
  i818.topRight = new pc.Color(i819[4], i819[5], i819[6], i819[7])
  i818.bottomLeft = new pc.Color(i819[8], i819[9], i819[10], i819[11])
  i818.bottomRight = new pc.Color(i819[12], i819[13], i819[14], i819[15])
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i825 = data
  i824.weight = i825[0]
  i824.vertices = i825[1]
  i824.normals = i825[2]
  i824.tangents = i825[3]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i827 = data
  i826.name = i827[0]
  i826.atlasId = i827[1]
  i826.mipmapCount = i827[2]
  i826.hdr = !!i827[3]
  i826.size = i827[4]
  i826.anisoLevel = i827[5]
  i826.filterMode = i827[6]
  var i829 = i827[7]
  var i828 = []
  for(var i = 0; i < i829.length; i += 4) {
    i828.push( UnityEngine.Rect.MinMaxRect(i829[i + 0], i829[i + 1], i829[i + 2], i829[i + 3]) );
  }
  i826.rects = i828
  i826.wrapU = i827[8]
  i826.wrapV = i827[9]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i833 = data
  i832.name = i833[0]
  i832.index = i833[1]
  i832.startup = !!i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i835 = data
  i834.aspect = i835[0]
  i834.orthographic = !!i835[1]
  i834.orthographicSize = i835[2]
  i834.backgroundColor = new pc.Color(i835[3], i835[4], i835[5], i835[6])
  i834.nearClipPlane = i835[7]
  i834.farClipPlane = i835[8]
  i834.fieldOfView = i835[9]
  i834.depth = i835[10]
  i834.clearFlags = i835[11]
  i834.cullingMask = i835[12]
  i834.rect = i835[13]
  request.r(i835[14], i835[15], 0, i834, 'targetTexture')
  i834.usePhysicalProperties = !!i835[16]
  i834.focalLength = i835[17]
  i834.sensorSize = new pc.Vec2( i835[18], i835[19] )
  i834.lensShift = new pc.Vec2( i835[20], i835[21] )
  i834.gateFit = i835[22]
  i834.commandBufferCount = i835[23]
  i834.cameraType = i835[24]
  i834.enabled = !!i835[25]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i837 = data
  i836.type = i837[0]
  i836.color = new pc.Color(i837[1], i837[2], i837[3], i837[4])
  i836.cullingMask = i837[5]
  i836.intensity = i837[6]
  i836.range = i837[7]
  i836.spotAngle = i837[8]
  i836.shadows = i837[9]
  i836.shadowNormalBias = i837[10]
  i836.shadowBias = i837[11]
  i836.shadowStrength = i837[12]
  i836.shadowResolution = i837[13]
  i836.lightmapBakeType = i837[14]
  i836.renderMode = i837[15]
  request.r(i837[16], i837[17], 0, i836, 'cookie')
  i836.cookieSize = i837[18]
  i836.shadowNearPlane = i837[19]
  i836.occlusionMaskChannel = i837[20]
  i836.enabled = !!i837[21]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'sharedMesh')
  i838.convex = !!i839[2]
  i838.enabled = !!i839[3]
  i838.isTrigger = !!i839[4]
  request.r(i839[5], i839[6], 0, i838, 'material')
  return i838
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'm_FirstSelected')
  i840.m_sendNavigationEvents = !!i841[2]
  i840.m_DragThreshold = i841[3]
  return i840
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i843 = data
  i842.m_MoveRepeatDelay = i843[0]
  i842.m_MoveRepeatRate = i843[1]
  request.r(i843[2], i843[3], 0, i842, 'm_XRTrackingOrigin')
  request.r(i843[4], i843[5], 0, i842, 'm_ActionsAsset')
  request.r(i843[6], i843[7], 0, i842, 'm_PointAction')
  request.r(i843[8], i843[9], 0, i842, 'm_MoveAction')
  request.r(i843[10], i843[11], 0, i842, 'm_SubmitAction')
  request.r(i843[12], i843[13], 0, i842, 'm_CancelAction')
  request.r(i843[14], i843[15], 0, i842, 'm_LeftClickAction')
  request.r(i843[16], i843[17], 0, i842, 'm_MiddleClickAction')
  request.r(i843[18], i843[19], 0, i842, 'm_RightClickAction')
  request.r(i843[20], i843[21], 0, i842, 'm_ScrollWheelAction')
  request.r(i843[22], i843[23], 0, i842, 'm_TrackedDevicePositionAction')
  request.r(i843[24], i843[25], 0, i842, 'm_TrackedDeviceOrientationAction')
  i842.m_DeselectOnBackgroundClick = !!i843[26]
  i842.m_PointerBehavior = i843[27]
  i842.m_CursorLockBehavior = i843[28]
  i842.m_ScrollDeltaPerTick = i843[29]
  i842.m_SendPointerHoverToParent = !!i843[30]
  return i842
}

Deserializers["FlashObject"] = function (request, data, root) {
  var i844 = root || request.c( 'FlashObject' )
  var i845 = data
  i844.flashSpeed = i845[0]
  i844.minAlpha = i845[1]
  i844.maxAlpha = i845[2]
  i844.flashDuration = i845[3]
  return i844
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i846 = root || request.c( 'Conveyor' )
  var i847 = data
  return i846
}

Deserializers["GameManager"] = function (request, data, root) {
  var i848 = root || request.c( 'GameManager' )
  var i849 = data
  return i848
}

Deserializers["SpawnerManager"] = function (request, data, root) {
  var i850 = root || request.c( 'SpawnerManager' )
  var i851 = data
  i850.currentLevel = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'blockPrefab')
  request.r(i851[3], i851[4], 0, i850, 'blockSpawnPoint')
  request.r(i851[5], i851[6], 0, i850, 'blockGroup')
  request.r(i851[7], i851[8], 0, i850, 'pigSpawnPoint')
  var i853 = i851[9]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('LevelDataSO')))
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 1, i852, '')
  }
  i850.Levels = i852
  i850.blockSpacing = i851[10]
  request.r(i851[11], i851[12], 0, i850, 'pigSpawnPos')
  request.r(i851[13], i851[14], 0, i850, 'pigPrefab')
  var i855 = i851[15]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i850.allWaypoints = i854
  var i857 = i851[16]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 1, i856, '')
  }
  i850.queuePos = i856
  i850._straightSlot = i851[17]
  i850._maxstraightSlot = i851[18]
  i850.speedOnStraight = i851[19]
  i850.speedOnCurve = i851[20]
  i850.jumpToQueueSpeed = i851[21]
  return i850
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.Image' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_Sprite')
  i862.m_Type = i863[2]
  i862.m_PreserveAspect = !!i863[3]
  i862.m_FillCenter = !!i863[4]
  i862.m_FillMethod = i863[5]
  i862.m_FillAmount = i863[6]
  i862.m_FillClockwise = !!i863[7]
  i862.m_FillOrigin = i863[8]
  i862.m_UseSpriteMesh = !!i863[9]
  i862.m_PixelsPerUnitMultiplier = i863[10]
  request.r(i863[11], i863[12], 0, i862, 'm_Material')
  i862.m_Maskable = !!i863[13]
  i862.m_Color = new pc.Color(i863[14], i863[15], i863[16], i863[17])
  i862.m_RaycastTarget = !!i863[18]
  i862.m_RaycastPadding = new pc.Vec4( i863[19], i863[20], i863[21], i863[22] )
  return i862
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.Button' )
  var i865 = data
  i864.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i865[0], i864.m_OnClick)
  i864.m_Navigation = request.d('UnityEngine.UI.Navigation', i865[1], i864.m_Navigation)
  i864.m_Transition = i865[2]
  i864.m_Colors = request.d('UnityEngine.UI.ColorBlock', i865[3], i864.m_Colors)
  i864.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i865[4], i864.m_SpriteState)
  i864.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i865[5], i864.m_AnimationTriggers)
  i864.m_Interactable = !!i865[6]
  request.r(i865[7], i865[8], 0, i864, 'm_TargetGraphic')
  return i864
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i867 = data
  i866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i867[0], i866.m_PersistentCalls)
  return i866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('UnityEngine.Events.PersistentCall', i871[i + 0]));
  }
  i868.m_Calls = i870
  return i868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'm_Target')
  i874.m_TargetAssemblyTypeName = i875[2]
  i874.m_MethodName = i875[3]
  i874.m_Mode = i875[4]
  i874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i875[5], i874.m_Arguments)
  i874.m_CallState = i875[6]
  return i874
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_ObjectArgument')
  i876.m_ObjectArgumentAssemblyTypeName = i877[2]
  i876.m_IntArgument = i877[3]
  i876.m_FloatArgument = i877[4]
  i876.m_StringArgument = i877[5]
  i876.m_BoolArgument = !!i877[6]
  return i876
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i879 = data
  i878.m_Mode = i879[0]
  i878.m_WrapAround = !!i879[1]
  request.r(i879[2], i879[3], 0, i878, 'm_SelectOnUp')
  request.r(i879[4], i879[5], 0, i878, 'm_SelectOnDown')
  request.r(i879[6], i879[7], 0, i878, 'm_SelectOnLeft')
  request.r(i879[8], i879[9], 0, i878, 'm_SelectOnRight')
  return i878
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i881 = data
  i880.m_NormalColor = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.m_HighlightedColor = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  i880.m_PressedColor = new pc.Color(i881[8], i881[9], i881[10], i881[11])
  i880.m_SelectedColor = new pc.Color(i881[12], i881[13], i881[14], i881[15])
  i880.m_DisabledColor = new pc.Color(i881[16], i881[17], i881[18], i881[19])
  i880.m_ColorMultiplier = i881[20]
  i880.m_FadeDuration = i881[21]
  return i880
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_HighlightedSprite')
  request.r(i883[2], i883[3], 0, i882, 'm_PressedSprite')
  request.r(i883[4], i883[5], 0, i882, 'm_SelectedSprite')
  request.r(i883[6], i883[7], 0, i882, 'm_DisabledSprite')
  return i882
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i885 = data
  i884.m_NormalTrigger = i885[0]
  i884.m_HighlightedTrigger = i885[1]
  i884.m_PressedTrigger = i885[2]
  i884.m_SelectedTrigger = i885[3]
  i884.m_DisabledTrigger = i885[4]
  return i884
}

Deserializers["PlayerInput"] = function (request, data, root) {
  var i886 = root || request.c( 'PlayerInput' )
  var i887 = data
  i886.pigLayerMask = UnityEngine.LayerMask.FromIntegerValue( i887[0] )
  request.r(i887[1], i887[2], 0, i886, 'target')
  return i886
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i888 = root || request.c( 'SoundManager' )
  var i889 = data
  i888.musicVolume = i889[0]
  i888.sfxVolume = i889[1]
  request.r(i889[2], i889[3], 0, i888, 'musicAus')
  request.r(i889[4], i889[5], 0, i888, 'sfxAus')
  request.r(i889[6], i889[7], 0, i888, 'validCat')
  request.r(i889[8], i889[9], 0, i888, 'error')
  request.r(i889[10], i889[11], 0, i888, 'yarn')
  request.r(i889[12], i889[13], 0, i888, 'win')
  request.r(i889[14], i889[15], 0, i888, 'lose')
  request.r(i889[16], i889[17], 0, i888, 'invalidCat')
  var i891 = i889[18]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.backgroundMusics = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'clip')
  request.r(i895[2], i895[3], 0, i894, 'outputAudioMixerGroup')
  i894.playOnAwake = !!i895[4]
  i894.loop = !!i895[5]
  i894.time = i895[6]
  i894.volume = i895[7]
  i894.pitch = i895[8]
  i894.enabled = !!i895[9]
  return i894
}

Deserializers["UIManager"] = function (request, data, root) {
  var i896 = root || request.c( 'UIManager' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'straightSlotText')
  request.r(i897[2], i897[3], 0, i896, 'scoreText')
  request.r(i897[4], i897[5], 0, i896, 'gameOverPanel')
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i899 = data
  i898.ambientIntensity = i899[0]
  i898.reflectionIntensity = i899[1]
  i898.ambientMode = i899[2]
  i898.ambientLight = new pc.Color(i899[3], i899[4], i899[5], i899[6])
  i898.ambientSkyColor = new pc.Color(i899[7], i899[8], i899[9], i899[10])
  i898.ambientGroundColor = new pc.Color(i899[11], i899[12], i899[13], i899[14])
  i898.ambientEquatorColor = new pc.Color(i899[15], i899[16], i899[17], i899[18])
  i898.fogColor = new pc.Color(i899[19], i899[20], i899[21], i899[22])
  i898.fogEndDistance = i899[23]
  i898.fogStartDistance = i899[24]
  i898.fogDensity = i899[25]
  i898.fog = !!i899[26]
  request.r(i899[27], i899[28], 0, i898, 'skybox')
  i898.fogMode = i899[29]
  var i901 = i899[30]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i901[i + 0]) );
  }
  i898.lightmaps = i900
  i898.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i899[31], i898.lightProbes)
  i898.lightmapsMode = i899[32]
  i898.mixedBakeMode = i899[33]
  i898.environmentLightingMode = i899[34]
  i898.ambientProbe = new pc.SphericalHarmonicsL2(i899[35])
  i898.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i899[36])
  i898.useReferenceAmbientProbe = !!i899[37]
  request.r(i899[38], i899[39], 0, i898, 'customReflection')
  request.r(i899[40], i899[41], 0, i898, 'defaultReflection')
  i898.defaultReflectionMode = i899[42]
  i898.defaultReflectionResolution = i899[43]
  i898.sunLightObjectId = i899[44]
  i898.pixelLightCount = i899[45]
  i898.defaultReflectionHDR = !!i899[46]
  i898.hasLightDataAsset = !!i899[47]
  i898.hasManualGenerate = !!i899[48]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'lightmapColor')
  request.r(i905[2], i905[3], 0, i904, 'lightmapDirection')
  request.r(i905[4], i905[5], 0, i904, 'shadowMask')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i906 = root || new UnityEngine.LightProbes()
  var i907 = data
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i915[i + 0]));
  }
  i912.ShaderCompilationErrors = i914
  i912.name = i913[1]
  i912.guid = i913[2]
  var i917 = i913[3]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.shaderDefinedKeywords = i916
  var i919 = i913[4]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i919[i + 0]) );
  }
  i912.passes = i918
  var i921 = i913[5]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i921[i + 0]) );
  }
  i912.usePasses = i920
  var i923 = i913[6]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i923[i + 0]) );
  }
  i912.defaultParameterValues = i922
  request.r(i913[7], i913[8], 0, i912, 'unityFallbackShader')
  i912.readDepth = !!i913[9]
  i912.hasDepthOnlyPass = !!i913[10]
  i912.isCreatedByShaderGraph = !!i913[11]
  i912.disableBatching = !!i913[12]
  i912.compiled = !!i913[13]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i927 = data
  i926.shaderName = i927[0]
  i926.errorMessage = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i932 = root || new pc.UnityShaderPass()
  var i933 = data
  i932.id = i933[0]
  i932.subShaderIndex = i933[1]
  i932.name = i933[2]
  i932.passType = i933[3]
  i932.grabPassTextureName = i933[4]
  i932.usePass = !!i933[5]
  i932.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[6], i932.zTest)
  i932.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[7], i932.zWrite)
  i932.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[8], i932.culling)
  i932.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[9], i932.blending)
  i932.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[10], i932.alphaBlending)
  i932.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[11], i932.colorWriteMask)
  i932.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[12], i932.offsetUnits)
  i932.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[13], i932.offsetFactor)
  i932.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[14], i932.stencilRef)
  i932.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[15], i932.stencilReadMask)
  i932.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[16], i932.stencilWriteMask)
  i932.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[17], i932.stencilOp)
  i932.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[18], i932.stencilOpFront)
  i932.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[19], i932.stencilOpBack)
  var i935 = i933[20]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i935[i + 0]) );
  }
  i932.tags = i934
  var i937 = i933[21]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i932.passDefinedKeywords = i936
  var i939 = i933[22]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i939[i + 0]) );
  }
  i932.passDefinedKeywordGroups = i938
  var i941 = i933[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i941[i + 0]) );
  }
  i932.variants = i940
  var i943 = i933[24]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i943[i + 0]) );
  }
  i932.excludedVariants = i942
  i932.hasDepthReader = !!i933[25]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i945 = data
  i944.val = i945[0]
  i944.name = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i947 = data
  i946.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[0], i946.src)
  i946.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[1], i946.dst)
  i946.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[2], i946.op)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i949 = data
  i948.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[0], i948.pass)
  i948.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[1], i948.fail)
  i948.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[2], i948.zFail)
  i948.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[3], i948.comp)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i953 = data
  i952.name = i953[0]
  i952.value = i953[1]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i956.keywords = i958
  i956.hasDiscard = !!i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i963 = data
  i962.passId = i963[0]
  i962.subShaderIndex = i963[1]
  var i965 = i963[2]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i962.keywords = i964
  i962.vertexProgram = i963[3]
  i962.fragmentProgram = i963[4]
  i962.exportedForWebGl2 = !!i963[5]
  i962.readDepth = !!i963[6]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'shader')
  i968.pass = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i973 = data
  i972.name = i973[0]
  i972.type = i973[1]
  i972.value = new pc.Vec4( i973[2], i973[3], i973[4], i973[5] )
  i972.textureValue = i973[6]
  i972.shaderPropertyFlag = i973[7]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i975 = data
  i974.name = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'texture')
  i974.aabb = i975[3]
  i974.vertices = i975[4]
  i974.triangles = i975[5]
  i974.textureRect = UnityEngine.Rect.MinMaxRect(i975[6], i975[7], i975[8], i975[9])
  i974.packedRect = UnityEngine.Rect.MinMaxRect(i975[10], i975[11], i975[12], i975[13])
  i974.border = new pc.Vec4( i975[14], i975[15], i975[16], i975[17] )
  i974.transparency = i975[18]
  i974.bounds = i975[19]
  i974.pixelsPerUnit = i975[20]
  i974.textureWidth = i975[21]
  i974.textureHeight = i975[22]
  i974.nativeSize = new pc.Vec2( i975[23], i975[24] )
  i974.pivot = new pc.Vec2( i975[25], i975[26] )
  i974.textureRectOffset = new pc.Vec2( i975[27], i975[28] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i977 = data
  i976.name = i977[0]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i979 = data
  i978.name = i979[0]
  i978.wrapMode = i979[1]
  i978.isLooping = !!i979[2]
  i978.length = i979[3]
  var i981 = i979[4]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i981[i + 0]) );
  }
  i978.curves = i980
  var i983 = i979[5]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i983[i + 0]) );
  }
  i978.events = i982
  i978.halfPrecision = !!i979[6]
  i978._frameRate = i979[7]
  i978.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i979[8], i978.localBounds)
  i978.hasMuscleCurves = !!i979[9]
  var i985 = i979[10]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i978.clipMuscleConstant = i984
  i978.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i979[11], i978.clipBindingConstant)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i989 = data
  i988.path = i989[0]
  i988.hash = i989[1]
  i988.componentType = i989[2]
  i988.property = i989[3]
  i988.keys = i989[4]
  var i991 = i989[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i991[i + 0]) );
  }
  i988.objectReferenceKeys = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i995 = data
  i994.time = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'value')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i999 = data
  i998.functionName = i999[0]
  i998.floatParameter = i999[1]
  i998.intParameter = i999[2]
  i998.stringParameter = i999[3]
  request.r(i999[4], i999[5], 0, i998, 'objectReferenceParameter')
  i998.time = i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1001 = data
  i1000.center = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.extends = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.genericBindings = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.pptrCurveMapping = i1008
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.ascent = i1011[1]
  i1010.originalLineHeight = i1011[2]
  i1010.fontSize = i1011[3]
  var i1013 = i1011[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1013[i + 0]) );
  }
  i1010.characterInfo = i1012
  request.r(i1011[5], i1011[6], 0, i1010, 'texture')
  i1010.originalFontSize = i1011[7]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1017 = data
  i1016.index = i1017[0]
  i1016.advance = i1017[1]
  i1016.bearing = i1017[2]
  i1016.glyphWidth = i1017[3]
  i1016.glyphHeight = i1017[4]
  i1016.minX = i1017[5]
  i1016.maxX = i1017[6]
  i1016.minY = i1017[7]
  i1016.maxY = i1017[8]
  i1016.uvBottomLeftX = i1017[9]
  i1016.uvBottomLeftY = i1017[10]
  i1016.uvBottomRightX = i1017[11]
  i1016.uvBottomRightY = i1017[12]
  i1016.uvTopLeftX = i1017[13]
  i1016.uvTopLeftY = i1017[14]
  i1016.uvTopRightX = i1017[15]
  i1016.uvTopRightY = i1017[16]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1019 = data
  i1018.name = i1019[0]
  var i1021 = i1019[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1021[i + 0]) );
  }
  i1018.layers = i1020
  var i1023 = i1019[2]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1023[i + 0]) );
  }
  i1018.parameters = i1022
  i1018.animationClips = i1019[3]
  i1018.avatarUnsupported = i1019[4]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.defaultWeight = i1027[1]
  i1026.blendingMode = i1027[2]
  i1026.avatarMask = i1027[3]
  i1026.syncedLayerIndex = i1027[4]
  i1026.syncedLayerAffectsTiming = !!i1027[5]
  i1026.syncedLayers = i1027[6]
  i1026.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1027[7], i1026.stateMachine)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1029 = data
  i1028.id = i1029[0]
  i1028.name = i1029[1]
  i1028.path = i1029[2]
  var i1031 = i1029[3]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1031[i + 0]) );
  }
  i1028.states = i1030
  var i1033 = i1029[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1033[i + 0]) );
  }
  i1028.machines = i1032
  var i1035 = i1029[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1035[i + 0]) );
  }
  i1028.entryStateTransitions = i1034
  var i1037 = i1029[6]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1037[i + 0]) );
  }
  i1028.exitStateTransitions = i1036
  var i1039 = i1029[7]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1039[i + 0]) );
  }
  i1028.anyStateTransitions = i1038
  i1028.defaultStateId = i1029[8]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  i1042.cycleOffset = i1043[2]
  i1042.cycleOffsetParameter = i1043[3]
  i1042.cycleOffsetParameterActive = !!i1043[4]
  i1042.mirror = !!i1043[5]
  i1042.mirrorParameter = i1043[6]
  i1042.mirrorParameterActive = !!i1043[7]
  i1042.motionId = i1043[8]
  i1042.nameHash = i1043[9]
  i1042.fullPathHash = i1043[10]
  i1042.speed = i1043[11]
  i1042.speedParameter = i1043[12]
  i1042.speedParameterActive = !!i1043[13]
  i1042.tag = i1043[14]
  i1042.tagHash = i1043[15]
  i1042.writeDefaultValues = !!i1043[16]
  var i1045 = i1043[17]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 2, i1044, '')
  }
  i1042.behaviours = i1044
  var i1047 = i1043[18]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1047[i + 0]) );
  }
  i1042.transitions = i1046
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1053 = data
  i1052.fullPath = i1053[0]
  i1052.canTransitionToSelf = !!i1053[1]
  i1052.duration = i1053[2]
  i1052.exitTime = i1053[3]
  i1052.hasExitTime = !!i1053[4]
  i1052.hasFixedDuration = !!i1053[5]
  i1052.interruptionSource = i1053[6]
  i1052.offset = i1053[7]
  i1052.orderedInterruption = !!i1053[8]
  i1052.destinationStateId = i1053[9]
  i1052.isExit = !!i1053[10]
  i1052.mute = !!i1053[11]
  i1052.solo = !!i1053[12]
  var i1055 = i1053[13]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1055[i + 0]) );
  }
  i1052.conditions = i1054
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1061 = data
  i1060.destinationStateId = i1061[0]
  i1060.isExit = !!i1061[1]
  i1060.mute = !!i1061[2]
  i1060.solo = !!i1061[3]
  var i1063 = i1061[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1063[i + 0]) );
  }
  i1060.conditions = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1067 = data
  i1066.defaultBool = !!i1067[0]
  i1066.defaultFloat = i1067[1]
  i1066.defaultInt = i1067[2]
  i1066.name = i1067[3]
  i1066.nameHash = i1067[4]
  i1066.type = i1067[5]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1071 = data
  i1070.mode = i1071[0]
  i1070.parameter = i1071[1]
  i1070.threshold = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.bytes64 = i1073[1]
  i1072.data = i1073[2]
  return i1072
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('UnityEngine.InputSystem.InputActionMap', i1077[i + 0]) );
  }
  i1074.m_ActionMaps = i1076
  var i1079 = i1075[1]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1079[i + 0]) );
  }
  i1074.m_ControlSchemes = i1078
  i1074.m_IsProjectWide = !!i1075[2]
  return i1074
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1083 = data
  i1082.m_Name = i1083[0]
  i1082.m_Id = i1083[1]
  request.r(i1083[2], i1083[3], 0, i1082, 'm_Asset')
  var i1085 = i1083[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('UnityEngine.InputSystem.InputAction', i1085[i + 0]) );
  }
  i1082.m_Actions = i1084
  var i1087 = i1083[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('UnityEngine.InputSystem.InputBinding', i1087[i + 0]) );
  }
  i1082.m_Bindings = i1086
  return i1082
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1091 = data
  i1090.m_Name = i1091[0]
  i1090.m_Type = i1091[1]
  i1090.m_ExpectedControlType = i1091[2]
  i1090.m_Id = i1091[3]
  i1090.m_Processors = i1091[4]
  i1090.m_Interactions = i1091[5]
  var i1093 = i1091[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('UnityEngine.InputSystem.InputBinding', i1093[i + 0]) );
  }
  i1090.m_SingletonActionBindings = i1092
  i1090.m_Flags = i1091[7]
  return i1090
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1097 = data
  i1096.m_Name = i1097[0]
  i1096.m_Id = i1097[1]
  i1096.m_Path = i1097[2]
  i1096.m_Interactions = i1097[3]
  i1096.m_Processors = i1097[4]
  i1096.m_Groups = i1097[5]
  i1096.m_Action = i1097[6]
  i1096.m_Flags = i1097[7]
  return i1096
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1101 = data
  i1100.m_Name = i1101[0]
  i1100.m_BindingGroup = i1101[1]
  var i1103 = i1101[2]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1103[i + 0]) );
  }
  i1100.m_DeviceRequirements = i1102
  return i1100
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1107 = data
  i1106.m_ControlPath = i1107[0]
  i1106.m_Flags = i1107[1]
  return i1106
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'm_Asset')
  i1108.m_ActionId = i1109[2]
  return i1108
}

Deserializers["LevelDataSO"] = function (request, data, root) {
  var i1110 = root || request.c( 'LevelDataSO' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'sourceJson')
  i1110.levelIndex = i1111[2]
  i1110.width = i1111[3]
  i1110.height = i1111[4]
  var i1113 = i1111[5]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(i1113[i + 0]);
  }
  i1110.gridData = i1112
  var i1115 = i1111[6]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('LaneConfig')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('LaneConfig', i1115[i + 0]));
  }
  i1110.lanes = i1114
  return i1110
}

Deserializers["LaneConfig"] = function (request, data, root) {
  var i1120 = root || request.c( 'LaneConfig' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('PigConfig')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('PigConfig', i1123[i + 0]));
  }
  i1120.pigs = i1122
  return i1120
}

Deserializers["PigConfig"] = function (request, data, root) {
  var i1126 = root || request.c( 'PigConfig' )
  var i1127 = data
  i1126.colorName = i1127[0]
  i1126.bullets = i1127[1]
  return i1126
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1128 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1129 = data
  i1128.normalStyle = i1129[0]
  i1128.normalSpacingOffset = i1129[1]
  i1128.boldStyle = i1129[2]
  i1128.boldSpacing = i1129[3]
  i1128.italicStyle = i1129[4]
  i1128.tabSize = i1129[5]
  request.r(i1129[6], i1129[7], 0, i1128, 'atlas')
  i1128.m_SourceFontFileGUID = i1129[8]
  i1128.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1129[9], i1128.m_CreationSettings)
  request.r(i1129[10], i1129[11], 0, i1128, 'm_SourceFontFile')
  i1128.m_SourceFontFilePath = i1129[12]
  i1128.m_AtlasPopulationMode = i1129[13]
  i1128.InternalDynamicOS = !!i1129[14]
  var i1131 = i1129[15]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('UnityEngine.TextCore.Glyph', i1131[i + 0]));
  }
  i1128.m_GlyphTable = i1130
  var i1133 = i1129[16]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('TMPro.TMP_Character', i1133[i + 0]));
  }
  i1128.m_CharacterTable = i1132
  var i1135 = i1129[17]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 2, i1134, '')
  }
  i1128.m_AtlasTextures = i1134
  i1128.m_AtlasTextureIndex = i1129[18]
  i1128.m_IsMultiAtlasTexturesEnabled = !!i1129[19]
  i1128.m_GetFontFeatures = !!i1129[20]
  i1128.m_ClearDynamicDataOnBuild = !!i1129[21]
  i1128.m_AtlasWidth = i1129[22]
  i1128.m_AtlasHeight = i1129[23]
  i1128.m_AtlasPadding = i1129[24]
  i1128.m_AtlasRenderMode = i1129[25]
  var i1137 = i1129[26]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('UnityEngine.TextCore.GlyphRect', i1137[i + 0]));
  }
  i1128.m_UsedGlyphRects = i1136
  var i1139 = i1129[27]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('UnityEngine.TextCore.GlyphRect', i1139[i + 0]));
  }
  i1128.m_FreeGlyphRects = i1138
  i1128.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1129[28], i1128.m_FontFeatureTable)
  i1128.m_ShouldReimportFontFeatures = !!i1129[29]
  var i1141 = i1129[30]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 1, i1140, '')
  }
  i1128.m_FallbackFontAssetTable = i1140
  var i1143 = i1129[31]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('TMPro.TMP_FontWeightPair', i1143[i + 0]) );
  }
  i1128.m_FontWeightTable = i1142
  var i1145 = i1129[32]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('TMPro.TMP_FontWeightPair', i1145[i + 0]) );
  }
  i1128.fontWeights = i1144
  i1128.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1129[33], i1128.m_fontInfo)
  var i1147 = i1129[34]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.TMP_Glyph', i1147[i + 0]));
  }
  i1128.m_glyphInfoList = i1146
  i1128.m_KerningTable = request.d('TMPro.KerningTable', i1129[35], i1128.m_KerningTable)
  var i1149 = i1129[36]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 1, i1148, '')
  }
  i1128.fallbackFontAssets = i1148
  i1128.m_Version = i1129[37]
  i1128.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1129[38], i1128.m_FaceInfo)
  request.r(i1129[39], i1129[40], 0, i1128, 'm_Material')
  return i1128
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1151 = data
  i1150.sourceFontFileName = i1151[0]
  i1150.sourceFontFileGUID = i1151[1]
  i1150.faceIndex = i1151[2]
  i1150.pointSizeSamplingMode = i1151[3]
  i1150.pointSize = i1151[4]
  i1150.padding = i1151[5]
  i1150.paddingMode = i1151[6]
  i1150.packingMode = i1151[7]
  i1150.atlasWidth = i1151[8]
  i1150.atlasHeight = i1151[9]
  i1150.characterSetSelectionMode = i1151[10]
  i1150.characterSequence = i1151[11]
  i1150.referencedFontAssetGUID = i1151[12]
  i1150.referencedTextAssetGUID = i1151[13]
  i1150.fontStyle = i1151[14]
  i1150.fontStyleModifier = i1151[15]
  i1150.renderMode = i1151[16]
  i1150.includeFontFeatures = !!i1151[17]
  return i1150
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1155 = data
  i1154.m_Index = i1155[0]
  i1154.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1155[1], i1154.m_Metrics)
  i1154.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1155[2], i1154.m_GlyphRect)
  i1154.m_Scale = i1155[3]
  i1154.m_AtlasIndex = i1155[4]
  i1154.m_ClassDefinitionType = i1155[5]
  return i1154
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1157 = data
  i1156.m_Width = i1157[0]
  i1156.m_Height = i1157[1]
  i1156.m_HorizontalBearingX = i1157[2]
  i1156.m_HorizontalBearingY = i1157[3]
  i1156.m_HorizontalAdvance = i1157[4]
  return i1156
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1159 = data
  i1158.m_X = i1159[0]
  i1158.m_Y = i1159[1]
  i1158.m_Width = i1159[2]
  i1158.m_Height = i1159[3]
  return i1158
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_Character' )
  var i1163 = data
  i1162.m_ElementType = i1163[0]
  i1162.m_Unicode = i1163[1]
  i1162.m_GlyphIndex = i1163[2]
  i1162.m_Scale = i1163[3]
  return i1162
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.MultipleSubstitutionRecord', i1171[i + 0]));
  }
  i1168.m_MultipleSubstitutionRecords = i1170
  var i1173 = i1169[1]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('TMPro.LigatureSubstitutionRecord', i1173[i + 0]));
  }
  i1168.m_LigatureSubstitutionRecords = i1172
  var i1175 = i1169[2]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1175[i + 0]));
  }
  i1168.m_GlyphPairAdjustmentRecords = i1174
  var i1177 = i1169[3]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1177[i + 0]));
  }
  i1168.m_MarkToBaseAdjustmentRecords = i1176
  var i1179 = i1169[4]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1179[i + 0]));
  }
  i1168.m_MarkToMarkAdjustmentRecords = i1178
  return i1168
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1183 = data
  i1182.m_TargetGlyphID = i1183[0]
  i1182.m_SubstituteGlyphIDs = i1183[1]
  return i1182
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1187 = data
  i1186.m_ComponentGlyphIDs = i1187[0]
  i1186.m_LigatureGlyphID = i1187[1]
  return i1186
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1191 = data
  i1190.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1191[0], i1190.m_FirstAdjustmentRecord)
  i1190.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1191[1], i1190.m_SecondAdjustmentRecord)
  i1190.m_FeatureLookupFlags = i1191[2]
  return i1190
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1193 = data
  i1192.m_GlyphIndex = i1193[0]
  i1192.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1193[1], i1192.m_GlyphValueRecord)
  return i1192
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1195 = data
  i1194.m_XPlacement = i1195[0]
  i1194.m_YPlacement = i1195[1]
  i1194.m_XAdvance = i1195[2]
  i1194.m_YAdvance = i1195[3]
  return i1194
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1199 = data
  i1198.m_BaseGlyphID = i1199[0]
  i1198.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1199[1], i1198.m_BaseGlyphAnchorPoint)
  i1198.m_MarkGlyphID = i1199[2]
  i1198.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1199[3], i1198.m_MarkPositionAdjustment)
  return i1198
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1203 = data
  i1202.m_BaseMarkGlyphID = i1203[0]
  i1202.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1203[1], i1202.m_BaseMarkGlyphAnchorPoint)
  i1202.m_CombiningMarkGlyphID = i1203[2]
  i1202.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1203[3], i1202.m_CombiningMarkPositionAdjustment)
  return i1202
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'regularTypeface')
  request.r(i1209[2], i1209[3], 0, i1208, 'italicTypeface')
  return i1208
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1211 = data
  i1210.Name = i1211[0]
  i1210.PointSize = i1211[1]
  i1210.Scale = i1211[2]
  i1210.CharacterCount = i1211[3]
  i1210.LineHeight = i1211[4]
  i1210.Baseline = i1211[5]
  i1210.Ascender = i1211[6]
  i1210.CapHeight = i1211[7]
  i1210.Descender = i1211[8]
  i1210.CenterLine = i1211[9]
  i1210.SuperscriptOffset = i1211[10]
  i1210.SubscriptOffset = i1211[11]
  i1210.SubSize = i1211[12]
  i1210.Underline = i1211[13]
  i1210.UnderlineThickness = i1211[14]
  i1210.strikethrough = i1211[15]
  i1210.strikethroughThickness = i1211[16]
  i1210.TabWidth = i1211[17]
  i1210.Padding = i1211[18]
  i1210.AtlasWidth = i1211[19]
  i1210.AtlasHeight = i1211[20]
  return i1210
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.x = i1215[1]
  i1214.y = i1215[2]
  i1214.width = i1215[3]
  i1214.height = i1215[4]
  i1214.xOffset = i1215[5]
  i1214.yOffset = i1215[6]
  i1214.xAdvance = i1215[7]
  i1214.scale = i1215[8]
  return i1214
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.KerningTable' )
  var i1217 = data
  var i1219 = i1217[0]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.KerningPair', i1219[i + 0]));
  }
  i1216.kerningPairs = i1218
  return i1216
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.KerningPair' )
  var i1223 = data
  i1222.xOffset = i1223[0]
  i1222.m_FirstGlyph = i1223[1]
  i1222.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1223[2], i1222.m_FirstGlyphAdjustments)
  i1222.m_SecondGlyph = i1223[3]
  i1222.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1223[4], i1222.m_SecondGlyphAdjustments)
  i1222.m_IgnoreSpacingAdjustments = !!i1223[5]
  return i1222
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1225 = data
  i1224.m_FaceIndex = i1225[0]
  i1224.m_FamilyName = i1225[1]
  i1224.m_StyleName = i1225[2]
  i1224.m_PointSize = i1225[3]
  i1224.m_Scale = i1225[4]
  i1224.m_UnitsPerEM = i1225[5]
  i1224.m_LineHeight = i1225[6]
  i1224.m_AscentLine = i1225[7]
  i1224.m_CapLine = i1225[8]
  i1224.m_MeanLine = i1225[9]
  i1224.m_Baseline = i1225[10]
  i1224.m_DescentLine = i1225[11]
  i1224.m_SuperscriptOffset = i1225[12]
  i1224.m_SuperscriptSize = i1225[13]
  i1224.m_SubscriptOffset = i1225[14]
  i1224.m_SubscriptSize = i1225[15]
  i1224.m_UnderlineOffset = i1225[16]
  i1224.m_UnderlineThickness = i1225[17]
  i1224.m_StrikethroughOffset = i1225[18]
  i1224.m_StrikethroughThickness = i1225[19]
  i1224.m_TabWidth = i1225[20]
  return i1224
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_Settings' )
  var i1227 = data
  i1226.assetVersion = i1227[0]
  i1226.m_TextWrappingMode = i1227[1]
  i1226.m_enableKerning = !!i1227[2]
  var i1229 = i1227[3]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(i1229[i + 0]);
  }
  i1226.m_ActiveFontFeatures = i1228
  i1226.m_enableExtraPadding = !!i1227[4]
  i1226.m_enableTintAllSprites = !!i1227[5]
  i1226.m_enableParseEscapeCharacters = !!i1227[6]
  i1226.m_EnableRaycastTarget = !!i1227[7]
  i1226.m_GetFontFeaturesAtRuntime = !!i1227[8]
  i1226.m_missingGlyphCharacter = i1227[9]
  i1226.m_ClearDynamicDataOnBuild = !!i1227[10]
  i1226.m_warningsDisabled = !!i1227[11]
  request.r(i1227[12], i1227[13], 0, i1226, 'm_defaultFontAsset')
  i1226.m_defaultFontAssetPath = i1227[14]
  i1226.m_defaultFontSize = i1227[15]
  i1226.m_defaultAutoSizeMinRatio = i1227[16]
  i1226.m_defaultAutoSizeMaxRatio = i1227[17]
  i1226.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1227[18], i1227[19] )
  i1226.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1227[20], i1227[21] )
  i1226.m_autoSizeTextContainer = !!i1227[22]
  i1226.m_IsTextObjectScaleStatic = !!i1227[23]
  var i1231 = i1227[24]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1226.m_fallbackFontAssets = i1230
  i1226.m_matchMaterialPreset = !!i1227[25]
  i1226.m_HideSubTextObjects = !!i1227[26]
  request.r(i1227[27], i1227[28], 0, i1226, 'm_defaultSpriteAsset')
  i1226.m_defaultSpriteAssetPath = i1227[29]
  i1226.m_enableEmojiSupport = !!i1227[30]
  i1226.m_MissingCharacterSpriteUnicode = i1227[31]
  var i1233 = i1227[32]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 1, i1232, '')
  }
  i1226.m_EmojiFallbackTextAssets = i1232
  i1226.m_defaultColorGradientPresetsPath = i1227[33]
  request.r(i1227[34], i1227[35], 0, i1226, 'm_defaultStyleSheet')
  i1226.m_StyleSheetsResourcePath = i1227[36]
  request.r(i1227[37], i1227[38], 0, i1226, 'm_leadingCharacters')
  request.r(i1227[39], i1227[40], 0, i1226, 'm_followingCharacters')
  i1226.m_UseModernHangulLineBreakingRules = !!i1227[41]
  return i1226
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'spriteSheet')
  var i1239 = i1237[2]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.TMP_Sprite', i1239[i + 0]));
  }
  i1236.spriteInfoList = i1238
  var i1241 = i1237[3]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 1, i1240, '')
  }
  i1236.fallbackSpriteAssets = i1240
  var i1243 = i1237[4]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.TMP_SpriteCharacter', i1243[i + 0]));
  }
  i1236.m_SpriteCharacterTable = i1242
  var i1245 = i1237[5]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_SpriteGlyph', i1245[i + 0]));
  }
  i1236.m_GlyphTable = i1244
  i1236.m_Version = i1237[6]
  i1236.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1237[7], i1236.m_FaceInfo)
  request.r(i1237[8], i1237[9], 0, i1236, 'm_Material')
  return i1236
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1249 = data
  i1248.name = i1249[0]
  i1248.hashCode = i1249[1]
  i1248.unicode = i1249[2]
  i1248.pivot = new pc.Vec2( i1249[3], i1249[4] )
  request.r(i1249[5], i1249[6], 0, i1248, 'sprite')
  i1248.id = i1249[7]
  i1248.x = i1249[8]
  i1248.y = i1249[9]
  i1248.width = i1249[10]
  i1248.height = i1249[11]
  i1248.xOffset = i1249[12]
  i1248.yOffset = i1249[13]
  i1248.xAdvance = i1249[14]
  i1248.scale = i1249[15]
  return i1248
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1255 = data
  i1254.m_Name = i1255[0]
  i1254.m_ElementType = i1255[1]
  i1254.m_Unicode = i1255[2]
  i1254.m_GlyphIndex = i1255[3]
  i1254.m_Scale = i1255[4]
  return i1254
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'sprite')
  i1258.m_Index = i1259[2]
  i1258.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1259[3], i1258.m_Metrics)
  i1258.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1259[4], i1258.m_GlyphRect)
  i1258.m_Scale = i1259[5]
  i1258.m_AtlasIndex = i1259[6]
  i1258.m_ClassDefinitionType = i1259[7]
  return i1258
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.TMP_Style', i1263[i + 0]));
  }
  i1260.m_StyleList = i1262
  return i1260
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Style' )
  var i1267 = data
  i1266.m_Name = i1267[0]
  i1266.m_HashCode = i1267[1]
  i1266.m_OpeningDefinition = i1267[2]
  i1266.m_ClosingDefinition = i1267[3]
  i1266.m_OpeningTagArray = i1267[4]
  i1266.m_ClosingTagArray = i1267[5]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1271[i + 0]) );
  }
  i1268.files = i1270
  i1268.componentToPrefabIds = i1269[1]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1275 = data
  i1274.path = i1275[0]
  request.r(i1275[1], i1275[2], 0, i1274, 'unityObject')
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1279[i + 0]) );
  }
  i1276.scriptsExecutionOrder = i1278
  var i1281 = i1277[1]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1281[i + 0]) );
  }
  i1276.sortingLayers = i1280
  var i1283 = i1277[2]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1283[i + 0]) );
  }
  i1276.cullingLayers = i1282
  i1276.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1277[3], i1276.timeSettings)
  i1276.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1277[4], i1276.physicsSettings)
  i1276.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1277[5], i1276.physics2DSettings)
  i1276.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1277[6], i1276.qualitySettings)
  i1276.enableRealtimeShadows = !!i1277[7]
  i1276.enableAutoInstancing = !!i1277[8]
  i1276.enableStaticBatching = !!i1277[9]
  i1276.enableDynamicBatching = !!i1277[10]
  i1276.lightmapEncodingQuality = i1277[11]
  i1276.desiredColorSpace = i1277[12]
  var i1285 = i1277[13]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( i1285[i + 0] );
  }
  i1276.allTags = i1284
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1289 = data
  i1288.name = i1289[0]
  i1288.value = i1289[1]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1293 = data
  i1292.id = i1293[0]
  i1292.name = i1293[1]
  i1292.value = i1293[2]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1297 = data
  i1296.id = i1297[0]
  i1296.name = i1297[1]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1299 = data
  i1298.fixedDeltaTime = i1299[0]
  i1298.maximumDeltaTime = i1299[1]
  i1298.timeScale = i1299[2]
  i1298.maximumParticleTimestep = i1299[3]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1301 = data
  i1300.gravity = new pc.Vec3( i1301[0], i1301[1], i1301[2] )
  i1300.defaultSolverIterations = i1301[3]
  i1300.bounceThreshold = i1301[4]
  i1300.autoSyncTransforms = !!i1301[5]
  i1300.autoSimulation = !!i1301[6]
  var i1303 = i1301[7]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1303[i + 0]) );
  }
  i1300.collisionMatrix = i1302
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1307 = data
  i1306.enabled = !!i1307[0]
  i1306.layerId = i1307[1]
  i1306.otherLayerId = i1307[2]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'material')
  i1308.gravity = new pc.Vec2( i1309[2], i1309[3] )
  i1308.positionIterations = i1309[4]
  i1308.velocityIterations = i1309[5]
  i1308.velocityThreshold = i1309[6]
  i1308.maxLinearCorrection = i1309[7]
  i1308.maxAngularCorrection = i1309[8]
  i1308.maxTranslationSpeed = i1309[9]
  i1308.maxRotationSpeed = i1309[10]
  i1308.baumgarteScale = i1309[11]
  i1308.baumgarteTOIScale = i1309[12]
  i1308.timeToSleep = i1309[13]
  i1308.linearSleepTolerance = i1309[14]
  i1308.angularSleepTolerance = i1309[15]
  i1308.defaultContactOffset = i1309[16]
  i1308.autoSimulation = !!i1309[17]
  i1308.queriesHitTriggers = !!i1309[18]
  i1308.queriesStartInColliders = !!i1309[19]
  i1308.callbacksOnDisable = !!i1309[20]
  i1308.reuseCollisionCallbacks = !!i1309[21]
  i1308.autoSyncTransforms = !!i1309[22]
  var i1311 = i1309[23]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1311[i + 0]) );
  }
  i1308.collisionMatrix = i1310
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1315 = data
  i1314.enabled = !!i1315[0]
  i1314.layerId = i1315[1]
  i1314.otherLayerId = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1317 = data
  var i1319 = i1317[0]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1319[i + 0]) );
  }
  i1316.qualityLevels = i1318
  var i1321 = i1317[1]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( i1321[i + 0] );
  }
  i1316.names = i1320
  i1316.shadows = i1317[2]
  i1316.anisotropicFiltering = i1317[3]
  i1316.antiAliasing = i1317[4]
  i1316.lodBias = i1317[5]
  i1316.shadowCascades = i1317[6]
  i1316.shadowDistance = i1317[7]
  i1316.shadowmaskMode = i1317[8]
  i1316.shadowProjection = i1317[9]
  i1316.shadowResolution = i1317[10]
  i1316.softParticles = !!i1317[11]
  i1316.softVegetation = !!i1317[12]
  i1316.activeColorSpace = i1317[13]
  i1316.desiredColorSpace = i1317[14]
  i1316.masterTextureLimit = i1317[15]
  i1316.maxQueuedFrames = i1317[16]
  i1316.particleRaycastBudget = i1317[17]
  i1316.pixelLightCount = i1317[18]
  i1316.realtimeReflectionProbes = !!i1317[19]
  i1316.shadowCascade2Split = i1317[20]
  i1316.shadowCascade4Split = new pc.Vec3( i1317[21], i1317[22], i1317[23] )
  i1316.streamingMipmapsActive = !!i1317[24]
  i1316.vSyncCount = i1317[25]
  i1316.asyncUploadBufferSize = i1317[26]
  i1316.asyncUploadTimeSlice = i1317[27]
  i1316.billboardsFaceCameraPosition = !!i1317[28]
  i1316.shadowNearPlaneOffset = i1317[29]
  i1316.streamingMipmapsMemoryBudget = i1317[30]
  i1316.maximumLODLevel = i1317[31]
  i1316.streamingMipmapsAddAllCameras = !!i1317[32]
  i1316.streamingMipmapsMaxLevelReduction = i1317[33]
  i1316.streamingMipmapsRenderersPerFrame = i1317[34]
  i1316.resolutionScalingFixedDPIFactor = i1317[35]
  i1316.streamingMipmapsMaxFileIORequests = i1317[36]
  i1316.currentQualityLevel = i1317[37]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1325 = data
  i1324.name = i1325[0]
  var i1327 = i1325[1]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1327[i + 0]) );
  }
  i1324.tos = i1326
  var i1329 = i1325[2]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( i1329[i + 0] );
  }
  i1324.constant = i1328
  i1324.isValid = !!i1325[3]
  i1324.isHuman = !!i1325[4]
  i1324.hasRootMotion = !!i1325[5]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1333 = data
  i1332.hash = i1333[0]
  i1332.path = i1333[1]
  return i1332
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1335 = data
  i1334.m_XCoordinate = i1335[0]
  i1334.m_YCoordinate = i1335[1]
  return i1334
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1337 = data
  i1336.m_XPositionAdjustment = i1337[0]
  i1336.m_YPositionAdjustment = i1337[1]
  return i1336
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1339 = data
  i1338.xPlacement = i1339[0]
  i1338.yPlacement = i1339[1]
  i1338.xAdvance = i1339[2]
  i1338.yAdvance = i1339[3]
  return i1338
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

Deserializers.creativeName = "Yarn-Flow";

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

Deserializers.buildID = "48b38b86-9ccc-4f52-a4c2-36ad50670336";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

