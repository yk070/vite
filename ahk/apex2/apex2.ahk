; 呪文
#SingleInstance Force
Persistent true
ProcessSetPriority("Realtime")
SendMode("Input")
SetDefaultMouseSpeed(0)
SetKeyDelay(0)
SetTitleMatchMode(2)
DetectHiddenWindows(true)
; 共通
#Include ..\common\function\function.ahk
#Include ..\common\code\code.ahk
; メイン
#Include .\alone\alone.ahk
#Include .\local\local.ahk ;1
#Include .\global\global.ahk ;2
#Include .\caps\caps.ahk
#Include .\layer1\layer1.ahk

F1:: {
    Run("C:\Users\ykx07\Documents\InTheDoc\JSX\ahk\apex1\apex1.ahk")
    ExitApp()
}
