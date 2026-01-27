global lastUpTimeMhk := 0
global isDownMhk := false
global isCompletedMhk := false

fxMhkUsed() {
    global isCompletedMhk
    isCompletedMhk := true
}
$sc7B:: {
    global isDownMhk, isCompletedMhk
    if isDownMhk
        return

    isDownMhk := true
    isCompletedMhk := false
}

$sc7B Up:: {
    global isDownMhk, isCompletedMhk
    global lastUpTimeMhk
    isDownMhk := false
    if isCompletedMhk {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeMhk < 333) {
        SendInput("{" "}")
    }
    lastUpTimeMhk := now
}
