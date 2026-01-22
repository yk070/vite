$SC79:: send("{" sc_hankaku "}") ;henkan
$SC3A:: send("{" scBackspace "}") ;capslock
$SC29:: send("{0}") ;hankaku
$F1:: {
    Run(A_ScriptDir "\..\apex3\apex3.ahk")
    ExitApp()
}
$NumpadEnter:: {
    DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)
}
