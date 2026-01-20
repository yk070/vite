Shift & LAlt:: {
    global timerEnabled
    timerEnabled := !timerEnabled
    if (timerEnabled)
        SetTimer(ime_gui, 100) ; タイマーを有効化
    else
        SetTimer(ime_gui, 0)   ; タイマー無効化
    myGui.Destroy()
}
Shift & SC07B:: {
    Reload()
}
#SuspendExempt
Shift & SC39:: {
    global manualSuspend
    manualSuspend := !manualSuspend
    UpdateSuspend()
}
#SuspendExempt false