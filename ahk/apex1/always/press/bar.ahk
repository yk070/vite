global SC39_DownTime := 0
global SC39_IsDown := false
global SC39_Used := false
global SC39_Timer := 0  ; ← ここで初期化
ShowRemapGuiAfterDelay() {
    global SC39_IsDown
    ; キーがまだ押されている場合のみ GUI を表示
    if SC39_IsDown
        displayRemapGui()
}
fxBarUsed() {
    global SC39_Used
    SC39_Used := true

    global SC39_Timer
    if SC39_Timer
        SC39_Timer.Stop(), SC39_Timer := 0
    destroyRemapGui
}

SC39:: {
    global SC39_DownTime, SC39_IsDown, SC39_Used, SC39_Timer
    if SC39_IsDown
        return
    SC39_IsDown := true
    SC39_Used := false
    SC39_DownTime := A_TickCount
    SC39_Timer := SetTimer(ShowRemapGuiAfterDelay, -500)
}
~SC39 Up:: {
    global SC39_Timer
    if SC39_Timer
        SC39_Timer.Stop(), SC39_Timer := 0
    destroyRemapGui
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
