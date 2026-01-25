global lastUpTimeSpa := 0
global isDownSpa := false
global isCompletedSpa := false

$sc1D:: {
    global isDownSpa, isCompletedSpa
    if isDownSpa
        return

    isDownSpa := true
    isCompletedSpa := false
}

$sc1D Up:: {
    global isDownSpa, isCompletedSpa
    global lastUpTimeSpa
    isDownSpa := false
    if isCompletedSpa {
        return
    }
    now := A_TickCount
    if (now - lastUpTimeSpa < 333) {
        SendInput("{" scEnter "}")
    }
    lastUpTimeSpa := now
}
