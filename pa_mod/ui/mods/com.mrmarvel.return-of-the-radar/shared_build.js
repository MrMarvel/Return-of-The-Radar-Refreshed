var newBuild = {
	"/pa/units/orbital/deep_space_radar/deep_space_radar.json": ["utility", 0, { row: 2, column: 5 }],
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}