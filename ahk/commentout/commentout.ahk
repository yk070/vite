global SC39_DownTime := 0
global isCompletedSpa := false
global isCompletedSpa := false
; global SC39_Timer := 0  ; ← ここで初期化
; ShowRemapGuiAfterDelay() {
;     global isCompletedSpa
;     if isCompletedSpa
;         displayRemapGui()
; }
completeSpa() {
    global isCompletedSpa
    isCompletedSpa := true
    ; global SC39_Timer
    ; if SC39_Timer
    ;     SC39_Timer.Stop(), SC39_Timer := 0
    ; destroyRemapGui
}

SC39:: {
    global SC39_DownTime, isCompletedSpa, isCompletedSpa, SC39_Timer
    if isCompletedSpa
        return
    isCompletedSpa := true
    isCompletedSpa := false
    SC39_DownTime := A_TickCount
    ; SC39_Timer := SetTimer(ShowRemapGuiAfterDelay, -500)
}
~SC39 Up:: {
    ; global SC39_Timer
    ; if SC39_Timer
    ;     SC39_Timer.Stop(), SC39_Timer := 0
    ; destroyRemapGui
    global SC39_DownTime, isCompletedSpa, isCompletedSpa
    isCompletedSpa := false
    if isCompletedSpa
        return
    elapsed := A_TickCount - SC39_DownTime
    if (elapsed < 190)
        send("{" scSpace "}")
    else
        return
}
