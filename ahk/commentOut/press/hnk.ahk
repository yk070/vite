global lastUpTimeHnk := 0
global isDownHnk := false
global isCompletedHnk := false

fxHnkUsed() {
    global isCompletedHnk
    isCompletedHnk := true
}
$sc79:: {
    global isDownHnk, isCompletedHnk
    if isDownHnk
        return

    isDownHnk := true
    isCompletedHnk := false
}

$sc79 Up:: {
    global isDownHnk, isCompletedHnk
    global lastUpTimeHnk
    isDownHnk := false
    if isCompletedHnk {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeHnk < 333) {
        SendInput("{" scHankaku "}")
    }
    lastUpTimeHnk := now
}
