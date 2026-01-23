global lastUpTimeAlt := 0
global isDownAlt := false
global isCompletedAlt := false

completeAlt() {
    global isCompletedAlt
    isCompletedAlt := true
}

$sc38:: {
    global isDownAlt, isCompletedAlt
    if isDownAlt
        return

    isDownAlt := true
    isCompletedAlt := false
}

$sc38 Up:: {
    global isDownAlt, isCompletedAlt
    global lastUpTimeAlt
    isDownAlt := false
    if isCompletedAlt {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeAlt < 333) {
        SendInput("{" scEnter "}")
    }
    lastUpTimeAlt := now
}
