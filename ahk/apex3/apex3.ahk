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
#Include .\global\global.ahk ;2
#Include .\test\test.ahk

TraySetIcon "shell32.dll", 10