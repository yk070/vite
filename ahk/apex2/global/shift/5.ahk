Shift & LAlt:: {
    global timerEnabled
    timerEnabled := !timerEnabled
    if (timerEnabled)
        SetTimer(guiIme, 100) ; タイマーを有効化
    else
        SetTimer(guiIme, 0)   ; タイマー無効化
    myGui.Destroy()
}
Shift & SC07B:: {
    Reload()
}
#SuspendExempt
Shift & Space:: Suspend
#SuspendExempt false