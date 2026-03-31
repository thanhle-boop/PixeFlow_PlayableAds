var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointSpring' )
  var i669 = data
  i668.spring = i669[0]
  i668.damper = i669[1]
  i668.targetPosition = i669[2]
  return i668
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointMotor' )
  var i671 = data
  i670.m_TargetVelocity = i671[0]
  i670.m_Force = i671[1]
  i670.m_FreeSpin = i671[2]
  return i670
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointLimits' )
  var i673 = data
  i672.m_Min = i673[0]
  i672.m_Max = i673[1]
  i672.m_Bounciness = i673[2]
  i672.m_BounceMinVelocity = i673[3]
  i672.m_ContactDistance = i673[4]
  i672.minBounce = i673[5]
  i672.maxBounce = i673[6]
  return i672
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointDrive' )
  var i675 = data
  i674.m_PositionSpring = i675[0]
  i674.m_PositionDamper = i675[1]
  i674.m_MaximumForce = i675[2]
  i674.m_UseAcceleration = i675[3]
  return i674
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i677 = data
  i676.m_Spring = i677[0]
  i676.m_Damper = i677[1]
  return i676
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i679 = data
  i678.m_Limit = i679[0]
  i678.m_Bounciness = i679[1]
  i678.m_ContactDistance = i679[2]
  return i678
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i681 = data
  i680.m_ExtremumSlip = i681[0]
  i680.m_ExtremumValue = i681[1]
  i680.m_AsymptoteSlip = i681[2]
  i680.m_AsymptoteValue = i681[3]
  i680.m_Stiffness = i681[4]
  return i680
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i683 = data
  i682.m_LowerAngle = i683[0]
  i682.m_UpperAngle = i683[1]
  return i682
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i685 = data
  i684.m_MotorSpeed = i685[0]
  i684.m_MaximumMotorTorque = i685[1]
  return i684
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i687 = data
  i686.m_DampingRatio = i687[0]
  i686.m_Frequency = i687[1]
  i686.m_Angle = i687[2]
  return i686
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i689 = data
  i688.m_LowerTranslation = i689[0]
  i688.m_UpperTranslation = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i691 = data
  i690.name = i691[0]
  i690.width = i691[1]
  i690.height = i691[2]
  i690.mipmapCount = i691[3]
  i690.anisoLevel = i691[4]
  i690.filterMode = i691[5]
  i690.hdr = !!i691[6]
  i690.format = i691[7]
  i690.wrapMode = i691[8]
  i690.alphaIsTransparency = !!i691[9]
  i690.alphaSource = i691[10]
  i690.graphicsFormat = i691[11]
  i690.sRGBTexture = !!i691[12]
  i690.desiredColorSpace = i691[13]
  i690.wrapU = i691[14]
  i690.wrapV = i691[15]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i692 = root || new pc.UnityMaterial()
  var i693 = data
  i692.name = i693[0]
  request.r(i693[1], i693[2], 0, i692, 'shader')
  i692.renderQueue = i693[3]
  i692.enableInstancing = !!i693[4]
  var i695 = i693[5]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i695[i + 0]) );
  }
  i692.floatParameters = i694
  var i697 = i693[6]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i697[i + 0]) );
  }
  i692.colorParameters = i696
  var i699 = i693[7]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i699[i + 0]) );
  }
  i692.vectorParameters = i698
  var i701 = i693[8]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i701[i + 0]) );
  }
  i692.textureParameters = i700
  var i703 = i693[9]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i703[i + 0]) );
  }
  i692.materialFlags = i702
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i707 = data
  i706.name = i707[0]
  i706.value = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i711 = data
  i710.name = i711[0]
  i710.value = new pc.Color(i711[1], i711[2], i711[3], i711[4])
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = new pc.Vec4( i715[1], i715[2], i715[3], i715[4] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i719 = data
  i718.name = i719[0]
  request.r(i719[1], i719[2], 0, i718, 'value')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i723 = data
  i722.name = i723[0]
  i722.enabled = !!i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i725 = data
  i724.name = i725[0]
  i724.halfPrecision = !!i725[1]
  i724.useSimplification = !!i725[2]
  i724.useUInt32IndexFormat = !!i725[3]
  i724.vertexCount = i725[4]
  i724.aabb = i725[5]
  var i727 = i725[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( !!i727[i + 0] );
  }
  i724.streams = i726
  i724.vertices = i725[7]
  var i729 = i725[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i729[i + 0]) );
  }
  i724.subMeshes = i728
  var i731 = i725[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 16) {
    i730.push( new pc.Mat4().setData(i731[i + 0], i731[i + 1], i731[i + 2], i731[i + 3],  i731[i + 4], i731[i + 5], i731[i + 6], i731[i + 7],  i731[i + 8], i731[i + 9], i731[i + 10], i731[i + 11],  i731[i + 12], i731[i + 13], i731[i + 14], i731[i + 15]) );
  }
  i724.bindposes = i730
  var i733 = i725[10]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i733[i + 0]) );
  }
  i724.blendShapes = i732
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i739 = data
  i738.triangles = i739[0]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i745 = data
  i744.name = i745[0]
  var i747 = i745[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i747[i + 0]) );
  }
  i744.frames = i746
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i749 = data
  i748.position = new pc.Vec3( i749[0], i749[1], i749[2] )
  i748.scale = new pc.Vec3( i749[3], i749[4], i749[5] )
  i748.rotation = new pc.Quat(i749[6], i749[7], i749[8], i749[9])
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'sharedMesh')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'additionalVertexStreams')
  i752.enabled = !!i753[2]
  request.r(i753[3], i753[4], 0, i752, 'sharedMaterial')
  var i755 = i753[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.sharedMaterials = i754
  i752.receiveShadows = !!i753[6]
  i752.shadowCastingMode = i753[7]
  i752.sortingLayerID = i753[8]
  i752.sortingOrder = i753[9]
  i752.lightmapIndex = i753[10]
  i752.lightmapSceneIndex = i753[11]
  i752.lightmapScaleOffset = new pc.Vec4( i753[12], i753[13], i753[14], i753[15] )
  i752.lightProbeUsage = i753[16]
  i752.reflectionProbeUsage = i753[17]
  return i752
}

Deserializers["Block"] = function (request, data, root) {
  var i758 = root || request.c( 'Block' )
  var i759 = data
  i758.color = i759[0]
  i758.isAlreadyDestroyed = !!i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i761 = data
  i760.center = new pc.Vec3( i761[0], i761[1], i761[2] )
  i760.size = new pc.Vec3( i761[3], i761[4], i761[5] )
  i760.enabled = !!i761[6]
  i760.isTrigger = !!i761[7]
  request.r(i761[8], i761[9], 0, i760, 'material')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i763 = data
  i762.name = i763[0]
  i762.tagId = i763[1]
  i762.enabled = !!i763[2]
  i762.isStatic = !!i763[3]
  i762.layer = i763[4]
  return i762
}

Deserializers["PigComponent"] = function (request, data, root) {
  var i764 = root || request.c( 'PigComponent' )
  var i765 = data
  i764.color = i765[0]
  i764.Bullet = i765[1]
  i764.laneIndex = i765[2]
  request.r(i765[3], i765[4], 0, i764, 'rayCastPoint')
  request.r(i765[5], i765[6], 0, i764, 'rb')
  i764.isOnTop = !!i765[7]
  i764.isOnBelt = !!i765[8]
  i764.currentState = i765[9]
  i764.blockLayer = UnityEngine.LayerMask.FromIntegerValue( i765[10] )
  request.r(i765[11], i765[12], 0, i764, 'bulletText')
  request.r(i765[13], i765[14], 0, i764, 'pigModel')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i767 = data
  i766.mass = i767[0]
  i766.drag = i767[1]
  i766.angularDrag = i767[2]
  i766.useGravity = !!i767[3]
  i766.isKinematic = !!i767[4]
  i766.constraints = i767[5]
  i766.maxAngularVelocity = i767[6]
  i766.collisionDetectionMode = i767[7]
  i766.interpolation = i767[8]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i769 = data
  i768.textureMode = i769[0]
  i768.alignment = i769[1]
  i768.widthCurve = new pc.AnimationCurve( { keys_flow: i769[2] } )
  i768.colorGradient = i769[3] ? new pc.ColorGradient(i769[3][0], i769[3][1], i769[3][2]) : null
  var i771 = i769[4]
  var i770 = []
  for(var i = 0; i < i771.length; i += 3) {
    i770.push( new pc.Vec3( i771[i + 0], i771[i + 1], i771[i + 2] ) );
  }
  i768.positions = i770
  i768.positionCount = i769[5]
  i768.widthMultiplier = i769[6]
  i768.startWidth = i769[7]
  i768.endWidth = i769[8]
  i768.numCornerVertices = i769[9]
  i768.numCapVertices = i769[10]
  i768.useWorldSpace = !!i769[11]
  i768.loop = !!i769[12]
  i768.startColor = new pc.Color(i769[13], i769[14], i769[15], i769[16])
  i768.endColor = new pc.Color(i769[17], i769[18], i769[19], i769[20])
  i768.generateLightingData = !!i769[21]
  i768.enabled = !!i769[22]
  request.r(i769[23], i769[24], 0, i768, 'sharedMaterial')
  var i773 = i769[25]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i768.sharedMaterials = i772
  i768.receiveShadows = !!i769[26]
  i768.shadowCastingMode = i769[27]
  i768.sortingLayerID = i769[28]
  i768.sortingOrder = i769[29]
  i768.lightmapIndex = i769[30]
  i768.lightmapSceneIndex = i769[31]
  i768.lightmapScaleOffset = new pc.Vec4( i769[32], i769[33], i769[34], i769[35] )
  i768.lightProbeUsage = i769[36]
  i768.reflectionProbeUsage = i769[37]
  return i768
}

Deserializers["WavyLineRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'WavyLineRenderer' )
  var i777 = data
  i776.waveSegments = i777[0]
  i776.waveAmplitudeMin = i777[1]
  i776.waveAmplitudeMax = i777[2]
  i776.amplitudeChangeSpeed = i777[3]
  i776.waveFrequency = i777[4]
  i776.waveSpeed = i777[5]
  request.r(i777[6], i777[7], 0, i776, 'lineMaterial')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'animatorController')
  request.r(i779[2], i779[3], 0, i778, 'avatar')
  i778.updateMode = i779[4]
  i778.hasTransformHierarchy = !!i779[5]
  i778.applyRootMotion = !!i779[6]
  var i781 = i779[7]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.humanBones = i780
  i778.enabled = !!i779[8]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'sharedMesh')
  var i787 = i785[2]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.bones = i786
  i784.updateWhenOffscreen = !!i785[3]
  i784.localBounds = i785[4]
  request.r(i785[5], i785[6], 0, i784, 'rootBone')
  var i789 = i785[7]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i789[i + 0]) );
  }
  i784.blendShapesWeights = i788
  i784.enabled = !!i785[8]
  request.r(i785[9], i785[10], 0, i784, 'sharedMaterial')
  var i791 = i785[11]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i784.sharedMaterials = i790
  i784.receiveShadows = !!i785[12]
  i784.shadowCastingMode = i785[13]
  i784.sortingLayerID = i785[14]
  i784.sortingOrder = i785[15]
  i784.lightmapIndex = i785[16]
  i784.lightmapSceneIndex = i785[17]
  i784.lightmapScaleOffset = new pc.Vec4( i785[18], i785[19], i785[20], i785[21] )
  i784.lightProbeUsage = i785[22]
  i784.reflectionProbeUsage = i785[23]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i795 = data
  i794.weight = i795[0]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i797 = data
  i796.pivot = new pc.Vec2( i797[0], i797[1] )
  i796.anchorMin = new pc.Vec2( i797[2], i797[3] )
  i796.anchorMax = new pc.Vec2( i797[4], i797[5] )
  i796.sizeDelta = new pc.Vec2( i797[6], i797[7] )
  i796.anchoredPosition3D = new pc.Vec3( i797[8], i797[9], i797[10] )
  i796.rotation = new pc.Quat(i797[11], i797[12], i797[13], i797[14])
  i796.scale = new pc.Vec3( i797[15], i797[16], i797[17] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i799 = data
  i798.planeDistance = i799[0]
  i798.referencePixelsPerUnit = i799[1]
  i798.isFallbackOverlay = !!i799[2]
  i798.renderMode = i799[3]
  i798.renderOrder = i799[4]
  i798.sortingLayerName = i799[5]
  i798.sortingOrder = i799[6]
  i798.scaleFactor = i799[7]
  request.r(i799[8], i799[9], 0, i798, 'worldCamera')
  i798.overrideSorting = !!i799[10]
  i798.pixelPerfect = !!i799[11]
  i798.targetDisplay = i799[12]
  i798.overridePixelPerfect = !!i799[13]
  i798.enabled = !!i799[14]
  return i798
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i801 = data
  i800.m_UiScaleMode = i801[0]
  i800.m_ReferencePixelsPerUnit = i801[1]
  i800.m_ScaleFactor = i801[2]
  i800.m_ReferenceResolution = new pc.Vec2( i801[3], i801[4] )
  i800.m_ScreenMatchMode = i801[5]
  i800.m_MatchWidthOrHeight = i801[6]
  i800.m_PhysicalUnit = i801[7]
  i800.m_FallbackScreenDPI = i801[8]
  i800.m_DefaultSpriteDPI = i801[9]
  i800.m_DynamicPixelsPerUnit = i801[10]
  i800.m_PresetInfoIsWorld = !!i801[11]
  return i800
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i803 = data
  i802.m_IgnoreReversedGraphics = !!i803[0]
  i802.m_BlockingObjects = i803[1]
  i802.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i803[2] )
  return i802
}

Deserializers["BillboardUI"] = function (request, data, root) {
  var i804 = root || request.c( 'BillboardUI' )
  var i805 = data
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i807 = data
  i806.cullTransparentMesh = !!i807[0]
  return i806
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i809 = data
  i808.m_hasFontAssetChanged = !!i809[0]
  request.r(i809[1], i809[2], 0, i808, 'm_baseMaterial')
  i808.m_maskOffset = new pc.Vec4( i809[3], i809[4], i809[5], i809[6] )
  i808.m_text = i809[7]
  i808.m_isRightToLeft = !!i809[8]
  request.r(i809[9], i809[10], 0, i808, 'm_fontAsset')
  request.r(i809[11], i809[12], 0, i808, 'm_sharedMaterial')
  var i811 = i809[13]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.m_fontSharedMaterials = i810
  request.r(i809[14], i809[15], 0, i808, 'm_fontMaterial')
  var i813 = i809[16]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i808.m_fontMaterials = i812
  i808.m_fontColor32 = UnityEngine.Color32.ConstructColor(i809[17], i809[18], i809[19], i809[20])
  i808.m_fontColor = new pc.Color(i809[21], i809[22], i809[23], i809[24])
  i808.m_enableVertexGradient = !!i809[25]
  i808.m_colorMode = i809[26]
  i808.m_fontColorGradient = request.d('TMPro.VertexGradient', i809[27], i808.m_fontColorGradient)
  request.r(i809[28], i809[29], 0, i808, 'm_fontColorGradientPreset')
  request.r(i809[30], i809[31], 0, i808, 'm_spriteAsset')
  i808.m_tintAllSprites = !!i809[32]
  request.r(i809[33], i809[34], 0, i808, 'm_StyleSheet')
  i808.m_TextStyleHashCode = i809[35]
  i808.m_overrideHtmlColors = !!i809[36]
  i808.m_faceColor = UnityEngine.Color32.ConstructColor(i809[37], i809[38], i809[39], i809[40])
  i808.m_fontSize = i809[41]
  i808.m_fontSizeBase = i809[42]
  i808.m_fontWeight = i809[43]
  i808.m_enableAutoSizing = !!i809[44]
  i808.m_fontSizeMin = i809[45]
  i808.m_fontSizeMax = i809[46]
  i808.m_fontStyle = i809[47]
  i808.m_HorizontalAlignment = i809[48]
  i808.m_VerticalAlignment = i809[49]
  i808.m_textAlignment = i809[50]
  i808.m_characterSpacing = i809[51]
  i808.m_characterHorizontalScale = i809[52]
  i808.m_wordSpacing = i809[53]
  i808.m_lineSpacing = i809[54]
  i808.m_lineSpacingMax = i809[55]
  i808.m_paragraphSpacing = i809[56]
  i808.m_charWidthMaxAdj = i809[57]
  i808.m_TextWrappingMode = i809[58]
  i808.m_wordWrappingRatios = i809[59]
  i808.m_overflowMode = i809[60]
  request.r(i809[61], i809[62], 0, i808, 'm_linkedTextComponent')
  request.r(i809[63], i809[64], 0, i808, 'parentLinkedComponent')
  i808.m_enableKerning = !!i809[65]
  var i815 = i809[66]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(i815[i + 0]);
  }
  i808.m_ActiveFontFeatures = i814
  i808.m_enableExtraPadding = !!i809[67]
  i808.checkPaddingRequired = !!i809[68]
  i808.m_isRichText = !!i809[69]
  i808.m_parseCtrlCharacters = !!i809[70]
  i808.m_isOrthographic = !!i809[71]
  i808.m_isCullingEnabled = !!i809[72]
  i808.m_horizontalMapping = i809[73]
  i808.m_verticalMapping = i809[74]
  i808.m_uvLineOffset = i809[75]
  i808.m_geometrySortingOrder = i809[76]
  i808.m_IsTextObjectScaleStatic = !!i809[77]
  i808.m_VertexBufferAutoSizeReduction = !!i809[78]
  i808.m_useMaxVisibleDescender = !!i809[79]
  i808.m_pageToDisplay = i809[80]
  i808.m_margin = new pc.Vec4( i809[81], i809[82], i809[83], i809[84] )
  i808.m_isUsingLegacyAnimationComponent = !!i809[85]
  i808.m_isVolumetricText = !!i809[86]
  request.r(i809[87], i809[88], 0, i808, 'm_Material')
  i808.m_EmojiFallbackSupport = !!i809[89]
  i808.m_Maskable = !!i809[90]
  i808.m_Color = new pc.Color(i809[91], i809[92], i809[93], i809[94])
  i808.m_RaycastTarget = !!i809[95]
  i808.m_RaycastPadding = new pc.Vec4( i809[96], i809[97], i809[98], i809[99] )
  return i808
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.VertexGradient' )
  var i817 = data
  i816.topLeft = new pc.Color(i817[0], i817[1], i817[2], i817[3])
  i816.topRight = new pc.Color(i817[4], i817[5], i817[6], i817[7])
  i816.bottomLeft = new pc.Color(i817[8], i817[9], i817[10], i817[11])
  i816.bottomRight = new pc.Color(i817[12], i817[13], i817[14], i817[15])
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i823 = data
  i822.weight = i823[0]
  i822.vertices = i823[1]
  i822.normals = i823[2]
  i822.tangents = i823[3]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i825 = data
  i824.name = i825[0]
  i824.atlasId = i825[1]
  i824.mipmapCount = i825[2]
  i824.hdr = !!i825[3]
  i824.size = i825[4]
  i824.anisoLevel = i825[5]
  i824.filterMode = i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 4) {
    i826.push( UnityEngine.Rect.MinMaxRect(i827[i + 0], i827[i + 1], i827[i + 2], i827[i + 3]) );
  }
  i824.rects = i826
  i824.wrapU = i825[8]
  i824.wrapV = i825[9]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i831 = data
  i830.name = i831[0]
  i830.index = i831[1]
  i830.startup = !!i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i833 = data
  i832.aspect = i833[0]
  i832.orthographic = !!i833[1]
  i832.orthographicSize = i833[2]
  i832.backgroundColor = new pc.Color(i833[3], i833[4], i833[5], i833[6])
  i832.nearClipPlane = i833[7]
  i832.farClipPlane = i833[8]
  i832.fieldOfView = i833[9]
  i832.depth = i833[10]
  i832.clearFlags = i833[11]
  i832.cullingMask = i833[12]
  i832.rect = i833[13]
  request.r(i833[14], i833[15], 0, i832, 'targetTexture')
  i832.usePhysicalProperties = !!i833[16]
  i832.focalLength = i833[17]
  i832.sensorSize = new pc.Vec2( i833[18], i833[19] )
  i832.lensShift = new pc.Vec2( i833[20], i833[21] )
  i832.gateFit = i833[22]
  i832.commandBufferCount = i833[23]
  i832.cameraType = i833[24]
  i832.enabled = !!i833[25]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i835 = data
  i834.type = i835[0]
  i834.color = new pc.Color(i835[1], i835[2], i835[3], i835[4])
  i834.cullingMask = i835[5]
  i834.intensity = i835[6]
  i834.range = i835[7]
  i834.spotAngle = i835[8]
  i834.shadows = i835[9]
  i834.shadowNormalBias = i835[10]
  i834.shadowBias = i835[11]
  i834.shadowStrength = i835[12]
  i834.shadowResolution = i835[13]
  i834.lightmapBakeType = i835[14]
  i834.renderMode = i835[15]
  request.r(i835[16], i835[17], 0, i834, 'cookie')
  i834.cookieSize = i835[18]
  i834.shadowNearPlane = i835[19]
  i834.occlusionMaskChannel = i835[20]
  i834.enabled = !!i835[21]
  return i834
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_FirstSelected')
  i836.m_sendNavigationEvents = !!i837[2]
  i836.m_DragThreshold = i837[3]
  return i836
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i839 = data
  i838.m_MoveRepeatDelay = i839[0]
  i838.m_MoveRepeatRate = i839[1]
  request.r(i839[2], i839[3], 0, i838, 'm_XRTrackingOrigin')
  request.r(i839[4], i839[5], 0, i838, 'm_ActionsAsset')
  request.r(i839[6], i839[7], 0, i838, 'm_PointAction')
  request.r(i839[8], i839[9], 0, i838, 'm_MoveAction')
  request.r(i839[10], i839[11], 0, i838, 'm_SubmitAction')
  request.r(i839[12], i839[13], 0, i838, 'm_CancelAction')
  request.r(i839[14], i839[15], 0, i838, 'm_LeftClickAction')
  request.r(i839[16], i839[17], 0, i838, 'm_MiddleClickAction')
  request.r(i839[18], i839[19], 0, i838, 'm_RightClickAction')
  request.r(i839[20], i839[21], 0, i838, 'm_ScrollWheelAction')
  request.r(i839[22], i839[23], 0, i838, 'm_TrackedDevicePositionAction')
  request.r(i839[24], i839[25], 0, i838, 'm_TrackedDeviceOrientationAction')
  i838.m_DeselectOnBackgroundClick = !!i839[26]
  i838.m_PointerBehavior = i839[27]
  i838.m_CursorLockBehavior = i839[28]
  i838.m_ScrollDeltaPerTick = i839[29]
  i838.m_SendPointerHoverToParent = !!i839[30]
  return i838
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Image' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'm_Sprite')
  i840.m_Type = i841[2]
  i840.m_PreserveAspect = !!i841[3]
  i840.m_FillCenter = !!i841[4]
  i840.m_FillMethod = i841[5]
  i840.m_FillAmount = i841[6]
  i840.m_FillClockwise = !!i841[7]
  i840.m_FillOrigin = i841[8]
  i840.m_UseSpriteMesh = !!i841[9]
  i840.m_PixelsPerUnitMultiplier = i841[10]
  request.r(i841[11], i841[12], 0, i840, 'm_Material')
  i840.m_Maskable = !!i841[13]
  i840.m_Color = new pc.Color(i841[14], i841[15], i841[16], i841[17])
  i840.m_RaycastTarget = !!i841[18]
  i840.m_RaycastPadding = new pc.Vec4( i841[19], i841[20], i841[21], i841[22] )
  return i840
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Button' )
  var i843 = data
  i842.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i843[0], i842.m_OnClick)
  i842.m_Navigation = request.d('UnityEngine.UI.Navigation', i843[1], i842.m_Navigation)
  i842.m_Transition = i843[2]
  i842.m_Colors = request.d('UnityEngine.UI.ColorBlock', i843[3], i842.m_Colors)
  i842.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i843[4], i842.m_SpriteState)
  i842.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i843[5], i842.m_AnimationTriggers)
  i842.m_Interactable = !!i843[6]
  request.r(i843[7], i843[8], 0, i842, 'm_TargetGraphic')
  return i842
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i845 = data
  i844.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i845[0], i844.m_PersistentCalls)
  return i844
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i847 = data
  var i849 = i847[0]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('UnityEngine.Events.PersistentCall', i849[i + 0]));
  }
  i846.m_Calls = i848
  return i846
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_Target')
  i852.m_TargetAssemblyTypeName = i853[2]
  i852.m_MethodName = i853[3]
  i852.m_Mode = i853[4]
  i852.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i853[5], i852.m_Arguments)
  i852.m_CallState = i853[6]
  return i852
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_ObjectArgument')
  i854.m_ObjectArgumentAssemblyTypeName = i855[2]
  i854.m_IntArgument = i855[3]
  i854.m_FloatArgument = i855[4]
  i854.m_StringArgument = i855[5]
  i854.m_BoolArgument = !!i855[6]
  return i854
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i857 = data
  i856.m_Mode = i857[0]
  i856.m_WrapAround = !!i857[1]
  request.r(i857[2], i857[3], 0, i856, 'm_SelectOnUp')
  request.r(i857[4], i857[5], 0, i856, 'm_SelectOnDown')
  request.r(i857[6], i857[7], 0, i856, 'm_SelectOnLeft')
  request.r(i857[8], i857[9], 0, i856, 'm_SelectOnRight')
  return i856
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i859 = data
  i858.m_NormalColor = new pc.Color(i859[0], i859[1], i859[2], i859[3])
  i858.m_HighlightedColor = new pc.Color(i859[4], i859[5], i859[6], i859[7])
  i858.m_PressedColor = new pc.Color(i859[8], i859[9], i859[10], i859[11])
  i858.m_SelectedColor = new pc.Color(i859[12], i859[13], i859[14], i859[15])
  i858.m_DisabledColor = new pc.Color(i859[16], i859[17], i859[18], i859[19])
  i858.m_ColorMultiplier = i859[20]
  i858.m_FadeDuration = i859[21]
  return i858
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_HighlightedSprite')
  request.r(i861[2], i861[3], 0, i860, 'm_PressedSprite')
  request.r(i861[4], i861[5], 0, i860, 'm_SelectedSprite')
  request.r(i861[6], i861[7], 0, i860, 'm_DisabledSprite')
  return i860
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i863 = data
  i862.m_NormalTrigger = i863[0]
  i862.m_HighlightedTrigger = i863[1]
  i862.m_PressedTrigger = i863[2]
  i862.m_SelectedTrigger = i863[3]
  i862.m_DisabledTrigger = i863[4]
  return i862
}

Deserializers["PlayerInput"] = function (request, data, root) {
  var i864 = root || request.c( 'PlayerInput' )
  var i865 = data
  i864.pigLayerMask = UnityEngine.LayerMask.FromIntegerValue( i865[0] )
  request.r(i865[1], i865[2], 0, i864, 'target')
  return i864
}

Deserializers["UIManager"] = function (request, data, root) {
  var i866 = root || request.c( 'UIManager' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'straightSlotText')
  request.r(i867[2], i867[3], 0, i866, 'scoreText')
  request.r(i867[4], i867[5], 0, i866, 'gameOverPanel')
  return i866
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i868 = root || request.c( 'SoundManager' )
  var i869 = data
  i868.musicVolume = i869[0]
  i868.sfxVolume = i869[1]
  request.r(i869[2], i869[3], 0, i868, 'musicAus')
  request.r(i869[4], i869[5], 0, i868, 'sfxAus')
  request.r(i869[6], i869[7], 0, i868, 'validCat')
  request.r(i869[8], i869[9], 0, i868, 'error')
  request.r(i869[10], i869[11], 0, i868, 'yarn')
  request.r(i869[12], i869[13], 0, i868, 'win')
  request.r(i869[14], i869[15], 0, i868, 'lose')
  request.r(i869[16], i869[17], 0, i868, 'invalidCat')
  var i871 = i869[18]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.backgroundMusics = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'clip')
  request.r(i875[2], i875[3], 0, i874, 'outputAudioMixerGroup')
  i874.playOnAwake = !!i875[4]
  i874.loop = !!i875[5]
  i874.time = i875[6]
  i874.volume = i875[7]
  i874.pitch = i875[8]
  i874.enabled = !!i875[9]
  return i874
}

Deserializers["SpawnerManager"] = function (request, data, root) {
  var i876 = root || request.c( 'SpawnerManager' )
  var i877 = data
  i876.currentLevel = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'blockPrefab')
  request.r(i877[3], i877[4], 0, i876, 'blockSpawnPoint')
  request.r(i877[5], i877[6], 0, i876, 'blockGroup')
  request.r(i877[7], i877[8], 0, i876, 'pigSpawnPoint')
  var i879 = i877[9]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('LevelDataSO')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i876.Levels = i878
  i876.blockSpacing = i877[10]
  request.r(i877[11], i877[12], 0, i876, 'pigSpawnPos')
  request.r(i877[13], i877[14], 0, i876, 'pigPrefab')
  var i881 = i877[15]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i876.allWaypoints = i880
  var i883 = i877[16]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i876.queuePos = i882
  i876._straightSlot = i877[17]
  i876._maxstraightSlot = i877[18]
  i876.speedOnStraight = i877[19]
  i876.speedOnCurve = i877[20]
  i876.jumpToQueueSpeed = i877[21]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'sharedMesh')
  i888.convex = !!i889[2]
  i888.enabled = !!i889[3]
  i888.isTrigger = !!i889[4]
  request.r(i889[5], i889[6], 0, i888, 'material')
  return i888
}

Deserializers["FlashObject"] = function (request, data, root) {
  var i890 = root || request.c( 'FlashObject' )
  var i891 = data
  i890.flashSpeed = i891[0]
  i890.minAlpha = i891[1]
  i890.maxAlpha = i891[2]
  i890.flashDuration = i891[3]
  return i890
}

Deserializers["GameManager"] = function (request, data, root) {
  var i892 = root || request.c( 'GameManager' )
  var i893 = data
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i895 = data
  i894.ambientIntensity = i895[0]
  i894.reflectionIntensity = i895[1]
  i894.ambientMode = i895[2]
  i894.ambientLight = new pc.Color(i895[3], i895[4], i895[5], i895[6])
  i894.ambientSkyColor = new pc.Color(i895[7], i895[8], i895[9], i895[10])
  i894.ambientGroundColor = new pc.Color(i895[11], i895[12], i895[13], i895[14])
  i894.ambientEquatorColor = new pc.Color(i895[15], i895[16], i895[17], i895[18])
  i894.fogColor = new pc.Color(i895[19], i895[20], i895[21], i895[22])
  i894.fogEndDistance = i895[23]
  i894.fogStartDistance = i895[24]
  i894.fogDensity = i895[25]
  i894.fog = !!i895[26]
  request.r(i895[27], i895[28], 0, i894, 'skybox')
  i894.fogMode = i895[29]
  var i897 = i895[30]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i897[i + 0]) );
  }
  i894.lightmaps = i896
  i894.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i895[31], i894.lightProbes)
  i894.lightmapsMode = i895[32]
  i894.mixedBakeMode = i895[33]
  i894.environmentLightingMode = i895[34]
  i894.ambientProbe = new pc.SphericalHarmonicsL2(i895[35])
  i894.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i895[36])
  i894.useReferenceAmbientProbe = !!i895[37]
  request.r(i895[38], i895[39], 0, i894, 'customReflection')
  request.r(i895[40], i895[41], 0, i894, 'defaultReflection')
  i894.defaultReflectionMode = i895[42]
  i894.defaultReflectionResolution = i895[43]
  i894.sunLightObjectId = i895[44]
  i894.pixelLightCount = i895[45]
  i894.defaultReflectionHDR = !!i895[46]
  i894.hasLightDataAsset = !!i895[47]
  i894.hasManualGenerate = !!i895[48]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'lightmapColor')
  request.r(i901[2], i901[3], 0, i900, 'lightmapDirection')
  request.r(i901[4], i901[5], 0, i900, 'shadowMask')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i902 = root || new UnityEngine.LightProbes()
  var i903 = data
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i909 = data
  var i911 = i909[0]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i911[i + 0]));
  }
  i908.ShaderCompilationErrors = i910
  i908.name = i909[1]
  i908.guid = i909[2]
  var i913 = i909[3]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i908.shaderDefinedKeywords = i912
  var i915 = i909[4]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i915[i + 0]) );
  }
  i908.passes = i914
  var i917 = i909[5]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i917[i + 0]) );
  }
  i908.usePasses = i916
  var i919 = i909[6]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i919[i + 0]) );
  }
  i908.defaultParameterValues = i918
  request.r(i909[7], i909[8], 0, i908, 'unityFallbackShader')
  i908.readDepth = !!i909[9]
  i908.hasDepthOnlyPass = !!i909[10]
  i908.isCreatedByShaderGraph = !!i909[11]
  i908.disableBatching = !!i909[12]
  i908.compiled = !!i909[13]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i923 = data
  i922.shaderName = i923[0]
  i922.errorMessage = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i928 = root || new pc.UnityShaderPass()
  var i929 = data
  i928.id = i929[0]
  i928.subShaderIndex = i929[1]
  i928.name = i929[2]
  i928.passType = i929[3]
  i928.grabPassTextureName = i929[4]
  i928.usePass = !!i929[5]
  i928.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[6], i928.zTest)
  i928.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[7], i928.zWrite)
  i928.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[8], i928.culling)
  i928.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i929[9], i928.blending)
  i928.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i929[10], i928.alphaBlending)
  i928.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[11], i928.colorWriteMask)
  i928.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[12], i928.offsetUnits)
  i928.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[13], i928.offsetFactor)
  i928.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[14], i928.stencilRef)
  i928.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[15], i928.stencilReadMask)
  i928.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[16], i928.stencilWriteMask)
  i928.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i929[17], i928.stencilOp)
  i928.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i929[18], i928.stencilOpFront)
  i928.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i929[19], i928.stencilOpBack)
  var i931 = i929[20]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i931[i + 0]) );
  }
  i928.tags = i930
  var i933 = i929[21]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i928.passDefinedKeywords = i932
  var i935 = i929[22]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i935[i + 0]) );
  }
  i928.passDefinedKeywordGroups = i934
  var i937 = i929[23]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i937[i + 0]) );
  }
  i928.variants = i936
  var i939 = i929[24]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i939[i + 0]) );
  }
  i928.excludedVariants = i938
  i928.hasDepthReader = !!i929[25]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i941 = data
  i940.val = i941[0]
  i940.name = i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i943 = data
  i942.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[0], i942.src)
  i942.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[1], i942.dst)
  i942.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[2], i942.op)
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i945 = data
  i944.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[0], i944.pass)
  i944.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[1], i944.fail)
  i944.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[2], i944.zFail)
  i944.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[3], i944.comp)
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i949 = data
  i948.name = i949[0]
  i948.value = i949[1]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i953 = data
  var i955 = i953[0]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( i955[i + 0] );
  }
  i952.keywords = i954
  i952.hasDiscard = !!i953[1]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i959 = data
  i958.passId = i959[0]
  i958.subShaderIndex = i959[1]
  var i961 = i959[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( i961[i + 0] );
  }
  i958.keywords = i960
  i958.vertexProgram = i959[3]
  i958.fragmentProgram = i959[4]
  i958.exportedForWebGl2 = !!i959[5]
  i958.readDepth = !!i959[6]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'shader')
  i964.pass = i965[2]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i969 = data
  i968.name = i969[0]
  i968.type = i969[1]
  i968.value = new pc.Vec4( i969[2], i969[3], i969[4], i969[5] )
  i968.textureValue = i969[6]
  i968.shaderPropertyFlag = i969[7]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i971 = data
  i970.name = i971[0]
  request.r(i971[1], i971[2], 0, i970, 'texture')
  i970.aabb = i971[3]
  i970.vertices = i971[4]
  i970.triangles = i971[5]
  i970.textureRect = UnityEngine.Rect.MinMaxRect(i971[6], i971[7], i971[8], i971[9])
  i970.packedRect = UnityEngine.Rect.MinMaxRect(i971[10], i971[11], i971[12], i971[13])
  i970.border = new pc.Vec4( i971[14], i971[15], i971[16], i971[17] )
  i970.transparency = i971[18]
  i970.bounds = i971[19]
  i970.pixelsPerUnit = i971[20]
  i970.textureWidth = i971[21]
  i970.textureHeight = i971[22]
  i970.nativeSize = new pc.Vec2( i971[23], i971[24] )
  i970.pivot = new pc.Vec2( i971[25], i971[26] )
  i970.textureRectOffset = new pc.Vec2( i971[27], i971[28] )
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i973 = data
  i972.name = i973[0]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i975 = data
  i974.name = i975[0]
  i974.wrapMode = i975[1]
  i974.isLooping = !!i975[2]
  i974.length = i975[3]
  var i977 = i975[4]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i977[i + 0]) );
  }
  i974.curves = i976
  var i979 = i975[5]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i979[i + 0]) );
  }
  i974.events = i978
  i974.halfPrecision = !!i975[6]
  i974._frameRate = i975[7]
  i974.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i975[8], i974.localBounds)
  i974.hasMuscleCurves = !!i975[9]
  var i981 = i975[10]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i974.clipMuscleConstant = i980
  i974.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i975[11], i974.clipBindingConstant)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i985 = data
  i984.path = i985[0]
  i984.hash = i985[1]
  i984.componentType = i985[2]
  i984.property = i985[3]
  i984.keys = i985[4]
  var i987 = i985[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i987[i + 0]) );
  }
  i984.objectReferenceKeys = i986
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i991 = data
  i990.time = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'value')
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i995 = data
  i994.functionName = i995[0]
  i994.floatParameter = i995[1]
  i994.intParameter = i995[2]
  i994.stringParameter = i995[3]
  request.r(i995[4], i995[5], 0, i994, 'objectReferenceParameter')
  i994.time = i995[6]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i997 = data
  i996.center = new pc.Vec3( i997[0], i997[1], i997[2] )
  i996.extends = new pc.Vec3( i997[3], i997[4], i997[5] )
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1001 = data
  var i1003 = i1001[0]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i1000.genericBindings = i1002
  var i1005 = i1001[1]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( i1005[i + 0] );
  }
  i1000.pptrCurveMapping = i1004
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.ascent = i1007[1]
  i1006.originalLineHeight = i1007[2]
  i1006.fontSize = i1007[3]
  var i1009 = i1007[4]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1009[i + 0]) );
  }
  i1006.characterInfo = i1008
  request.r(i1007[5], i1007[6], 0, i1006, 'texture')
  i1006.originalFontSize = i1007[7]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1013 = data
  i1012.index = i1013[0]
  i1012.advance = i1013[1]
  i1012.bearing = i1013[2]
  i1012.glyphWidth = i1013[3]
  i1012.glyphHeight = i1013[4]
  i1012.minX = i1013[5]
  i1012.maxX = i1013[6]
  i1012.minY = i1013[7]
  i1012.maxY = i1013[8]
  i1012.uvBottomLeftX = i1013[9]
  i1012.uvBottomLeftY = i1013[10]
  i1012.uvBottomRightX = i1013[11]
  i1012.uvBottomRightY = i1013[12]
  i1012.uvTopLeftX = i1013[13]
  i1012.uvTopLeftY = i1013[14]
  i1012.uvTopRightX = i1013[15]
  i1012.uvTopRightY = i1013[16]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1015 = data
  i1014.name = i1015[0]
  var i1017 = i1015[1]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1017[i + 0]) );
  }
  i1014.layers = i1016
  var i1019 = i1015[2]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1019[i + 0]) );
  }
  i1014.parameters = i1018
  i1014.animationClips = i1015[3]
  i1014.avatarUnsupported = i1015[4]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.defaultWeight = i1023[1]
  i1022.blendingMode = i1023[2]
  i1022.avatarMask = i1023[3]
  i1022.syncedLayerIndex = i1023[4]
  i1022.syncedLayerAffectsTiming = !!i1023[5]
  i1022.syncedLayers = i1023[6]
  i1022.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1023[7], i1022.stateMachine)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1025 = data
  i1024.id = i1025[0]
  i1024.name = i1025[1]
  i1024.path = i1025[2]
  var i1027 = i1025[3]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1027[i + 0]) );
  }
  i1024.states = i1026
  var i1029 = i1025[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1029[i + 0]) );
  }
  i1024.machines = i1028
  var i1031 = i1025[5]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1031[i + 0]) );
  }
  i1024.entryStateTransitions = i1030
  var i1033 = i1025[6]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1033[i + 0]) );
  }
  i1024.exitStateTransitions = i1032
  var i1035 = i1025[7]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1035[i + 0]) );
  }
  i1024.anyStateTransitions = i1034
  i1024.defaultStateId = i1025[8]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1039 = data
  i1038.id = i1039[0]
  i1038.name = i1039[1]
  i1038.cycleOffset = i1039[2]
  i1038.cycleOffsetParameter = i1039[3]
  i1038.cycleOffsetParameterActive = !!i1039[4]
  i1038.mirror = !!i1039[5]
  i1038.mirrorParameter = i1039[6]
  i1038.mirrorParameterActive = !!i1039[7]
  i1038.motionId = i1039[8]
  i1038.nameHash = i1039[9]
  i1038.fullPathHash = i1039[10]
  i1038.speed = i1039[11]
  i1038.speedParameter = i1039[12]
  i1038.speedParameterActive = !!i1039[13]
  i1038.tag = i1039[14]
  i1038.tagHash = i1039[15]
  i1038.writeDefaultValues = !!i1039[16]
  var i1041 = i1039[17]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1038.behaviours = i1040
  var i1043 = i1039[18]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1043[i + 0]) );
  }
  i1038.transitions = i1042
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1049 = data
  i1048.fullPath = i1049[0]
  i1048.canTransitionToSelf = !!i1049[1]
  i1048.duration = i1049[2]
  i1048.exitTime = i1049[3]
  i1048.hasExitTime = !!i1049[4]
  i1048.hasFixedDuration = !!i1049[5]
  i1048.interruptionSource = i1049[6]
  i1048.offset = i1049[7]
  i1048.orderedInterruption = !!i1049[8]
  i1048.destinationStateId = i1049[9]
  i1048.isExit = !!i1049[10]
  i1048.mute = !!i1049[11]
  i1048.solo = !!i1049[12]
  var i1051 = i1049[13]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1051[i + 0]) );
  }
  i1048.conditions = i1050
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1055 = data
  i1054.mode = i1055[0]
  i1054.parameter = i1055[1]
  i1054.threshold = i1055[2]
  return i1054
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.bytes64 = i1069[1]
  i1068.data = i1069[2]
  return i1068
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('UnityEngine.InputSystem.InputActionMap', i1073[i + 0]) );
  }
  i1070.m_ActionMaps = i1072
  var i1075 = i1071[1]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1075[i + 0]) );
  }
  i1070.m_ControlSchemes = i1074
  i1070.m_IsProjectWide = !!i1071[2]
  return i1070
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1079 = data
  i1078.m_Name = i1079[0]
  i1078.m_Id = i1079[1]
  request.r(i1079[2], i1079[3], 0, i1078, 'm_Asset')
  var i1081 = i1079[4]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('UnityEngine.InputSystem.InputAction', i1081[i + 0]) );
  }
  i1078.m_Actions = i1080
  var i1083 = i1079[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('UnityEngine.InputSystem.InputBinding', i1083[i + 0]) );
  }
  i1078.m_Bindings = i1082
  return i1078
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1087 = data
  i1086.m_Name = i1087[0]
  i1086.m_Type = i1087[1]
  i1086.m_ExpectedControlType = i1087[2]
  i1086.m_Id = i1087[3]
  i1086.m_Processors = i1087[4]
  i1086.m_Interactions = i1087[5]
  var i1089 = i1087[6]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('UnityEngine.InputSystem.InputBinding', i1089[i + 0]) );
  }
  i1086.m_SingletonActionBindings = i1088
  i1086.m_Flags = i1087[7]
  return i1086
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1093 = data
  i1092.m_Name = i1093[0]
  i1092.m_Id = i1093[1]
  i1092.m_Path = i1093[2]
  i1092.m_Interactions = i1093[3]
  i1092.m_Processors = i1093[4]
  i1092.m_Groups = i1093[5]
  i1092.m_Action = i1093[6]
  i1092.m_Flags = i1093[7]
  return i1092
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1097 = data
  i1096.m_Name = i1097[0]
  i1096.m_BindingGroup = i1097[1]
  var i1099 = i1097[2]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1099[i + 0]) );
  }
  i1096.m_DeviceRequirements = i1098
  return i1096
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1103 = data
  i1102.m_ControlPath = i1103[0]
  i1102.m_Flags = i1103[1]
  return i1102
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'm_Asset')
  i1104.m_ActionId = i1105[2]
  return i1104
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1107 = data
  i1106.normalStyle = i1107[0]
  i1106.normalSpacingOffset = i1107[1]
  i1106.boldStyle = i1107[2]
  i1106.boldSpacing = i1107[3]
  i1106.italicStyle = i1107[4]
  i1106.tabSize = i1107[5]
  request.r(i1107[6], i1107[7], 0, i1106, 'atlas')
  i1106.m_SourceFontFileGUID = i1107[8]
  i1106.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1107[9], i1106.m_CreationSettings)
  request.r(i1107[10], i1107[11], 0, i1106, 'm_SourceFontFile')
  i1106.m_SourceFontFilePath = i1107[12]
  i1106.m_AtlasPopulationMode = i1107[13]
  i1106.InternalDynamicOS = !!i1107[14]
  var i1109 = i1107[15]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('UnityEngine.TextCore.Glyph', i1109[i + 0]));
  }
  i1106.m_GlyphTable = i1108
  var i1111 = i1107[16]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('TMPro.TMP_Character', i1111[i + 0]));
  }
  i1106.m_CharacterTable = i1110
  var i1113 = i1107[17]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 2, i1112, '')
  }
  i1106.m_AtlasTextures = i1112
  i1106.m_AtlasTextureIndex = i1107[18]
  i1106.m_IsMultiAtlasTexturesEnabled = !!i1107[19]
  i1106.m_GetFontFeatures = !!i1107[20]
  i1106.m_ClearDynamicDataOnBuild = !!i1107[21]
  i1106.m_AtlasWidth = i1107[22]
  i1106.m_AtlasHeight = i1107[23]
  i1106.m_AtlasPadding = i1107[24]
  i1106.m_AtlasRenderMode = i1107[25]
  var i1115 = i1107[26]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('UnityEngine.TextCore.GlyphRect', i1115[i + 0]));
  }
  i1106.m_UsedGlyphRects = i1114
  var i1117 = i1107[27]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('UnityEngine.TextCore.GlyphRect', i1117[i + 0]));
  }
  i1106.m_FreeGlyphRects = i1116
  i1106.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1107[28], i1106.m_FontFeatureTable)
  i1106.m_ShouldReimportFontFeatures = !!i1107[29]
  var i1119 = i1107[30]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1106.m_FallbackFontAssetTable = i1118
  var i1121 = i1107[31]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('TMPro.TMP_FontWeightPair', i1121[i + 0]) );
  }
  i1106.m_FontWeightTable = i1120
  var i1123 = i1107[32]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('TMPro.TMP_FontWeightPair', i1123[i + 0]) );
  }
  i1106.fontWeights = i1122
  i1106.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1107[33], i1106.m_fontInfo)
  var i1125 = i1107[34]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.TMP_Glyph', i1125[i + 0]));
  }
  i1106.m_glyphInfoList = i1124
  i1106.m_KerningTable = request.d('TMPro.KerningTable', i1107[35], i1106.m_KerningTable)
  var i1127 = i1107[36]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 1, i1126, '')
  }
  i1106.fallbackFontAssets = i1126
  i1106.m_Version = i1107[37]
  i1106.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1107[38], i1106.m_FaceInfo)
  request.r(i1107[39], i1107[40], 0, i1106, 'm_Material')
  return i1106
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1128 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1129 = data
  i1128.sourceFontFileName = i1129[0]
  i1128.sourceFontFileGUID = i1129[1]
  i1128.faceIndex = i1129[2]
  i1128.pointSizeSamplingMode = i1129[3]
  i1128.pointSize = i1129[4]
  i1128.padding = i1129[5]
  i1128.paddingMode = i1129[6]
  i1128.packingMode = i1129[7]
  i1128.atlasWidth = i1129[8]
  i1128.atlasHeight = i1129[9]
  i1128.characterSetSelectionMode = i1129[10]
  i1128.characterSequence = i1129[11]
  i1128.referencedFontAssetGUID = i1129[12]
  i1128.referencedTextAssetGUID = i1129[13]
  i1128.fontStyle = i1129[14]
  i1128.fontStyleModifier = i1129[15]
  i1128.renderMode = i1129[16]
  i1128.includeFontFeatures = !!i1129[17]
  return i1128
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1133 = data
  i1132.m_Index = i1133[0]
  i1132.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1133[1], i1132.m_Metrics)
  i1132.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1133[2], i1132.m_GlyphRect)
  i1132.m_Scale = i1133[3]
  i1132.m_AtlasIndex = i1133[4]
  i1132.m_ClassDefinitionType = i1133[5]
  return i1132
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1135 = data
  i1134.m_Width = i1135[0]
  i1134.m_Height = i1135[1]
  i1134.m_HorizontalBearingX = i1135[2]
  i1134.m_HorizontalBearingY = i1135[3]
  i1134.m_HorizontalAdvance = i1135[4]
  return i1134
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1137 = data
  i1136.m_X = i1137[0]
  i1136.m_Y = i1137[1]
  i1136.m_Width = i1137[2]
  i1136.m_Height = i1137[3]
  return i1136
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_Character' )
  var i1141 = data
  i1140.m_ElementType = i1141[0]
  i1140.m_Unicode = i1141[1]
  i1140.m_GlyphIndex = i1141[2]
  i1140.m_Scale = i1141[3]
  return i1140
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.MultipleSubstitutionRecord', i1149[i + 0]));
  }
  i1146.m_MultipleSubstitutionRecords = i1148
  var i1151 = i1147[1]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.LigatureSubstitutionRecord', i1151[i + 0]));
  }
  i1146.m_LigatureSubstitutionRecords = i1150
  var i1153 = i1147[2]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1153[i + 0]));
  }
  i1146.m_GlyphPairAdjustmentRecords = i1152
  var i1155 = i1147[3]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1155[i + 0]));
  }
  i1146.m_MarkToBaseAdjustmentRecords = i1154
  var i1157 = i1147[4]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1157[i + 0]));
  }
  i1146.m_MarkToMarkAdjustmentRecords = i1156
  return i1146
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1161 = data
  i1160.m_TargetGlyphID = i1161[0]
  i1160.m_SubstituteGlyphIDs = i1161[1]
  return i1160
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1165 = data
  i1164.m_ComponentGlyphIDs = i1165[0]
  i1164.m_LigatureGlyphID = i1165[1]
  return i1164
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1169 = data
  i1168.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1169[0], i1168.m_FirstAdjustmentRecord)
  i1168.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1169[1], i1168.m_SecondAdjustmentRecord)
  i1168.m_FeatureLookupFlags = i1169[2]
  return i1168
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1171 = data
  i1170.m_GlyphIndex = i1171[0]
  i1170.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1171[1], i1170.m_GlyphValueRecord)
  return i1170
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1173 = data
  i1172.m_XPlacement = i1173[0]
  i1172.m_YPlacement = i1173[1]
  i1172.m_XAdvance = i1173[2]
  i1172.m_YAdvance = i1173[3]
  return i1172
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1177 = data
  i1176.m_BaseGlyphID = i1177[0]
  i1176.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1177[1], i1176.m_BaseGlyphAnchorPoint)
  i1176.m_MarkGlyphID = i1177[2]
  i1176.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1177[3], i1176.m_MarkPositionAdjustment)
  return i1176
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1181 = data
  i1180.m_BaseMarkGlyphID = i1181[0]
  i1180.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1181[1], i1180.m_BaseMarkGlyphAnchorPoint)
  i1180.m_CombiningMarkGlyphID = i1181[2]
  i1180.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1181[3], i1180.m_CombiningMarkPositionAdjustment)
  return i1180
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'regularTypeface')
  request.r(i1187[2], i1187[3], 0, i1186, 'italicTypeface')
  return i1186
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1189 = data
  i1188.Name = i1189[0]
  i1188.PointSize = i1189[1]
  i1188.Scale = i1189[2]
  i1188.CharacterCount = i1189[3]
  i1188.LineHeight = i1189[4]
  i1188.Baseline = i1189[5]
  i1188.Ascender = i1189[6]
  i1188.CapHeight = i1189[7]
  i1188.Descender = i1189[8]
  i1188.CenterLine = i1189[9]
  i1188.SuperscriptOffset = i1189[10]
  i1188.SubscriptOffset = i1189[11]
  i1188.SubSize = i1189[12]
  i1188.Underline = i1189[13]
  i1188.UnderlineThickness = i1189[14]
  i1188.strikethrough = i1189[15]
  i1188.strikethroughThickness = i1189[16]
  i1188.TabWidth = i1189[17]
  i1188.Padding = i1189[18]
  i1188.AtlasWidth = i1189[19]
  i1188.AtlasHeight = i1189[20]
  return i1188
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1193 = data
  i1192.id = i1193[0]
  i1192.x = i1193[1]
  i1192.y = i1193[2]
  i1192.width = i1193[3]
  i1192.height = i1193[4]
  i1192.xOffset = i1193[5]
  i1192.yOffset = i1193[6]
  i1192.xAdvance = i1193[7]
  i1192.scale = i1193[8]
  return i1192
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.KerningTable' )
  var i1195 = data
  var i1197 = i1195[0]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('TMPro.KerningPair', i1197[i + 0]));
  }
  i1194.kerningPairs = i1196
  return i1194
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.KerningPair' )
  var i1201 = data
  i1200.xOffset = i1201[0]
  i1200.m_FirstGlyph = i1201[1]
  i1200.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1201[2], i1200.m_FirstGlyphAdjustments)
  i1200.m_SecondGlyph = i1201[3]
  i1200.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1201[4], i1200.m_SecondGlyphAdjustments)
  i1200.m_IgnoreSpacingAdjustments = !!i1201[5]
  return i1200
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1203 = data
  i1202.m_FaceIndex = i1203[0]
  i1202.m_FamilyName = i1203[1]
  i1202.m_StyleName = i1203[2]
  i1202.m_PointSize = i1203[3]
  i1202.m_Scale = i1203[4]
  i1202.m_UnitsPerEM = i1203[5]
  i1202.m_LineHeight = i1203[6]
  i1202.m_AscentLine = i1203[7]
  i1202.m_CapLine = i1203[8]
  i1202.m_MeanLine = i1203[9]
  i1202.m_Baseline = i1203[10]
  i1202.m_DescentLine = i1203[11]
  i1202.m_SuperscriptOffset = i1203[12]
  i1202.m_SuperscriptSize = i1203[13]
  i1202.m_SubscriptOffset = i1203[14]
  i1202.m_SubscriptSize = i1203[15]
  i1202.m_UnderlineOffset = i1203[16]
  i1202.m_UnderlineThickness = i1203[17]
  i1202.m_StrikethroughOffset = i1203[18]
  i1202.m_StrikethroughThickness = i1203[19]
  i1202.m_TabWidth = i1203[20]
  return i1202
}

Deserializers["LevelDataSO"] = function (request, data, root) {
  var i1204 = root || request.c( 'LevelDataSO' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'sourceJson')
  i1204.levelIndex = i1205[2]
  i1204.width = i1205[3]
  i1204.height = i1205[4]
  var i1207 = i1205[5]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(i1207[i + 0]);
  }
  i1204.gridData = i1206
  var i1209 = i1205[6]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('LaneConfig')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('LaneConfig', i1209[i + 0]));
  }
  i1204.lanes = i1208
  return i1204
}

Deserializers["LaneConfig"] = function (request, data, root) {
  var i1214 = root || request.c( 'LaneConfig' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('PigConfig')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('PigConfig', i1217[i + 0]));
  }
  i1214.pigs = i1216
  return i1214
}

Deserializers["PigConfig"] = function (request, data, root) {
  var i1220 = root || request.c( 'PigConfig' )
  var i1221 = data
  i1220.colorName = i1221[0]
  i1220.bullets = i1221[1]
  return i1220
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_Settings' )
  var i1223 = data
  i1222.assetVersion = i1223[0]
  i1222.m_TextWrappingMode = i1223[1]
  i1222.m_enableKerning = !!i1223[2]
  var i1225 = i1223[3]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(i1225[i + 0]);
  }
  i1222.m_ActiveFontFeatures = i1224
  i1222.m_enableExtraPadding = !!i1223[4]
  i1222.m_enableTintAllSprites = !!i1223[5]
  i1222.m_enableParseEscapeCharacters = !!i1223[6]
  i1222.m_EnableRaycastTarget = !!i1223[7]
  i1222.m_GetFontFeaturesAtRuntime = !!i1223[8]
  i1222.m_missingGlyphCharacter = i1223[9]
  i1222.m_ClearDynamicDataOnBuild = !!i1223[10]
  i1222.m_warningsDisabled = !!i1223[11]
  request.r(i1223[12], i1223[13], 0, i1222, 'm_defaultFontAsset')
  i1222.m_defaultFontAssetPath = i1223[14]
  i1222.m_defaultFontSize = i1223[15]
  i1222.m_defaultAutoSizeMinRatio = i1223[16]
  i1222.m_defaultAutoSizeMaxRatio = i1223[17]
  i1222.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1223[18], i1223[19] )
  i1222.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1223[20], i1223[21] )
  i1222.m_autoSizeTextContainer = !!i1223[22]
  i1222.m_IsTextObjectScaleStatic = !!i1223[23]
  var i1227 = i1223[24]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 1, i1226, '')
  }
  i1222.m_fallbackFontAssets = i1226
  i1222.m_matchMaterialPreset = !!i1223[25]
  i1222.m_HideSubTextObjects = !!i1223[26]
  request.r(i1223[27], i1223[28], 0, i1222, 'm_defaultSpriteAsset')
  i1222.m_defaultSpriteAssetPath = i1223[29]
  i1222.m_enableEmojiSupport = !!i1223[30]
  i1222.m_MissingCharacterSpriteUnicode = i1223[31]
  var i1229 = i1223[32]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1222.m_EmojiFallbackTextAssets = i1228
  i1222.m_defaultColorGradientPresetsPath = i1223[33]
  request.r(i1223[34], i1223[35], 0, i1222, 'm_defaultStyleSheet')
  i1222.m_StyleSheetsResourcePath = i1223[36]
  request.r(i1223[37], i1223[38], 0, i1222, 'm_leadingCharacters')
  request.r(i1223[39], i1223[40], 0, i1222, 'm_followingCharacters')
  i1222.m_UseModernHangulLineBreakingRules = !!i1223[41]
  return i1222
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1233 = data
  request.r(i1233[0], i1233[1], 0, i1232, 'spriteSheet')
  var i1235 = i1233[2]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.TMP_Sprite', i1235[i + 0]));
  }
  i1232.spriteInfoList = i1234
  var i1237 = i1233[3]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 1, i1236, '')
  }
  i1232.fallbackSpriteAssets = i1236
  var i1239 = i1233[4]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.TMP_SpriteCharacter', i1239[i + 0]));
  }
  i1232.m_SpriteCharacterTable = i1238
  var i1241 = i1233[5]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.TMP_SpriteGlyph', i1241[i + 0]));
  }
  i1232.m_GlyphTable = i1240
  i1232.m_Version = i1233[6]
  i1232.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1233[7], i1232.m_FaceInfo)
  request.r(i1233[8], i1233[9], 0, i1232, 'm_Material')
  return i1232
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1245 = data
  i1244.name = i1245[0]
  i1244.hashCode = i1245[1]
  i1244.unicode = i1245[2]
  i1244.pivot = new pc.Vec2( i1245[3], i1245[4] )
  request.r(i1245[5], i1245[6], 0, i1244, 'sprite')
  i1244.id = i1245[7]
  i1244.x = i1245[8]
  i1244.y = i1245[9]
  i1244.width = i1245[10]
  i1244.height = i1245[11]
  i1244.xOffset = i1245[12]
  i1244.yOffset = i1245[13]
  i1244.xAdvance = i1245[14]
  i1244.scale = i1245[15]
  return i1244
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1251 = data
  i1250.m_Name = i1251[0]
  i1250.m_ElementType = i1251[1]
  i1250.m_Unicode = i1251[2]
  i1250.m_GlyphIndex = i1251[3]
  i1250.m_Scale = i1251[4]
  return i1250
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1255 = data
  request.r(i1255[0], i1255[1], 0, i1254, 'sprite')
  i1254.m_Index = i1255[2]
  i1254.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1255[3], i1254.m_Metrics)
  i1254.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1255[4], i1254.m_GlyphRect)
  i1254.m_Scale = i1255[5]
  i1254.m_AtlasIndex = i1255[6]
  i1254.m_ClassDefinitionType = i1255[7]
  return i1254
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_Style', i1259[i + 0]));
  }
  i1256.m_StyleList = i1258
  return i1256
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Style' )
  var i1263 = data
  i1262.m_Name = i1263[0]
  i1262.m_HashCode = i1263[1]
  i1262.m_OpeningDefinition = i1263[2]
  i1262.m_ClosingDefinition = i1263[3]
  i1262.m_OpeningTagArray = i1263[4]
  i1262.m_ClosingTagArray = i1263[5]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1267[i + 0]) );
  }
  i1264.files = i1266
  i1264.componentToPrefabIds = i1265[1]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1271 = data
  i1270.path = i1271[0]
  request.r(i1271[1], i1271[2], 0, i1270, 'unityObject')
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1275[i + 0]) );
  }
  i1272.scriptsExecutionOrder = i1274
  var i1277 = i1273[1]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1277[i + 0]) );
  }
  i1272.sortingLayers = i1276
  var i1279 = i1273[2]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1279[i + 0]) );
  }
  i1272.cullingLayers = i1278
  i1272.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1273[3], i1272.timeSettings)
  i1272.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1273[4], i1272.physicsSettings)
  i1272.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1273[5], i1272.physics2DSettings)
  i1272.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1273[6], i1272.qualitySettings)
  i1272.enableRealtimeShadows = !!i1273[7]
  i1272.enableAutoInstancing = !!i1273[8]
  i1272.enableStaticBatching = !!i1273[9]
  i1272.enableDynamicBatching = !!i1273[10]
  i1272.lightmapEncodingQuality = i1273[11]
  i1272.desiredColorSpace = i1273[12]
  var i1281 = i1273[13]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( i1281[i + 0] );
  }
  i1272.allTags = i1280
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1285 = data
  i1284.name = i1285[0]
  i1284.value = i1285[1]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1289 = data
  i1288.id = i1289[0]
  i1288.name = i1289[1]
  i1288.value = i1289[2]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1293 = data
  i1292.id = i1293[0]
  i1292.name = i1293[1]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1295 = data
  i1294.fixedDeltaTime = i1295[0]
  i1294.maximumDeltaTime = i1295[1]
  i1294.timeScale = i1295[2]
  i1294.maximumParticleTimestep = i1295[3]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1297 = data
  i1296.gravity = new pc.Vec3( i1297[0], i1297[1], i1297[2] )
  i1296.defaultSolverIterations = i1297[3]
  i1296.bounceThreshold = i1297[4]
  i1296.autoSyncTransforms = !!i1297[5]
  i1296.autoSimulation = !!i1297[6]
  var i1299 = i1297[7]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1299[i + 0]) );
  }
  i1296.collisionMatrix = i1298
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1303 = data
  i1302.enabled = !!i1303[0]
  i1302.layerId = i1303[1]
  i1302.otherLayerId = i1303[2]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'material')
  i1304.gravity = new pc.Vec2( i1305[2], i1305[3] )
  i1304.positionIterations = i1305[4]
  i1304.velocityIterations = i1305[5]
  i1304.velocityThreshold = i1305[6]
  i1304.maxLinearCorrection = i1305[7]
  i1304.maxAngularCorrection = i1305[8]
  i1304.maxTranslationSpeed = i1305[9]
  i1304.maxRotationSpeed = i1305[10]
  i1304.baumgarteScale = i1305[11]
  i1304.baumgarteTOIScale = i1305[12]
  i1304.timeToSleep = i1305[13]
  i1304.linearSleepTolerance = i1305[14]
  i1304.angularSleepTolerance = i1305[15]
  i1304.defaultContactOffset = i1305[16]
  i1304.autoSimulation = !!i1305[17]
  i1304.queriesHitTriggers = !!i1305[18]
  i1304.queriesStartInColliders = !!i1305[19]
  i1304.callbacksOnDisable = !!i1305[20]
  i1304.reuseCollisionCallbacks = !!i1305[21]
  i1304.autoSyncTransforms = !!i1305[22]
  var i1307 = i1305[23]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1307[i + 0]) );
  }
  i1304.collisionMatrix = i1306
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1311 = data
  i1310.enabled = !!i1311[0]
  i1310.layerId = i1311[1]
  i1310.otherLayerId = i1311[2]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1315[i + 0]) );
  }
  i1312.qualityLevels = i1314
  var i1317 = i1313[1]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( i1317[i + 0] );
  }
  i1312.names = i1316
  i1312.shadows = i1313[2]
  i1312.anisotropicFiltering = i1313[3]
  i1312.antiAliasing = i1313[4]
  i1312.lodBias = i1313[5]
  i1312.shadowCascades = i1313[6]
  i1312.shadowDistance = i1313[7]
  i1312.shadowmaskMode = i1313[8]
  i1312.shadowProjection = i1313[9]
  i1312.shadowResolution = i1313[10]
  i1312.softParticles = !!i1313[11]
  i1312.softVegetation = !!i1313[12]
  i1312.activeColorSpace = i1313[13]
  i1312.desiredColorSpace = i1313[14]
  i1312.masterTextureLimit = i1313[15]
  i1312.maxQueuedFrames = i1313[16]
  i1312.particleRaycastBudget = i1313[17]
  i1312.pixelLightCount = i1313[18]
  i1312.realtimeReflectionProbes = !!i1313[19]
  i1312.shadowCascade2Split = i1313[20]
  i1312.shadowCascade4Split = new pc.Vec3( i1313[21], i1313[22], i1313[23] )
  i1312.streamingMipmapsActive = !!i1313[24]
  i1312.vSyncCount = i1313[25]
  i1312.asyncUploadBufferSize = i1313[26]
  i1312.asyncUploadTimeSlice = i1313[27]
  i1312.billboardsFaceCameraPosition = !!i1313[28]
  i1312.shadowNearPlaneOffset = i1313[29]
  i1312.streamingMipmapsMemoryBudget = i1313[30]
  i1312.maximumLODLevel = i1313[31]
  i1312.streamingMipmapsAddAllCameras = !!i1313[32]
  i1312.streamingMipmapsMaxLevelReduction = i1313[33]
  i1312.streamingMipmapsRenderersPerFrame = i1313[34]
  i1312.resolutionScalingFixedDPIFactor = i1313[35]
  i1312.streamingMipmapsMaxFileIORequests = i1313[36]
  i1312.currentQualityLevel = i1313[37]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1321 = data
  i1320.name = i1321[0]
  var i1323 = i1321[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1323[i + 0]) );
  }
  i1320.tos = i1322
  var i1325 = i1321[2]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( i1325[i + 0] );
  }
  i1320.constant = i1324
  i1320.isValid = !!i1321[3]
  i1320.isHuman = !!i1321[4]
  i1320.hasRootMotion = !!i1321[5]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1329 = data
  i1328.hash = i1329[0]
  i1328.path = i1329[1]
  return i1328
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1331 = data
  i1330.m_XCoordinate = i1331[0]
  i1330.m_YCoordinate = i1331[1]
  return i1330
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1333 = data
  i1332.m_XPositionAdjustment = i1333[0]
  i1332.m_YPositionAdjustment = i1333[1]
  return i1332
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1335 = data
  i1334.xPlacement = i1335[0]
  i1334.yPlacement = i1335[1]
  i1334.xAdvance = i1335[2]
  i1334.yAdvance = i1335[3]
  return i1334
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[19],"62":[28],"63":[11],"64":[11],"65":[11],"66":[11],"67":[11],"68":[11],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[28],"84":[5],"85":[86],"87":[86],"21":[20],"88":[89],"90":[28],"91":[92],"32":[31],"93":[21],"94":[20],"95":[26,20],"96":[5],"97":[26,20],"98":[20],"99":[20],"100":[5,20],"12":[20,26],"101":[102],"103":[102],"104":[102],"105":[20],"106":[20],"24":[21],"35":[26,20],"107":[20],"23":[21],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[26,20],"118":[20],"119":[20],"120":[20],"121":[20],"122":[26,20],"123":[20],"124":[31],"125":[31],"126":[31],"127":[31],"128":[28],"129":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Block","UnityEngine.BoxCollider","PigComponent","UnityEngine.Rigidbody","TMPro.TextMeshProUGUI","UnityEngine.GameObject","UnityEngine.LineRenderer","WavyLineRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BillboardUI","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UIManager","PlayerInput","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","SpawnerManager","LevelDataSO","UnityEngine.MeshCollider","FlashObject","GameManager","UnityEngine.Cubemap","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.69f1";

Deserializers.productName = "Playable Ad";

Deserializers.lunaInitializationTime = "03/10/2026 02:29:47";

Deserializers.lunaDaysRunning = "7.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Yarn-Flow-2-1";

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

Deserializers.buildID = "1c2b7e98-5770-49a7-9618-a6a599afbe96";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

