global manualSuspend := false
global autoSuspend := false

if (A_ComputerName = "pc") {
    SetTimer(ShowMousePos, 50)
}

ShowMousePos() {
    global autoSuspend

    MouseGetPos(&x, &y)
    hwnd := WinExist("A")

    if hwnd {
        WinGetPos(&winX, &winY, &W, &H, hwnd)
        positionY := y + winY
    } else {
        positionY := 0
    }

    ; 自動判定だけを更新
    autoSuspend := (positionY < 10)

    UpdateSuspend()
}

UpdateSuspend() {
    global manualSuspend, autoSuspend
    Suspend(manualSuspend || autoSuspend)
}
