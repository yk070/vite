Ctrl & Shift:: {
}
Ctrl & z:: {
    Send("#{d}")
}
Ctrl & x:: {
    Send("#{a}")
    ; always_on_top(*)
}
Ctrl & c:: {
    Send("#v")
}

; Ctrl & v:: {
; }
Ctrl & b:: {
    Send("+{Enter}")
}
Ctrl & n:: {
    Send("+{Home}")
    ; Sleep(100)
    ; loop 1 {
    ;     Send("{F10}")
    ;     Sleep(100)
    ; }
    ; Send("{Enter}")
    ; Sleep(10)
}
Ctrl & m:: {
    Send("+{Left}")
    ; Sleep(100)
    ; loop 2 {
    ;     Send("{F10}")
    ;     Sleep(100)
    ; }
    ; Send("{Enter}")
    ; Sleep(10)
}
Ctrl & SC33:: {
    Send("+{Right}")
    ; send_text("、")
}
Ctrl & SC34:: {
    Send("+{End}")
    ; send_text("。")
}
Ctrl & SC35:: {
    ; send_text("？")
}
