using System;
using System.Collections.Generic;

[Serializable]
public class PigConfig {
    public string colorName;
    public int bullets;
}

[Serializable]
public class LaneConfig {
    public List<PigConfig> pigs;
}
