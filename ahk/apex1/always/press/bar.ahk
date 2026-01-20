global SC39_DownTime := 0
global SC39_IsDown := false
global SC39_Used := false

fxBarUsed() {
    global SC39_Used
    SC39_Used := true
}

SC39:: {
    global SC39_DownTime, SC39_IsDown, SC39_Used
    if SC39_IsDown
        return
    SC39_IsDown := true
    SC39_Used := false
    SC39_DownTime := A_TickCount
}
~SC39 Up:: {
    global SC39_DownTime, SC39_IsDown, SC39_Used
    SC39_IsDown := false
    if SC39_Used
        return
    elapsed := A_TickCount - SC39_DownTime
    if (elapsed < 250)
        send("{" sc_space "}")
    else
        return
}
