const convWscript = (name, sc, sendKey) => {
  return `
global lastUpTime${name} := 0
global isDown${name} := false
global isCompleted${name} := false

fx${name}Used() {
	global isCompleted${name}
	isCompleted${name} := true
}

$${sc}:: {
	global isDown${name}, isCompleted${name}
	if isDown${name}
		return

	isDown${name} := true
	isCompleted${name} := false
}

$${sc} Up:: {
	global isDown${name}, isCompleted${name}
	global lastUpTime${name}
	isDown${name} := false
	if isCompleted${name}
		return
	now := A_TickCount
	if (now - lastUpTime${name} < 333) {
		SendInput("{${sendKey}}")
	}
	lastUpTime${name} := now
}
`;
};

export default convWscript;
