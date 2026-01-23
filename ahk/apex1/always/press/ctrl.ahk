global lastUpTimeCtrl := 0
global isDownCtrl := false
global isCompletedCtrl := false

completeCtrl() {
    global isCompletedCtrl
    isCompletedCtrl := true
}

$sc1D:: {
    global isDownCtrl, isCompletedCtrl
    if isDownCtrl
        return

    isDownCtrl := true
    isCompletedCtrl := false
}

$sc1D Up:: {
    global isDownCtrl, isCompletedCtrl
    global lastUpTimeCtrl
    isDownCtrl := false
    if isCompletedCtrl {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeCtrl < 333) {
        SendInput("{" scEnter "}")
    }
    lastUpTimeCtrl := now
}
