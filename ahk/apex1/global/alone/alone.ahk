$sc01:: send("{" scTab "}") ;esc
$sc29:: send("{" scEnter "}") ;hankaku
$vkF4:: send("{" scEnter "}") ;hankaku
$sc0F:: send("{" scBackspace "}") ;tab
$sc3A:: send("{" scSpace "}") ;capslock

$sc79:: send("{" scHankaku "}") ;henkan

$F1:: {
    Run(A_ScriptDir "\..\apex3\apex3.ahk")
    ExitApp()
}
$NumpadEnter:: DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)