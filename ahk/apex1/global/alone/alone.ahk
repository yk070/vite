; $Tab:: send("{" sc_backspace "}")
$SC79:: send("{" sc_hankaku "}")
; $SC7B:: send("{" sc_enter "}")
$SC3A:: send("{" sc_backspace "}")
$Esc:: send("{" sc_hankaku "}")
$vkf4:: {
    send("{0}")
}
$SC29:: {
    send("{0}")
}
$F1:: {
    Run(A_ScriptDir "\..\apex3\apex3.ahk")
    ExitApp()
}
$NumpadEnter:: {
    DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)
}

SC39 & y:: {
    fxBarUsed
    send "^{a}"
}
