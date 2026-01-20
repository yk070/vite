Is_vscode() {
    hwnd := WinExist("A")
    if !hwnd
        return false
    return WinActive("ahk_exe Code.exe")
}

#HotIf Is_vscode()

; alt
#Include .\alt\1.ahk
#Include .\alt\2.ahk
#Include .\alt\3.ahk
#Include .\alt\4.ahk
#Include .\alt\5.ahk
; x2
#Include .\x2\mouse.ahk
#Include .\x1\mouse.ahk
; alone
#Include .\alone\alone.ahk

#HotIf