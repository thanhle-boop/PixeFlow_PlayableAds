if ( TRACE ) { TRACE( JSON.parse( '["BillboardUI#Start","BillboardUI#LateUpdate","Block#init","Singleton$1#Instance#get","Singleton$1#init","Singleton$1#Awake","FlashObject#init","FlashObject#Awake","FlashObject#OnEnable","FlashObject#OnDisable","FlashObject#ResetFlash","FlashObject#StartFlashing","FlashObject#StopFlashing","FlashObject#FlashCoroutine","GameUtility#GetColorByName","LevelDataSO#GetCell","PigComponent#init","PigComponent#OnDisable","PigComponent#GetQueueIndex","PigComponent#SetQueueIndex","PigComponent#ChangeState","PigComponent#Initialize","PigComponent#OnBulletChanged","PigComponent#DestroyAnimation","PigComponent#DestroyAnimationInternal","PigComponent#JumpTo","PigComponent#ConveyorJourney","PigComponent#JumpCoroutine","PigComponent#MoveTo","PigComponent#MoveCoroutine","PigComponent#ShootingRoutine","PigComponent#CheckAndAddTargetBlocks","PigComponent#SlideTo","PigComponent#MovePigThroughWaypoints","PigComponent#SlideOnCurve","PigComponent#JumpToQueue","PigComponent#JumpToQueueCoroutine","PigComponent#MoveInQueue","PigComponent#MoveInQueueCoroutine","PigComponent#OnTriggerEnter","PlayerInput#init","PlayerInput#Start","PlayerInput#Update","PlayerInput#HandleInput","SpawnerManager#init","SpawnerManager#OnEnable","SpawnerManager#OnDisable","SpawnerManager#RefundStraightSlot","SpawnerManager#ResetData","SpawnerManager#SelectPig","SpawnerManager#ResetClickFlag","SpawnerManager#RemovePigFromLane","SpawnerManager#SpawnMap","SpawnerManager#SpawnPigs","SpawnerManager#ApplyMaterial","SpawnerManager#HandlePigEnterQueue","SpawnerManager#FindNextAvailableQueueIndex","SpawnerManager#OnBlockDestroyed","SpawnerManager#HandlePigClickedFromQueue","SpawnerManager#RearrangeQueue","SpawnerManager#StopAllPigAnimations","WavyLineRenderer#init","WavyLineRenderer#Awake","WavyLineRenderer#OnDestroy","WavyLineRenderer#SetBulletChangedCallback","WavyLineRenderer#InitializeLineRenderer","WavyLineRenderer#SetColor","WavyLineRenderer#AddTarget","WavyLineRenderer#ProcessTargets","WavyLineRenderer#ClearAllTargets","WavyLineRenderer#UpdateStartPoint","WavyLineRenderer#HideLineImmediately","WavyLineRenderer#GetCurrentTargetPosition","DataManager#inherits","GameManager#inherits","GameManager#Start","GameManager#StartGame","GameManager#WinStage","GameManager#GameOver","SoundManager#inherits","SoundManager#init","SoundManager#Start","SoundManager#PlaySound$1","SoundManager#PlaySound","SoundManager#PlaySoundWhenSourceAvailable","SoundManager#PlaySoundLoop","SoundManager#StopSound","SoundManager#PlayMusic$1","SoundManager#PlayMusic","SoundManager#SetMusicVolume","SoundManager#StopPlayMusic","SoundManager#PlayBackgroundMusic","UIManager#inherits","UIManager#OnEnable","UIManager#OnInvalidExecution","UIManager#StartGame","UIManager#OnDisable","UIManager#GameOver","UIManager#OnDownloadButtonClicked","UIManager#UpdateStraightSlot","UIManager#UpdateScore","UIManager#RestartGame"]' ) ); }
/**
 * @version 1.0.9572.18428
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BillboardUI start.*/
    Bridge.define("BillboardUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _mainCameraTransform: null
        },
        methods: {
            /*BillboardUI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BillboardUI#Start", this ); }

                if (UnityEngine.Component.op_Inequality(UnityEngine.Camera.main, null)) {
                    this._mainCameraTransform = UnityEngine.Camera.main.transform;
                }
            },
            /*BillboardUI.Start end.*/

            /*BillboardUI.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "BillboardUI#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(UnityEngine.Camera.main, null)) {
                    return;
                }

                this.transform.rotation = UnityEngine.Camera.main.transform.rotation.$clone();
            },
            /*BillboardUI.LateUpdate end.*/


        }
    });
    /*BillboardUI end.*/

    /*Block start.*/
    Bridge.define("Block", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            color: null,
            isAlreadyDestroyed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Block#init", this ); }

                this.isAlreadyDestroyed = false;
            }
        }
    });
    /*Block end.*/

    /*Singleton$1 start.*/
    Bridge.define("Singleton$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _instance: Bridge.getDefaultValue(T)
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "Singleton$1#Instance#get", this ); }

                        if (Bridge.rValue(Singleton$1(T)._instance) == null) {
                            Singleton$1(T)._instance = Bridge.rValue(UnityEngine.Object.FindObjectOfType(T));

                            if (Bridge.rValue(Singleton$1(T)._instance) == null) {
                                var singletonObject = new UnityEngine.GameObject.$ctor2(Bridge.Reflection.getTypeName(T));
                                Singleton$1(T)._instance = Bridge.rValue(singletonObject.AddComponent(T));
                            }
                        }
                        return Bridge.rValue(Singleton$1(T)._instance);
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Singleton$1#init", this ); }

                    this._instance = Bridge.getDefaultValue(T);
                }
            }
        },
        methods: {
            /*Singleton$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Singleton$1#Awake", this ); }

                if (Bridge.rValue(Singleton$1(T)._instance) == null) {
                    Singleton$1(T)._instance = Bridge.as(this, T);

                    // Xử lý DontDestroyOnLoad cho object hoặc root của nó
                    if (UnityEngine.Component.op_Inequality(this.transform.parent, null)) {
                        UnityEngine.Object.DontDestroyOnLoad(this.transform.root.gameObject);
                    } else {
                        UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                    }
                } else if (UnityEngine.MonoBehaviour.op_Inequality(Bridge.rValue(Singleton$1(T)._instance), this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*Singleton$1.Awake end.*/


        }
    }; });
    /*Singleton$1 end.*/

    /*EventManager start.*/
    Bridge.define("EventManager", {
        statics: {
            fields: {
                OnStartGame: null,
                OnWinGame: null,
                OnLoseGame: null,
                OnClickPig: null,
                OnPigEnterQueue: null,
                OnBlockDestroyed: null,
                OnPigDestroyed: null,
                OnQueueFull: null,
                OnQueueNotFull: null,
                OnFullConveyorSlot: null
            }
        }
    });
    /*EventManager end.*/

    /*FlashObject start.*/
    Bridge.define("FlashObject", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            flashSpeed: 0,
            minAlpha: 0,
            maxAlpha: 0,
            flashDuration: 0,
            objectRenderer: null,
            objectMaterial: null,
            originalColor: null,
            isFlashing: false,
            flashCoroutine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FlashObject#init", this ); }

                this.originalColor = new UnityEngine.Color();
                this.flashSpeed = 3.0;
                this.minAlpha = 0.0;
                this.maxAlpha = 0.8;
                this.flashDuration = 2.0;
                this.isFlashing = false;
            }
        },
        methods: {
            /*FlashObject.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FlashObject#Awake", this ); }

                this.objectRenderer = this.GetComponent(UnityEngine.MeshRenderer);
                this.objectRenderer.material.color = new pc.Color( 0.235294119, 0.239215687, 0.392156869, 1 );
            },
            /*FlashObject.Awake end.*/

            /*FlashObject.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FlashObject#OnEnable", this ); }

                EventManager.OnStartGame = Bridge.fn.combine(EventManager.OnStartGame, Bridge.fn.cacheBind(this, this.ResetFlash));
                EventManager.OnQueueFull = Bridge.fn.combine(EventManager.OnQueueFull, Bridge.fn.cacheBind(this, this.StartFlashing));
                EventManager.OnQueueNotFull = Bridge.fn.combine(EventManager.OnQueueNotFull, Bridge.fn.cacheBind(this, this.StopFlashing));
            },
            /*FlashObject.OnEnable end.*/

            /*FlashObject.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FlashObject#OnDisable", this ); }

                EventManager.OnStartGame = Bridge.fn.remove(EventManager.OnStartGame, Bridge.fn.cacheBind(this, this.ResetFlash));
                EventManager.OnQueueFull = Bridge.fn.remove(EventManager.OnQueueFull, Bridge.fn.cacheBind(this, this.StartFlashing));
                EventManager.OnQueueNotFull = Bridge.fn.remove(EventManager.OnQueueNotFull, Bridge.fn.cacheBind(this, this.StopFlashing));
            },
            /*FlashObject.OnDisable end.*/

            /*FlashObject.ResetFlash start.*/
            ResetFlash: function () {
if ( TRACE ) { TRACE( "FlashObject#ResetFlash", this ); }

                this.StopFlashing();
                this.objectRenderer.material.color = new pc.Color( 0.235294119, 0.239215687, 0.392156869, 1 );

                // Debug.Log(objectMaterial.color);
                // if (objectMaterial != null)
                // {
                //     Color resetColor = originalColor;
                //     resetColor.a = 0f;
                //     objectMaterial.color = resetColor;
                // }
            },
            /*FlashObject.ResetFlash end.*/

            /*FlashObject.StartFlashing start.*/
            StartFlashing: function () {
if ( TRACE ) { TRACE( "FlashObject#StartFlashing", this ); }

                if (!this.isFlashing) {
                    this.isFlashing = true;

                    if (this.flashCoroutine != null) {
                        this.StopCoroutine$2(this.flashCoroutine);
                    }

                    this.flashCoroutine = this.StartCoroutine$1(this.FlashCoroutine());
                }
            },
            /*FlashObject.StartFlashing end.*/

            /*FlashObject.StopFlashing start.*/
            StopFlashing: function () {
if ( TRACE ) { TRACE( "FlashObject#StopFlashing", this ); }

                this.isFlashing = false;
                if (this.flashCoroutine != null) {
                    this.StopCoroutine$2(this.flashCoroutine);
                    this.flashCoroutine = null;
                }

                if (UnityEngine.Component.op_Inequality(this.objectRenderer, null)) {
                    // Color resetColor = originalColor;
                    // resetColor.a = 0f;
                    // objectMaterial.color = resetColor;
                    this.objectRenderer.material.color = new pc.Color( 0.235294119, 0.239215687, 0.392156869, 1 );
                }
            },
            /*FlashObject.StopFlashing end.*/

            /*FlashObject.FlashCoroutine start.*/
            FlashCoroutine: function () {
if ( TRACE ) { TRACE( "FlashObject#FlashCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsedTime,
                    totalElapsed,
                    isPingPong,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsedTime = 0.0;
                                        totalElapsed = 0.0;

                                        isPingPong = true;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( this.isFlashing && totalElapsed < this.flashDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    // elapsedTime += Time.deltaTime * flashSpeed;
                                        // totalElapsed += Time.deltaTime;
                                        // if (objectMaterial != null)
                                        // {
                                        //     Color newColor = originalColor;
                                        //     newColor.a = alpha;
                                        //     objectMaterial.color = newColor;
                                        // }
                                        // float alpha = Mathf.Lerp(minAlpha, maxAlpha, Mathf.PingPong(elapsedTime, 1f));
                                        totalElapsed += UnityEngine.Time.deltaTime;
                                        elapsedTime += UnityEngine.Time.deltaTime;

                                        if (elapsedTime >= 0.2) {
                                            elapsedTime = 0.0;
                                            isPingPong = !isPingPong;
                                            if (isPingPong) {
                                                this.objectRenderer.material.color = new pc.Color( 0.235294119, 0.239215687, 0.392156869, 1 );

                                            } else {
                                                this.objectRenderer.material.color = new pc.Color( 1, 0, 0, 1 );
                                            }
                                        }

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.StopFlashing();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FlashObject.FlashCoroutine end.*/


        }
    });
    /*FlashObject end.*/

    /*GameState start.*/
    Bridge.define("GameState", {
        $kind: 6,
        statics: {
            fields: {
                Start: 0,
                Win: 1,
                GameOver: 2
            }
        }
    });
    /*GameState end.*/

    /*GameUtility start.*/
    Bridge.define("GameUtility", {
        statics: {
            methods: {
                /*GameUtility.GetColorByName:static start.*/
                GetColorByName: function (colorName) {
if ( TRACE ) { TRACE( "GameUtility#GetColorByName", this ); }

                    switch (colorName.toLowerCase()) {
                        case "red": 
                            return new pc.Color( 0.82, 0.14, 0.13, 1 );
                        case "green": 
                            return new pc.Color( 0.36, 0.96, 0.23, 1 );
                        case "blue": 
                            return new pc.Color( 0, 0, 1, 1 );
                        case "yellow": 
                            return new pc.Color( 0.98, 0.87, 0.24, 1 );
                        case "black": 
                            return new pc.Color( 0.309, 0.322, 0.357, 1 );
                        case "white": 
                            return new pc.Color( 1, 1, 1, 1 );
                        case "pink": 
                            return new pc.Color( 1.0, 0.6, 0.7, 1 );
                        case "dark pink": 
                            return new pc.Color( 1.0, 0.2, 0.7, 1 );
                        case "orange": 
                            return new pc.Color( 1.0, 0.5, 0.0, 1 );
                        case "dark green": 
                            return new pc.Color( 0.12, 0.67, 0.09, 1 );
                        case "light green": 
                            return new pc.Color( 0.56, 0.93, 0.56, 1 );
                        case "dark blue": 
                            return new pc.Color( 0.0, 0.0, 0.5, 1 );
                        case "light blue": 
                            return new pc.Color( 0.68, 0.85, 0.9, 1 );
                        case "purple": 
                            return new pc.Color( 0.5, 0.0, 0.5, 1 );
                        case "brown": 
                            return new pc.Color( 0.59, 0.29, 0.0, 1 );
                        case "light brown": 
                            return new pc.Color( 0.76, 0.6, 0.42, 1 );
                        case "cream": 
                            return new pc.Color( 1.0, 0.99, 0.82, 1 );
                        default: 
                            return new pc.Color( 0.5, 0.5, 0.5, 1 );
                    }
                },
                /*GameUtility.GetColorByName:static end.*/


            }
        }
    });
    /*GameUtility end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LaneConfig start.*/
    Bridge.define("LaneConfig", {
        fields: {
            pigs: null
        }
    });
    /*LaneConfig end.*/

    /*LevelDataSO start.*/
    Bridge.define("LevelDataSO", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            sourceJson: null,
            levelIndex: 0,
            width: 0,
            height: 0,
            gridData: null,
            lanes: null
        },
        methods: {
            /*LevelDataSO.GetCell start.*/
            GetCell: function (x, y) {
if ( TRACE ) { TRACE( "LevelDataSO#GetCell", this ); }

                var index = (Bridge.Int.mul(y, this.width) + x) | 0;
                if (index >= 0 && index < this.gridData.Count) {
                    return this.gridData.getItem(index);
                }
                return "empty";
            },
            /*LevelDataSO.GetCell end.*/


        }
    });
    /*LevelDataSO end.*/

    /*PigComponent start.*/
    Bridge.define("PigComponent", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            allWaypoints: null,
            color: null,
            Bullet: 0,
            laneIndex: 0,
            rayCastPoint: null,
            rb: null,
            jumpToQueueSpeed: 0,
            isOnTop: false,
            isOnBelt: false,
            currentState: 0,
            queueIndex: 0,
            _rayCastDirection: null,
            blockLayer: null,
            _wavyLine: null,
            _lastCheckedBlock: null,
            bulletText: null,
            pigModel: null,
            speedOnStraigt: 0,
            speedOnCurve: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PigComponent#init", this ); }

                this._rayCastDirection = new UnityEngine.Vector3();
                this.blockLayer = new UnityEngine.LayerMask();
                this.allWaypoints = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.isOnTop = false;
                this.isOnBelt = false;
                this.currentState = PigState.InLane;
                this.queueIndex = -1;
                this._rayCastDirection = new pc.Vec3( 0, 0, 1 );
                this.speedOnStraigt = 0.0;
                this.speedOnCurve = 0.0;
            }
        },
        methods: {
            /*PigComponent.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PigComponent#OnDisable", this ); }
 },
            /*PigComponent.OnDisable end.*/

            /*PigComponent.GetQueueIndex start.*/
            GetQueueIndex: function () {
if ( TRACE ) { TRACE( "PigComponent#GetQueueIndex", this ); }

                return this.queueIndex;
            },
            /*PigComponent.GetQueueIndex end.*/

            /*PigComponent.SetQueueIndex start.*/
            SetQueueIndex: function (index) {
if ( TRACE ) { TRACE( "PigComponent#SetQueueIndex", this ); }

                this.queueIndex = index;
            },
            /*PigComponent.SetQueueIndex end.*/

            /*PigComponent.ChangeState start.*/
            ChangeState: function (newState) {
if ( TRACE ) { TRACE( "PigComponent#ChangeState", this ); }

                this.currentState = newState;
            },
            /*PigComponent.ChangeState end.*/

            /*PigComponent.Initialize start.*/
            Initialize: function (color, bulletCount, laneIndex, lineColor, speedOnStraight, speedOnCurve, jumpSpeed) {
if ( TRACE ) { TRACE( "PigComponent#Initialize", this ); }

                this.color = color;
                this.Bullet = bulletCount;
                this.laneIndex = laneIndex;

                this.speedOnCurve = speedOnCurve;
                this.speedOnStraigt = speedOnStraight;
                this.jumpToQueueSpeed = jumpSpeed;

                if (UnityEngine.MonoBehaviour.op_Equality(this._wavyLine, null)) {
                    this._wavyLine = this.GetComponent(WavyLineRenderer);
                    if (UnityEngine.MonoBehaviour.op_Equality(this._wavyLine, null)) {
                        this._wavyLine = this.gameObject.AddComponent(WavyLineRenderer);
                    }
                }

                this._wavyLine.SetColor(lineColor);
                this._wavyLine.SetBulletChangedCallback(Bridge.fn.cacheBind(this, this.OnBulletChanged));
                this.bulletText.text = Bridge.toString(bulletCount);
                var meshRenderer = this.pigModel.GetComponentInChildren(UnityEngine.SkinnedMeshRenderer);
                if (UnityEngine.Component.op_Inequality(meshRenderer, null)) {
                    meshRenderer.material.color = GameUtility.GetColorByName(color);
                }
            },
            /*PigComponent.Initialize end.*/

            /*PigComponent.OnBulletChanged start.*/
            OnBulletChanged: function () {
if ( TRACE ) { TRACE( "PigComponent#OnBulletChanged", this ); }

                if (this.Bullet <= 0 && this.isOnBelt) {
                    this.isOnBelt = false;
                    if (UnityEngine.MonoBehaviour.op_Inequality(this._wavyLine, null)) {
                        this._wavyLine.ClearAllTargets();
                        this._wavyLine.HideLineImmediately();
                    }
                    this.StartCoroutine$1(this.DestroyAnimation());
                }
            },
            /*PigComponent.OnBulletChanged end.*/

            /*PigComponent.DestroyAnimation start.*/
            DestroyAnimation: function () {
if ( TRACE ) { TRACE( "PigComponent#DestroyAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.ChangeState(PigState.Destroying);
                                        this.isOnBelt = false;
                                        this.StopAllCoroutines();
                                        this.StartCoroutine$1(this.DestroyAnimationInternal());
                                        Singleton$1(SoundManager).Instance.StopSound(Singleton$1(SoundManager).Instance.yarn);

                                        return false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.DestroyAnimation end.*/

            /*PigComponent.DestroyAnimationInternal start.*/
            DestroyAnimationInternal: function () {
if ( TRACE ) { TRACE( "PigComponent#DestroyAnimationInternal", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startScale,
                    startRotation,
                    currentPos,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startScale = this.transform.localScale.$clone();
                                        startRotation = this.rb.rotation.$clone();
                                        currentPos = this.rb.position.$clone();
                                        duration = 0.3;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;

                                        this.rb.MovePosition(currentPos);
                                        this.transform.localScale = new pc.Vec3().lerp( startScale, pc.Vec3.ZERO.clone(), t );
                                        this.rb.MoveRotation(startRotation.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, t * 360.0, 0.0 ) ));

                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    !Bridge.staticEquals(EventManager.OnPigDestroyed, null) ? EventManager.OnPigDestroyed() : null;
                                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.DestroyAnimationInternal end.*/

            /*PigComponent.JumpTo start.*/
            JumpTo: function (path, onComplete) {
if ( TRACE ) { TRACE( "PigComponent#JumpTo", this ); }

                if (this.currentState === PigState.InQueue) {
                    this.ChangeState(PigState.JumpingFromQueue);
                } else {
                    this.ChangeState(PigState.JumpingToConveyor);
                }

                this.allWaypoints = path;
                this.StartCoroutine$1(this.ConveyorJourney(onComplete));
            },
            /*PigComponent.JumpTo end.*/

            /*PigComponent.ConveyorJourney start.*/
            ConveyorJourney: function (onComplete) {
if ( TRACE ) { TRACE( "PigComponent#ConveyorJourney", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    firstPoint,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    firstPoint = this.allWaypoints.getItem(0).position.$clone();
                                        $enumerator.current = this.StartCoroutine$1(this.JumpCoroutine(firstPoint.$clone(), 0.4, 1.5, onComplete));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.ChangeState(PigState.OnConveyor);
                                        this.StartCoroutine$1(this.MovePigThroughWaypoints(0, ((this.allWaypoints.Count - 1) | 0), this.allWaypoints));
                                        this.StartCoroutine$1(this.ShootingRoutine());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.ConveyorJourney end.*/

            /*PigComponent.JumpCoroutine start.*/
            JumpCoroutine: function (target, duration, height, onComplete) {
if ( TRACE ) { TRACE( "PigComponent#JumpCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    elapsed,
                    t,
                    currentPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isOnTop = true;
                                        startPos = this.rb.position.$clone();
                                        elapsed = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;

                                        currentPos = new pc.Vec3().lerp( startPos, target, t );

                                        currentPos.y += Math.sin(t * UnityEngine.Mathf.PI) * height;

                                        this.rb.MovePosition(currentPos);
                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rb.MovePosition(target);
                                        this.isOnTop = false;
                                        this.isOnBelt = true;

                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.JumpCoroutine end.*/

            /*PigComponent.MoveTo start.*/
            MoveTo: function (newLocalPos) {
if ( TRACE ) { TRACE( "PigComponent#MoveTo", this ); }

                this.StartCoroutine$1(this.MoveCoroutine(newLocalPos));
            },
            /*PigComponent.MoveTo end.*/

            /*PigComponent.MoveCoroutine start.*/
            MoveCoroutine: function (targetLocalPos) {
if ( TRACE ) { TRACE( "PigComponent#MoveCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startLocalPos,
                    duration,
                    elapsed,
                    t,
                    newLocalPos,
                    newWorldPos,
                    finalWorldPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startLocalPos = this.transform.localPosition.$clone();
                                        duration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        newLocalPos = new pc.Vec3().lerp( startLocalPos, targetLocalPos, t );
                                        newWorldPos = this.transform.parent.TransformPoint$1(newLocalPos);
                                        this.rb.MovePosition(newWorldPos);
                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    finalWorldPos = this.transform.parent.TransformPoint$1(targetLocalPos);
                                        this.rb.MovePosition(finalWorldPos);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.MoveCoroutine end.*/

            /*PigComponent.ShootingRoutine start.*/
            ShootingRoutine: function () {
if ( TRACE ) { TRACE( "PigComponent#ShootingRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.isOnBelt ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this._wavyLine, null)) {
                                            this._wavyLine.UpdateStartPoint(this.rayCastPoint.position);
                                        }

                                        this.CheckAndAddTargetBlocks();

                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.ShootingRoutine end.*/

            /*PigComponent.CheckAndAddTargetBlocks start.*/
            CheckAndAddTargetBlocks: function () {
if ( TRACE ) { TRACE( "PigComponent#CheckAndAddTargetBlocks", this ); }

                if (UnityEngine.Component.op_Equality(this.rayCastPoint, null) || UnityEngine.MonoBehaviour.op_Equality(this._wavyLine, null)) {
                    return;
                }


                var checkDistance = 10.0;
                var currentPos = this.rayCastPoint.position.$clone();
                var hit = { v : new UnityEngine.RaycastHit() };

                if (UnityEngine.Physics.Raycast$3(currentPos, this._rayCastDirection, hit, checkDistance, UnityEngine.LayerMask.op_Implicit(this.blockLayer.$clone()))) {
                    var blockComp = hit.v.collider.gameObject.GetComponent(Block);
                    var hitObject = hit.v.collider.gameObject;

                    if (hit.v.collider.CompareTag("Block") && UnityEngine.MonoBehaviour.op_Inequality(blockComp, null) && Bridge.referenceEquals(blockComp.color, this.color) && !blockComp.isAlreadyDestroyed) {
                        this._lastCheckedBlock = hitObject;
                        this._wavyLine.AddTarget(hitObject);
                        blockComp.isAlreadyDestroyed = true;
                        if (UnityEngine.GameObject.op_Inequality(this._lastCheckedBlock, hitObject)) {

                        }
                    } else {
                        this._lastCheckedBlock = null;
                    }
                } else {
                    this._lastCheckedBlock = null;
                }
            },
            /*PigComponent.CheckAndAddTargetBlocks end.*/

            /*PigComponent.SlideTo start.*/
            SlideTo: function (target, duration) {
if ( TRACE ) { TRACE( "PigComponent#SlideTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    elapsed,
                    newPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start = this.rb.position.$clone();
                                        elapsed = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        newPos = new pc.Vec3().lerp( start, target, elapsed / duration );
                                        this.rb.MovePosition(newPos);

                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rb.MovePosition(target);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.SlideTo end.*/

            /*PigComponent.MovePigThroughWaypoints start.*/
            MovePigThroughWaypoints: function (startIndex, targetIndex, path) {
if ( TRACE ) { TRACE( "PigComponent#MovePigThroughWaypoints", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    current,
                    start,
                    control,
                    end,
                    startRot,
                    endRot,
                    end1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    i = startIndex;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 2: {
                                    current = path.getItem(i);

                                        if (Math.abs(this._rayCastDirection.dot( current.forward )) < 0.01) {
                                            this._rayCastDirection = current.transform.forward.$clone();
                                        }

                                        if (current.gameObject.CompareTag("ControlPos") && ((i + 2) | 0) <= targetIndex) {
                                            $step = 3;
                                            continue;
                                        } else  {
                                            $step = 5;
                                            continue;
                                        }
                                }
                                case 3: {
                                    start = path.getItem(i).position.$clone();
                                        control = path.getItem(((i + 1) | 0)).position.$clone();
                                        end = path.getItem(((i + 2) | 0)).position.$clone();
                                        startRot = path.getItem(i).rotation.$clone();
                                        endRot = path.getItem(((i + 2) | 0)).rotation.$clone();

                                        $enumerator.current = this.StartCoroutine$1(this.SlideOnCurve(start, control, end, startRot, endRot, this.speedOnCurve));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    i = (i + 2) | 0;
                                    $step = 7;
                                    continue;
                                }
                                case 5: {
                                    this.rb.MoveRotation(path.getItem(i).rotation);
                                        end1 = path.getItem(((i + 1) | 0)).position.$clone();
                                        $enumerator.current = this.StartCoroutine$1(this.SlideTo(end1, this.speedOnStraigt));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    i = (i + 1) | 0;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    if (i >= ((path.Count - 1) | 0)) {
                                            i = 0;
                                        }

                                        $step = 1;
                                        continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.MovePigThroughWaypoints end.*/

            /*PigComponent.SlideOnCurve start.*/
            SlideOnCurve: function (start, control, end, startRotation, endRotation, duration) {
if ( TRACE ) { TRACE( "PigComponent#SlideOnCurve", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    t,
                    position,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;

                                        position = start.clone().scale( Math.pow(1 - t, 2) ).add( control.clone().scale( 2 * (1 - t) * t ) ).add( end.clone().scale( Math.pow(t, 2) ) );

                                        this.rb.MovePosition(position);
                                        this.rb.MoveRotation(new pc.Quat().slerpUnclamped( startRotation, endRotation, pc.math.clamp( t, 0, 1 ) ));

                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rb.MovePosition(end);
                                        this.rb.MoveRotation(endRotation);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.SlideOnCurve end.*/

            /*PigComponent.JumpToQueue start.*/
            JumpToQueue: function (targetPosition, targetRotation, targetQueueIndex) {
if ( TRACE ) { TRACE( "PigComponent#JumpToQueue", this ); }

                this.ChangeState(PigState.MovingToQueue);
                this.queueIndex = targetQueueIndex;

                this.StopAllCoroutines();
                if (UnityEngine.MonoBehaviour.op_Inequality(this._wavyLine, null)) {
                    this._wavyLine.ClearAllTargets();
                    this._wavyLine.HideLineImmediately();
                }

                this._lastCheckedBlock = null;
                this.isOnBelt = false;
                this.StartCoroutine$1(this.JumpToQueueCoroutine(targetPosition.$clone(), targetRotation));
            },
            /*PigComponent.JumpToQueue end.*/

            /*PigComponent.JumpToQueueCoroutine start.*/
            JumpToQueueCoroutine: function (targetPos, targetRot) {
if ( TRACE ) { TRACE( "PigComponent#JumpToQueueCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    startRot,
                    distance,
                    duration,
                    height,
                    elapsed,
                    t,
                    currentPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.rb.position.$clone();
                                        startRot = this.rb.rotation.$clone();

                                        distance = pc.Vec3.distance( startPos, targetPos );
                                        duration = distance / this.jumpToQueueSpeed;

                                        height = 1.0;
                                        elapsed = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        currentPos = new pc.Vec3().lerp( startPos, targetPos, t );
                                        currentPos.y += Math.sin(t * UnityEngine.Mathf.PI) * height;
                                        this.rb.MovePosition(currentPos);

                                        this.rb.MoveRotation(new pc.Quat().lerpUnclamped( startRot, targetRot, pc.math.clamp( t, 0, 1 ) ));

                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rb.MovePosition(targetPos);
                                        this.rb.MoveRotation(targetRot);
                                        this.isOnTop = true;

                                        this.ChangeState(PigState.InQueue);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.JumpToQueueCoroutine end.*/

            /*PigComponent.MoveInQueue start.*/
            MoveInQueue: function (targetPos, targetRot, newQueueIndex) {
if ( TRACE ) { TRACE( "PigComponent#MoveInQueue", this ); }

                if (this.currentState === PigState.MovingToQueue) {
                    this.StopAllCoroutines();
                    this.queueIndex = newQueueIndex;
                    this.isOnBelt = false;
                    this.ChangeState(PigState.MovingInQueue);
                    this.StartCoroutine$1(this.MoveInQueueCoroutine(targetPos.$clone(), targetRot));
                } else if (this.currentState === PigState.InQueue) {
                    this.ChangeState(PigState.MovingInQueue);
                    this.queueIndex = newQueueIndex;
                    this.StartCoroutine$1(this.MoveInQueueCoroutine(targetPos.$clone(), targetRot));
                } else if (this.currentState === PigState.MovingInQueue) {
                    this.queueIndex = newQueueIndex;
                    this.StopAllCoroutines();
                    this.ChangeState(PigState.MovingInQueue);
                    this.StartCoroutine$1(this.MoveInQueueCoroutine(targetPos.$clone(), targetRot));
                }
            },
            /*PigComponent.MoveInQueue end.*/

            /*PigComponent.MoveInQueueCoroutine start.*/
            MoveInQueueCoroutine: function (targetPos, targetRot) {
if ( TRACE ) { TRACE( "PigComponent#MoveInQueueCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    startRot,
                    distance,
                    speed,
                    duration,
                    jumpHeight,
                    elapsed,
                    t,
                    currentPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.rb.position.$clone();
                                        startRot = this.rb.rotation.$clone();

                                        distance = pc.Vec3.distance( new pc.Vec3( startPos.x, 0, startPos.z ), new pc.Vec3( targetPos.x, 0, targetPos.z ) );
                                        speed = 5.0;
                                        duration = distance / speed;

                                        if (duration < 0.2) {
                                            duration = 0.2;
                                        }

                                        jumpHeight = 0.5;
                                        elapsed = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 2: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(this, null)) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;

                                        currentPos = new pc.Vec3().lerp( startPos, targetPos, t );
                                        currentPos.y += Math.sin(t * UnityEngine.Mathf.PI) * jumpHeight;

                                        this.rb.MovePosition(currentPos);
                                        this.rb.MoveRotation(new pc.Quat().lerpUnclamped( startRot, targetRot, pc.math.clamp( t, 0, 1 ) ));

                                        $enumerator.current = new UnityEngine.WaitForFixedUpdate();
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 6: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this, null)) {
                                            this.rb.MovePosition(targetPos);
                                            this.rb.MoveRotation(targetRot);
                                            this.isOnTop = true;

                                            this.ChangeState(PigState.InQueue);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PigComponent.MoveInQueueCoroutine end.*/

            /*PigComponent.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "PigComponent#OnTriggerEnter", this ); }

                if (other.CompareTag("EndConveyor") && this.isOnBelt) {
                    !Bridge.staticEquals(EventManager.OnPigEnterQueue, null) ? EventManager.OnPigEnterQueue(this) : null;
                }
            },
            /*PigComponent.OnTriggerEnter end.*/


        }
    });
    /*PigComponent end.*/

    /*PigConfig start.*/
    Bridge.define("PigConfig", {
        fields: {
            colorName: null,
            bullets: 0
        }
    });
    /*PigConfig end.*/

    /*PigState start.*/
    Bridge.define("PigState", {
        $kind: 6,
        statics: {
            fields: {
                InLane: 0,
                JumpingToConveyor: 1,
                OnConveyor: 2,
                MovingToQueue: 3,
                InQueue: 4,
                MovingInQueue: 5,
                JumpingFromQueue: 6,
                Destroying: 7
            }
        }
    });
    /*PigState end.*/

    /*PlayerInput start.*/
    Bridge.define("PlayerInput", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pigLayerMask: null,
            target: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerInput#init", this ); }

                this.pigLayerMask = new UnityEngine.LayerMask();
            }
        },
        methods: {
            /*PlayerInput.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerInput#Start", this ); }


            },
            /*PlayerInput.Start end.*/

            /*PlayerInput.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerInput#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.HandleInput(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                    // if (Time.time - lastClickTime >= clickCooldown)
                    // {
                    //     HandleInput(Input.mousePosition);
                    //     lastClickTime = Time.time;
                    // }
                }
            },
            /*PlayerInput.Update end.*/

            /*PlayerInput.HandleInput start.*/
            HandleInput: function (screenPos) {
if ( TRACE ) { TRACE( "PlayerInput#HandleInput", this ); }

                var ray = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPos));
                var hit = { v : new UnityEngine.RaycastHit() };


                if (UnityEngine.Physics.Raycast$1(ray, hit, 100.0, UnityEngine.LayerMask.op_Implicit(this.pigLayerMask.$clone()))) {
                    var clickedPig = hit.v.collider.GetComponent(PigComponent);

                    if (UnityEngine.MonoBehaviour.op_Inequality(clickedPig, null) && clickedPig.isOnTop) {
                        !Bridge.staticEquals(EventManager.OnClickPig, null) ? EventManager.OnClickPig(clickedPig) : null;
                    } else {
                        Singleton$1(SoundManager).Instance.PlaySound(Singleton$1(SoundManager).Instance.invalidCat);
                    }
                }
            },
            /*PlayerInput.HandleInput end.*/


        }
    });
    /*PlayerInput end.*/

    /*SpawnerManager start.*/
    Bridge.define("SpawnerManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            currentLevel: 0,
            blockPrefab: null,
            blockSpawnPoint: null,
            blockGroup: null,
            pigSpawnPoint: null,
            Levels: null,
            blockSpacing: 0,
            pigSpawnPos: null,
            pigPrefab: null,
            allWaypoints: null,
            pigsByLane: null,
            queuePos: null,
            pigsInQueue: null,
            _straightSlot: 0,
            _maxstraightSlot: 0,
            totalBlockCount: 0,
            score: 0,
            isProcessingClick: false,
            speedOnStraight: 0,
            speedOnCurve: 0,
            jumpToQueueSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpawnerManager#init", this ); }

                this.currentLevel = 0;
                this.blockSpacing = 1.2;
                this.pigsByLane = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(PigComponent))).ctor();
                this.pigsInQueue = new (System.Collections.Generic.List$1(PigComponent)).ctor();
                this._straightSlot = 0;
                this._maxstraightSlot = 5;
                this.totalBlockCount = 0;
                this.score = 0;
                this.isProcessingClick = false;
                this.speedOnStraight = 1.0;
                this.speedOnCurve = 0.5;
                this.jumpToQueueSpeed = 5.0;
            }
        },
        methods: {
            /*SpawnerManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SpawnerManager#OnEnable", this ); }

                EventManager.OnStartGame = Bridge.fn.combine(EventManager.OnStartGame, Bridge.fn.cacheBind(this, this.SpawnMap));
                EventManager.OnClickPig = Bridge.fn.combine(EventManager.OnClickPig, Bridge.fn.cacheBind(this, this.SelectPig));
                EventManager.OnPigEnterQueue = Bridge.fn.combine(EventManager.OnPigEnterQueue, Bridge.fn.cacheBind(this, this.HandlePigEnterQueue));
                EventManager.OnBlockDestroyed = Bridge.fn.combine(EventManager.OnBlockDestroyed, Bridge.fn.cacheBind(this, this.OnBlockDestroyed));
                EventManager.OnPigDestroyed = Bridge.fn.combine(EventManager.OnPigDestroyed, Bridge.fn.cacheBind(this, this.RefundStraightSlot));

                EventManager.OnWinGame = Bridge.fn.combine(EventManager.OnWinGame, Bridge.fn.bind(this, function () {
                    this.currentLevel = (this.currentLevel + 1) | 0;
                    this.SpawnMap();
                }));

                EventManager.OnLoseGame = Bridge.fn.combine(EventManager.OnLoseGame, Bridge.fn.bind(this, function () {
                    this.score = 0;
                    this.StopAllPigAnimations();
                }));
            },
            /*SpawnerManager.OnEnable end.*/

            /*SpawnerManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SpawnerManager#OnDisable", this ); }

                EventManager.OnStartGame = Bridge.fn.remove(EventManager.OnStartGame, Bridge.fn.cacheBind(this, this.SpawnMap));
                EventManager.OnClickPig = Bridge.fn.remove(EventManager.OnClickPig, Bridge.fn.cacheBind(this, this.SelectPig));
                EventManager.OnPigEnterQueue = Bridge.fn.remove(EventManager.OnPigEnterQueue, Bridge.fn.cacheBind(this, this.HandlePigEnterQueue));
                EventManager.OnBlockDestroyed = Bridge.fn.remove(EventManager.OnBlockDestroyed, Bridge.fn.cacheBind(this, this.OnBlockDestroyed));
            },
            /*SpawnerManager.OnDisable end.*/

            /*SpawnerManager.RefundStraightSlot start.*/
            RefundStraightSlot: function () {
if ( TRACE ) { TRACE( "SpawnerManager#RefundStraightSlot", this ); }

                this._straightSlot = ((this._straightSlot - 1) | 0) < 0 ? 0 : ((this._straightSlot - 1) | 0);
                Singleton$1(UIManager).Instance.UpdateStraightSlot(this._straightSlot, this._maxstraightSlot);
            },
            /*SpawnerManager.RefundStraightSlot end.*/

            /*SpawnerManager.ResetData start.*/
            ResetData: function () {
if ( TRACE ) { TRACE( "SpawnerManager#ResetData", this ); }

                this.pigsByLane.clear();
                this.pigsInQueue.clear();
                this._straightSlot = 0;
                this.totalBlockCount = 0;
                Singleton$1(UIManager).Instance.UpdateStraightSlot(this._straightSlot, this._maxstraightSlot);
            },
            /*SpawnerManager.ResetData end.*/

            /*SpawnerManager.SelectPig start.*/
            SelectPig: function (pig) {
if ( TRACE ) { TRACE( "SpawnerManager#SelectPig", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(pig, null) || this.isProcessingClick) {
                    return;
                }

                if (this._straightSlot >= this._maxstraightSlot) {
                    !Bridge.staticEquals(EventManager.OnFullConveyorSlot, null) ? EventManager.OnFullConveyorSlot() : null;
                    Singleton$1(SoundManager).Instance.PlaySound(Singleton$1(SoundManager).Instance.error);
                    return;
                }

                if (pig.currentState !== PigState.InLane && pig.currentState !== PigState.InQueue) {
                    return;
                }

                this.isProcessingClick = true;

                this._straightSlot = ((this._straightSlot + 1) | 0) > this._maxstraightSlot ? this._maxstraightSlot : ((this._straightSlot + 1) | 0);
                Singleton$1(UIManager).Instance.UpdateStraightSlot(this._straightSlot, this._maxstraightSlot);
                Singleton$1(SoundManager).Instance.PlaySound(Singleton$1(SoundManager).Instance.validCat);


                if (this.pigsInQueue.contains(pig)) {
                    this.HandlePigClickedFromQueue(pig);
                    this.StartCoroutine$1(this.ResetClickFlag());
                    return;
                }

                // Pig ở trong lane - logic cũ
                var laneIndex = pig.laneIndex;

                if (!this.pigsByLane.containsKey(laneIndex)) {
                    this.isProcessingClick = false;
                    return;
                }

                var pigsInLane = this.pigsByLane.getItem(laneIndex);

                // Kiểm tra xem pig này có phải là con đầu hàng không (index = 0)
                if (pigsInLane.Count === 0 || UnityEngine.MonoBehaviour.op_Inequality(pigsInLane.getItem(0), pig)) {
                    this.isProcessingClick = false;
                    return;
                }

                // Remove heo khỏi lane TRƯỚC KHI nó nhảy lên
                this.RemovePigFromLane(pig);

                pig.JumpTo(this.allWaypoints, function () {
                    // Callback rỗng - không cần làm gì vì đã remove trước đó
                });

                this.StartCoroutine$1(this.ResetClickFlag());
            },
            /*SpawnerManager.SelectPig end.*/

            /*SpawnerManager.ResetClickFlag start.*/
            ResetClickFlag: function () {
if ( TRACE ) { TRACE( "SpawnerManager#ResetClickFlag", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.isProcessingClick = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpawnerManager.ResetClickFlag end.*/

            /*SpawnerManager.RemovePigFromLane start.*/
            RemovePigFromLane: function (removedPig) {
if ( TRACE ) { TRACE( "SpawnerManager#RemovePigFromLane", this ); }

                var laneIndex = removedPig.laneIndex;

                if (!this.pigsByLane.containsKey(laneIndex)) {
                    return;
                }
                var pigsInLane = this.pigsByLane.getItem(laneIndex);
                pigsInLane.remove(removedPig);
                pigsInLane.Sort$2(function (a, b) {
                    return Bridge.compare(b.transform.localPosition.z, a.transform.localPosition.z);
                });

                for (var i = 0; i < pigsInLane.Count; i = (i + 1) | 0) {
                    var newLocalPos = pigsInLane.getItem(i).transform.localPosition.$clone();

                    newLocalPos.z = -(i * this.blockSpacing);

                    pigsInLane.getItem(i).MoveTo(newLocalPos);

                    pigsInLane.getItem(i).isOnTop = (i === 0);
                }
            },
            /*SpawnerManager.RemovePigFromLane end.*/

            /*SpawnerManager.SpawnMap start.*/
            SpawnMap: function () {
if ( TRACE ) { TRACE( "SpawnerManager#SpawnMap", this ); }

                var $t;
                if (this.currentLevel >= this.Levels.Count) {
                    return;
                }

                this.ResetData();

                Singleton$1(UIManager).Instance.UpdateScore(this.score);
                $t = Bridge.getEnumerator(this.blockGroup);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.totalBlockCount = 0;

                var data = this.Levels.getItem(this.currentLevel);

                var W = data.width;
                var H = data.height;
                var offsetX = (((W - 1) | 0)) * this.blockSpacing / 2.0;
                var offsetY = (((H - 1) | 0)) * this.blockSpacing / 2.0;

                for (var y = 0; y < H; y = (y + 1) | 0) {
                    for (var x = 0; x < W; x = (x + 1) | 0) {
                        var index = (Bridge.Int.mul(y, W) + x) | 0;
                        var colorType = data.gridData.getItem(index);

                        if (Bridge.referenceEquals(colorType, "empty")) {
                            continue;
                        }
                        var localPos = new pc.Vec3( (x * this.blockSpacing) - offsetX, 0, ((((((H - 1) | 0) - y) | 0)) * this.blockSpacing) - offsetY );
                        var worldPos = this.blockSpawnPoint.TransformPoint$1(localPos);

                        // Tạo block
                        var newBlock = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.blockPrefab, worldPos, pc.Quat.IDENTITY.clone(), this.blockGroup);
                        this.ApplyMaterial(newBlock, colorType);

                        // Đếm block
                        this.totalBlockCount = (this.totalBlockCount + 1) | 0;
                    }
                }

                this.SpawnPigs(this.Levels.getItem(this.currentLevel));
            },
            /*SpawnerManager.SpawnMap end.*/

            /*SpawnerManager.SpawnPigs start.*/
            SpawnPigs: function (data) {
if ( TRACE ) { TRACE( "SpawnerManager#SpawnPigs", this ); }

                var $t;
                // 1. Xóa heo cũ
                $t = Bridge.getEnumerator(this.pigSpawnPos);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                // 2. Clear dictionary
                this.pigsByLane.clear();

                if (data.lanes == null || data.lanes.Count === 0) {
                    return;
                }

                var laneCount = data.lanes.Count;
                var laneOffsetX = (((laneCount - 1) | 0)) * 0.85 / 2.0;

                for (var i = 0; i < laneCount; i = (i + 1) | 0) {
                    var currentLane = data.lanes.getItem(i);

                    if (!this.pigsByLane.containsKey(i)) {
                        this.pigsByLane.setItem(i, new (System.Collections.Generic.List$1(PigComponent)).ctor());
                    }
                    if (currentLane.pigs == null) {
                        continue;
                    }

                    for (var j = 0; j < currentLane.pigs.Count; j = (j + 1) | 0) {
                        var colorType = currentLane.pigs.getItem(j).colorName;
                        var bulletCount = currentLane.pigs.getItem(j).bullets;
                        var color = GameUtility.GetColorByName(colorType);
                        if (Bridge.referenceEquals(colorType, "empty")) {
                            continue;
                        }
                        var localPos = new pc.Vec3( (i * 0.85) - laneOffsetX, 0, -(j * 0.85) );

                        var worldPos = this.pigSpawnPos.TransformPoint$1(localPos);

                        // 2. Spawn heo
                        var newPig = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.pigPrefab, worldPos, pc.Quat.IDENTITY.clone(), this.pigSpawnPos);


                        var pigComp = newPig.GetComponent(PigComponent);

                        if (UnityEngine.MonoBehaviour.op_Inequality(pigComp, null)) {
                            pigComp.Initialize(colorType, bulletCount, i, color, this.speedOnStraight, this.speedOnCurve, this.jumpToQueueSpeed);

                            this.pigsByLane.getItem(i).add(pigComp);
                            pigComp.isOnTop = (j === 0);

                        }

                        var renderer = newPig.GetComponentInChildren(UnityEngine.Renderer);


                        if (UnityEngine.Component.op_Inequality(renderer, null)) {
                            renderer.material.color = color.$clone();
                        }
                    }
                }
            },
            /*SpawnerManager.SpawnPigs end.*/

            /*SpawnerManager.ApplyMaterial start.*/
            ApplyMaterial: function (obj, colorName) {
if ( TRACE ) { TRACE( "SpawnerManager#ApplyMaterial", this ); }

                var renderer = obj.GetComponent(UnityEngine.Renderer);
                var blockComponent = obj.GetComponent(Block);
                if (UnityEngine.Component.op_Equality(renderer, null) || UnityEngine.MonoBehaviour.op_Equality(blockComponent, null)) {
                    return;
                }

                blockComponent.color = colorName;
                renderer.material.color = GameUtility.GetColorByName(colorName);

            },
            /*SpawnerManager.ApplyMaterial end.*/

            /*SpawnerManager.HandlePigEnterQueue start.*/
            HandlePigEnterQueue: function (pig) {
if ( TRACE ) { TRACE( "SpawnerManager#HandlePigEnterQueue", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(pig, null)) {
                    return;
                }
                this._straightSlot = ((this._straightSlot - 1) | 0) < 0 ? 0 : ((this._straightSlot - 1) | 0);
                Singleton$1(UIManager).Instance.UpdateStraightSlot(this._straightSlot, this._maxstraightSlot);
                if (this.queuePos == null || this.queuePos.Count === 0) {
                    return;
                }

                var queueIndex = this.FindNextAvailableQueueIndex();

                if (queueIndex >= 0 && queueIndex < this.queuePos.Count) {
                    var targetPos = this.queuePos.getItem(queueIndex).position.$clone();
                    var targetRot = this.queuePos.getItem(queueIndex).rotation.$clone();

                    this.pigsInQueue.add(pig);
                    pig.JumpToQueue(targetPos, targetRot, queueIndex);

                    if (this.pigsInQueue.Count >= this.queuePos.Count) {
                        !Bridge.staticEquals(EventManager.OnQueueFull, null) ? EventManager.OnQueueFull() : null;
                    }
                } else {
                    if (UnityEngine.MonoBehaviour.op_Equality(Singleton$1(GameManager).Instance, null)) {
                        return;
                    }

                    Singleton$1(GameManager).Instance.GameOver();
                }
            },
            /*SpawnerManager.HandlePigEnterQueue end.*/

            /*SpawnerManager.FindNextAvailableQueueIndex start.*/
            FindNextAvailableQueueIndex: function () {
if ( TRACE ) { TRACE( "SpawnerManager#FindNextAvailableQueueIndex", this ); }

                var occupiedCount = this.pigsInQueue.Count;

                if (occupiedCount < this.queuePos.Count) {
                    return occupiedCount;
                }

                return -1; // Queue đầy
            },
            /*SpawnerManager.FindNextAvailableQueueIndex end.*/

            /*SpawnerManager.OnBlockDestroyed start.*/
            OnBlockDestroyed: function () {
if ( TRACE ) { TRACE( "SpawnerManager#OnBlockDestroyed", this ); }

                this.totalBlockCount = (this.totalBlockCount - 1) | 0;
                this.score = (this.score + 100) | 0;
                Singleton$1(UIManager).Instance.UpdateScore(this.score);

                // Kiểm tra win condition
                if (this.totalBlockCount <= 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(Singleton$1(GameManager).Instance, null)) {
                        Singleton$1(GameManager).Instance.WinStage();
                    }
                }
            },
            /*SpawnerManager.OnBlockDestroyed end.*/

            /*SpawnerManager.HandlePigClickedFromQueue start.*/
            HandlePigClickedFromQueue: function (pig) {
if ( TRACE ) { TRACE( "SpawnerManager#HandlePigClickedFromQueue", this ); }

                var removedIndex = this.pigsInQueue.indexOf(pig);

                if (removedIndex < 0) {
                    return;
                }

                this.pigsInQueue.remove(pig);

                pig.SetQueueIndex(-1);

                // Kiểm tra nếu queue không còn đầy (< 5)
                if (this.pigsInQueue.Count < this.queuePos.Count) {
                    !Bridge.staticEquals(EventManager.OnQueueNotFull, null) ? EventManager.OnQueueNotFull() : null;
                }

                // Chỉ rearrange các heo từ vị trí removedIndex trở về sau
                this.RearrangeQueue(removedIndex);

                pig.JumpTo(this.allWaypoints, function () { });
            },
            /*SpawnerManager.HandlePigClickedFromQueue end.*/

            /*SpawnerManager.RearrangeQueue start.*/
            RearrangeQueue: function (startIndex) {
if ( TRACE ) { TRACE( "SpawnerManager#RearrangeQueue", this ); }

                // Chỉ di chuyển các heo từ startIndex trở đi
                for (var i = startIndex; i < this.pigsInQueue.Count; i = (i + 1) | 0) {
                    if (i < this.queuePos.Count) {
                        var targetPos = this.queuePos.getItem(i).position.$clone();
                        var targetRot = this.queuePos.getItem(i).rotation.$clone();
                        var pig = this.pigsInQueue.getItem(i);
                        pig.MoveInQueue(targetPos, targetRot, i);
                    }
                }
            },
            /*SpawnerManager.RearrangeQueue end.*/

            /*SpawnerManager.StopAllPigAnimations start.*/
            StopAllPigAnimations: function () {
if ( TRACE ) { TRACE( "SpawnerManager#StopAllPigAnimations", this ); }

                var $t;
                // Dừng animation của tất cả heo trong lanes
                $t = Bridge.getEnumerator(this.pigSpawnPos);
                try {
                    while ($t.moveNext()) {
                        var kvp = Bridge.cast($t.Current, UnityEngine.Transform);
                        var pigComp = kvp.GetComponent(PigComponent);
                        if (UnityEngine.MonoBehaviour.op_Inequality(pigComp, null)) {
                            pigComp.StopAllCoroutines();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SpawnerManager.StopAllPigAnimations end.*/


        }
    });
    /*SpawnerManager end.*/

    /*WavyLineRenderer start.*/
    Bridge.define("WavyLineRenderer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _lineRenderer: null,
            waveSegments: 0,
            waveAmplitudeMin: 0,
            waveAmplitudeMax: 0,
            amplitudeChangeSpeed: 0,
            waveFrequency: 0,
            waveSpeed: 0,
            _waveTime: 0,
            _amplitudeTime: 0,
            _currentAmplitude: 0,
            _startPoint: null,
            _endPoint: null,
            _targetEndPoint: null,
            _baseColor: null,
            targetDuration: 0,
            _targetBlocks: null,
            _targetProcessCoroutine: null,
            _currentTarget: null,
            _pigComponent: null,
            _onBulletChanged: null,
            lineMaterial: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#init", this ); }

                this._startPoint = new UnityEngine.Vector3();
                this._endPoint = new UnityEngine.Vector3();
                this._targetEndPoint = new UnityEngine.Vector3();
                this._baseColor = new UnityEngine.Color();
                this.waveSegments = 30;
                this.waveAmplitudeMin = 0.05;
                this.waveAmplitudeMax = 0.1;
                this.amplitudeChangeSpeed = 2.0;
                this.waveFrequency = 1.5;
                this.waveSpeed = 30.0;
                this._currentAmplitude = 0.03;
                this._baseColor = new pc.Color( 1, 1, 0, 1 );
                this.targetDuration = 0.03;
                this._targetBlocks = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*WavyLineRenderer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#Awake", this ); }

                this.InitializeLineRenderer();
                this._pigComponent = this.GetComponent(PigComponent);
            },
            /*WavyLineRenderer.Awake end.*/

            /*WavyLineRenderer.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#OnDestroy", this ); }

                this.ClearAllTargets();
            },
            /*WavyLineRenderer.OnDestroy end.*/

            /*WavyLineRenderer.SetBulletChangedCallback start.*/
            SetBulletChangedCallback: function (callback) {
if ( TRACE ) { TRACE( "WavyLineRenderer#SetBulletChangedCallback", this ); }

                this._onBulletChanged = callback;
            },
            /*WavyLineRenderer.SetBulletChangedCallback end.*/

            /*WavyLineRenderer.InitializeLineRenderer start.*/
            InitializeLineRenderer: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#InitializeLineRenderer", this ); }

                this._lineRenderer = this.GetComponent(UnityEngine.LineRenderer);
                if (UnityEngine.Component.op_Equality(this._lineRenderer, null)) {
                    return;
                }

                this._lineRenderer.startWidth = 0.15;
                this._lineRenderer.endWidth = 0.15;
                this._lineRenderer.positionCount = this.waveSegments;

                this._lineRenderer.material = this.lineMaterial;

                this._lineRenderer.startColor = new pc.Color( 1, 1, 0, 1 );
                this._lineRenderer.endColor = new pc.Color( 1, 1, 0, 1 );
                this._lineRenderer.enabled = false;
                this._lineRenderer.sortingOrder = 100;
                this._lineRenderer.useWorldSpace = true;
            },
            /*WavyLineRenderer.InitializeLineRenderer end.*/

            /*WavyLineRenderer.SetColor start.*/
            SetColor: function (color) {
if ( TRACE ) { TRACE( "WavyLineRenderer#SetColor", this ); }

                this._baseColor = color.$clone();
                if (UnityEngine.Component.op_Inequality(this._lineRenderer, null)) {
                    this._lineRenderer.startColor = this._baseColor.$clone();
                    this._lineRenderer.endColor = this._baseColor.$clone();
                }
            },
            /*WavyLineRenderer.SetColor end.*/

            /*WavyLineRenderer.AddTarget start.*/
            AddTarget: function (block) {
if ( TRACE ) { TRACE( "WavyLineRenderer#AddTarget", this ); }

                this._targetBlocks.add(block);

                if (this._targetProcessCoroutine == null) {
                    this._targetProcessCoroutine = this.StartCoroutine$1(this.ProcessTargets());
                    // SoundManager.Instance.PlaySoundLoop(SoundManager.Instance.yarn);
                }
            },
            /*WavyLineRenderer.AddTarget end.*/

            /*WavyLineRenderer.ProcessTargets start.*/
            ProcessTargets: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#ProcessTargets", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    direction,
                    right,
                    t,
                    point,
                    wave,
                    elapsed,
                    waveDirection,
                    waveRight,
                    t1,
                    point1,
                    wave1,
                    $t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._targetBlocks.Count > 0 ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 1: {
                                    if (this._targetBlocks.Count === 0) {
                                            $step = 6;
                                            continue;
                                        }

                                        this._currentTarget = this._targetBlocks.getItem(0);

                                        if (UnityEngine.GameObject.op_Equality(this._currentTarget, null)) {
                                            if (this._targetBlocks.Count > 0) {
                                                this._targetBlocks.removeAt(0);
                                            }
                                            $step = 0;
                                            continue;
                                        }

                                        this._targetEndPoint = this._currentTarget.transform.position.$clone();
                                        this._endPoint = this._targetEndPoint.$clone();

                                        direction = this._endPoint.$clone().sub( this._startPoint );
                                        right = new pc.Vec3().cross( direction.clone().normalize(), pc.Vec3.UP.clone() ).clone().normalize().$clone();

                                        if (pc.Vec3.equals( right, pc.Vec3.ZERO.clone() )) {
                                            right = new pc.Vec3().cross( direction.clone().normalize(), new pc.Vec3( 0, 0, 1 ) ).clone().normalize().$clone();
                                        }

                                        for (var i = 0; i < this.waveSegments; i = (i + 1) | 0) {
                                            t = i / (((this.waveSegments - 1) | 0));
                                            point = new pc.Vec3().lerp( this._startPoint, this._endPoint, t );

                                            wave = Math.sin((t * this.waveFrequency * 2.0 * UnityEngine.Mathf.PI) + this._waveTime) * this._currentAmplitude;
                                            point = point.$clone().add( right.$clone().clone().scale( wave ) );

                                            this._lineRenderer.SetPosition(i, point);
                                        }

                                        this._lineRenderer.enabled = true;
                                        Singleton$1(SoundManager).Instance.PlaySoundWhenSourceAvailable(Singleton$1(SoundManager).Instance.yarn);


                                        elapsed = 0.0;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( elapsed < this.targetDuration ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    if (this._targetBlocks.Count === 0 || UnityEngine.GameObject.op_Equality(this._currentTarget, null)) {
                                            $step = 5;
                                            continue;
                                        }

                                        this._targetEndPoint = this._currentTarget.transform.position.$clone();
                                        this._endPoint = this._targetEndPoint.$clone();

                                        this._waveTime += UnityEngine.Time.deltaTime * this.waveSpeed;
                                        this._amplitudeTime += UnityEngine.Time.deltaTime * this.amplitudeChangeSpeed;
                                        this._currentAmplitude = pc.math.lerp(this.waveAmplitudeMin, this.waveAmplitudeMax, (Math.sin(this._amplitudeTime) + 1.0) * 0.5);

                                        waveDirection = this._endPoint.$clone().sub( this._startPoint );
                                        waveRight = new pc.Vec3().cross( waveDirection.clone().normalize(), pc.Vec3.UP.clone() ).clone().normalize().$clone();

                                        if (pc.Vec3.equals( waveRight, pc.Vec3.ZERO.clone() )) {
                                            waveRight = new pc.Vec3().cross( waveDirection.clone().normalize(), new pc.Vec3( 0, 0, 1 ) ).clone().normalize().$clone();
                                        }

                                        for (var i1 = 0; i1 < this.waveSegments; i1 = (i1 + 1) | 0) {
                                            t1 = i1 / (((this.waveSegments - 1) | 0));
                                            point1 = new pc.Vec3().lerp( this._startPoint, this._endPoint, t1 );
                                            wave1 = Math.sin((t1 * this.waveFrequency * 2.0 * UnityEngine.Mathf.PI) + this._waveTime) * this._currentAmplitude;
                                            point1 = point1.$clone().add( waveRight.$clone().clone().scale( wave1 ) );

                                            this._lineRenderer.SetPosition(i1, point1);
                                        }

                                        elapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    if (this._targetBlocks.Count === 0) {
                                            $step = 6;
                                            continue;
                                        }

                                        if (UnityEngine.GameObject.op_Inequality(this._currentTarget, null)) {
                                            this._currentTarget.SetActive(false);
                                            UnityEngine.MonoBehaviour.Destroy(this._currentTarget);
                                            !Bridge.staticEquals(EventManager.OnBlockDestroyed, null) ? EventManager.OnBlockDestroyed() : null;

                                            if (UnityEngine.MonoBehaviour.op_Inequality(this._pigComponent, null)) {
                                                ($t = this._pigComponent).Bullet = ($t.Bullet - 1) | 0;
                                                if (UnityEngine.MonoBehaviour.op_Inequality(this._pigComponent.bulletText, null)) {
                                                    this._pigComponent.bulletText.text = Bridge.toString(this._pigComponent.Bullet);
                                                }
                                                !Bridge.staticEquals(this._onBulletChanged, null) ? this._onBulletChanged() : null;
                                            }
                                        }
                                        if (this._targetBlocks.Count > 0) {
                                            this._targetBlocks.removeAt(0);
                                        }

                                        $step = 0;
                                        continue;
                                }
                                case 6: {
                                    Singleton$1(SoundManager).Instance.StopSound(Singleton$1(SoundManager).Instance.yarn);
                                        this._lineRenderer.enabled = false;
                                        this._targetProcessCoroutine = null;
                                        this._currentTarget = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*WavyLineRenderer.ProcessTargets end.*/

            /*WavyLineRenderer.ClearAllTargets start.*/
            ClearAllTargets: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#ClearAllTargets", this ); }

                var $t;
                if (this._targetProcessCoroutine != null) {
                    this.StopCoroutine$2(this._targetProcessCoroutine);
                    this._targetProcessCoroutine = null;
                }

                $t = Bridge.getEnumerator(this._targetBlocks);
                try {
                    while ($t.moveNext()) {
                        var go = $t.Current;
                        go.GetComponent(Block).isAlreadyDestroyed = false;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this._targetBlocks.clear();
                this._currentTarget = null;
                this._lineRenderer.enabled = false;
                Singleton$1(SoundManager).Instance.StopSound(Singleton$1(SoundManager).Instance.yarn);
            },
            /*WavyLineRenderer.ClearAllTargets end.*/

            /*WavyLineRenderer.UpdateStartPoint start.*/
            UpdateStartPoint: function (startPoint) {
if ( TRACE ) { TRACE( "WavyLineRenderer#UpdateStartPoint", this ); }

                this._startPoint = new pc.Vec3( startPoint.x, startPoint.y + 0.5, startPoint.z );
            },
            /*WavyLineRenderer.UpdateStartPoint end.*/

            /*WavyLineRenderer.HideLineImmediately start.*/
            HideLineImmediately: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#HideLineImmediately", this ); }

                this._lineRenderer.enabled = false;
            },
            /*WavyLineRenderer.HideLineImmediately end.*/

            /*WavyLineRenderer.GetCurrentTargetPosition start.*/
            GetCurrentTargetPosition: function () {
if ( TRACE ) { TRACE( "WavyLineRenderer#GetCurrentTargetPosition", this ); }

                if (UnityEngine.GameObject.op_Inequality(this._currentTarget, null)) {
                    return this._currentTarget.transform.position.$clone();
                }
                return null;
            },
            /*WavyLineRenderer.GetCurrentTargetPosition end.*/


        }
    });
    /*WavyLineRenderer end.*/

    /*DataManager start.*/
    Bridge.define("DataManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "DataManager#inherits", this ); }
 return [Singleton$1(DataManager)]; }
    });
    /*DataManager end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "GameManager#inherits", this ); }
 return [Singleton$1(GameManager)]; },
        fields: {
            _mGameState: 0
        },
        methods: {
            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.StartGame();
            },
            /*GameManager.Start end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "GameManager#StartGame", this ); }

                this._mGameState = GameState.Start;
                UnityEngine.Time.timeScale = 1;
                !Bridge.staticEquals(EventManager.OnStartGame, null) ? EventManager.OnStartGame() : null;
                Singleton$1(SoundManager).Instance.PlayBackgroundMusic();
            },
            /*GameManager.StartGame end.*/

            /*GameManager.WinStage start.*/
            WinStage: function () {
if ( TRACE ) { TRACE( "GameManager#WinStage", this ); }

                if (this._mGameState === GameState.GameOver) {
                    return;
                }

                this._mGameState = GameState.Win;
                !Bridge.staticEquals(EventManager.OnWinGame, null) ? EventManager.OnWinGame() : null;
                Singleton$1(SoundManager).Instance.PlaySound(Singleton$1(SoundManager).Instance.win);
            },
            /*GameManager.WinStage end.*/

            /*GameManager.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "GameManager#GameOver", this ); }

                if (this._mGameState === GameState.GameOver) {
                    return;
                }
                this._mGameState = GameState.GameOver;
                // Time.timeScale = 0;
                !Bridge.staticEquals(EventManager.OnLoseGame, null) ? EventManager.OnLoseGame() : null;
                Singleton$1(SoundManager).Instance.PlaySound(Singleton$1(SoundManager).Instance.lose);
                Singleton$1(SoundManager).Instance.StopPlayMusic();
            },
            /*GameManager.GameOver end.*/


        }
    });
    /*GameManager end.*/

    /*SoundManager start.*/
    Bridge.define("SoundManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "SoundManager#inherits", this ); }
 return [Singleton$1(SoundManager)]; },
        fields: {
            musicVolume: 0,
            /**
             * @instance
             * @public
             * @memberof SoundManager
             * @default 1.0
             * @type number
             */
            sfxVolume: 0,
            musicAus: null,
            sfxAus: null,
            validCat: null,
            error: null,
            yarn: null,
            win: null,
            lose: null,
            invalidCat: null,
            backgroundMusics: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SoundManager#init", this ); }

                this.musicVolume = 0.3;
                this.sfxVolume = 1.0;
            }
        },
        methods: {
            /*SoundManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SoundManager#Start", this ); }

                this.PlayBackgroundMusic();
            },
            /*SoundManager.Start end.*/

            /*SoundManager.PlaySound$1 start.*/
            /**
             * Play Sound Effect
             *
             * @instance
             * @public
             * @this SoundManager
             * @memberof SoundManager
             * @param   {Array.<UnityEngine.AudioClip>}    clips    Array of sounds
             * @param   {UnityEngine.AudioSource}          aus      Audio Source
             * @return  {void}
             */
            PlaySound$1: function (clips, aus) {
if ( TRACE ) { TRACE( "SoundManager#PlaySound$1", this ); }

                if (aus === void 0) { aus = null; }
                if (!UnityEngine.Object.op_Implicit(aus)) {
                    aus = this.sfxAus;
                }

                if (clips != null && clips.length > 0 && UnityEngine.Object.op_Implicit(aus)) {
                    var randomIdx = UnityEngine.Random.Range(0, clips.length);
                    aus.PlayOneShot$1(clips[randomIdx], this.sfxVolume);
                }
            },
            /*SoundManager.PlaySound$1 end.*/

            /*SoundManager.PlaySound start.*/
            /**
             * Play Sound Effect
             *
             * @instance
             * @public
             * @this SoundManager
             * @memberof SoundManager
             * @param   {UnityEngine.AudioClip}      clip    Sounds
             * @param   {UnityEngine.AudioSource}    aus     Audio Source
             * @return  {void}
             */
            PlaySound: function (clip, aus) {
if ( TRACE ) { TRACE( "SoundManager#PlaySound", this ); }

                if (aus === void 0) { aus = null; }
                if (!UnityEngine.Object.op_Implicit(aus)) {
                    aus = this.sfxAus;
                }

                if (clip != null && UnityEngine.Object.op_Implicit(aus)) {
                    aus.PlayOneShot$1(clip, this.sfxVolume);
                }
            },
            /*SoundManager.PlaySound end.*/

            /*SoundManager.PlaySoundWhenSourceAvailable start.*/
            PlaySoundWhenSourceAvailable: function (clip, aus) {
if ( TRACE ) { TRACE( "SoundManager#PlaySoundWhenSourceAvailable", this ); }

                if (aus === void 0) { aus = null; }
                if (!UnityEngine.Object.op_Implicit(aus)) {
                    aus = this.sfxAus;
                }

                if (clip != null && UnityEngine.Object.op_Implicit(aus) && !aus.isPlaying) {
                    aus.PlayOneShot$1(clip, this.sfxVolume);
                }
            },
            /*SoundManager.PlaySoundWhenSourceAvailable end.*/

            /*SoundManager.PlaySoundLoop start.*/
            PlaySoundLoop: function (clip, aus) {
if ( TRACE ) { TRACE( "SoundManager#PlaySoundLoop", this ); }

                if (aus === void 0) { aus = null; }
                if (!UnityEngine.Object.op_Implicit(aus)) {
                    aus = this.sfxAus;
                }

                if (clip != null && UnityEngine.Object.op_Implicit(aus)) {
                    aus.clip = clip;
                    aus.loop = true;
                    aus.Play();
                }
            },
            /*SoundManager.PlaySoundLoop end.*/

            /*SoundManager.StopSound start.*/
            StopSound: function (clip, aus) {
if ( TRACE ) { TRACE( "SoundManager#StopSound", this ); }

                if (aus === void 0) { aus = null; }
                if (!UnityEngine.Object.op_Implicit(aus)) {
                    aus = this.sfxAus;
                }

                if (clip != null && UnityEngine.Object.op_Implicit(aus) && Bridge.referenceEquals(aus.clip, clip)) {
                    aus.Stop();
                }
            },
            /*SoundManager.StopSound end.*/

            /*SoundManager.PlayMusic$1 start.*/
            /**
             * Play Music
             *
             * @instance
             * @public
             * @this SoundManager
             * @memberof SoundManager
             * @param   {Array.<UnityEngine.AudioClip>}    musics    Array of musics
             * @param   {boolean}                          loop      Can Loop
             * @return  {void}
             */
            PlayMusic$1: function (musics, loop) {
if ( TRACE ) { TRACE( "SoundManager#PlayMusic$1", this ); }

                if (loop === void 0) { loop = true; }
                if (UnityEngine.Object.op_Implicit(this.musicAus) && musics != null && musics.length > 0) {
                    var randomIdx = UnityEngine.Random.Range(0, musics.length);

                    this.musicAus.clip = musics[randomIdx];
                    this.musicAus.loop = loop;
                    this.musicAus.volume = this.musicVolume;
                    this.musicAus.Play();
                }
            },
            /*SoundManager.PlayMusic$1 end.*/

            /*SoundManager.PlayMusic start.*/
            /**
             * Play Music
             *
             * @instance
             * @public
             * @this SoundManager
             * @memberof SoundManager
             * @param   {UnityEngine.AudioClip}    music      music
             * @param   {boolean}                  canLoop    Can Loop
             * @return  {void}
             */
            PlayMusic: function (music, canLoop) {
if ( TRACE ) { TRACE( "SoundManager#PlayMusic", this ); }

                if (UnityEngine.Object.op_Implicit(this.musicAus) && music != null) {
                    this.musicAus.clip = music;
                    this.musicAus.loop = canLoop;
                    this.musicAus.volume = this.musicVolume;
                    this.musicAus.Play();
                }
            },
            /*SoundManager.PlayMusic end.*/

            /*SoundManager.SetMusicVolume start.*/
            /**
             * Set volume for audiosource
             *
             * @instance
             * @public
             * @this SoundManager
             * @memberof SoundManager
             * @param   {number}    vol    New Volume
             * @return  {void}
             */
            SetMusicVolume: function (vol) {
if ( TRACE ) { TRACE( "SoundManager#SetMusicVolume", this ); }

                if (UnityEngine.Object.op_Implicit(this.musicAus)) {
                    this.musicAus.volume = vol;
                }
            },
            /*SoundManager.SetMusicVolume end.*/

            /*SoundManager.StopPlayMusic start.*/
            /**
             * Stop play music or sound effect
             *
             * @instance
             * @public
             * @this SoundManager
             * @memberof SoundManager
             * @return  {void}
             */
            StopPlayMusic: function () {
if ( TRACE ) { TRACE( "SoundManager#StopPlayMusic", this ); }

                if (UnityEngine.Object.op_Implicit(this.musicAus)) {
                    this.musicAus.Stop();
                }
            },
            /*SoundManager.StopPlayMusic end.*/

            /*SoundManager.PlayBackgroundMusic start.*/
            PlayBackgroundMusic: function () {
if ( TRACE ) { TRACE( "SoundManager#PlayBackgroundMusic", this ); }

                this.PlayMusic$1(this.backgroundMusics, true);
            },
            /*SoundManager.PlayBackgroundMusic end.*/


        },
        overloads: {
            "PlaySound(AudioClip[], AudioSource)": "PlaySound$1",
            "PlayMusic(AudioClip[], bool)": "PlayMusic$1"
        }
    });
    /*SoundManager end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "UIManager#inherits", this ); }
 return [Singleton$1(UIManager)]; },
        fields: {
            straightSlotText: null,
            scoreText: null,
            gameOverPanel: null
        },
        methods: {
            /*UIManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UIManager#OnEnable", this ); }

                EventManager.OnLoseGame = Bridge.fn.combine(EventManager.OnLoseGame, Bridge.fn.cacheBind(this, this.GameOver));
                EventManager.OnStartGame = Bridge.fn.combine(EventManager.OnStartGame, Bridge.fn.cacheBind(this, this.StartGame));
                EventManager.OnFullConveyorSlot = Bridge.fn.combine(EventManager.OnFullConveyorSlot, Bridge.fn.cacheBind(this, this.OnInvalidExecution));
            },
            /*UIManager.OnEnable end.*/

            /*UIManager.OnInvalidExecution start.*/
            OnInvalidExecution: function () {
if ( TRACE ) { TRACE( "UIManager#OnInvalidExecution", this ); }

                this.straightSlotText.GetComponent(UnityEngine.Animator).SetTrigger$1("IsInvalid");
            },
            /*UIManager.OnInvalidExecution end.*/

            /*UIManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "UIManager#StartGame", this ); }

                this.gameOverPanel.SetActive(false);
            },
            /*UIManager.StartGame end.*/

            /*UIManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "UIManager#OnDisable", this ); }

                EventManager.OnLoseGame = Bridge.fn.remove(EventManager.OnLoseGame, Bridge.fn.cacheBind(this, this.GameOver));
            },
            /*UIManager.OnDisable end.*/

            /*UIManager.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "UIManager#GameOver", this ); }

                this.gameOverPanel.SetActive(true);
            },
            /*UIManager.GameOver end.*/

            /*UIManager.OnDownloadButtonClicked start.*/
            OnDownloadButtonClicked: function () {
if ( TRACE ) { TRACE( "UIManager#OnDownloadButtonClicked", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*UIManager.OnDownloadButtonClicked end.*/

            /*UIManager.UpdateStraightSlot start.*/
            UpdateStraightSlot: function (count, maxSlot) {
if ( TRACE ) { TRACE( "UIManager#UpdateStraightSlot", this ); }

                this.straightSlotText.text = System.Single.format(count) + "/" + System.Single.format(maxSlot);
            },
            /*UIManager.UpdateStraightSlot end.*/

            /*UIManager.UpdateScore start.*/
            UpdateScore: function (score) {
if ( TRACE ) { TRACE( "UIManager#UpdateScore", this ); }

                this.scoreText.text = Bridge.toString(score);
            },
            /*UIManager.UpdateScore end.*/

            /*UIManager.RestartGame start.*/
            RestartGame: function () {
if ( TRACE ) { TRACE( "UIManager#RestartGame", this ); }

                Singleton$1(GameManager).Instance.StartGame();
            },
            /*UIManager.RestartGame end.*/


        }
    });
    /*UIManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","System.Collections.Generic","TMPro"];

    /*BillboardUI start.*/
    $m("BillboardUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_mainCameraTransform","t":4,"rt":$n[1].Transform,"sn":"_mainCameraTransform"}]}; }, $n);
    /*BillboardUI end.*/

    /*Block start.*/
    $m("Block", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":$n[0].String,"sn":"color"},{"a":2,"n":"isAlreadyDestroyed","t":4,"rt":$n[0].Boolean,"sn":"isAlreadyDestroyed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Block end.*/

    /*DataManager start.*/
    $m("DataManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*DataManager end.*/

    /*EventManager start.*/
    $m("EventManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnBlockDestroyed","is":true,"t":4,"rt":Function,"sn":"OnBlockDestroyed"},{"a":2,"n":"OnClickPig","is":true,"t":4,"rt":Function,"sn":"OnClickPig"},{"a":2,"n":"OnFullConveyorSlot","is":true,"t":4,"rt":Function,"sn":"OnFullConveyorSlot"},{"a":2,"n":"OnLoseGame","is":true,"t":4,"rt":Function,"sn":"OnLoseGame"},{"a":2,"n":"OnPigDestroyed","is":true,"t":4,"rt":Function,"sn":"OnPigDestroyed"},{"a":2,"n":"OnPigEnterQueue","is":true,"t":4,"rt":Function,"sn":"OnPigEnterQueue"},{"a":2,"n":"OnQueueFull","is":true,"t":4,"rt":Function,"sn":"OnQueueFull"},{"a":2,"n":"OnQueueNotFull","is":true,"t":4,"rt":Function,"sn":"OnQueueNotFull"},{"a":2,"n":"OnStartGame","is":true,"t":4,"rt":Function,"sn":"OnStartGame"},{"a":2,"n":"OnWinGame","is":true,"t":4,"rt":Function,"sn":"OnWinGame"}]}; }, $n);
    /*EventManager end.*/

    /*FlashObject start.*/
    $m("FlashObject", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FlashCoroutine","t":8,"sn":"FlashCoroutine","rt":$n[2].IEnumerator},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ResetFlash","t":8,"sn":"ResetFlash","rt":$n[0].Void},{"a":1,"n":"StartFlashing","t":8,"sn":"StartFlashing","rt":$n[0].Void},{"a":1,"n":"StopFlashing","t":8,"sn":"StopFlashing","rt":$n[0].Void},{"a":1,"n":"flashCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"flashCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashDuration","t":4,"rt":$n[0].Single,"sn":"flashDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Flash Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashSpeed","t":4,"rt":$n[0].Single,"sn":"flashSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isFlashing","t":4,"rt":$n[0].Boolean,"sn":"isFlashing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxAlpha","t":4,"rt":$n[0].Single,"sn":"maxAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minAlpha","t":4,"rt":$n[0].Single,"sn":"minAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"objectMaterial","t":4,"rt":$n[1].Material,"sn":"objectMaterial"},{"a":1,"n":"objectRenderer","t":4,"rt":$n[1].Renderer,"sn":"objectRenderer"},{"a":1,"n":"originalColor","t":4,"rt":$n[1].Color,"sn":"originalColor"}]}; }, $n);
    /*FlashObject end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":2,"n":"WinStage","t":8,"sn":"WinStage","rt":$n[0].Void},{"a":1,"n":"_mGameState","t":4,"rt":GameState,"sn":"_mGameState","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameManager end.*/

    /*GameState start.*/
    $m("GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameOver","is":true,"t":4,"rt":GameState,"sn":"GameOver","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Start","is":true,"t":4,"rt":GameState,"sn":"Start","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Win","is":true,"t":4,"rt":GameState,"sn":"Win","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameState end.*/

    /*GameUtility start.*/
    $m("GameUtility", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetColorByName","is":true,"t":8,"pi":[{"n":"colorName","pt":$n[0].String,"ps":0}],"sn":"GetColorByName","rt":$n[1].Color,"p":[$n[0].String]}]}; }, $n);
    /*GameUtility end.*/

    /*PigConfig start.*/
    $m("PigConfig", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bullets","t":4,"rt":$n[0].Int32,"sn":"bullets","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"colorName","t":4,"rt":$n[0].String,"sn":"colorName"}]}; }, $n);
    /*PigConfig end.*/

    /*LaneConfig start.*/
    $m("LaneConfig", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"pigs","t":4,"rt":$n[3].List$1(PigConfig),"sn":"pigs"}]}; }, $n);
    /*LaneConfig end.*/

    /*LevelDataSO start.*/
    $m("LevelDataSO", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "NewLevel", menuName: "Configs/LevelData"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.ContextMenu.ctor("Import from JSON")],"a":2,"n":"GetCell","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1}],"sn":"GetCell","rt":$n[0].String,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"gridData","t":4,"rt":$n[3].List$1(System.String),"sn":"gridData"},{"a":2,"n":"height","t":4,"rt":$n[0].Int32,"sn":"height","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"lanes","t":4,"rt":$n[3].List$1(LaneConfig),"sn":"lanes"},{"at":[new UnityEngine.HeaderAttribute("Parsed Data")],"a":2,"n":"levelIndex","t":4,"rt":$n[0].Int32,"sn":"levelIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"sourceJson","t":4,"rt":$n[1].TextAsset,"sn":"sourceJson"},{"a":2,"n":"width","t":4,"rt":$n[0].Int32,"sn":"width","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LevelDataSO end.*/

    /*PigComponent start.*/
    $m("PigComponent", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangeState","t":8,"pi":[{"n":"newState","pt":PigState,"ps":0}],"sn":"ChangeState","rt":$n[0].Void,"p":[PigState]},{"a":1,"n":"CheckAndAddTargetBlocks","t":8,"sn":"CheckAndAddTargetBlocks","rt":$n[0].Void},{"a":1,"n":"ConveyorJourney","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"ConveyorJourney","rt":$n[2].IEnumerator,"p":[Function]},{"a":1,"n":"DestroyAnimation","t":8,"sn":"DestroyAnimation","rt":$n[2].IEnumerator},{"a":1,"n":"DestroyAnimationInternal","t":8,"sn":"DestroyAnimationInternal","rt":$n[2].IEnumerator},{"a":2,"n":"GetQueueIndex","t":8,"sn":"GetQueueIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"color","pt":$n[0].String,"ps":0},{"n":"bulletCount","pt":$n[0].Int32,"ps":1},{"n":"laneIndex","pt":$n[0].Int32,"ps":2},{"n":"lineColor","pt":$n[1].Color,"ps":3},{"n":"speedOnStraight","pt":$n[0].Single,"ps":4},{"n":"speedOnCurve","pt":$n[0].Single,"ps":5},{"n":"jumpSpeed","pt":$n[0].Single,"ps":6}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32,$n[0].Int32,$n[1].Color,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"JumpCoroutine","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"height","pt":$n[0].Single,"ps":2},{"n":"onComplete","pt":Function,"ps":3}],"sn":"JumpCoroutine","rt":$n[2].IEnumerator,"p":[$n[1].Vector3,$n[0].Single,$n[0].Single,Function]},{"a":2,"n":"JumpTo","t":8,"pi":[{"n":"path","pt":$n[3].List$1(UnityEngine.Transform),"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"JumpTo","rt":$n[0].Void,"p":[$n[3].List$1(UnityEngine.Transform),Function]},{"a":2,"n":"JumpToQueue","t":8,"pi":[{"n":"targetPosition","pt":$n[1].Vector3,"ps":0},{"n":"targetRotation","pt":$n[1].Quaternion,"ps":1},{"n":"targetQueueIndex","pt":$n[0].Int32,"ps":2}],"sn":"JumpToQueue","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Quaternion,$n[0].Int32]},{"a":1,"n":"JumpToQueueCoroutine","t":8,"pi":[{"n":"targetPos","pt":$n[1].Vector3,"ps":0},{"n":"targetRot","pt":$n[1].Quaternion,"ps":1}],"sn":"JumpToQueueCoroutine","rt":$n[2].IEnumerator,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":1,"n":"MoveCoroutine","t":8,"pi":[{"n":"targetLocalPos","pt":$n[1].Vector3,"ps":0}],"sn":"MoveCoroutine","rt":$n[2].IEnumerator,"p":[$n[1].Vector3]},{"a":2,"n":"MoveInQueue","t":8,"pi":[{"n":"targetPos","pt":$n[1].Vector3,"ps":0},{"n":"targetRot","pt":$n[1].Quaternion,"ps":1},{"n":"newQueueIndex","pt":$n[0].Int32,"ps":2}],"sn":"MoveInQueue","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Quaternion,$n[0].Int32]},{"a":1,"n":"MoveInQueueCoroutine","t":8,"pi":[{"n":"targetPos","pt":$n[1].Vector3,"ps":0},{"n":"targetRot","pt":$n[1].Quaternion,"ps":1}],"sn":"MoveInQueueCoroutine","rt":$n[2].IEnumerator,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":1,"n":"MovePigThroughWaypoints","t":8,"pi":[{"n":"startIndex","pt":$n[0].Int32,"ps":0},{"n":"targetIndex","pt":$n[0].Int32,"ps":1},{"n":"path","pt":$n[3].List$1(UnityEngine.Transform),"ps":2}],"sn":"MovePigThroughWaypoints","rt":$n[2].IEnumerator,"p":[$n[0].Int32,$n[0].Int32,$n[3].List$1(UnityEngine.Transform)]},{"a":2,"n":"MoveTo","t":8,"pi":[{"n":"newLocalPos","pt":$n[1].Vector3,"ps":0}],"sn":"MoveTo","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"OnBulletChanged","t":8,"sn":"OnBulletChanged","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"SetQueueIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"SetQueueIndex","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ShootingRoutine","t":8,"sn":"ShootingRoutine","rt":$n[2].IEnumerator},{"a":2,"n":"SlideOnCurve","t":8,"pi":[{"n":"start","pt":$n[1].Vector3,"ps":0},{"n":"control","pt":$n[1].Vector3,"ps":1},{"n":"end","pt":$n[1].Vector3,"ps":2},{"n":"startRotation","pt":$n[1].Quaternion,"ps":3},{"n":"endRotation","pt":$n[1].Quaternion,"ps":4},{"n":"duration","pt":$n[0].Single,"ps":5}],"sn":"SlideOnCurve","rt":$n[2].IEnumerator,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Quaternion,$n[1].Quaternion,$n[0].Single]},{"a":2,"n":"SlideTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"SlideTo","rt":$n[2].IEnumerator,"p":[$n[1].Vector3,$n[0].Single]},{"a":2,"n":"Bullet","t":4,"rt":$n[0].Int32,"sn":"Bullet","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_lastCheckedBlock","t":4,"rt":$n[1].GameObject,"sn":"_lastCheckedBlock"},{"a":1,"n":"_rayCastDirection","t":4,"rt":$n[1].Vector3,"sn":"_rayCastDirection"},{"a":1,"n":"_wavyLine","t":4,"rt":WavyLineRenderer,"sn":"_wavyLine"},{"a":1,"n":"allWaypoints","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"allWaypoints"},{"a":2,"n":"blockLayer","t":4,"rt":$n[1].LayerMask,"sn":"blockLayer"},{"a":2,"n":"bulletText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"bulletText"},{"a":2,"n":"color","t":4,"rt":$n[0].String,"sn":"color"},{"a":2,"n":"currentState","t":4,"rt":PigState,"sn":"currentState","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"isOnBelt","t":4,"rt":$n[0].Boolean,"sn":"isOnBelt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isOnTop","t":4,"rt":$n[0].Boolean,"sn":"isOnTop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"jumpToQueueSpeed","t":4,"rt":$n[0].Single,"sn":"jumpToQueueSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"laneIndex","t":4,"rt":$n[0].Int32,"sn":"laneIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pigModel","t":4,"rt":$n[1].GameObject,"sn":"pigModel"},{"a":1,"n":"queueIndex","t":4,"rt":$n[0].Int32,"sn":"queueIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"rayCastPoint","t":4,"rt":$n[1].Transform,"sn":"rayCastPoint"},{"a":2,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":1,"n":"speedOnCurve","t":4,"rt":$n[0].Single,"sn":"speedOnCurve","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"speedOnStraigt","t":4,"rt":$n[0].Single,"sn":"speedOnStraigt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PigComponent end.*/

    /*PigState start.*/
    $m("PigState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Destroying","is":true,"t":4,"rt":PigState,"sn":"Destroying","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"InLane","is":true,"t":4,"rt":PigState,"sn":"InLane","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"InQueue","is":true,"t":4,"rt":PigState,"sn":"InQueue","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"JumpingFromQueue","is":true,"t":4,"rt":PigState,"sn":"JumpingFromQueue","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"JumpingToConveyor","is":true,"t":4,"rt":PigState,"sn":"JumpingToConveyor","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"MovingInQueue","is":true,"t":4,"rt":PigState,"sn":"MovingInQueue","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"MovingToQueue","is":true,"t":4,"rt":PigState,"sn":"MovingToQueue","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}},{"a":2,"n":"OnConveyor","is":true,"t":4,"rt":PigState,"sn":"OnConveyor","box":function ($v) { return Bridge.box($v, PigState, System.Enum.toStringFn(PigState));}}]}; }, $n);
    /*PigState end.*/

    /*PlayerInput start.*/
    $m("PlayerInput", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleInput","t":8,"pi":[{"n":"screenPos","pt":$n[1].Vector2,"ps":0}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"pigLayerMask","t":4,"rt":$n[1].LayerMask,"sn":"pigLayerMask"},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"}]}; }, $n);
    /*PlayerInput end.*/

    /*Singleton$1 start.*/
    $m("Singleton$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_instance","is":true,"t":4,"rt":T,"sn":"_instance"}]}; }, $n);
    /*Singleton$1 end.*/

    /*SoundManager start.*/
    $m("SoundManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PlayBackgroundMusic","t":8,"sn":"PlayBackgroundMusic","rt":$n[0].Void},{"a":2,"n":"PlayMusic","t":8,"pi":[{"n":"music","pt":$n[1].AudioClip,"ps":0},{"n":"canLoop","pt":$n[0].Boolean,"ps":1}],"sn":"PlayMusic","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[0].Boolean]},{"a":2,"n":"PlayMusic","t":8,"pi":[{"n":"musics","pt":System.Array.type(UnityEngine.AudioClip),"ps":0},{"n":"loop","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"PlayMusic$1","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.AudioClip),$n[0].Boolean]},{"a":2,"n":"PlaySound","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"aus","dv":null,"o":true,"pt":$n[1].AudioSource,"ps":1}],"sn":"PlaySound","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[1].AudioSource]},{"a":2,"n":"PlaySound","t":8,"pi":[{"n":"clips","pt":System.Array.type(UnityEngine.AudioClip),"ps":0},{"n":"aus","dv":null,"o":true,"pt":$n[1].AudioSource,"ps":1}],"sn":"PlaySound$1","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.AudioClip),$n[1].AudioSource]},{"a":2,"n":"PlaySoundLoop","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"aus","dv":null,"o":true,"pt":$n[1].AudioSource,"ps":1}],"sn":"PlaySoundLoop","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[1].AudioSource]},{"a":2,"n":"PlaySoundWhenSourceAvailable","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"aus","dv":null,"o":true,"pt":$n[1].AudioSource,"ps":1}],"sn":"PlaySoundWhenSourceAvailable","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[1].AudioSource]},{"a":2,"n":"SetMusicVolume","t":8,"pi":[{"n":"vol","pt":$n[0].Single,"ps":0}],"sn":"SetMusicVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopPlayMusic","t":8,"sn":"StopPlayMusic","rt":$n[0].Void},{"a":2,"n":"StopSound","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"aus","dv":null,"o":true,"pt":$n[1].AudioSource,"ps":1}],"sn":"StopSound","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[1].AudioSource]},{"a":2,"n":"backgroundMusics","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"backgroundMusics"},{"a":2,"n":"error","t":4,"rt":$n[1].AudioClip,"sn":"error"},{"a":2,"n":"invalidCat","t":4,"rt":$n[1].AudioClip,"sn":"invalidCat"},{"a":2,"n":"lose","t":4,"rt":$n[1].AudioClip,"sn":"lose"},{"a":2,"n":"musicAus","t":4,"rt":$n[1].AudioSource,"sn":"musicAus"},{"at":[new UnityEngine.HeaderAttribute("Main Settings:"),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"musicVolume","t":4,"rt":$n[0].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sfxAus","t":4,"rt":$n[1].AudioSource,"sn":"sfxAus"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"sfxVolume","t":4,"rt":$n[0].Single,"sn":"sfxVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Game sounds and musics: ")],"a":2,"n":"validCat","t":4,"rt":$n[1].AudioClip,"sn":"validCat"},{"a":2,"n":"win","t":4,"rt":$n[1].AudioClip,"sn":"win"},{"a":2,"n":"yarn","t":4,"rt":$n[1].AudioClip,"sn":"yarn"}]}; }, $n);
    /*SoundManager end.*/

    /*SpawnerManager start.*/
    $m("SpawnerManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyMaterial","t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0},{"n":"colorName","pt":$n[0].String,"ps":1}],"sn":"ApplyMaterial","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].String]},{"a":1,"n":"FindNextAvailableQueueIndex","t":8,"sn":"FindNextAvailableQueueIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HandlePigClickedFromQueue","t":8,"pi":[{"n":"pig","pt":PigComponent,"ps":0}],"sn":"HandlePigClickedFromQueue","rt":$n[0].Void,"p":[PigComponent]},{"a":1,"n":"HandlePigEnterQueue","t":8,"pi":[{"n":"pig","pt":PigComponent,"ps":0}],"sn":"HandlePigEnterQueue","rt":$n[0].Void,"p":[PigComponent]},{"a":1,"n":"OnBlockDestroyed","t":8,"sn":"OnBlockDestroyed","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"RearrangeQueue","t":8,"pi":[{"n":"startIndex","pt":$n[0].Int32,"ps":0}],"sn":"RearrangeQueue","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"RefundStraightSlot","t":8,"sn":"RefundStraightSlot","rt":$n[0].Void},{"a":1,"n":"RemovePigFromLane","t":8,"pi":[{"n":"removedPig","pt":PigComponent,"ps":0}],"sn":"RemovePigFromLane","rt":$n[0].Void,"p":[PigComponent]},{"a":1,"n":"ResetClickFlag","t":8,"sn":"ResetClickFlag","rt":$n[2].IEnumerator},{"a":1,"n":"ResetData","t":8,"sn":"ResetData","rt":$n[0].Void},{"a":2,"n":"SelectPig","t":8,"pi":[{"n":"pig","pt":PigComponent,"ps":0}],"sn":"SelectPig","rt":$n[0].Void,"p":[PigComponent]},{"a":1,"n":"SpawnMap","t":8,"sn":"SpawnMap","rt":$n[0].Void},{"a":1,"n":"SpawnPigs","t":8,"pi":[{"n":"data","pt":LevelDataSO,"ps":0}],"sn":"SpawnPigs","rt":$n[0].Void,"p":[LevelDataSO]},{"a":1,"n":"StopAllPigAnimations","t":8,"sn":"StopAllPigAnimations","rt":$n[0].Void},{"a":2,"n":"Levels","t":4,"rt":$n[3].List$1(LevelDataSO),"sn":"Levels"},{"a":2,"n":"_maxstraightSlot","t":4,"rt":$n[0].Int32,"sn":"_maxstraightSlot","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_straightSlot","t":4,"rt":$n[0].Int32,"sn":"_straightSlot","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"allWaypoints","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"allWaypoints"},{"a":2,"n":"blockGroup","t":4,"rt":$n[1].Transform,"sn":"blockGroup"},{"a":2,"n":"blockPrefab","t":4,"rt":$n[1].GameObject,"sn":"blockPrefab"},{"a":2,"n":"blockSpacing","t":4,"rt":$n[0].Single,"sn":"blockSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"blockSpawnPoint","t":4,"rt":$n[1].Transform,"sn":"blockSpawnPoint"},{"a":2,"n":"currentLevel","t":4,"rt":$n[0].Int32,"sn":"currentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isProcessingClick","t":4,"rt":$n[0].Boolean,"sn":"isProcessingClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Jump To Queue Speed", 5, "Speed", false, null)],"a":1,"n":"jumpToQueueSpeed","t":4,"rt":$n[0].Single,"sn":"jumpToQueueSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pigPrefab","t":4,"rt":$n[1].GameObject,"sn":"pigPrefab"},{"a":2,"n":"pigSpawnPoint","t":4,"rt":$n[1].Transform,"sn":"pigSpawnPoint"},{"a":2,"n":"pigSpawnPos","t":4,"rt":$n[1].Transform,"sn":"pigSpawnPos"},{"a":1,"n":"pigsByLane","t":4,"rt":$n[3].Dictionary$2(System.Int32,System.Collections.Generic.List$1(PigComponent)),"sn":"pigsByLane"},{"a":1,"n":"pigsInQueue","t":4,"rt":$n[3].List$1(PigComponent),"sn":"pigsInQueue"},{"a":2,"n":"queuePos","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"queuePos"},{"a":1,"n":"score","t":4,"rt":$n[0].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Speed Move on Straight", 1, "Speed", false, null)],"a":1,"n":"speedOnCurve","t":4,"rt":$n[0].Single,"sn":"speedOnCurve","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("slideOnStraight"),new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Speed Move on Straight", 1, "Speed", false, null)],"a":1,"n":"speedOnStraight","t":4,"rt":$n[0].Single,"sn":"speedOnStraight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"totalBlockCount","t":4,"rt":$n[0].Int32,"sn":"totalBlockCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SpawnerManager end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnDownloadButtonClicked","t":8,"sn":"OnDownloadButtonClicked","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnInvalidExecution","t":8,"sn":"OnInvalidExecution","rt":$n[0].Void},{"a":2,"n":"RestartGame","t":8,"sn":"RestartGame","rt":$n[0].Void},{"a":1,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":2,"n":"UpdateScore","t":8,"pi":[{"n":"score","pt":$n[0].Int32,"ps":0}],"sn":"UpdateScore","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"UpdateStraightSlot","t":8,"pi":[{"n":"count","pt":$n[0].Single,"ps":0},{"n":"maxSlot","pt":$n[0].Single,"ps":1}],"sn":"UpdateStraightSlot","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"gameOverPanel","t":4,"rt":$n[1].GameObject,"sn":"gameOverPanel"},{"a":2,"n":"scoreText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"scoreText"},{"a":2,"n":"straightSlotText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"straightSlotText"}]}; }, $n);
    /*UIManager end.*/

    /*WavyLineRenderer start.*/
    $m("WavyLineRenderer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddTarget","t":8,"pi":[{"n":"block","pt":$n[1].GameObject,"ps":0}],"sn":"AddTarget","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClearAllTargets","t":8,"sn":"ClearAllTargets","rt":$n[0].Void},{"a":2,"n":"GetCurrentTargetPosition","t":8,"sn":"GetCurrentTargetPosition","rt":$n[0].Nullable$1(UnityEngine.Vector3)},{"a":2,"n":"HideLineImmediately","t":8,"sn":"HideLineImmediately","rt":$n[0].Void},{"a":1,"n":"InitializeLineRenderer","t":8,"sn":"InitializeLineRenderer","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ProcessTargets","t":8,"sn":"ProcessTargets","rt":$n[2].IEnumerator},{"a":2,"n":"SetBulletChangedCallback","t":8,"pi":[{"n":"callback","pt":Function,"ps":0}],"sn":"SetBulletChangedCallback","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"SetColor","t":8,"pi":[{"n":"color","pt":$n[1].Color,"ps":0}],"sn":"SetColor","rt":$n[0].Void,"p":[$n[1].Color]},{"a":2,"n":"UpdateStartPoint","t":8,"pi":[{"n":"startPoint","pt":$n[1].Vector3,"ps":0}],"sn":"UpdateStartPoint","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"_amplitudeTime","t":4,"rt":$n[0].Single,"sn":"_amplitudeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_baseColor","t":4,"rt":$n[1].Color,"sn":"_baseColor"},{"a":1,"n":"_currentAmplitude","t":4,"rt":$n[0].Single,"sn":"_currentAmplitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_currentTarget","t":4,"rt":$n[1].GameObject,"sn":"_currentTarget"},{"a":1,"n":"_endPoint","t":4,"rt":$n[1].Vector3,"sn":"_endPoint"},{"a":1,"n":"_lineRenderer","t":4,"rt":$n[1].LineRenderer,"sn":"_lineRenderer"},{"a":1,"n":"_onBulletChanged","t":4,"rt":Function,"sn":"_onBulletChanged"},{"a":1,"n":"_pigComponent","t":4,"rt":PigComponent,"sn":"_pigComponent"},{"a":1,"n":"_startPoint","t":4,"rt":$n[1].Vector3,"sn":"_startPoint"},{"a":1,"n":"_targetBlocks","t":4,"rt":$n[3].List$1(UnityEngine.GameObject),"sn":"_targetBlocks"},{"a":1,"n":"_targetEndPoint","t":4,"rt":$n[1].Vector3,"sn":"_targetEndPoint"},{"a":1,"n":"_targetProcessCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"_targetProcessCoroutine"},{"a":1,"n":"_waveTime","t":4,"rt":$n[0].Single,"sn":"_waveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"amplitudeChangeSpeed","t":4,"rt":$n[0].Single,"sn":"amplitudeChangeSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"lineMaterial","t":4,"rt":$n[1].Material,"sn":"lineMaterial"},{"at":[new UnityEngine.HeaderAttribute("Target Management")],"a":1,"n":"targetDuration","t":4,"rt":$n[0].Single,"sn":"targetDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waveAmplitudeMax","t":4,"rt":$n[0].Single,"sn":"waveAmplitudeMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waveAmplitudeMin","t":4,"rt":$n[0].Single,"sn":"waveAmplitudeMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waveFrequency","t":4,"rt":$n[0].Single,"sn":"waveFrequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Wave Settings")],"a":2,"n":"waveSegments","t":4,"rt":$n[0].Int32,"sn":"waveSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"waveSpeed","t":4,"rt":$n[0].Single,"sn":"waveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*WavyLineRenderer end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
