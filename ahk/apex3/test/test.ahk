global SC021_DownTime := 0
global SC021_IsDown := false
global SC021_Used := false

; SC021 押下（最初の1回だけ）
SC021:: {
    global SC021_DownTime, SC021_IsDown, SC021_Used
    if SC021_IsDown
        return

    SC021_IsDown := true
    SC021_Used := false
    SC021_DownTime := A_TickCount
}

; SC021 解放（短押し / 長押し確定）
~SC021 Up:: {
    global SC021_DownTime, SC021_IsDown, SC021_Used
    SC021_IsDown := false

    ; 修飾として使われたら何もしない
    if SC021_Used
        return

    elapsed := A_TickCount - SC021_DownTime

    if (elapsed < 300)
        Send("{" sc_f "}")
    else
        return
}

; SC021 + 1（修飾使用を明示）
SC021 & y:: {
    global SC021_Used
    SC021_Used := true
    Send "{v}"
}
Shift & f:: {
    Send("+{f}")
}

ctrl & f:: {
    Send("+{f}")
}
