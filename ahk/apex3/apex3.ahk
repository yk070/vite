; 呪文
#SingleInstance Force
; Persistent true
; ProcessSetPriority("Realtime")
; SendMode("Input")
; SetDefaultMouseSpeed(0)
; SetKeyDelay(0)
; SetTitleMatchMode(2)
; DetectHiddenWindows(true)
; ; 共通
#Include ..\common\function\function.ahk
#Include ..\common\code\code.ahk
; メイン
#Include .\test\test.ahk

$F1:: {
    Run(A_ScriptDir "\..\apex1\apex1.ahk")
    ExitApp()
}

TraySetIcon "shell32.dll", 10