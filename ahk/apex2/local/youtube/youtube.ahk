Is_environment() {
    hwnd := WinExist("A")
    if !hwnd
        return false
    title := WinGetTitle(hwnd)
    return InStr(title, "YouTube")
}
#HotIf Is_environment()
#Include .\x2\mouse.ahk
#Include .\alone\alone.ahk
#HotIf