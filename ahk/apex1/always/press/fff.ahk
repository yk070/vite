global SC21_DownTime := 0
global SC21_IsDown := false
global SC21_Used := false

fxFffUsed() {
    global SC21_Used
    SC21_Used := true
}
SC21:: {
    global SC21_DownTime, SC21_IsDown, SC21_Used
    if SC21_IsDown
        return
    SC21_IsDown := true
    SC21_Used := false
    SC21_DownTime := A_TickCount
}
~SC21 Up:: {
    global SC21_DownTime, SC21_IsDown, SC21_Used
    SC21_IsDown := false
    if SC21_Used
        return
    elapsed := A_TickCount - SC21_DownTime
    if (elapsed < 250)
        send("{" sc_f "}")
    else
        return
}
