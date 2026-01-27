sc2A & LAlt:: {
    global timerEnabled
    timerEnabled := !timerEnabled
    if (timerEnabled)
        SetTimer(guiIme, 100) ; タイマーを有効化
    else
        SetTimer(guiIme, 0)   ; タイマー無効化
    myGui.Destroy()
}
sc2A & sc39:: {
    Reload()
}
#SuspendExempt
sc2A & sc7B:: {
    global manualSuspend
    manualSuspend := !manualSuspend
    UpdateSuspend()
}
#SuspendExempt false