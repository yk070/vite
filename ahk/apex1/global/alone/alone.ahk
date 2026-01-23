$sc01:: send("{" scTab "}") ;esc
$sc29:: send("{" scBackspace "}") ;hankaku
$sc0F:: send("{" scEnter "}") ;tab
$sc3A:: send("{" scSpace "}") ;capslock

$sc79:: send("{" scHankaku "}") ;henkan

$F1:: {
    Run(A_ScriptDir "\..\apex3\apex3.ahk")
    ExitApp()
}
$NumpadEnter:: {
    DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)
}
