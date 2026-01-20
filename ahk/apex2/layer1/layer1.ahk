global is_layer1 := false

$SC29:: {
    global is_layer1
    is_layer1 := !is_layer1
    ; TraySetIcon("shell32.dll", is_layer1 ? 44 : 3)

}

toggle_layer1() {
    global is_layer1
    is_layer1 := false
}

DoLayerSend(text) {
    global is_layer1
    is_layer1 := false
    send_text(text)
}

#HotIf is_layer1
#Include .\layer1\1.ahk
#HotIf