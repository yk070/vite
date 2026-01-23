global lastUpTimeShift := 0
global isDownShift := false
global isCompletedShift := false

completeShift() {
    global isCompletedShift
    isCompletedShift := true
}

$sc2A:: {
    global isDownShift, isCompletedShift
    if isDownShift
        return

    isDownShift := true
    isCompletedShift := false
}

$sc2A Up:: {
    global isDownShift, isCompletedShift
    global lastUpTimeShift
    isDownShift := false
    if isCompletedShift {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeShift < 333) {
        SendInput("{" scEnter "}")
    }
    lastUpTimeShift := now
}
