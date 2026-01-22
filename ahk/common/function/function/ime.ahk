global myGui := 0
global prevImeState := -1  ; 前回のIME状態を保持

timerEnabled := true

SetTimer(guiIme, 100)

guiIme() {
    global myGui, prevImeState

    try {
        vcurrentwindow := WinGetID("A")
        imeWnd := DllCall("imm32\ImmGetDefaultIMEWnd", "ptr", vcurrentwindow, "ptr")
        ImeState := DllCall("user32\SendMessageW", "ptr", imeWnd, "uint", 0x0283, "int", 0x0005, "int", 0, "ptr")

        ; IME状態が前回と同じなら何もしない
        if (ImeState = prevImeState)
            return

        prevImeState := ImeState  ; 前回状態を更新

        ; 既存GUIを削除
        if (IsObject(myGui)) {
            myGui.Destroy()
            myGui := 0
        }

        ; 新しいGUIを作る
        myGui := Gui("+AlwaysOnTop +ToolWindow -Caption")
        myGui.BackColor := "FFFFAA"
        myGui.SetFont("s10")
        if (A_ComputerName = "PRO7") {
            yPos := 1700
        }
        if (A_ComputerName = "pc") {
            yPos := 1020
        }
        if (ImeState = 0)
            myGui.Show("x0 y" yPos " w100 h1000 NA")
        else if (ImeState = 1)
            myGui.Show("x0 y " yPos " w300 h1000 NA")

        ; 透過＆クリック透過
        WinSetTransparent(100, myGui.Hwnd)
        WinSetExStyle("+0x20", myGui.Hwnd)

    }
}
