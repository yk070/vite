sc2A & LAlt:: {
    global timerEnabled
    timerEnabled := !timerEnabled
    if (timerEnabled)
        SetTimer(guiIme, 100) ; タイマーを有効化
    else
        SetTimer(guiIme, 0)   ; タイマー無効化
    myGui.Destroy()
}
sc2A & SC39:: {
    Reload()
}
#SuspendExempt
sc2A & SC7B:: {
    global manualSuspend
    manualSuspend := !manualSuspend
    UpdateSuspend()
}
#SuspendExempt false