Is_chatgpt() {
    hwnd := WinExist("A")
    if !hwnd
        return false
    title := WinGetTitle(hwnd)
    process := WinGetProcessName(hwnd)
    if (process = "msedge.exe" && InStr(title, "ChatGPT"))
        return true
    return false
}
#HotIf Is_chatgpt()

#Include .\alone\alone.ahk

#Include .\alt\1.ahk
#Include .\alt\2.ahk

#HotIf