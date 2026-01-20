$Tab:: Send("{" sc_backspace "}")
$SC79:: Send("{" sc_hankaku "}")
$SC7B:: Send("{" sc_enter "}")
$Ctrl:: Send("{" sc_space "}")
$Esc:: Send("{" sc_hankaku "}")

$NumpadEnter:: {
    DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)
}
