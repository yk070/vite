global lastUpTimeSft := 0
global isDownSft := false
global isCompletedSft := false

fxSftUsed() {
    global isCompletedSft
    isCompletedSft := true
}
$sc2A:: {
    global isDownSft, isCompletedSft
    if isDownSft
        return

    isDownSft := true
    isCompletedSft := false
}

$sc2A Up:: {
    global isDownSft, isCompletedSft
    global lastUpTimeSft
    isDownSft := false
    if isCompletedSft {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeSft < 333) {
        SendInput("{" scHankaku "}")
    }
    lastUpTimeSft := now
}
