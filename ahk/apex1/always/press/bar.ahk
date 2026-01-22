global SC39_IsDown := false
global SC39_Used := false
global SC39_SendTimer := 0

fxBarUsed() {
    global SC39_Used, SC39_SendTimer
    SC39_Used := true
    if SC39_SendTimer {
        SC39_SendTimer.Stop()
        SC39_SendTimer := 0
    }
}

SendSpaceIfUnused() {
    global SC39_IsDown, SC39_Used
    if (SC39_IsDown)
        return
    if (SC39_Used)
        return
    Send("{Space}")
}

SC39:: {
    global SC39_IsDown, SC39_Used, SC39_SendTimer
    if SC39_IsDown
        return

    SC39_IsDown := true
    SC39_Used := false

    ; 350ms 保留してから確定
    SC39_SendTimer := SetTimer(SendSpaceIfUnused, -200)
}

~SC39 Up:: {
    global SC39_IsDown
    SC39_IsDown := false
}
