always_on_top() {
    static overlay := 0
    static lastHwnd := 0

    hwnd := WinExist("A")
    if !hwnd
        return

    ; 同じウィンドウなら → 解除
    if (lastHwnd = hwnd) {
        WinSetAlwaysOnTop(0, hwnd)
        if IsObject(overlay)
            overlay.Destroy()
        overlay := 0
        lastHwnd := 0
        return
    }

    ; 既存を解除
    if (lastHwnd) {
        WinSetAlwaysOnTop(0, lastHwnd)
        if IsObject(overlay)
            overlay.Destroy()
        overlay := 0
        lastHwnd := 0
    }

    ; 新しいウィンドウを最前面固定
    WinSetAlwaysOnTop(1, hwnd)

    ; 対象の位置とサイズを取得
    WinGetPos(&X, &Y, &W, &H, hwnd)

    ; オーバーレイ GUI 作成
    overlay := Gui("+AlwaysOnTop -Caption +ToolWindow +E0x20") ; クリック透過
    overlay.BackColor := "Red"
    overlay.Show("NA x" (X - 4) " y" (Y - 4) " w" (W + 8) " h" (H + 8))

    ; 内側を切り抜いて枠だけ残す
    margin := 4
    outer := Format("0-0 {1}-0 {1}-{2} 0-{2}", W + 8, H + 8)
    inner := Format("{1}-{2} {3}-{2} {3}-{4} {1}-{4}", margin, margin, W + 8 - margin, H + 8 - margin)
    region := outer " " inner
    WinSetRegion(region, overlay.Hwnd)

    lastHwnd := hwnd
}
