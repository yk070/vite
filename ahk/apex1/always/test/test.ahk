;--- Keyboard GUI ---
global remapGui := 0

keys := [{ label: "Esc", x: 10, y: 10, w: 50, h: 30, code: "Esc" }, { label: "F1", x: 70, y: 10, w: 50, h: 30, code: "F1" }, { label: "A",
    x: 10, y: 60, w: 40, h: 40, code: "a" }, { label: "S", x: 55, y: 60, w: 40, h: 40, code: "s" }
]

CreateremapGui() {
    global remapGui, keys
    remapGui := Gui("+AlwaysOnTop  +ToolWindow -Caption", "Keyboard Layout")
    remapGui.BackColor := "202020"

    for _, key in keys {
        btn := remapGui.Add("Button", Format("x{} y{} w{} h{}", key.x, key.y, key.w, key.h), key.label)
        btn.OnEvent("Click", (*) => Send("a"))
    }

    WinSetTransparent(180, remapGui.Hwnd)
    WinSetExStyle("+0x20", remapGui.Hwnd)
    remapGui.Show("w500 h300 NA")  ; 作成時に必ず表示
}

; ホットキーで再表示
displayRemapGui() {
    global remapGui
    if !IsObject(remapGui) {   ; 破棄済みなら再作成
        ; CreateremapGui()
    } else {
        ; remapGui.Show()        ; 既存オブジェクトを再表示
    }
}

; ホットキーで破棄
destroyRemapGui() {
    global remapGui
    if IsObject(remapGui) {
        remapGui.Destroy()
        remapGui := 0        ; ← これが整数に戻す安全策
    }
}
