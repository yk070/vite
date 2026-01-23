$SC79:: send("{" sc_hankaku "}") ;henkan
$SC3A:: send("{" scSpace "}") ;capslock
$SC29:: send("{0}") ;hankaku
$sc0F:: send("{" scBackspace "}") ;hankaku
$F1:: {
    Run(A_ScriptDir "\..\apex3\apex3.ahk")
    ExitApp()
}
$NumpadEnter:: {
    DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)
}
