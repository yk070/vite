global not_yet := true
keyhistory_transparent() {
    global not_yet
    if (not_yet) {
        not_yet := false
        KeyHistory()
        hWnd := WinGetID("A")
        Sleep(2)
        WinHide("ahk_id " hWnd)

        GWL_EXSTYLE := -20
        WS_EX_LAYERED := 0x80000
        WS_EX_TRANSPARENT := 0x20
        exStyle := DllCall("GetWindowLongPtr", "Ptr", hwnd, "Int", GWL_EXSTYLE)
        DllCall("SetWindowLongPtr", "Ptr", hwnd, "Int", GWL_EXSTYLE, "Ptr", exStyle | WS_EX_LAYERED |
            WS_EX_TRANSPARENT)

        ; 完全透明にする
        DllCall("SetLayeredWindowAttributes", "Ptr", hwnd, "UInt", 0, "UChar", 0, "UInt", 0x2)
    }
}
swich_normal(HKL) {
    hWnd := WinGetID("A")
    PostMessage(0x50, 0, HKL, , "ahk_id " hWnd)
}
switch_force(HKL) {
    KeyHistory()
    hWnd := WinGetID("A")
    swich_normal(HKL)
    Sleep(2)
    WinHide("ahk_id " hWnd)
}
