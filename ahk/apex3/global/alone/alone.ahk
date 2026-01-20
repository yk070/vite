F1:: {
    Run(A_ScriptDir "\..\apex1\apex1.ahk")
    ExitApp()
}

global SC7B_DownTime := 0
global SC7B_IsDown := false
global SC7B_Used := false

; SC7B 押下（最初の1回だけ）
SC7B:: {
    global SC7B_DownTime, SC7B_IsDown, SC7B_Used
    if SC7B_IsDown
        return

    SC7B_IsDown := true
    SC7B_Used := false
    SC7B_DownTime := A_TickCount
}

; SC7B 解放（短押し / 長押し確定）
~SC7B Up:: {
    global SC7B_DownTime, SC7B_IsDown, SC7B_Used
    SC7B_IsDown := false

    ; 修飾として使われたら何もしない
    if SC7B_Used
        return

    elapsed := A_TickCount - SC7B_DownTime

    if (elapsed < 300)
        Send("{" sc_enter "}")
    else
        return
}

; SC7B + 1（修飾使用を明示）
SC7B & y:: {
    global SC7B_Used
    SC7B_Used := true
    Send "#{a}"
}
