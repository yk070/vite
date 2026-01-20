Is_excel() {
    hwnd := WinExist("A")
    if !hwnd
        return false
    return WinActive("ahk_exe EXCEL.exe")
}

#HotIf Is_excel()
#Include .\x2\mouse.ahk
#HotIf