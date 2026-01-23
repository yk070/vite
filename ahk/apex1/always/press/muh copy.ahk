global lastUpTimeMuh := 0
global isDownMuh := false
global isCompletedMuh := false

completeMuh() {
    global isCompletedMuh
    isCompletedMuh := true
}

$sc7b:: {
    global isDownMuh, isCompletedMuh
    if isDownMuh
        return

    isDownMuh := true
    isCompletedMuh := false
}

$sc7b Up:: {
    global isDownMuh, isCompletedMuh
    global lastUpTimeMuh
    isDownMuh := false
    if isCompletedMuh {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeMuh < 333) {
        SendInput("{" scEnter "}")
    }
    lastUpTimeMuh := now
}
