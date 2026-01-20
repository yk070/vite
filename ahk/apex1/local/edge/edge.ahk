Is_edge() {
    hwnd := WinExist("A")
    if !hwnd
        return false
    return WinActive("ahk_exe msedge.exe")
}
#HotIf Is_edge()

#Include .\alt\1.ahk
#Include .\alt\2.ahk
#Include .\alt\3.ahk
#Include .\alt\4.ahk
#Include .\alt\5.ahk

#Include .\x2\mouse.ahk

#HotIf