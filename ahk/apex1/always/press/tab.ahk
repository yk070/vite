global SC0F_DownTime := 0
global SC0F_IsDown := false
global SC0F_Used := false

fxTabUsed() {
    global SC0F_Used
    SC0F_Used := true
}
SC0F:: {
    global SC0F_DownTime, SC0F_IsDown, SC0F_Used
    if SC0F_IsDown
        return
    SC0F_IsDown := true
    SC0F_Used := false
    SC0F_DownTime := A_TickCount
}
~SC0F Up:: {
    global SC0F_DownTime, SC0F_IsDown, SC0F_Used
    SC0F_IsDown := false
    if SC0F_Used
        return
    elapsed := A_TickCount - SC0F_DownTime
    if (elapsed < 190)
        send("{" scTab "}")
    else
        return
}
