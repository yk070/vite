keys := [{ label: "Esc", x: 10, y: 10, w: 50, h: 30, code: "Esc" }, { label: "F1", x: 70, y: 10, w: 50, h: 30, code: "F1" }, { label: "A",
    x: 10, y: 60, w: 40, h: 40, code: "a" }, { label: "S", x: 55, y: 60, w: 40, h: 40, code: "s" },
]

KeyButton(gui, key) {
    btn := gui.Add(
        "Button",
        Format("x{} y{} w{} h{}", key.x, key.y, key.w, key.h),
        key.label
    )

    btn.OnEvent("Click", (*) => Send(key.code))
}
DrawKeyboard(gui, keys) {
    for _, key in keys {
        KeyButton(gui, key)
    } 
}
myGui := Gui("+AlwaysOnTop", "Keyboard Layout")
myGui.BackColor := "202020"

DrawKeyboard(myGui, keys)

f4:: myGui.Show("w500 h300")