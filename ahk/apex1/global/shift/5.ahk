+LAlt:: {
    global timerEnabled
    timerEnabled := !timerEnabled
    if (timerEnabled)
        SetTimer(guiIme, 100) ; タイマーを有効化
    else
        SetTimer(guiIme, 0)   ; タイマー無効化
    myGui.Destroy()
}
+SC39:: {
    Reload()
}
#SuspendExempt
+SC7B:: {
    global manualSuspend
    manualSuspend := !manualSuspend
    UpdateSuspend()
}
#SuspendExempt false