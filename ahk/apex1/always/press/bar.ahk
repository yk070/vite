global lastUpTimeSpa := 0
global isDownSpa := false
global isCompletedSpa := false

completeSpa() {
    global isCompletedSpa
    isCompletedSpa := true
}

$SC39:: {
    global isDownSpa, isCompletedSpa
    if isDownSpa
        return

    isDownSpa := true
    isCompletedSpa := false
}

$SC39 Up:: {
    global isDownSpa, isCompletedSpa
    global lastUpTimeSpa
    isDownSpa := false
    if isCompletedSpa {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeSpa < 333) {
        SendInput("{" scTab "}")
    }
    lastUpTimeSpa := now
}
