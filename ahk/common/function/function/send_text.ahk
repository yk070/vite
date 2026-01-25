    send_text(text) {
        vcurrentwindow := WinGetID("A")
        imeWnd := DllCall("imm32\ImmGetDefaultIMEWnd", "ptr", vcurrentwindow, "ptr")
        ImeState := DllCall("user32\SendMessageW", "ptr", imeWnd, "uint", 0x0283, "int", 0x0005, "int", 0, "ptr")
        if (ImeState = 0) {
            SendText(text)
        } else {
            Send "{vkF3sc29}"
            SendText(text)
            Sleep StrLen(text) * 20
            Send "{vkF3sc29}"
        }
    }
