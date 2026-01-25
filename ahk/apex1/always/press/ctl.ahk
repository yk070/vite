global lastUpTimeCtl := 0
global isDownCtl := false
global isCompletedCtl := false

fxCtlUsed() {
    global isCompletedCtl
    isCompletedCtl := true
}
$sc1D:: {
    global isDownCtl, isCompletedCtl
    if isDownCtl
        return

    isDownCtl := true
    isCompletedCtl := false
}

$sc1D Up:: {
    global isDownCtl, isCompletedCtl
    global lastUpTimeCtl
    isDownCtl := false
    if isCompletedCtl {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeCtl < 333) {
        SendInput("{" scEnter "}")
    }
    lastUpTimeCtl := now
}
