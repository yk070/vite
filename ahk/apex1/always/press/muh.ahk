global SC7B_DownTime := 0
global SC7B_IsDown := false
global SC7B_Used := false
SC7B:: {
    global SC7B_DownTime, SC7B_IsDown, SC7B_Used
    if SC7B_IsDown
        return
    SC7B_IsDown := true
    SC7B_Used := false
    SC7B_DownTime := A_TickCount
}
~SC7B Up:: {
    global SC7B_DownTime, SC7B_IsDown, SC7B_Used
    SC7B_IsDown := false
    if SC7B_Used
        return
    elapsed := A_TickCount - SC7B_DownTime
    if (elapsed < 250)
        send("{" sc_enter "}")
    else
        return
}
