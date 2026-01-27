$sc01:: send("{" scTab "}") ;esc
; $sc29:: send("{" scEnter "}") ;hankaku(pc)
; $vkF4:: send("{" scEnter "}") ;hankaku(pro7)
$sc0F:: send("{" scBackspace "}") ;tab
$sc3A:: send("{" scSpace "}") ;capslocks

$F1:: {
    Run(A_ScriptDir "\..\apex2\apex2.ahk")
    ExitApp()
}
$NumpadEnter:: DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)